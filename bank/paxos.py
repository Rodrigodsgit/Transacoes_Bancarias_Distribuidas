class PaxosWithVectorClocks:
    def __init__(self, num_processes,process_id):
        self.num_processes = num_processes
        self.vector_clock = [0] * num_processes
        self.process_id = process_id
        self.accepted_proposal = None
        self.accepted_value = None
        self.processes = {}

    def propose(self, process_id, value):
        self.vector_clock[process_id] += 1
        proposal_number = self.vector_clock.copy()
        max_attempts = 1000  

        for _ in range(max_attempts):
            if self.prepare(proposal_number):
                accepted_value = self.accept(proposal_number, value)
                if accepted_value is not None:
                    return accepted_value
            proposal_number[process_id] += 1
        
        return False 

    def add_process(self, process_id):
        self.processes[process_id] = {'messages': []}

    def send_message(self, sender_id, receiver_id, message):
        if receiver_id in self.processes:
            receiver = self.processes[receiver_id]
            receiver['messages'].append((sender_id, message))

    def prepare(self, proposal_number):
        message = {
            'type': 'prepare',
            'proposal_number': proposal_number,
            'vector_clock': self.vector_clock
        }

        responses = []
        for process_id in range(self.num_processes):
            if process_id != self.process_id:
                self.send_message(self.process_id, process_id, message)
        
        num_promises = 0
        max_received_clock = self.vector_clock.copy()
        for sender_id, response in self.processes[self.process_id]['messages']:
            if response['type'] == 'promise':
                num_promises += 1
                received_clock = response['vector_clock']
                for i in range(len(self.vector_clock)):
                    self.vector_clock[i] = max(self.vector_clock[i], received_clock[i])
                    max_received_clock[i] = max(max_received_clock[i], received_clock[i])
        
        if num_promises >= (self.num_processes // 2) + 1:
            for i in range(len(self.vector_clock)):
                self.vector_clock[i] = max(self.vector_clock[i], max_received_clock[i])
            
            return True
        
        return False

    def accept(self, proposal_number, value):
        message = {
            'type': 'accept',
            'proposal_number': proposal_number,
            'value': value,
            'vector_clock': self.vector_clock
        }
        
        responses = []
        for process_id in range(self.num_processes):
            if process_id != self.process_id:
                self.send_message(self.process_id, process_id, message)
        
        num_accepted = 0
        max_received_clock = self.vector_clock.copy()
        accepted_value = None
        
        for sender_id, response in self.processes[self.process_id]['messages']:
            if response['type'] == 'accepted':
                num_accepted += 1
                received_clock = response['vector_clock']
                
                for i in range(len(self.vector_clock)):
                    self.vector_clock[i] = max(self.vector_clock[i], received_clock[i])
                    max_received_clock[i] = max(max_received_clock[i], received_clock[i])
                
                if response['proposal_number'] == proposal_number:
                    accepted_value = response['value']
        
        if num_accepted >= (self.num_processes // 2) + 1:
            for i in range(len(self.vector_clock)):
                self.vector_clock[i] = max(self.vector_clock[i], max_received_clock[i])
            
            return accepted_value
        
        return None

    def learn(self, accepted_value):
        self.accepted_value = accepted_value
        
        for process_id in range(self.num_processes):
            if process_id != self.process_id:
                self.send_message(self.process_id, process_id, {'type': 'learn', 'value': accepted_value})


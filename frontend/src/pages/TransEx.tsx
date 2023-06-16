import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'

export function TransEx() {
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");
    const [firstBank, setFirstBank] = useState("");
    const [secondBank, setSecondBank] = useState("");
    const [destiny, setDestiny] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate  = useNavigate();
    const toast = useToast();

    async function handleSignIn(event: FormEvent) {
      event.preventDefault();
      try {
        const cpfOwner = localStorage.getItem("cpf");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
    
        const response = await axios.post('http://127.0.0.1:5001/transactionEx', {
          banks: [
            [firstBank, cpfOwner, email, password, firstValue],
            [secondBank, cpfOwner, email, password, secondValue]
          ],
          destiny: destiny,
          cpf: cpf
        });
    
        if (response.data.success) {
          navigate('/home', { replace: true });
        } else {
          console.log(response.data);
          toast({
            title: 'Non-existent identification.',
            description: 'Confirm your credentials',
            status: 'warning',
            duration: 9000,
            isClosable: true
          });
        }
      } catch (error) {
        console.log(error);
        toast({
          title: 'Transfer in progress.',
          description: 'Action unavailable at the moment',
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      }
    }
    
  
  return (
    <div className="flex items-center justify-center bg-gray-200 h-full w-full">
      <div className="w-[307px] h-[666px] mt-14 bg-[url('../assets/Perfil.svg')] flex flex-col justify-center items-center  mb-20 rounded-lg ">
      <div className=" font-bold text-2xl border-b-4 border-black rounded-lg">
          TRANFERÊNCIA EXTERNA
        </div>
      <form 
        onSubmit={handleSignIn}
        className="flex flex-col space-y-8 h-[450px] pt-8">
          <input
            value={firstBank}
            onChange={(e) => setFirstBank(e.target.value)}
            type="text"
            placeholder="Banco de transferência 1"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
            type="number"
            placeholder="Valor de transferência"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={secondBank}
            onChange={(e) => setSecondBank(e.target.value)}
            type="text"
            placeholder="Banco de transferência 2"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
            type="number"
            placeholder="Valor de transferência"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={destiny}
            onChange={(e) => setDestiny(e.target.value)}
            type="text"
            placeholder="Banco de Destino"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="number"
            placeholder="CPF do destinatário"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          

          <div className='flex flex-col items-center pt-14'>
            <button
              className=" rounded-lg border-y-[3px] border-black w-[200px] h-[52px] font-bold"
                >
                TRANSFERIR
            </button>
          </div>
        </form>
 

      </div>
    </div>
  );
}

import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'

export function Payment() {
    const [value, setValue] = useState("");
    const navigate  = useNavigate();
    const toast = useToast();

    async function handleSignIn(event: FormEvent) {
      event.preventDefault();
      try {
        const response = await axios.post('http://172.16.103.3:5001/payment', {
          cpf: localStorage.getItem("cpf"),
          value: value
        });
    
        if (response.data.success) {
          navigate('/home', { replace: true });
        } else {
          console.log(response.data)
          toast({
            title: 'Non-existent identification.',
            description: 'Value insufficient',
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
      <div className=" pt-4 font-bold text-2xl border-b-4 border-black rounded-lg">
          PAGAMENTO
        </div>
      <form 
        onSubmit={handleSignIn}
        className="flex flex-col space-y-8 h-[250px] pt-8">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            placeholder="Valor"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />

          <div className='flex flex-col items-center pt-14'>
            <button
              className=" rounded-lg border-y-[3px] border-black w-[200px] h-[52px] font-bold"
                >
                PAGAR
            </button>
          </div>
        </form>
 

      </div>
    </div>
  );
}

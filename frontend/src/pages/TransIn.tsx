import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'

export function TransIn() {
    const [value, setValue] = useState("");
    const [cpfRec, setCpfRec] = useState("");
    const navigate  = useNavigate();
    const toast = useToast();

    async function handleSignIn(event: FormEvent){
        event.preventDefault()
        try {
          axios({
            method: 'post',
            url: `http://127.0.0.1:5001/trasactionIn`,
            data:{
              cpf: localStorage.getItem("cpf"),
              cpfRec: cpfRec,
              value: value

            }
            }).then(function (response){
              if (response.data.success){
                navigate('/home', { replace: true })
              }
              else{
                toast({
                    title: 'Non-existent identification.',
                    description: "Confirm your credentials",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
              
        })
        } catch (error) {
          console.log(error);
        }
      }
  
  return (
    <div className="flex items-center justify-center bg-gray-200 h-full w-full">
      <div className="w-[307px] h-[666px] mt-14 bg-[url('../assets/Perfil.svg')] flex flex-col justify-center items-center  mb-20 rounded-lg ">
      <div className=" pt-4 font-bold text-2xl border-b-4 border-black rounded-lg">
          TRANSFERÊNCIA
        </div>
      <form 
        onSubmit={handleSignIn}
        className="flex flex-col space-y-8 h-[250px] pt-8">
          <input
            value={cpfRec}
            onChange={(e) => setCpfRec(e.target.value)}
            type="number"
            placeholder="CPF do destinatário"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
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
                TRANSFERIR
            </button>
          </div>
        </form>
 

      </div>
    </div>
  );
}

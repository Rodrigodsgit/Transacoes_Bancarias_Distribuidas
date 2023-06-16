import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../assets/Logo';
import { Google } from '../assets/Google';
import { Apple } from '../assets/Apple';
import { Facebook } from '../assets/Facebook';
import { FormEvent, useState } from 'react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'

export function Login() {
  const [cpfUser, setCpf] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate  = useNavigate();
  const toast = useToast();

  async function handleSignIn(event: FormEvent){
    event.preventDefault()
    try {
      axios({
        method: 'post',
        url: `http://172.16.103.3:5001/signIn`,
        data:{
          cpf: cpfUser,
          email: username,
          password: password
        }
        }).then(function (response){
          if (response.data.success){
            localStorage.setItem("cpf",cpfUser)
            localStorage.setItem("email",username)
            localStorage.setItem("password",password)
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
      <div className="w-[307px] h-[666px] mt-14 bg-[url('../assets/Login.svg')] flex flex-col justify-center items-center  mb-20 rounded-lg">
        <div className="h-[200px] pt-12">
          <Logo  />
        </div>

        <form 
        onSubmit={handleSignIn}
        className="flex flex-col space-y-8 h-[250px] pt-2">
          <input
            value={cpfUser}
            onChange={(e) => setCpf(e.target.value)}
            type="number"
            placeholder="CPF"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="EMAIL"
            className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="SENHA"
            className=" w-[230px] text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black  bg-gray-100"
            required
          />
          <div className='flex flex-col items-center pt-14'>
            <button
              className=" rounded-lg border-y-[3px] border-black w-[200px] h-[52px] font-bold"
                >
                ENTRAR
            </button>
          </div>
        </form>

        <div className='flex flex-col items-center justify-center pt-6 '>
                <div className='pt-2'>
                    <Link to={'/signUp'} className='font-bold text-xs border-b-2 border-black'>REGISTRAR</Link>
                </div>  

            <div className='flex flex-row space-x-8 pt-2'>
                <div> 
                    <Link to={'/'}><Google/></Link>
                </div>

                <div>
                    <Link to={'/'}><Apple/></Link>
                </div>
                <div>
                    <Link to={'/'}><Facebook/></Link>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

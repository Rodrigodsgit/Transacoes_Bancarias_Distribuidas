import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { FormEvent, useState } from "react";

// cellphone_zap, bairro_id

export function SignUp() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate  = useNavigate();
  
  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    const nick = localStorage.getItem(username)

    if(nick !== password){
      localStorage.setItem(username,password)
      navigate('/', { replace: true })
    }
    
  }
  return (
    <div className="flex items-center justify-center bg-gray-200 h-full w-full">
      <div className="w-[307px] h-[666px] mt-14 bg-[url('../assets/Cadastro.svg')] flex flex-col justify-center items-center  mb-20 rounded-lg">
        <div className="h-[150px] pt-12">
          <Logo  />
        </div>

        <form onSubmit={handleSignUp}>
        <div className=" flex flex-col space-y-6 h-[300px] w-[230px] overflow-auto">
        <input
              type="number"
              placeholder="CPF"
              className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
              required
            />
          <input
              type="text"
              placeholder="NOME"
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
              className="text-sm rounded-lg outline-none placeholder:text-black placeholder:opacity-50 placeholder:pl-2 placeholder:font-semibold border-b-[3px] border-black bg-gray-100"
              required
            />





        </div>

        <div className="flex flex-col  justify-center items-center pt-6">
          <button
            className=" rounded-lg border-y-[3px] border-black w-[200px] h-[52px] font-bold"
                >
                REGISTRAR
          </button>
          <div className='pt-2'>
            <Link to={'/'} className='font-bold text-xs border-b-2 border-black'>LOGIN</Link>
          </div>  
        </div>
        </form>
      </div>
    </div>
  );
}

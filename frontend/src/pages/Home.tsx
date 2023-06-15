import { Link, useNavigate } from "react-router-dom";

export function Home() {
  
  return (
    <div className="flex items-center justify-center bg-gray-200 h-full w-full">
      <div className="w-[307px] h-[666px] mt-14 bg-[url('../assets/Perfil.svg')] flex flex-col justify-center items-center  mb-20 rounded-lg ">
        <div className='py-4'>
            <Link to={'/deposit'} className='font-bold text-2xl border-b-4 border-black rounded-lg'>DEPÓSITO</Link>
        </div>  
        <div className='py-4'>
            <Link to={'/payment'} className='font-bold text-2xl border-b-4 border-black rounded-lg'>PAGAMENTO</Link>
        </div>  
        <div className='py-4'>
            <Link to={'/transIn'} className='font-bold text-2xl border-b-4 border-black rounded-lg'>TRANSFERÊNCIA</Link>
        </div>  
        <div className='py-4'>
          <Link to={'/transEx'} className='font-bold text-2xl whitespace-normal break-all '>
            TRANSFERÊNCIA <span className="block text-center border-b-4 border-black rounded-lg">EXTERNA</span>
          </Link>
        </div>
 

      </div>
    </div>
  );
}

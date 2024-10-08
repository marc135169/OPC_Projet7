import {Link} from "react-router-dom";

export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center bg-white gap-20 mx-5 my-32">            
            <h1 className='text-[#FF6060] font-bold text-[87px]
                        1xl:text-[288px]'>404</h1>
            <p className='text-[#FF6060] text-center font-medium text-[18px]
                        1xl:text-[36px]'>Oups! La page que vous demandez n&#39;existe pas.</p>
            <Link className='underline font-medium text-[14px]
                            1xl:text-[18px]' to="/">Retourner a la page d&#39;accueil</Link>
        </div>
    )
}
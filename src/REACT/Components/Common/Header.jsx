import {Link, NavLink} from "react-router-dom";


function underline ({isActive}) {    
    return isActive ? 'underline' : 'hover:underline'
}

export default function Header(){   
    
    return (        
    <div className="flex flex-row justify-between mt-5 mx-5 h-[46px] 
                    1xl:h-[68px] 1xl:mx-[120px] 1xl:mt-8" >
        <Link to='/'>
            <img src="/img/LOGOLogo_Kasa.png" alt="kasa's logo" className='1xl:w-[210px] 1xl:h-[68px]'/> 
        </Link>
        <nav className="flex flex-row justify-end items-center">        
            <div className="flex gap-5 justify-end font-medium 1xl:text-[24px] 1xl:gap-14">                
                <NavLink to="/" className={underline}>Accueil</NavLink>                
                <NavLink to="/about" className={underline}>A Propos</NavLink>                
            </div>
        </nav>
    </div>)
}
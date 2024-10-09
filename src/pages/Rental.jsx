import Data from "../data/data.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Collapse from "../components/Collapse.jsx";
import Carousel from "../components/Carousel.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

/**
 * @description 
 * @return {JSX.Element|null} - rental details if found, if not => 404
 * @constructor
 */
export default function Rental() {
    const {id} = useParams();
    const navigate = useNavigate();
    const rental = Data.find(item => item.id === id);

    useEffect(() => {
        if (!rental) {
            navigate("/not-found", { replace: true });
        }
    }, [rental, navigate]);
    
    if (!rental) {
        return null;
    }
    
    const {title, pictures, location, tags, rating, host, description, equipments} = rental;

   

    return (
        <div className="rental-details mx-5 mt-5 gap-[22px] flex flex-col
                        md:w-[90vw]
                        1xl:mx-[120px] 1xl:my-12 1xl:w-[1200px]">

            {/* Carourou */}
            
            <Carousel pictures={pictures} title={title}/>
            
            <div className="1xl:flex 1xl:flex-row 1xl:justify-between">                
                <div>                
                    <div className="titleRental">
                        <h1 className="text-[18px] font-medium text-red-500
                                        1xl:text-[36px]">{title}</h1>
                        <p className="text-black text-[14px] font-medium mt-[5px]
                                        1xl:text-[18px]">{location}</p>
                    </div>
        
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mt-3 mb-3
                                    1xl:mt-4 1xl:mb-0">
                        {tags.map((tag, index) => (
                            <div key={index} className="bg-[#FF6060] text-white text-center text-[10px] font-bold rounded-[5px] w-[100px] h-[18px] flex justify-center items-center text-nowrap
                                                        1xl:w-[145px] 1xl:h-[25px] 1xl:text-[14px]">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
    
                {/* Stars */}
                <div className="flex justify-between items-center
                                1xl:flex-col-reverse 1xl:items-end">
                    <div className="flex items-center">                    
                        {[...Array(5)].map((star, index) => (                            
                            <div key={index} className={index < rating ? "text-[#FF6060]" : "text-gray-300"}>
                                <FontAwesomeIcon icon={faStar} size="1x" className='1xl:text-[24px]' />                            
                            </div>                        
                        ))}
                    </div>
                    <div className="flex items-center">
                        <p className="font-medium mr-2 text-[#FF6060] text-[12px] text-wrap w-[63px] text-right
                                        1xl:text-[18px] 1xl:mr-5 1xl:text-right 1xl:w-[93px]">{host.name}</p>
                        <img src={host.picture} alt={host.name} className="w-10 h-10 rounded-full
                                                                            1xl:w-[64px] 1xl:h-[64px]" />
                    </div>
                </div>
            </div>

            {/* Collapse */}
            <div className="flex flex-col gap-2
                            1xl:grid  1xl:grid-cols-2 1xl:gap-10 1xl:mt-5 1xl:w-full">
                <Collapse title='Description' content={description}/>
                <Collapse title='Équipements' content={<ul> {equipments.map( (item, index) => <li key={index}>{item}</li>)}</ul>}/>
            </div>

            
        </div>
    );
}

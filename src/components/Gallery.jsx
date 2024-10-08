
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";


export default function Gallery ({data}){
    
    const navigate = useNavigate();
    function handleCardClick(id) {
        navigate(`/rental/${id}`);
    }
    
    return (
        <div className="gallery flex flex-col gap-[22px] mt-[22px] mx-5
                        1xl:w-[1440px] 1xl:items-center 1xl:mx-0">
            <div className="grid grid-cols-1  gap-5
                            md:grid-cols-2 
                            lg:grid-cols-3
                            1xl:bg-[#F6F6F6] 1xl:mx-[120px] 1xl:flex 1xl:flex-row 1xl:flex-wrap 1xl:justify-start 1xl:rounded-[10px] 1xl:gap-[40px] 1xl:pt-12 1xl:px-12 1xl:pb-14
                            ">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-[255px] w-[335px] rounded-lg overflow-hidden shadow-lg 
                                   1xl:w-[340px] 1xl:h-[340px]"
                        onClick={() => handleCardClick(item.id)}
                    >
                        <img
                            src={item["cover"]}
                            alt={item.title}
                            className="absolute w-full h-full object-cover
                                        1xl:w-auto"
                        />
                        <div className="h-[255px] flex items-end relative p-4
                        1xl:h-[340px] 1xl:w-[340px] 1xl:p-0">
                            <p className="text-white font-bold text-lg
                                        1xl:text[18px] 1xl:p-4">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div></div>

        </div>
    )
} 
Gallery.propTypes = {
    data: PropTypes.array.isRequired,
}
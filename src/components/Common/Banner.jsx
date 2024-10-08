import PropTypes from "prop-types";

export default function Banner ({image, title}){
    return (
        <div className=' relative flex items-center justify-start h-[111px] mt-[27px] mx-5 rounded-[10px] 
                        1xl:h-[223px] 1xl:my-8 1xl:justify-center 1xl:mx-[120px] 1xl:w-[83%]'>
            <img src={image} alt="Image mer"  className="absolute w-[100%] h-full object-cover drop-shadow-banner rounded-[10px]" />            
            <div className="absolute inset-0 bg-black opacity-60 rounded-[10px]"></div>
            {title && <h1 className="relative text-white text-[24px] font-bold text-wrap mx-4
                                    1xl:text-nowrap 1xl:text-[48px] ">Chez vous, partout et ailleurs</h1>}
        </div>
    )
}
Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.bool,
}
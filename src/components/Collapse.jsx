import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";


/**
 * Initially, the content is hidden and can be revealed by clicking the title.
 * @param props
 * @return {JSX.Element}
 * @constructor
 * 
 */
const Collapse = (props) => {
    
    
    
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            if (contentRef.current)
                setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className="mb-4 self-center w-[100%]        
                        1xl:w-[100%]        
                        md:w-[80vw]">
            <div
                onClick={toggleCollapse}
                className="cursor-pointer h-[30px] bg-red-400 text-white p-3 rounded-[5px] flex justify-between items-center z-1 relative
                            1xl:h-[54px]"
            >
                <h3 className="text-[13px] font-bold
                                 1xl:text-[24px]">{props.title}</h3>
                <div>
                    <img
                        src="/img/arrow_upward.png"
                        alt=""
                        className={`w-4 h-[10px] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>
            </div>

            <div
                ref={contentRef}
                style={{height, transition: "height 0.3s ease"}}
                className="overflow-hidden bg-[#F6F6F645] mt-[-5px] z-0 rounded-[5px] "
            >
                <div className="p-4 text-[13px]
                                1xl:text-[24px]">
                    {props.content}
                </div>
            </div>
        </div>        
    );
};
Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
}

export default Collapse
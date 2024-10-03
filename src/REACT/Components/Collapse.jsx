import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

const Collapse = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className="mb-4">            
            <div
                onClick={toggleCollapse}
                className="cursor-pointer h-[30px] bg-red-400 text-white p-3 rounded-[5px] flex justify-between items-center z-1 relative
                            1xl:h-[54px]"
            >
                <h3 className="text-[13px] font-bold
                                 1xl:text-[24px]">{props.title}</h3>
                <div className=''>{isOpen ?
                    <img src="/img/arrow_down.png" alt="" className='w-4 h-[10px]'/> :
                    <img src="/img/arrow_upward.png" alt=""/>}
                </div>
            </div>
            
            <div
                ref={contentRef}
                style={{ height, transition: "height 0.3s ease" }}
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
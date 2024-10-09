import {useState} from "react";
import PropTypes from "prop-types";


/**
 * @description Allows the user to navigate through the images using "Next" and "Previous" buttons.
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function Carousel(props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % props.pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + props.pictures.length) % props.pictures.length);
    };

    if (props.pictures.length > 1) {
        return (
            <section className="carousel relative h-[255px] overflow-hidden rounded-lg">
                <img
                    src={props.pictures[currentIndex]}
                    alt={`${props.title} - image ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                />

                <p className="absolute right-[45%] bottom-0 text-white font-bold text-lg">{currentIndex + 1} / {props.pictures.length}</p>

                <button onClick={prevSlide} className='absolute left-0 top-[45%]'>
                    <img src="/img/arrow_backward.png" alt="" className="w-6 h-6"/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-[45%]">
                    <img src="/img/arrow_forward.png" alt="" className="w-6 h-6"/>
                </button>
            </section>
        )
    }else{
        return(
            <div className="carousel relative w-full h-[255px] overflow-hidden rounded-lg">
                <img
                    src={props.pictures[currentIndex]}
                    alt={`${props.title} - image ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        )
    }
}
Carousel.propTypes = {
    title: PropTypes.string,
    pictures: PropTypes.array,
}
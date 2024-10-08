import Banner from '../components/Common/Banner.jsx';
import Gallery from '../components/Gallery.jsx';
import Data from '../Data/data.json';

/*import Image from '../../assets/img/mer.png';*/

export default function Home (){
    return (
        <div className='1xl:flex 1xl:flex-col 1xl:items-center'>
            <Banner image={"/img/mer.png"} title={true}/>
            <Gallery data={Data}/>
        </div>
    );
};
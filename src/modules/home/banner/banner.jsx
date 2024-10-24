import TopBar from "../../../components/navbars/topBar";
import banner from '../../../assets/banner.png'

function Banner() {

    return (
        <>
            <div className="banner w-full h-screen relative ">

                <div className='bg absolute w-full h-full '>
                    <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0, 0, 0, .5)]"></div>
                    <img src={banner}
                    className="object-cover w-full h-full" />
                </div>

            </div>
        </>
    )
}


export default Banner
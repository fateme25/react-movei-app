import CinemaFilmPlay from '../../assets/CinemaFilmPlay.png'
import MaskGroup from '../../assets/MaskGroup.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


function TopBar({home}) {
    const [scrollVal, setScrollVal] = useState(0)


    //Determine the scroll value for conditional styling
    useEffect(()=> {
        const handleScrollValue = () => {
            setScrollVal(window.scrollY)
        }
        window.addEventListener('scroll', handleScrollValue)

        return () => window.removeEventListener('scroll', handleScrollValue);
    }, [])

    return (
        <>
            <header className={`${home && scrollVal < 1 ?  "bg-transparent" : "bg-slate-900"} z-10 p-5 fixed w-full`}>
                <div className='container mx-auto flex justify-between items-center space-between'>

                    <div className="brand flex">
                        <div className='img_cont'>
                            <img src={CinemaFilmPlay} className='w-full'/>
                        </div>
                        <span className='text-white text-4xl'>Film<span className='text-[#BE0C0C]'>flix</span></span>
                    </div>


                    <ul className='nav flex gap-6 text-white text-lg'>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/'>
                            <li>Ticket</li>
                        </Link>
                        <Link to='/'>
                            <li>Movies</li>
                        </Link>
                        <Link to='/'>
                            <li>Contact</li>
                        </Link>
                    </ul>


                    <div className="profile flex items-center gap-6">
                        <span className='search text-white text-lg cursor-pointer'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <div className='img_cont h-12'>
                            <img src={MaskGroup} className='w-full h-full'/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default TopBar
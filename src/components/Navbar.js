import Facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';

const Navbar = ()  =>{
    return(
        <div className='flex justify-between items-center'> 
            <img src={twitter} alt="twitter"width={50}/>
           
        <ul className='hidden md:flex'>
            <li className='px-2'>
                <a href ="https://www.facebook.com" target ="blank">
                    <img src={Facebook} alf = "Facebook" width={50}/>
                </a>
            </li>
            <li>
            <a href ="https://www.instagram.com" target ="blank">
                    <img src={instagram} alf = "instagram" width={50}/>
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Navbar;

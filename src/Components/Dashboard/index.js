import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser , faMobile , faMailBulk} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import Footer from '../Footer'
const Dashboard = () => {
    return(
        <div className='dash-main'>
        <Navbar></Navbar>
        <div className="container">
            <div className='address'></div>
            <div className='emgcont'></div>
            <div className="div-p"><FontAwesomeIcon className="user" icon={faUser} color='#ffffff'></FontAwesomeIcon>
            <p className='name'>The Invisionaries</p>
            <p className='age-sex'>20 ,<span>Male</span></p>
            <FontAwesomeIcon className="mobile" icon={faMobile} color='#ababab'></FontAwesomeIcon>
            <FontAwesomeIcon className="phone" icon={faMailBulk} color='#ababab'></FontAwesomeIcon>
            <p className='mno'>9560X XXXXX</p>
            <p className='pno'>example@gmail.com</p>
            </div>
        </div>

        <div className="container2">
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Dashboard;

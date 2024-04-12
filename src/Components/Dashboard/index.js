import './index.scss'
import CircularWithValueLabelhumid from '../ProgressHumid';
import CircularWithValueLabel from '../Progresskm';
import CircularWithValueLabeltemp from '../Progresstemp';
import CircularWithValueLabelbpm from '../Progressbpm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser , faMobile , faMailBulk , faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import Footer from '../Footer'
const Dashboard = () => {
    return(
        <div className='dash-main'>
        <Navbar></Navbar>
        <div className="container">
            <div className="address"></div>
            <div className="div-p"><FontAwesomeIcon className="user" icon={faUser} color='#ffffff'></FontAwesomeIcon>
            <p className='name'>The Invisionaries</p>
            <p className='age-sex'>20 ,<span>Male</span></p>
            <FontAwesomeIcon className="mobile" icon={faMobile} color='#ababab'></FontAwesomeIcon>
            <FontAwesomeIcon className="phone" icon={faMailBulk} color='#ababab'></FontAwesomeIcon>
            <FontAwesomeIcon className="Address" icon={faHouseChimney} color='#ababab'></FontAwesomeIcon>
            <p className='mno'>9560X XXXXX</p>
            <p className='pno'>example@gmail.com</p>
            <p className='home'>New Delhi , Delhi</p>
            </div>
        </div>

        <div className="container2">
            <div className='box'>
                <CircularWithValueLabel className="progress" progress={100} unit='km'></CircularWithValueLabel>
            </div>
            <div className='box'>
                <CircularWithValueLabeltemp></CircularWithValueLabeltemp>
            </div>
            <div className='box'>
                <CircularWithValueLabelhumid></CircularWithValueLabelhumid>
            </div>
            <div className='box'>
                <CircularWithValueLabelbpm></CircularWithValueLabelbpm>
            </div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Dashboard;

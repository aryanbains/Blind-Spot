import './index.scss'
import p1 from '../../Assets/Images/Product 2.jpg'
import CircularWithValueLabelhumid from '../ProgressHumid';
import CircularWithValueLabel from '../Progresskm';
import CircularWithValueLabeltemp from '../Progresstemp';
import CircularWithValueLabelbpm from '../Progressbpm';
import CircularWithValueLabelvpm from '../Progressvpm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser , faMobile , faMailBulk , faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import Footer from '../Footer'

/*const pythonExec =( ) =>{
    const python_code = 
        print('Hello from python')
    ;
    const pyodide = window.pyodide;
    pyodide.runPython(python_code);
}*/ 

const Dashboard = () => {
    return(
        <div className='dash-main'>
        <Navbar></Navbar>
        <div className="container">
            <div className="address">
                <img className='p1' src={p1} alt=''></img>
                <p className='pinf1'>Product 2</p>
            </div>
            <div className="div-p"><FontAwesomeIcon className="user" icon={faUser} color='#ffffff'></FontAwesomeIcon>
            <p className='name'>The Invisionaries</p>
            <p className='age-sex'>20 ,<span>Male</span></p>
            <FontAwesomeIcon className="mobile" icon={faMobile} color='#ababab'></FontAwesomeIcon>
            <FontAwesomeIcon className="phone" icon={faMailBulk} color='#ababab'></FontAwesomeIcon>
            <FontAwesomeIcon className="Address" icon={faHouseChimney} color='#ababab'></FontAwesomeIcon>
            <p className='mno'>9560X XXXXX</p>
            <p className='pno'>abc@gmail.com</p>
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
            <div className='box'>
                <CircularWithValueLabelvpm></CircularWithValueLabelvpm>
            </div>
            <div className='box'><p className='vital'>Get <br></br> Vitals</p></div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Dashboard;

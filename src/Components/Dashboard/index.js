import './index.scss'
import Navbar from '../Navbar';
import Footer from '../Footer'
const Dashboard = () => {
    return(
        <div className='dash-main'>
        <Navbar></Navbar>
        <div className="container">
            <div className="div-p"></div>
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

import './index.scss'
import p1 from '../../Assets/Images/Product 1.jpg'
import p2 from '../../Assets/Images/Product 2.jpg'
import p3 from '../../Assets/Images/Product 3.jpg'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Product = () => {
    return(
        <>
        <Navbar></Navbar>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
        data-aos-easing="ease-in-out" className='container'>
            <div className='box'>
                <img src={p1}></img>
                <h1>Basic Product</h1>
                <p>Designed for fundamental safety and health monitering. Includes ultrasonic sensor for obstacle detection, BMP sensor for fall detection, and heart rate sensor for pulse monitering.</p>
            </div>
            <div className='box'>
            <img src={p2}></img>
            <h1>Advanced Product</h1>
                <p>Offers comprehensive safety and environmental monitering capabilities. Includes additional features such as camera for object.</p>
            </div>
            <div className='box'>
            <img src={p3}></img>
            <h1>Super Product</h1>
                <p>Tailored specifically for individuals who are blind and deaf. Includes features like camera for real time object character recognition</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Product;
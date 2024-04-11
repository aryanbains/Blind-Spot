import './index.scss'
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
                <h1>Product 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s.</p>
            </div>
            <div className='box'>
            <h1>Product 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s.</p>
            </div>
            <div className='box'>
            <h1>Product 3</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s.</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Product;
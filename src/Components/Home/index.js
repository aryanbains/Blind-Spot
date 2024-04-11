import './index.scss'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Type from '../Type'

const Home = () =>{
    return(
    <>
    <Navbar></Navbar>
    <div className='Home'>
        <div className='Hero'>
        <p className='Main'>Blind Spot</p>
        <Type></Type>
        </div>
        <div className="About-main-div">
        <p className="About-main">About Us</p>
        <p className='About'>Our website offers a range of innovative solutions tailored to meet the diverse needs of blind users. Whether you're looking for motorized blinds 
        for added convenience, child-safe cordless options, or easy-to-install smart blinds that can be controlled with a tap on your smartphone.<br></br><br></br>
        But our commitment to safety doesn't stop there. We provide expert tips and advice on blind maintenance and installation, ensuring that your blinds not only look great 
        but also function safely in your home environment.</p>
        </div>

        <br></br>

        <div className="Mission-main-div">
        <p className="Mission-main">Our Mission</p>
        <p className='Mission'>"At SafeShade, our mission is to empower individuals with innovative solutions that enhance the safety and convenience of managing 
        blinds in their homes. We are committed to providing a comprehensive platform where users can access a diverse range of products, expert advice, and resources 
        tailored to their unique needs. <br></br><br></br>Through our dedication to excellence and safety,we strive to make a positive impact on the lives of blind users, ensuring peace 
        of mind and ease of use in every home."</p>
        </div>
    </div>
    <Footer></Footer>
    </>
    )
}

export default Home

/*Our website offers a range of innovative solutions tailored to meet the diverse needs of blind users. Whether you're looking for motorized blinds for added convenience, child-safe cordless options, or easy-to-install smart blinds that can be controlled with a tap on your smartphone.*/
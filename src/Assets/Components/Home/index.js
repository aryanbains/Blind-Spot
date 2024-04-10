import './index.scss'
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
        <p className="About-main">About Us</p>
        <p className='About'>Our website offers a range of innovative solutions tailored to meet the diverse needs of blind users. Whether you're looking for motorized blinds for added convenience, child-safe cordless options, or easy-to-install smart blinds that can be controlled with a tap on your smartphone.</p>
    </div>
    </>
    )
}

export default Home
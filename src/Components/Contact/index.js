import './index.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 className='contact'>Contact Us
            </h1>
            <div className='contact-form'>
                <form>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required></input>
                    </li>

                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required></input>
                    </li>

                    <li>
                       <input type='text' placeholder='Subject' name='Subject' required></input> 
                    </li>
                    
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>

                    <li>
                        <input type='submit' className='flat-button1' value='Send'></input>
                    </li>
                </form>
                 
            </div>

            </div>

            <div className='Image'>
            <p className='Name'> 
                Designed & Developed with 💖 by
                <br></br>
                Team Innovisionaries
                </p>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Contact;
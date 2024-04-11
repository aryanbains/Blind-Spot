import './index.scss'

const Footer = () => {
    return(
        <>
        <div className='footer'>
        <div className="footer__addr">
        <h1 className="footer__logo">Blind Spot</h1>
        
        
        <address>          
        <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
    </div>
    
    <ul className="footer__nav">
        <li className="nav__item">
        <h2 className="nav__title">Home</h2>

        <ul className="nav__ul">
            <li>
            <a href="#">Products</a>
            </li>

            <li>
            <a href="#">Contact</a>
            </li>
                
            <li>
            <a href="#">Socials</a>
            </li>
        </ul>
        </li>
        
        
        <li className="nav__item">
        <h2 className="nav__title">Legal</h2>
        
        <ul className="nav__ul">
            <li>
            <a href="#">Privacy Policy</a>
            </li>
            
            <li>
            <a href="#">Terms of Use</a>
            </li>
            
            <li>
            <a href="#">Sitemap</a>
            </li>
        </ul>
        </li>
    </ul>
    
    <div className="legal">
        <p>&copy; 2024 Blind Spot All rights reserved.</p>
        
        <div className="legal__links">
        <span>Made with <span class="heart">💖</span> by Team Innovisionaries</span>
        </div>
    </div>
    </div>
    </>
    )
}

export default Footer;
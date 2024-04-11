import './index.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Apple from '../../Assets/Images/Apple logo.png'
import Google from '../../Assets/Images/Google logo.png'

const Login = () => {
    return(
        <>
        <Navbar></Navbar>
        <h1 className='Welcome'>Welcome Back 👋</h1>
        <div class="login-wrapper">
            <div class="login-side">
                <div class="my-form__wrapper">
                    <form class="my-form">
                        <div class="socials-row">
                            <a
                                href="#"
                                title="Use Google"
                            >
                                <img src={Google} alt="Google"></img>
                                Log in with Google
                            </a>
                            <a
                                href="#"
                                title="Use Apple"
                            >
                                <img src={Apple} alt="Apple"></img>
                                Log in with Apple
                            </a>
                        </div>
                        <div class="divider">
                            <div class="divider-line"></div>
                            Or
                            <div class="divider-line"></div>
                        </div>
                        <div class="text-field">
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            ></input>
                        </div>
                        <div class="text-field">
                            <label for="password">Password:</label>
                            <input 
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                required
                            ></input>
                        </div>
                        <input type="submit" class="my-form__button" value="Login"></input>
                        <div class="my-form__actions">
                            <div class="my-form__row">
                                <span>Did you forget your password?</span>
                                <a href="#" title="Reset Password">
                                    Reset Password
                                </a>
                            </div>
                            <div class="my-form__signup">
                                <a href="#" title="Create Account">
                                    Create Account
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}

export default Login;
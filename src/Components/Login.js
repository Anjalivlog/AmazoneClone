import '../style/Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="Login">
                <Link to ="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                     alt="" 
                     className="LoginLogo" 
                    />
                </Link>

                {/* Login Form Start */}
                <div className="LoginContainer">
                    <h1>Sign In</h1>
                    <form>
                        <h3>Email</h3>
                        <input type="email" placeholder="Your Email"
                        />
                        <h3>Password</h3>
                        <input type="password" placeholder="Your Password"
                        />
                        <button className="LoginButton">Sign In
                        </button>
                        <p>
                            By Continuing, you agree to Amazon's Condition of 
                            Use and Privacy
                            Notice.
                        </p>
                        <button className="LoginButton">
                        Create Your Amazon Account
                        </button> <br/>
                        <p style={{ textAlign: "centre" }}> Login With :</p>
                        <a className='LoginSignInButtonGoogle'>
                            <img
                            className='loginGoogleImg' 
                            src='https://pngimg.com/uploads/google/google_PNG102344.png'
                            alt=''
                            />
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login 
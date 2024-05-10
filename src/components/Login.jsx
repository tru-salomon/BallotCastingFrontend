import background from '../assets/01 1.png'
import logo from '../assets/BCS LOGO.png'

const login = () => {
    return (
        <div className="login-background" style={{ backgroundImage: `url(${background})` }}>
            <form className="login-form">
                <img src={logo} alt="logo" className='logo' />
                <div className="login-title">
                    <h2>Welcome</h2>
                    <p>Sign in to continue</p>
                </div>
                <div className='input-group'>
                    <input type="email" placeholder="Enter your email" required autoComplete="email" />
                    <input type="password" placeholder="**********" required autoComplete="current-password" />
                </div>
                <div className="remember-me-forgot-password">
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit">Sign In</button>
                <div className='signup'>
                    <p>Don&apos;t have an account? <a href="/signup">Request an account here!</a></p>
                </div>
            </form>
        </div>
    )
}

export default login
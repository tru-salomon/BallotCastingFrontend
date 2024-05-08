import background from '../assets/01 1.png'

const login = () => {
  return (
      <div style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',
      }}>
          <form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '32px',
              width: '300px', // Adjust as needed
          }}>
              <input type="email" placeholder="Email" required autoComplete='email' />
              <input type="password" placeholder="Password" required autoComplete='current-password'/>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="/forgot-password" style={{ alignSelf: 'flex-end' }}>Forgot password?</a>
              <button type="submit">Sign In</button>
          </form>
    </div>
  )
}

export default login
import {React,useState} from 'react'
import logo from "./assets/netflixlogo.png"
import background from "./assets/bg.jpg"
import Signin from './Signin.jsx'
import "./Home.css"

export default function Home() {
    const [showSignin, setshowSignin]=useState(false);
    
  return (
    <div>
      <div className='main'>
        <nav className='topbar'>
            <ul className='topbar-nav'>
                <li className='logo'><img src={logo} alt="" srcset="" /></li>
                <li className='button'><button>Sign in</button></li>
            </ul>
        </nav>
        <div className='main-1'>
          <h1>Unlimited movies, TV shows, and more</h1>
          <p className='big-p'>Watch anywhere. Cancel anytime.</p>
          <p className='small-p'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input">
              <input type="email" placeholder='enter your email' />
              <button>Get Started</button>
        </div>
        </div>
      </div>
    </div>
  )
}

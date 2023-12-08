import React from 'react'
import "./body.css"
import video from "./video.m4v"
import Tv from "./assets/tv.png"
import mobile from "./assets/mobile-0819.jpg"
import logo from "./assets/netflixlogo.png"
import box from "./assets/boxshot.png"
import animat from "./assets/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png"
export default function Body() {
  return (
    <div className='body'>
      <div className='bodyone'>
        <div className='body-1'>
            <h2>Enjoy on your TV</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className='body-1-video'>
            <div className='tv'><img src={Tv} alt="" /></div>
        <video width="500" height="300" autoPlay muted loop>
         <source src={video} type="video/mp4"/>
        </video>
        </div>
      </div>
       <div className='bodytwo'>
       <div className='body-2-video'>
        <img src={mobile} alt="" />
        <div className='body-2-video-det'>
            <div className='img'>
              <img src={box} alt="" />
            </div>
            <div className='desc'>
              <div className='first'>Stranger things</div>
              <div className='down'>Downloading....</div>
            </div>
        </div>
       </div>
        <div className='body-2'>
        <h1>Download<br></br>your shows to watch offline</h1>
        <p>save your favorites easily and always have something to watch</p>
       </div>
        </div>
       
       <div className='body-3'>
        <h1>Watch everywhere</h1>
        <h4>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
       </div>
       <div className='bodyone body-4'>
        <div className='body-1'>
            <h2>Create profiles for kids</h2>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className='body-1-video body-4-img'>
            <div className='tv ani'><img src={animat} alt=""/></div>
        </div>
      </div>

       <div className='body-5'>
        <h2>Frequently Asked Questions</h2>
        <div className='body-inner'>What is Netflix?</div>
        <div className='body-inner'>How much does Netflix cost?</div>
        <div className='body-inner'>Where can i watch?</div>
        <div className='body-inner'>How do i cancel?</div>
        <div className='body-inner'>Is Netflix good for kids?</div>
       </div>
 
       <div className="input">
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
              <input type="email" placeholder='enter your email' />
              <button>Get Started</button>
        </div>

        <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo"><img src={logo} alt="" srcset="" /></h1>
        
    <h2>Contact</h2>
    
    <address>
      Moulvibazar,kamalganj, Adampur Bazar<br/>
          
      <a class="footer__btn" href="bijonmangang@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
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
  
  <div class="legal">
    <p>&copy; 2023 Something. All rights reserved.</p>
    
  </div>
</footer>
    </div>
  )
}

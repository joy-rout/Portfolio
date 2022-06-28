import React from 'react'
import '../src/App.css'
import '../src/components/color-1.css'
import '../src/components/style-switcher.css'
import Mypic from './components/my_pic.jpeg'
import swal from 'sweetalert'
import {Link} from 'react-scroll'
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import Typing from "./components/typing"
import Resume from "./components/Resume.pdf"
import Color1 from"./components/color-1.css" 
import Color2 from"./components/color-2.css"
import Color3 from"./components/color-3.css"
import Color4 from"./components/color-4.css"
import Color5 from"./components/color-5.css"
<>
<link rel="stylesheet" href={Color1} class="alternate-style" title='color-1' disabled/>
<link rel="stylesheet" href={Color2} class="alternate-style" title='color-2' disabled/>
<link rel="stylesheet" href={Color3} class="alternate-style" title='color-3' disabled/>
<link rel="stylesheet" href={Color4}class="alternate-style" title='color-4' disabled/>
<link rel="stylesheet" href={Color5} class="alternate-style" title='color-5' disabled/>

</>

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
 styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
 })

window.addEventListener("scroll" , () =>{
  if(document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})
const dayNight = document.querySelector(".day-night"); 
dayNight.addEventListener("click", () => {
  
  dayNight.querySelector("i").classList.toggle("fa-sun"); 
  dayNight.querySelector("i").classList.toggle("fa-moon"); 
  document.body.classList.toggle("dark");
})
  window.addEventListener("load", () => {
  if(document.body.classList.contains("dark"))
  {
  dayNight.querySelector("i").classList.add("fa-sun");
  
  
  }
  else
  {
  dayNight.querySelector("i").classList.add("fa-moon");
  }
  })

 const Alert= () => {
  swal("Your Message has been saved!", "THANK YOU");
} 


function App() {
  return (
    <>
    
    
    <div class="main-contianer">
      <div class="aside">
        <div class="logo">
          <a href='#'><span>J</span>oy</a>
        </div>
        <div class="nav-toggler">
          <span></span>
        </div>
      
      <ul class="nav">
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={500} class="active"><i class="fa fa-home"></i> 
        Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}><i class="fa fa-user"></i> About</Link></li>
        <li><Link to="service" spy={true} smooth={true} offset={50} duration={500}><i class="fa fa-list"></i> Services</Link></li>
        {/* <li><a href='#'><i class="fa fa-briefcase"></i> Portfolio</a></li> */}
        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}><i class="fa fa-comments"></i> Contact</Link></li>
      </ul>
      </div>
      <div class="main-content">
        <section class="home section" id="home">
          <div class="container">
            <div class="row">
              <div class="home-info padd-15">
                <h3 class="hello typewriter"> Hey !! my name is <span class="name">Janmejoy Rout</span></h3>
                <h3 class="my-profession r"><span >I am doing B.Tech at KIIT</span></h3>
                <p >I love website designing , machine learning , Pyhton , React , Html , CSS and more ....</p>
                <a href='#contact'  class="btn hire-me">Hire Me</a>
              </div>
              <div class="home-img padd-15">
                <img src={Mypic} alt='my-pic'></img>
              </div>
            </div>
          </div>
        </section>
        <section class="about section" id="about">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>About Me </h2>
              </div>
            </div>
            <div class="row">
              <div class="about-content padd-15">
                <div class="row">
                  <div class="about-text padd-15">
                    <h3>I am a budding <span>Web Developer</span></h3>
                    <p>Courteous and enthusiastic , I am interested in IT and everything in its orbit . I was fascinated by web programing , e.g. developing apps and building websites . Got an opportunity in a fintech company , I discovered my interest towards front-end development . I gained some experience in this field through this training . As this area complements my studies , I am keen to gain experience in the field . For this reason , I am looking for a company willing to offer me a placement among the developers . In return , I would offer my full commitment , and be a pleasant and friendly addition to your team . I am therefore currently looking for a job or an internship as a software developer</p>
                  </div>
                </div>
                <div class="row">
                  <div class="personal-info padd-15"> 
                    <div class="row">
                      <div class="info-item ">
                        <p>Birthday : <span>23 Nov 2000 </span></p>
                      </div>
                      <div class="info-item">
                        <p>Email : <span>jamejon15@gmail.com </span></p>
                      </div>
                      <div class="info-item">
                        <p>10th % : <span>85.5 </span></p>
                      </div>
                      <div class="info-item">
                        <p>12th % <span>73.3 </span></p>
                      </div>
                      <div class="info-item">
                        <p>Branch : <span>C.S.E</span></p>
                      </div>
                      <div class="info-item">
                        <p>Phone : <span>+91-9658871890 </span></p>
                      </div>
                      <div class="info-item">
                        <p>City : <span>Bhubaneswar </span></p>
                      </div>
                      <div class="info-item">
                        <p>Experience : <span>0 years </span></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="buttons padd-15">
                        <a href={Resume} class="btn">Download CV</a>
                        <a href='#contact' class="btn hire-me">Hire Me</a>
                      </div>
                    </div>
                  </div>
                  <div class="skills padd-15"> 
                    <div class="row padd-15">
                      <div class="skill-item padd-15">
                        <h5>CSS</h5>
                        <div class="progress">
                          <div class="progress-in" style={{ width: 300 }}></div>
                          <div class="skill-percent">75%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>HTML</h5>
                        <div class="progress">
                          <div class="progress-in" style={{ width: 356 }}></div>
                          <div class="skill-percent">89%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>ML</h5>
                        <div class="progress">
                          <div class="progress-in" style={{ width: 280 }}></div>
                          <div class="skill-percent">70%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>Bootstrap</h5>
                        <div class="progress">
                          <div class="progress-in" style={{ width: 288 }}></div>
                          <div class="skill-percent">72%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="education padd-15">
                    <h3 class="title"> Education</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2010-2017
                            </h3>
                            <h4 class="timeline-title"> C.B.S.E 10th qualification</h4>
                            <p class="timeline-text"> I have Qualified my 10th board from Mother's Public School , bhubaneswar . With a 9 C.G.P.A out of 10 in C.B.S.E board.</p>
                          </div>
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2017-2019
                            </h3>
                            <h4 class="timeline-title"> C.B.S.E 12th qualification</h4>
                            <p class="timeline-text"> I completed my 12th Board from ODM public school , Bhubaneswar . Where i secured 78.2% out of 100 , in C.B.S.E board , with computer science as my main subject from total 6 subjects of which best five was considered </p>
                          </div>
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2019-2023
                            </h3>
                            <h4 class="timeline-title"> B.Tech (C.S.E)</h4>
                            <p class="timeline-text"> I am currently studing in one of India's top university , Kalinga Institute Of Industrial Technology , I have completed my 3rd year without any backlog , and have C.G.P.A ..8.35 after my 6th semester</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div> 
                  <div class="experience padd-15">
                    <h3 class="title"> Experience and Courses</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 01-22 to 04-22
                            </h3>
                            <h4 class="timeline-title"> 3 months internship</h4>
                            <p class="timeline-text"> I have completed my 3 months internship at HighRadius where we were asked to make an AI enabled B2B invoice management system , where we had to predict the invoice date .</p>
                          </div>
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 06-21 to 01-22
                            </h3>
                            <h4 class="timeline-title"> Udemy full stack developer Bootcamp</h4>
                            <p class="timeline-text"> i have completed a full stack web development bootcamp course from Udemy . Where i learnt both front-end which included html, css , react ,javascript etc . And also was some Back-end part</p>
                          </div>
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2021-2022
                            </h3>
                            <h4 class="timeline-title"> Sentiment analysis project</h4>
                            <p class="timeline-text"> I along with 4 more members did a project where we could predict the sentiment of a chat using our own model , we used machine learning , deep learning and apox to train our model .</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="service section" id="service">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>Services</h2>
              </div>
            </div>
            <div class="row">
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-mobile-alt"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites. </p>
                </div>
              </div>
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-laptop-code"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Web development is the work involved in developing a website for the Internet or an intranet. </p>
                </div>
              </div>
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-palette"></i>
                  </div>
                  <h4>Photography</h4>
                  <p>Photography is the art, application, and practice of creating durable images by recording light and emotions. </p>
                </div>
              </div>
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-code"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>Labore irure voluptate cupidatat proident laboris. Veniam ex et pariatur ut et Lorem culpa laborum est. Aute duis nulla ut qui in id sunt ex.</p>
                </div>
              </div>
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-search"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>Labore irure voluptate cupidatat proident laboris. Veniam ex et pariatur ut et Lorem culpa laborum est. Aute duis nulla ut qui in id sunt ex.</p>
                </div>
              </div>
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class=" fa fa-bullhorn"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>Labore irure voluptate cupidatat proident laboris. Veniam ex et pariatur ut et Lorem culpa laborum est. Aute duis nulla ut qui in id sunt ex.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="contact section" id="contact">
          <div class="container">
          <div class="row">
              <div class="section-title padd-15">
                <h2>Contact Me</h2>
              </div>
            </div>
            <h3 class="contact-title padd-15"> DO YOU HAVE ANY QUERIES ??</h3>
            <h4 class="contact-sub-title padd-15"> I'AM AT YOUR SERVICE ..</h4>
            <div class="row">
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-phone"></i></div>
              <h4>Call Us On</h4>
              <p>+91 96588 71890</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
              <h4>Home</h4>
              <p>Bhubaneswar</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-envelope"></i></div>
              <h4>Email</h4>
              <p>jamejon15@gmail</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-globe-europe"></i></div>
              <h4>Website</h4>
              <p>www.xyz.com</p>
            </div>
            </div>
            <h3 class="contact-title padd-15"> DROP ME A MAIL ..</h3>
            <h4 class="contact-sub-title padd-15">I RESPOND TO MAILS ASAP</h4>

            <div class="row">
              <div class="contact-form padd-15">
                <div class="row">
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Name"></input>
                    </div>
                  </div>
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email"></input>
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Subject"></input>
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <textarea class="form-control" placeholder='Message'></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <button type='submit'  onClick={Alert} class="btn">Drop Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerpolicy="no-referrer"></script>

    <script src='/src/components/script.js'></script>
    </>
  )
}



export default App

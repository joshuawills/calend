import "../../styling/Home.css"
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

function Home() {

  const hiddenElements = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.current.forEach((element: any) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className = "homePage">
      <section className="colOne">
          <img src = "https://i.ibb.co/5s7SjK5/lightmode.png" alt = "logo" style = {{width:'30vw'}}/>
      </section>
      <section className="colTwo">
        <div className="bottomOne" style={{border:'none'}}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>   
        <div className = "hidden" ref={(el) => (hiddenElements.current[0] = el)}>
          <h1 style={{fontSize:'3.5rem', textAlign:'center'}} >The modern web solution to task management</h1>
        </div>
      </section>
      <section className="colThree">
        <div className="bottomTwo" style={{border:'none'}}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className = "boxes">
          <div className = "boxesSmaller">
            <strong>Manage your schedule</strong>
          </div>
          <div className = "boxesSmaller">
            <strong>Track your deadlines</strong>
          </div>
          <div className = "boxesSmaller">
            <strong>Avoid awkward late notes</strong>
          </div>
        </div>
      </section>
      <section className = "colFour">
        <div className="bottomThree" style={{border:'none'}}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        <h1 style = {{fontSize:'2rem'}}>Try it out now!</h1>
        <p>Calend is currently available with all its features for free, so get right into it by signing up in the bottom right.</p>
      </section>
      <section className = "colFive">
        <div className = "bottomFour" style={{border:'none'}}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <img src="https://i.ibb.co/3Bjw0Hf/openaitwo.png" alt="openaitwo" style={{width:'15vw'}}/>
        <p style = {{fontSize:'2rem'}}>Coming soon, OpenAI integration 👀 </p>
      </section>
      <div className = "actionsArea">
        <Link to = "/login" className = "link">
          <p>Log In</p>
        </Link>
        <Link to = "/signup" className = "link">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  )
} 

export default Home
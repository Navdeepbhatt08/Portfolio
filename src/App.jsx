import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav id="desktop-nav">
        <div class="logo"><img src="./assets/logo.png" /></div>
        <div>
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo"></div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li><a href="#about" onclick="toggleMenu()">About</a></li>
            <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
            <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
            <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div class="section__pic-container">
          <img src='./assets/profile-pic.png' alt="Navdeep's profile picture" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">NAVDEEP BHATT</h1>
          <p class="section__text__p2">Frontend Developer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('./assets/resume.pdf')"
            >
              Download CV
            </button>
            <button class="btn btn-color-1" onclick="location.href='./#contact'">
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://www.linkedin.com/in/navdeepbhatt08/'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/Navdeepbhatt08'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">

          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>1+ years <br />Frontend Development</p>
              </div>
              <div class="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>BCA. Bachelors Degree</p>
              </div>
            </div>
            <div class="text-container">
              <p>
                I am currently working as a Front-End Web Developer and working on Full Stack Development. Using Mern Stack (Mongo DB , Express Js, React Js, Node Js).
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/html.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/css.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>

                <article>
                  <img
                    src="./assets/js.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>

                <article>
                  <img
                    src="./assets/react.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>React JS</h3>
                    <p>Basic</p>
                  </div>
                </article>


              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Backend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/node.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/express.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/php.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>P H P</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">DataBase</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/mysql.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>MY SQL</h3>
                    <p>Experience</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/mongo.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Mongo DB</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Music P</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://navdeepbhatt08.github.io/Music-player-by-navdeep/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project Two</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-3.png"
                  alt="Project 3"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project Three</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
 
      </section>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div class="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              class="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App

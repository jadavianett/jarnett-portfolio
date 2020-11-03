import React from "react";
import "../assets/css/style.css";
import banner from "../assets/images/banner2.JPG";
import resume from "../assets/JOAResume.pdf";

function About() {
  return (
    <section className="hero">
      <h1> Hello, my name is Jada. </h1>
      <h1>I am a Full Stack Web Developer living in Atlanta, GA.</h1>

      <a href={banner}>
        <img id="banner" src={banner} alt="placeholder"></img>
      </a>

      <h5> About:</h5>
      <p>
        I am a MERN Stack Web Developer that has just completed a coding
        bootcamp with the Georgia Institute of Technology. See my previous work
        history by viewing my full resume &nbsp;
        <a href={resume} className="inline-link">
          here
        </a>
        . Before I stepped into the technology sector, I was an event
        coordinator for one of the most popular restaurant groups in Atlanta. I
        am also a part time cardio kickboxing instructor at the only female
        owned boxing gym in the country!
        <br />
        <br />
        When it comes to web development, I keep Michael Scott's "KISS: Keep it
        Simple Stupid" at the front of my mind. I enjoy creating, clean, simple,
        and straight to the point web applications. I am currently accepting
        freelance work, so please contact me if you would like to build
        something awesome!
      </p>
      <h5> Services:</h5>

      <h6>FRONT END WEB DEVELOPMENT</h6>
      <p>
        Includes building the visual components of a website. I use HTML,
        Javascript, and CSS to build visually appealing, responsive, interactive
        websites.{" "}
      </p>
      <h6>BACK END WEB DEVELOPMENT</h6>
      <p>
        Includes connecting the web page that is served up to the client to a
        database that houses information. Focuses on building server-side web
        application logic that integrates seamlessly with front end logic.
      </p>
      <hr />

      <div className="container class-container">
        <h2> Let's Connect!</h2>
        <br />
        <div class="row">
          <div className="col s4">
            <a
              class="waves-effect waves-light btn-large"
              href="https://www.linkedin.com/in/jada-arnett-357130158/"
            >
              LinkedIn
            </a>
          </div>
          <div className="col s4">
            <a
              class="waves-effect waves-light btn-large"
              href="https://github.com/jadavianett"
            >
              Github
            </a>
          </div>
          <div className="col s4">
            <a
              class="waves-effect waves-light btn-large"
              href="mailto:jada.arnett@gmail"
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";

function Project() {
    return (
        <section className="work" id="work">
        <div className="row">
          <h2>My Work</h2>
          <div className="work__boxes">
            {/*List of Projects*/}
            <div className="work__box">
              <div className="work__text">
                <h3>Project 1 - Weather App</h3>  
                <a href="https://hhhhhaaaa.github.io/WillWeather/">
                  <img src="assets/WillWeather-Snap4.png" alt="Weather App" style={{width: '100%'}} /></a>
                <p>WillWeather is a simple weather forecast app, which uses some APIs to fetch 5 day / 12 hour forecast data from OpenWeather and to fetch cities/map from Mapbox.</p>
                <a href="https://github.com/hhhhhaaaa/WillWeather" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>Project 2 - IWolfU App</h3>  
                <a href="https://iwolfu.herokuapp.com/">
                  <img src="assets/iwolfu.png" alt="Weather App" style={{width: '100%'}} /></a>
                <p>A pet adoption matching application designed with mobile-first focus, utilizing Node.js and handlerbars.</p>
                <a href="https://github.com/leediamo/iwolfu" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>Day Planner</h3>  
                <a href="https://almurawski15.github.io/day-planner/">
                  <img src="assets/day-planner-3.png" alt="Day Planner" style={{width: '100%'}} /></a>
                <p>This project is a simple calendar application that allows users to save events for each hour of the day featuring HTML and CSS powered by JQuery code.</p>
                <a href="https://github.com/almurawski15/day-planner" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>Code Quiz</h3>  
                <a href="https://almurawski15.github.io/code-quiz/">
                  <img src="assets/quiz_snip_1.PNG" alt="Code Quiz" style={{width: '100%'}} /></a>
                <p>This project is a simple calendar application that allows users to save events for each hour of the day featuring HTML and CSS powered by JQuery code.</p>
                <a href="https://github.com/almurawski15/code-quiz" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>Note Taker</h3>  
                <a href="https://almurawski15.github.io/note-taker/">
                  <img src="assets/note-taker.png" alt="Note Taker" style={{width: '100%'}} /></a>
                <p>This project is a simple Note Taker application that can be used to write and save notes utilizing Express.</p>
                <a href="https://github.com/almurawski15/note-taker" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>Fitness Tracker</h3>  
                <a href="https://almurawski15.github.io/fitness-tracker/">
                  <img src="assets/fitness-tracker-snapshot.png" alt="Day Planner" style={{width: '100%'}} /></a>
                <p>A fitness application that tracks users daily workouts and utilizes MongoDB</p>
                <a href="https://github.com/almurawski15/fitness-tracker" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
            <div className="work__box">
              <div className="work__text">
                <h3>ReadMe Generator</h3>  
                <img src="assets/readme_gif.gif" alt="Quiz" style={{width: '100%'}} />
                <p>This project is a README.md generator utilizing node.js prompted in the command line to help developers save time in creating README files and focus on their coding.</p>
                <a href="https://github.com/almurawski15/readme-generator" alt="Link to Repo">Link to GitHub Repo</a>
              </div>
            </div>
          </div></div></section> 
    );
}

export default Project;
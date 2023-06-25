import React from "react";

import "./App.css";

function App() {
  const author = "Pedro Yago Rabelo de Sousa";
  const projects = [
    {
      name: "calculator",
      link: "https://pedroyrsousa.github.io/calculadora/",
      completed: true,
    },
  ];
  //const projects = {
  //  calculator: "https://pedroyrsousa.github.io/calculadora/",
  //};
  const social = {
    profile: {
      link: "https://github.com/PedroYRSousa",
      image: "/profile.jpg",
    },
    github: {
      link: "https://github.com/PedroYRSousa",
      image: "/512x512-logo-27148.png",
    },
    twitch: {
      link: "https://www.twitch.tv/pyrs_tv",
      image: "/twitch-logo-png-1873.png",
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/pyrs/",
      image: "/linkedin-logo-png-1837.png",
    },
    email: {
      link: "mailto:contato@yagosousa2512@gmail.com",
      image: "/email-logo-png-1099.png",
    },
  };

  return (
    <main>
      <div className="profile">
        <div className="profile-image">
          <a href={social.profile.link} target="_blank" rel="noreferrer">
            <img
              className="profile-image-src"
              src={process.env.PUBLIC_URL + social.profile.image}
              alt="profile"
            />
          </a>
        </div>
        <h3>{author}</h3>
        <div className="profile-projects">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noreferrer">
              <p>
                <span
                  className={`w3-tag ${
                    project.completed ? "w3-green" : "w3-red"
                  }`}
                >
                  {project.completed ? "Concluído" : "Em construção"}
                </span>
              </p>
              <button className="w3-button w3-border w3-hover-black w3-border-white w3-round">
                {project.name}
              </button>
            </a>
          ))}
        </div>
      </div>

      <div className="social">
        <a href={social.github.link} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + social.github.image}
            alt="github"
          />
        </a>
        <a href={social.twitch.link} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + social.twitch.image}
            alt="twitch"
          />
        </a>
        <a href={social.linkedIn.link} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + social.linkedIn.image}
            alt="LinkedIn"
          />
        </a>
        <a href={social.email.link} target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + social.email.image} alt="email" />
        </a>
      </div>
    </main>
  );
}

export default App;

import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "Headphone Review Sentiment Analysis",
          description: "Analyzed 1,000 Amazon reviews across 10 headphone products using Python and Excel. Performed sentiment analysis and visualized trends using Violin plots, FacetGrids, WordClouds, and bar charts. Integrated Gemini AI to generate data-driven marketing and product improvement recommendations.",
          technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NLP", "Gemini AI"],
          demo_link: "https://github.com/saanvielaty/Headphone-Review-Sentiment-Analysis", 
          code_link: "https://github.com/saanvielaty/Headphone-Review-Sentiment-Analysis", 
        },
        {
          project_image: "",
          title: "Average Inflation Rate Predictor",
          description: "Developed a machine learning system that predicts the 3-year average inflation rate for countries using historical macroeconomic data. Achieved 70% accuracy by comparing multiple regression models and evaluating performance to determine the most effective predictive approach.",
          technologies: ["Python", "Scikit-learn", "Linear Regression", "Random Forest", "XGBoost", "MLP Regressor"],
          demo_link: "https://github.com/saanvielaty/Average-Inflation-Rate-Prediction",
          code_link: "https://github.com/saanvielaty/Average-Inflation-Rate-Prediction",
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
      {
      //Use this section to list your projects dynamically from state using the map function
       this.state.projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-image">
            {project.project_image ? (
              <img src={project.project_image} alt={project.title} />
            ) : (
              <span>Project Image</span>
            )}
          </div>

          <div className="project-body">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span className="tech-pill" key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                Live Demo
              </a>
              <a
                href={project.code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="code-btn"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))    
      }
      </div>
    );
  }
}

export default Portfolio;
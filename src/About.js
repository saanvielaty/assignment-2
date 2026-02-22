import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="about-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-photo">
            <span>Your Photo</span>
          </div>

          <div className="about-right">
            <p className="about-text">
              Hi! I’m Saanvi Elaty, a Data Science student at the New Jersey Institute of Technology with a strong interest in machine learning, AI systems, and data-driven decision making. I enjoy analyzing complex datasets and building predictive models that uncover meaningful insights.
            </p>

            <p className="about-text">
               Through internships at Prudential and Allstate, I’ve worked on large-scale financial and insurance datasets, built machine learning models, and developed AI-powered solutions to solve real-world business problems. I’m passionate about leveraging data and emerging technologies to create impactful, scalable solutions. I’m excited to connect with others in the data science and AI community, and to continue learning and growing in this dynamic field!
            </p>

            <h2 className="about-subtitle">Skills &amp; Technologies</h2>

            <div className="about-skills">
              <span className="skill-pill">React</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">C++</span>
              <span className="skill-pill">SQL</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
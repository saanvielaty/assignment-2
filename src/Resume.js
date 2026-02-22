import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      school: "New Jersey Institute of Technology",
      year: "2023-2027",
      gpa: "3.6/4.0"
    },
    {
      degree: "High School Diploma",
      school: "Monroe Township High School",
      year: "2019-2023",
      gpa: "3.9/4.0"
    }
  ];

  const experience = [
    {
      title: "Incoming Data Science Intern",
      company: "American Express",
      period: "Summer 2026",
      responsibilities: [
        "Interning in the Technology Unitto gain hands-on experience in data science and analytics, working with real-world datasets and business problems"
      ]
    },
    {
      title: "Technology Intern",
      company: "Prudential Global Investment Management.",
      period: "Summer 2025",
      responsibilities: [
        "Performed data analysis on assets under management data across 8 different business spanning to a total of $1.5 trillion by applying statistical methods to uncover trends across asset allocation and to identify performance drivers",
        "Utilized SQL to extract and transform tiered assets under management data stored in DataLakes(bronze, silver, and gold layers), and built interactive PowerBI dashboard to visualize key asset under management metrics  Collaborated with design team to implement user interfaces",
        "Build agentic AI agents for use cases across the company and tested the agents to determine effectiveness and shortcomings across different knowledge sources.  Compiled results together to determine best practices for generative AI. ",
        "Participated in an AI Initiative by presenting an interactive workshop on Generative AI tools including Microsoft Co-Pilot as well as Automation techniques using Microsoft Power Automate to 200+ employees including managers and senior staff"
      ]
    },
    {
      title: "AI/ML Studio Researcher",
      company: "AllState Insurance",
      period: "05/2025 -12/2025",
      responsibilities: [
        "Collaborated with AllState employees through Break Through Tech program at Cornell Tech to improve an auto insurance machine learning model, achieving a 78% accuracy for predicting the cost/severity of future claims. ",
        "Cleaned historical auto insurance claim data, performed initial data analysis, and worked with models such as GLM, Random Forest, GBM, and XGBoost to achieve a MAE of less than 10% ",
        "Completed training in AL/ML fundamentals from Cornell Tech + $2,000 stipend to support learning and project contributions"
      ]
    } ,
    {
      title: "Data Science Extern",
      company: "Beats by Dre",
      period: "07/2024 - 09/2024",
      responsibilities: [
        "Worked with Beats by Dre employees through an Extern program to improve Beats by Dre’s product and marketing strategy by performing sentiment analysis on 1000+ consumer reviews scraped from various Beats by Dre products sold on Amazon ",
        "Utilized Python and key data science libraries such as Pandas, NumPy, and Matplotlib to apply exploratory data analysis (EDA) techniques including data cleaning, feature engineering, and visualization to uncover underlying patterns and hidden trends ",
      "Utilized advanced natural language processing tools such as Gemini AI to interpret/summarize customer feedback which reduced manual work by 80%"
        
  ]
    }
  ];
  const skills = {
    "Technology Skills:": [ "Java", "Python", "R", "C++", "SQL", "MATLAB", "Power BI", "Tableau", "ML", "Agile", "Microsoft Co-Pilot Studio", "Jira" ],
    "Mathematics:": ["Linear Algebra", "Calculus", "Statistics", "Probability"],
    "Tools & Technologies": ["Git", "VS Code", "MongoDB", "PostgreSQL", "Figma", "Adobe XD"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
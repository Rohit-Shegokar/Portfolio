import React from "react";
import "./timeline.css";
import TimelinePopup from "./TimelinePopup";

import nyu from "../../Assets/Timeline/NYU.png";
import jio from "../../Assets/Timeline/Jio.png";
import mumbai from "../../Assets/Timeline/Mumbai.png";

const Timeline = () => {
  const timelineData = [
    {
      period: "Sep 2025 - May 2027",
      title: "New York University",
      subtitle: "Tandon School of Engineering",
      type: "education",
      icon: nyu,
      showButton: true,
      buttonText: "View Coursework",
      details: (
        <>
          Master of Science in Management of Technology
          <br />
          <b>GPA: 3.67</b>
        </>
      ),
      detailedInfo: (
        <>
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', textAlign: 'left'}}>About the Program</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.5', textAlign: 'left' }}>
            The <b>MS in Management of Technology</b>  is a STEM-designated program that blends engineering, data-driven decision-making, and business strategy to prepare students for leadership roles in technology-focused organizations. The curriculum emphasizes strategic management, analytics, finance, and emerging technologies, enabling graduates to bridge technical expertise with managerial insight and drive innovation in a rapidly evolving digital economy.
          </p>
          
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px', textAlign: 'left' }}>Coursework:</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.5', marginBottom: '15px', textAlign: 'left' }}>
          <li>
            <strong>Financial Analysis for Tech Managers</strong>
          </li>

          <li>
            <strong>Organizational Behavior</strong>
          </li>

          <li>
            <strong>Data Visualization for Business Intelligence</strong>
          </li>

          <li>
            <strong>Global Innovation</strong>
          </li>

          <li>
            <strong>Programming for Business Intelligence and Analytics</strong>
          </li>

          <li>
            <strong>Data Engineering</strong>
          </li>

          <li>
            <strong>Design Strategies</strong>
          </li>
          </ul>
          {/* <ul style={{ paddingLeft: '20px', lineHeight: '1.5', marginBottom: '15px', textAlign: 'left' }}>
          <li>
            <strong>Financial Analysis for Tech Managers:</strong>
            <p>
              This course focuses on the core accounting, financing, and investment decisions faced by technology-driven organizations, with an emphasis on real-world managerial applications. It introduces fundamental accounting principles, including cost accounting, alongside essential finance concepts used in strategic decision-making. Through the analysis of real business case studies, students apply financial and accounting frameworks to evaluate practical business problems and develop data-driven solutions aligned with organizational objectives.
            </p>
          </li>

          <li>
            <strong>Organizational Behavior:</strong>
            <p>
              This course introduces key theories, research, and practical frameworks for understanding and managing human behavior within organizations. It explores topics such as motivation, decision-making, leadership, team dynamics, organizational culture and structure, communication, power and conflict, work stress, and organizational change. Through self-assessments, case studies, and simulations, students analyze real organizational challenges and develop actionable insights to improve individual, team, and organizational effectiveness.
            </p>
          </li>

          <li>
            <strong>Data Visualization for Business Intelligence:</strong>
            <p>
              This course provides a graduate-level foundation in data visualization as a perceptually effective approach for transforming large and complex datasets into actionable business insights. It covers core visualization principles, including data types, visual encodings, and design best practices, with an emphasis on both exploratory and explanatory analysis. Students gain exposure to modern visualization tools and programming technologies such as R and D3, and apply these concepts through real-world case studies to design impactful, decision-oriented business intelligence solutions.
            </p>
          </li>

          <li>
            <strong>Global Innovation:</strong>
            <p>
              This course examines technology-enabled innovation in a global context, focusing on how organizations access and leverage worldwide sources of innovation. It explores the coordination of distributed activities, global new product development, the evolving role of global R&D, and the increasing impact of IT and e-business on innovation strategies. The course also highlights the importance of strategic alliances and collaborations with customers, suppliers, and external partners in driving sustainable global innovation.
            </p>
          </li>

          <li>
            <strong>Programming for Business Intelligence and Analytics:</strong>
            <p>
              This course emphasizes the role of programming in supporting data-driven business decision-making across industries. It focuses on extracting, manipulating, analyzing, and visualizing data through applied case studies, complementing statistical methods used in business analytics. By adopting an integrative, problem-solving approach, students develop practical programming skills that bridge analytical theory and real-world industry applications, preparing them for advanced coursework and professional work in data science and business intelligence.
            </p>
          </li>

          <li>
            <strong>Data Engineering:</strong>
            <p>
              This course complements Statistics for Business Analysts and Programming for Business Intelligence and Analytics by focusing on the practical preparation of data for analytics and AI applications. Through applied case studies, students learn how to structure, clean, and organize data for descriptive (unsupervised) and predictive (supervised) modeling. The course emphasizes industry-relevant data engineering practices that enable scalable, real-world deployment of analytics and AI solutions beyond the classroom.
            </p>
          </li>

          <li>
            <strong>Design Strategies:</strong>
            <p>
              This course applies design thinking as a human-centered approach to help organizations navigate disruption and continuous change in today’s economy. It equips students with strategic tools and frameworks to understand evolving customer needs, leverage technology, and create innovative products, services, value propositions, and business models. Emphasizing exploration over immediate problem-solving, the course develops the ability to evaluate multiple strategic options and craft creative, sustainable strategies that drive long-term business growth and impact.
            </p>
          </li>
          </ul> */}

        </>
      )
    },
    {
      period: "Jul 2022 - Jul 2025",
      title: "Jio Platforms Limited",
      subtitle: "Assistant Manager",
      type: "work",
      icon: jio,
      showButton: true,
      buttonText: "View Experience",
      details: "Profile: Project Manager & Data Analyst",
      detailedInfo: (
        <>
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', textAlign: 'left' }}>Role Overview</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.5', textAlign: 'left' }}>
            As an Assistant Manager at Jio Platforms Limited, I served as both a Project Manager and Data Analyst, 
            bridging the gap between technical teams and business stakeholders to deliver impactful solutions.
          </p>
          
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px', textAlign: 'left' }}>Key Responsibilities</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.5', marginBottom: '15px', textAlign: 'left' }}>
            <li>Led Agile teams using Azure DevOps; introduced structured sprint planning, improving delivery velocity by 20%</li>
            <li>Spearheaded backend architecture design across multiple modules, aligning technical decisions with business needs to reduce delivery time by 15% and boost scalability</li>
            <li>Developed real-time dashboards and custom KPIs using Azure DevOps and Excel, enabling proactive project tracking, reducing slippage by 20%, and improving stakeholder satisfaction by 25%</li>
            <li>Designed Power BI dashboards to transform complex datasets into actionable insights, enabling strategic decisionmaking and boosting KPI visibility by 30% across business units</li>
            <li>Orchestrated scalable ETL workflows using Airbyte, DBT, and PostgreSQL to integrate multi-source data, streamlining reporting processes and reducing manual workload by 45%</li>
            <li>Automated daily data-cleaning operations using Python (Pandas, NumPy) and cron scheduling, improving reporting timeliness, ensuring data integrity, and cutting manual effort by 50%</li>
          </ul>

          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px', textAlign: 'left' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
            <span className="popup-skill-tag">Python</span>
            <span className="popup-skill-tag">SQL</span>
            <span className="popup-skill-tag">Tableau</span>
            <span className="popup-skill-tag">Power BI</span>
            <span className="popup-skill-tag">Excel</span>
            <span className="popup-skill-tag">Jira</span>
            <span className="popup-skill-tag">Agile</span>
          </div>
        </>
      )
    },
    {
      period: "Aug 2018 - May 2022",
      title: "Mumbai University",
      subtitle: "MCT's Rajiv Gandhi Institute of Technology",
      type: "education",
      icon: mumbai,
      showButton: false,
      buttonText: "",
      details: (
        <>
          Bachelor of Engineering in Electronics and Telecommunication
          <br/>
          <b>GPA: 3.38</b>
        </>
      ),
      detailedInfo: (
        <>
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem' }}>Program Overview</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Bachelor of Engineering in Electronics and Telecommunication from Mumbai University provided 
            a strong foundation in engineering principles, communication systems, and emerging technologies.
          </p>
          
          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px' }}>Academic Highlights</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
            <li>Graduated with a GPA of 3.38</li>
            <li>Completed comprehensive coursework in electronics, telecommunications, and signal processing</li>
            <li>Conducted research on wireless communication systems</li>
            <li>Participated in multiple technical competitions and hackathons</li>
            <li>Led student technical societies and organized workshops</li>
          </ul>

          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px' }}>Major Projects</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
            <li><b>Smart Traffic Management System:</b> Developed an IoT-based solution for traffic optimization</li>
            <li><b>Wireless Sensor Network:</b> Designed and implemented a multi-node sensor network</li>
            <li><b>Digital Signal Processing:</b> Created algorithms for audio signal enhancement</li>
          </ul>

          <h3 style={{ color: '#a78bfa', marginBottom: '15px', fontSize: '1.3rem', marginTop: '25px' }}>Core Competencies</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
            <span className="popup-skill-tag">Circuit Design</span>
            <span className="popup-skill-tag">Communication Systems</span>
            <span className="popup-skill-tag">Signal Processing</span>
            <span className="popup-skill-tag">Embedded Systems</span>
            <span className="popup-skill-tag">IoT</span>
            <span className="popup-skill-tag">MATLAB</span>
            <span className="popup-skill-tag">C/C++</span>
          </div>
        </>
      )
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [popupData, setPopupData] = React.useState(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = (data) => {
    setPopupData(data);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupData(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-line" />

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${hoveredIndex === index ? "hovered" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker">
              <div
                className={`timeline-icon ${item.type}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.icon} alt={item.title} className="timeline-icon-img" />
              </div>
              <div className={`pulse-ring pulse-ring-${item.type}`} />
            </div>

            <div
              className={`timeline-content ${item.type}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="timeline-arrow" />
              <div className={`timeline-badge ${item.type}`}>{item.type}</div>
              
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              {item.subtitle && <p className="timeline-subtitle">{item.subtitle}</p>}
              <p className="timeline-details">{item.details}</p>
              
              {item.showButton && (
                <button 
                  className="timeline-details-btn"
                  onClick={() => openPopup(item)}
                >
                  {item.buttonText} →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <TimelinePopup 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        data={popupData} 
      />
    </div>
  );
};

export default Timeline;

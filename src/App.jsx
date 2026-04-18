import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink} from 'lucide-react';
import profileImage from './images/profile.png';
import hochschule from './images/clients/hochschule.jpeg';
import lt from './images/clients/L&T.jpeg';
import navistar from './images/clients/navistar.jpeg';
import tampnet from './images/clients/tampnet.jpeg';
import hochschuleproj from './images/architecture/hochschuleproject.png';
import ltproj from './images/architecture/ltproject.png';
import navistarproj from './images/architecture/navistarproject.png';
import tampnetproj from './images/architecture/tampnetproject.png';
import digitalcompeteeu from './certificates/digital_compete_eu.pdf';
import datacampdeass from './certificates/DEA0012510788623.pdf'
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [resumeTab, setResumeTab] = useState('experience');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectArch, setSelectedProjectArch] = useState(null);  // ← ADD THIS
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);
  useEffect(() => {
                    emailjs.init('TwUziX5RQKIWo_Adq');
                  }, []);
  const handleSubmitForm = (e) => {
                    e.preventDefault();
                    
                    const formData = {
                      from_name: e.target.from_name.value,
                      from_email: e.target.from_email.value,
                      company: e.target.company.value || 'N/A',
                      message: e.target.message.value || 'No message',
                    };

                    emailjs.send(
                      'service_m7ut4x8',        // Gmail service ID
                      'template_tieb72p',       // Email template ID
                      formData,
                      'TwUziX5RQKIWo_Adq'         // Public key
                    )
                    .then((response) => {
                      alert('Email sent successfully!');
                      e.target.reset();
                    })
                    .catch((error) => {
                      alert('Failed to send email. Please try again.');
                      console.error('Error:', error);
                    });
                  };


const projects = [
      {
        id: 1,
        title: "IoT & Data Engineering Pipeline - Hochschule Offenburg",
        company: "Hochschule Offenburg",
        period: "Nov 2025 - Feb 2026",
        description: "End-to-End IoT Pipeline from AHU sensor data through MQTT Broker, Node-RED workflow, NATS JetStream, InfluxDB, and Grafana dashboards for real-time monitoring, condition analysis, and trend prediction. Entire pipeline containerized with Docker and automated via GitLab CI/CD.  Production-ready architecture with real-time monitoring and predictive capabilities.",
        achievements: [
          "Designed and implemented End-to-End IoT pipeline from sensor to dashboard",
          "Developed workflow with Node-RED, NATS JetStream, InfluxDB, Grafana, and Azure Blob Storage",
          "Implemented Docker containerization and GitLab CI/CD for automated deployments",
          "Created monitoring dashboards with alerting for real-time asset tracking"
        ],
        tech: ["Node-RED", "NATS JetStream", "InfluxDB", "Grafana", "Telegraf", "Azure Blob Storage", "Docker", "Python", "GitLab CI/CD", "Linux"],
        image: hochschule,
        architecture: hochschuleproj,
        link: "#"
      },
      {
        id: 2,
        title: "Enterprise Data Pipeline - Navistar International",
        company: "LTIMindtree",
        period: "Apr 2022 - Aug 2025",
                description: "High-performance data platform for monitoring vehicle performance and operational metrics. Created 20+ hourly ETL pipelines processing raw telematics data into processed analytics-ready formats. Implemented multi-layer processing architecture with Delta Lake optimization. Developed data transformation solutions addressing complex client requirements with SQL Serverless analytics layer.",
        achievements: [
          "Created 20+ hourly ETL pipelines (raw to processed) for continuous data processing",
          "Solved multiple complex client data requirements with custom transformation logic",
          "Optimized hourly pipeline execution with Delta Lake compression and partitioning",
          "Integrated Azure Functions and Logic Apps for event-driven pipeline orchestration",
          "Implemented comprehensive monitoring via Power BI dashboards and Azure DevOps",
          "Developed SQL Serverless queries for real-time analytics on processed datasets"
        ],
        tech: ["ADLS Gen2", "Azure Databricks", "PySpark", "Spark-SQL", "Delta Lake", "SQL Serverless", "Azure Synapse", "Azure Functions", "Logic Apps", "Power BI", "Azure DevOps", "CI/CD"],
        image: navistar,
        architecture: navistarproj,
        link: "#"
      },
      {
        id: 3,
        title: "Enterprise Vehicle Analytics Platform - L&T ECC",
        company: "Mindtree",
        period: "Aug 2020 - Apr 2022",
        description: "Production medallion architecture processing 100K+ daily vehicle telematics from ~150 IoT devices. Managed Spark SQL jobs with Hadoop resource allocation. Designed SQL Star Schema with fact tables, dimension tables, last-record tables, and stored procedures. Built asset monitoring website. Successfully migrated entire stack from Azure HDInsights to Databricks, achieving 50% cost reduction.",
        achievements: [
          "Processed 100K+ daily vehicle telematics records across 150+ IoT devices",
          "Implemented rule engines for data validation with anomaly detection using Random Forest ML",
          "Designed comprehensive SQL Star Schema (fact, dimension, last-record, intermediate tables)",
          "Migrated 100+ Spark SQL jobs from Azure HDInsights to Databricks with 50% efficiency gains",
          "Built asset monitoring website for real-time device health tracking",
          "Implemented automated ETL pipelines with Databricks Job Clusters (auto-scaling)"
        ],
        tech: ["Azure Databricks", "PySpark", "Spark-SQL", "Delta Lake", "ADLS Gen2", "SQL Serverless", "Star Schema", "Machine Learning", "Azure Synapse", "Power BI", "Azure DevOps", "CI/CD"],
        image: lt,
        architecture: ltproj,
        link: "#"
      },
      {
        id: 4,
        title: "IoT Sensors & Cloud Integration - Tampnet",
        company: "LTI",
        period: "Jun 2018 - Aug 2020",
        description: "End-to-end IoT project focusing on ATEX/IECEx certified sensor procurement, laboratory testing, and cloud integration. Managed sensor selection, vendor interactions, and rigorous lab testing protocols. Developed Python-based APIs for real-time sensor data processing and cloud transmission. Implemented multiple IoT communication protocols (MQTT, AMQP, LoRaWAN, NB-IoT) for diverse device connectivity.",
        achievements: [
          "Procured and tested ATEX/IECEx certified IoT sensors for hazardous environments",
          "Conducted comprehensive lab testing and validation of all sensors before deployment",
          "Developed Python APIs for real-time sensor data processing and cloud integration",
          "Implemented multi-protocol connectivity (MQTT, AMQP, LoRaWAN, NB-IoT)",
          "Managed vendor interactions and sensor quality assurance processes",
          "Tested end-to-end cloud data pipelines for sensor data ingestion and analytics"
        ],
        tech: ["IoT Sensors (ATEX/IECEx)", "MQTT", "AMQP", "LoRaWAN", "NB-IoT", "Python", "Azure IoT Hub", "API Management", "Cloud Testing", "Lab Testing", "CAT-M", "Wireless Protocols"],
        image: tampnet,
        architecture: tampnetproj,
        link: "#"
      }
    ];

const featuredProjects = [
  {
    id: 1,
    title: "Green Hydrogen - L&T ECC",
    company: "LTI",
    period: "Jun 2020 - Aug 2021",
    description: "Built an end-to-end IoT monitoring system for real-time plant sensor data visualization. Implemented multi-protocol connectivity using Azure IoT Hub and Event Hub for data ingestion, with live WebSocket-based updates via Azure WebPubSub. Developed a Python script running on Linux machine for sensor data processing and created a REST API for frontend UI consumption.",
    achievements: [
      "Designed and implemented real-time sensor data pipeline from IoT devices through Azure IoT Hub to event processing",
      "Developed Python script running on Linux machine to continuously read and process sensor data from multiple plant sensors",
      "Implemented Azure Event Hub for high-throughput, low-latency data streaming and event distribution",
      "Configured Azure WebPubSub for real-time bidirectional communication to push live sensor updates to frontend UI",
      "Created Python REST API endpoints for frontend consumption, enabling live plant health metrics visualization",
      "Achieved real-time data latency under 100ms from sensor reading to UI display",
      "Implemented error handling and data validation for sensor reliability and system resilience"
    ],
    tech: ["Azure Event Hub", "Azure IoT Hub", "Azure WebPubSub", "Linux", "Python", "API"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    architecture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#"
  }
];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Muhammed Sulthan Durapsha Haja
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'resume', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'resume') {
                    setResumeTab('experience');
                  }
                }}
                className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === tab
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4">
            {['about', 'resume', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'resume') {
                    setResumeTab('experience');
                  }
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-slate-700 transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* About Me Tab */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sulthan MD</span>
                </h1>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  Senior Data Engineer with 6+ years of experience, now pursuing an 
                  M.Sc. in Renewable Energy and Data Engineering at Hochschule Offenburg. 
                  I build data platforms and ETL/ELT pipelines using Python, PySpark, Spark-SQL, 
                  Azure Synapse Analytics, Azure Databricks (Delta Lake, Unity Catalog, 
                  Jobs/Workflows scheduler), Spark Streaming (Kafka), ADLS Gen2 and 
                  relational databases (PostgreSQL, MySQL). Backed by a B.E. from 
                  CEG Anna University and experience at LTIMindtree, I focus on applying 
                  data engineering to large-scale analytics and sustainable energy systems.
                </p>
                <p className="text-lg text-slate-400 mb-8">
                  IoT data pipeline at Hochschule Offenburg using Node‑RED, NATS JetStream, 
                  InfluxDB and Grafana for real‑time monitoring and end‑to‑end analytics, 
                  containerized with Docker and now being integrated with GitLab CI/CD for automated deployments.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/files/sulthan_cv.pdf"
                    download="sulthan_cv.pdf"
                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors inline-block text-white text-center"
                  >
                    Download CV
                  </a>
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                  <img
                    /* src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"*/
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Projects Completed", value: "10+" },
                { label: "Happy Clients", value: "4+" },
                { label: "Years Experience", value: "6+" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-colors">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">My Resume</h2>

            {/* Resume Tabs */}
            <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-700">
              {['experience', 'skills', 'certifications', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setResumeTab(tab)}
                  className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 capitalize ${
                    resumeTab === tab
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'certifications' ? 'Certifications & Modules' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Experience Tab */}
            {resumeTab === 'experience' && (
              <div className="space-y-8">
                {[
                  {
                    role: "HiWi Research Assistant",
                    company: "Hochschule Offenburg",
                    client: "Research Project - IoT and Data Engineering",
                    period: "Nov 2025 - Feb 2026",
                    description: [
                      {
                        main: "Design and implementation of an End-to-End IoT Pipeline from AHU sensor data to monitoring dashboard for condition and trend analysis.",
                        subs: []
                      },
                      {
                        main: "Development of a workflow with Node-RED, NATS JetStream, InfluxDB (with Chronograf UI), Grafana and cold Azure Blob Storage (yyyy/mm/dd/hh) including Python analytics for robust, scalable data analysis.",
                        subs: []
                      },
                      {
                        main: "Operation of the entire pipeline in Docker containers under Linux.",
                        subs: []
                      },
                      {
                        main: "Setup of GitLab CI/CD pipelines for automated builds, tests and deployments across multiple environments.",
                        subs: []
                      },
                      {
                        main: "Creation of Grafana dashboards with alerting for AHU monitoring.",
                        subs: []
                      }
                    ]
                  },
                  {
                    role: "Senior Data Engineer",
                    company: "LTIMindtree",
                    client: "Navistar International (USA)",
                    period: "Apr 2022 - Aug 2025",
                    description: [
                                  {
                                    main: "Developed ETL pipelines in Azure Synapse Analytics to transform and store large-scale data from ADLS Gen2 into actionable insights.",
                                    subs: []
                                  },
                                  {
                                    main: "Data Transformation & Processing",
                                    subs: [
                                      "Implemented rule engines to perform transformation on raw data from various resources to create processed data.",
                                      "Haversine analysis of vehicles (Destination, Distance travelled) and last communication details of devices and vehicles.",
                                      "Remediation on important features of processed data.",
                                      "File size and count anomaly prediction using Random Forest ML.",
                                      "Data distribution analysis on state and country wise data.",
                                      "Quality controls checks on packets count and packets dictionary."
                                    ]
                                  },
                                  {
                                    main: "Implemented Apache Spark for distributed data extraction, cleaning, and transformation, integrating notebooks into pipelines.",
                                    subs: []
                                  },
                                  {
                                    main: "Improved pipeline efficiency by 50% using Databricks Job Clusters with dynamic scaling and ephemeral provisioning.",
                                    subs: []
                                  },
                                  {
                                    main: "Orchestrated Databricks notebooks from Azure Synapse pipelines to automate and schedule Spark-based workflows.",
                                    subs: []
                                  },
                                  {
                                    main: "Utilized Azure DevOps to implement CI/CD pipelines, ensuring seamless deployment across DEV, UAT, and PROD with version control.",
                                    subs: []
                                  },
                                  {
                                    main: "Created python wheel files to enhance utility compatibility and handled parquet, json and avro formats for efficient data processing.",
                                    subs: []
                                  },
                                  {
                                    main: "Automated pipelines with triggers, configured failure notifications via Azure Logic Apps, and maintained job performance and data integrity.",
                                    subs: []
                                  }
                                ]
                  },
                  {
                    role: "Data Engineer",
                    company: "LTIMindtree",
                    client: "L&T ECC (India)",
                    period: "Aug 2020 - Apr 2022",
                    description: [
                      {
                        main: "Migrated Spark-Sql-based jobs from Azure HDInsight to Databricks platform, optimizing performance, scalability and cost-efficiency",
                        subs: []
                      },
                      {
                        main: "Transitioned interactive MS-SQL tables to Azure Delta Tables for improved job efficiency and reliability.",
                        subs: []
                      },
                      {
                        main: "Designed and configured Azure Databricks pipelines using job clusters.",
                        subs: []
                      },
                      {
                        main: "Developed and optimized Spark-SQL jobs to efficiently process, transform and analyze daily raw data into meaningful insights.",
                        subs: []
                      }
                    ]
                  },
                  {
                    role: "IoT Engineer",
                    company: "LTI",
                    client: "Tampnet (Norway)",
                    period: "Jun 2018 - Aug 2020",
                    description: [
                      {
                        main: "Research trainee on IoT Sensors, ATEX and IECEx certifications and data retrieval from sensors using NB-IoT and CAT-M networks.",
                        subs: []
                      },
                      {
                        main: "Engaged in sensors procurement, vendor interaction and lab testing.",
                        subs: []
                      },
                      {
                        main: "Developed python based APIs to process real-time sensors data into analytical insights for predictive analysis monitoring applications.",
                        subs: []
                      },
                      {
                        main: "Certifications completion on Python, SQL and Apache-Spark.",
                        subs: []
                      }
                    ]
                  }
                ].map((job, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{job.role}</h4>
                      <span className="text-slate-400 text-sm">{job.period}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-cyan-400 font-semibold">{job.company}</p>
                      {job.client && <p className="text-slate-400 text-sm">Client: {job.client}</p>}
                    </div>
                    
                    {/* Handle both string and array descriptions */}
                    {Array.isArray(job.description) ? (
                      <ul className="space-y-3 text-slate-300">
                        {job.description.map((item, i) => (
                          <div key={i}>
                            {/* Check if item has main/subs structure */}
                            {item.main ? (
                              <>
                                <li className="flex gap-3">
                                  <span className="text-cyan-400 mt-1">•</span>
                                  <span>{item.main}</span>
                                </li>
                                
                                {/* Sub-bullets */}
                                {item.subs && item.subs.length > 0 && (
                                  <ul className="space-y-2 mt-2 ml-6">
                                    {item.subs.map((sub, j) => (
                                      <li key={j} className="flex gap-3">
                                        <span className="text-cyan-300 mt-1">◦</span>
                                        <span className="text-slate-300">{sub}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              /* Handle old format (simple strings) */
                              <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            )}
                          </div>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-300">{job.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

          {/* Skills Tab */}
          {resumeTab === 'skills' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    category: "Azure Services - ETL/ELT", 
                    skills: "Azure Synapse Analytics, Azure Databricks, Azure KeyVault, Azure Logic Apps, ADLS Gen2, Delta Tables, Hadoop, Azure Blob Storage" 
                  },
                  { 
                    category: "Big Data & Processing", 
                    skills: "Apache Spark (PySpark & Spark-SQL), Delta Lake, Kafka, Distributed Computing" 
                  },
                  { 
                    category: "Data Monitoring & Visualization", 
                    skills: "Grafana, InfluxDB, Chronograf" 
                  },
                  { 
                    category: "IoT & Real-time Data", 
                    skills: "MQTT, EMQX, Node-RED, NATS JetStream, Azure IoT Hub and EventHub, WebPubSub, Telegraf, Real-time Streaming" 
                  },
                  { 
                    category: "Languages", 
                    skills: "Python, SQL, C#" 
                  },
                  { 
                    category: "Workflow & Orchestration", 
                    skills: "Apache Airflow, Databricks (Job Clusters & Workflows), Synapse Analytics (Pipelines and Schedulers)" 
                  },
                  { 
                    category: "Version Control & DevOps & Containerization", 
                    skills: "Azure DevOps, GitHub, GitLab CI/CD, Docker" 
                  },
                  { 
                    category: "Operating Systems", 
                    skills: "Linux, MacOS, Windows" 
                  }
                ].map((skillGroup, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">{skillGroup.category}</h4>
                    <p className="text-slate-300">{skillGroup.skills}</p>
                  </div>
                ))}
              </div>

              {/* Languages Sub-section */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Languages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { language: "Tamil", level: "Native" },
                    { language: "English", level: "Proficient (C1)" },
                    { language: "German", level: "B2.2" },
                    { language: "Arabic", level: "Reading" }
                  ].map((lang, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-400/50 transition-colors text-center">
                      <p className="text-lg font-bold mb-2">{lang.language}</p>
                      <p className="text-cyan-400">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

            {/* Certificates Tab */}
            {resumeTab === 'certifications' && (
              <div className="space-y-6">
                {[
                  {
                    name: "Data Engineer",
                    issuer: "Datacamp",
                    date: "2026",
                    link: datacampde,
                    isPdf: true
                  },
                  {
                    name: "Data Engineer Associate",
                    issuer: "Datacamp",
                    date: "2026",
                    link: datacampdeass,
                    isPdf: true
                  },
                  {
                    name: "Azure Databricks work load automation module",
                    issuer: "Microsoft Azure",
                    date: "2026",
                    link: "https://learn.microsoft.com/en-gb/users/sulthanmd-1289/achievements/kczfknzb"
                  },
                  {
                    name: "Spark structured streaming - incremental processing",
                    issuer: "Microsoft Azure",
                    date: "2026",
                    link: "https://learn.microsoft.com/api/achievements/share/en-gb/sulthanMD-1289/YPU5XFPR?sharingId=2C7179B2FFF326F6"
                  },
                  {
                    name: "Spark Masters - PySpark and SparkSQL",
                    issuer: "Udemy",
                    date: "2024",
                    link: "https://www.udemy.com/certificate/UC-e5c4df70-3d0e-4531-bf44-1d440b611742/"
                  },
                  {
                    name: "Data Engineering - DP-900",
                    issuer: "Microsoft Azure",
                    date: "2023",
                    link: null
                  },
                  {
                    name: "Data Engineering - AZ-900",
                    issuer: "Microsoft Azure",
                    date: "2023",
                    link: null
                  },
                  {
                    name: "Data Science and Machine Learning",
                    issuer: "Coursera",
                    date: "2023",
                    link: "https://your-coursera-link-here.com"
                  },
                  {
                    name: "GenAI - LTIMindtree",
                    issuer: "LTIMindtree/Coursera",
                    date: "2024",
                    link: "https://your-coursera-link-here.com"
                  },
                  {
                    name: "Python Programming",
                    issuer: "Udemy",
                    date: "2023",
                    link: "https://your-udemy-certificate-link.com"
                  },
                  {
                    name: "SQL Mastery",
                    issuer: "Udemy",
                    date: "2023",
                    link: "https://your-udemy-certificate-link.com"
                  },
                  {
                    name: "Docker & Kubernetes",
                    issuer: "Udemy",
                    date: "2024",
                    link: "https://your-udemy-certificate-link.com"
                  },
                  {
                    name: "Apache Airflow",
                    issuer: "Udemy",
                    date: "2023",
                    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6aa708e-bda2-4f6e-aca0-939d79627627.pdf"
                  },
                  {
                    name: "Digital skills self-assessment",
                    issuer: "Europa.eu",
                    date: "2024",
                    link: digitalcompeteeu,
                    isPdf: true
                  }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{cert.name}</h4>
                      <span className="text-slate-400 text-sm">{cert.date}</span>
                    </div>
                    <p className="text-cyan-400 mb-3 font-semibold">{cert.issuer}</p>
                    
                    {/* Link if available */}
                    {cert.link ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 text-sm hover:underline"
                      >
                        View Certificate
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm">Credential on request</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {resumeTab === 'education' && (
              <div className="space-y-6">
                {[
                  {
                    degree: "M.Sc. Renewable Energy and Data Engineering",
                    school: "Offenburg University of Applied Sciences",
                    location: "Germany",
                    period: "Oct 2025 - Present",
                    details: "1st Semester | Overall Grade:",
                    gpa: "1.7"
                  },
                  {
                    degree: "Bachelor of Engineering in Mechanical Engineering",
                    school: "College of Engineering Guindy, Anna University",
                    location: "India",
                    period: "2014 - 2018",
                    details: "Final Grade:",
                    gpa: "1.6"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                        <p className="text-cyan-400 font-semibold">{edu.school}</p>
                        {edu.location && <p className="text-slate-400 text-sm">{edu.location}</p>}
                      </div>
                      <span className="text-slate-400 text-sm whitespace-nowrap ml-4">{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <p className="text-slate-300">{edu.details}</p>
                      {edu.gpa && (
                        <div className="bg-cyan-500/20 px-3 py-1 rounded-full">
                          <p className="text-cyan-400 font-semibold text-sm">{edu.gpa}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">Client Projects</h2>
            
            {/* Projects List - Vertical */}
            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex"
                >
                  {/* Project Image */}
                  <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-cyan-400 font-semibold text-sm mb-1">{project.company}</p>
                      <p className="text-slate-400 text-sm mb-3">{project.period}</p>
                      <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => setSelectedProjectArch(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-colors w-fit"
                      >
                        View Project →
                      </button>
                      <button
                        onClick={() => setSelectedArchitecture(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-colors w-fit"
                      >
                        <ExternalLink size={16} />
                        View Architecture
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          {/* Divider */}
          <hr className="border-t border-slate-700 my-16" />

          {/* Featured Projects Section */}
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          
          {/* Featured Projects List - Vertical */}
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300 flex"
              >
                {/* Project Image */}
                <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-blue-400 font-semibold text-sm mb-1">{project.company}</p>
                    <p className="text-slate-400 text-sm mb-3">{project.period}</p>
                    <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => setSelectedProjectArch(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-colors w-fit"
                    >
                      View Project →
                    </button>
                    <button
                      onClick={() => setSelectedArchitecture(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-colors w-fit"
                    >
                      <ExternalLink size={16} />
                      View Architecture
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-slate-300 mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="space-y-6 mb-12">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Mail size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-lg font-semibold">sulthan2510@gmail.com</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Linkedin size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/sulthan2510" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        sulthan2510 →
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Github size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">GitHub</p>
                      <a 
                        href="https://github.com/sulthan2510" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        sulthan2510 →
                      </a>
                    </div>
                  </div>
                </div>


              </div>
              <form className="space-y-6" onSubmit={handleSubmitForm}>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company <span className="text-slate-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message <span className="text-slate-500 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
        {/* Architecture Modal */}
        {/* Project Details Modal */}
        {selectedProjectArch && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
            <div className="bg-slate-900 border-2 border-cyan-400 rounded-lg overflow-hidden max-w-3xl w-full max-h-[95vh] relative flex flex-col">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectArch(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Modal Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedProjectArch.image}
                  alt={selectedProjectArch.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProjectArch.title}</h2>
                  <p className="text-cyan-400 font-semibold">{selectedProjectArch.company}</p>
                  <p className="text-slate-300 text-sm">{selectedProjectArch.period}</p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                
                {/* Description */}
                <div>
                  <p className="text-slate-300 leading-relaxed">{selectedProjectArch.description}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">Key Achievements:</h3>
                  <ul className="space-y-3">
                    {selectedProjectArch.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300">
                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectArch.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-800 border-t border-slate-700 p-6 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProjectArch(null)}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      {/* Architecture Modal */}
      {selectedArchitecture && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-cyan-400 rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArchitecture(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedArchitecture.title} - Architecture
              </h3>
              <p className="text-cyan-100 mt-2">{selectedArchitecture.company}</p>
            </div>

            {/* Image Container */}
            <div className="bg-slate-800 p-6 overflow-auto" style={{ maxHeight: 'calc(90vh - 150px)' }}>
              <img
                src={selectedArchitecture.architecture}
                alt={`${selectedArchitecture.title} Architecture`}
                className="w-full h-auto rounded-lg border border-slate-700"
              />
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="border-t border-slate-700 mt-24 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>© 2026 Sulthan. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

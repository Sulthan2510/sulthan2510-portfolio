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

// ── Translations ────────────────────────────────────────────────────────────
const translations = {
  de: {
    // Nav
    navLabels: { about: 'Über mich', resume: 'Lebenslauf', projects: 'Projekte', contact: 'Kontakt' },
    // About
    hiIm: "Hallo, ich bin",
    bio1: "Senior Data Engineer mit über 6 Jahren Erfahrung, derzeit im M.Sc.-Studium Erneuerbare Energien und Datentechnik an der Hochschule Offenburg. Ich entwickle Datenplattformen und ETL/ELT-Pipelines mit Python, PySpark, Spark-SQL, Azure Synapse Analytics, Azure Databricks (Delta Lake, Unity Catalog, Jobs/Workflows-Scheduler), Spark Streaming (Kafka), ADLS Gen2 und relationalen Datenbanken (PostgreSQL, MySQL). Mit einem B.E. der CEG Anna University und Erfahrung bei LTIMindtree liegt mein Schwerpunkt auf der Anwendung von Data Engineering in groß angelegter Analytik und nachhaltigen Energiesystemen.",
    bio2: "IoT-Datenpipeline an der Hochschule Offenburg mit Node‑RED, NATS JetStream, InfluxDB und Grafana für Echtzeit-Monitoring und End-to-End-Analytik, containerisiert mit Docker und aktuell in GitLab CI/CD für automatisierte Deployments integriert.",
    downloadCV: "Lebenslauf herunterladen",
    getInTouch: "Kontakt aufnehmen",
    stats: [
      { label: "Abgeschlossene Projekte", value: "10+" },
      { label: "Zufriedene Kunden", value: "4+" },
      { label: "Jahre Erfahrung", value: "6+" }
    ],
    // Resume
    myResume: "Mein Lebenslauf",
    resumeLabels: { experience: 'Erfahrung', skills: 'Kenntnisse', certifications: 'Zertifizierungen & Module', education: 'Ausbildung' },
    clientLabel: "Kunde:",
    // Experience
    jobs: [
      {
        role: "HiWi-Forschungsassistent",
        company: "Hochschule Offenburg",
        client: "Forschungsprojekt – IoT und Datentechnik",
        period: "Nov 2025 – Feb 2026",
        description: [
          { main: "Entwurf und Implementierung einer End-to-End-IoT-Pipeline von AHU-Sensordaten bis zum Monitoring-Dashboard für Zustands- und Trendanalysen.", subs: [] },
          { main: "Entwicklung eines Workflows mit Node-RED, NATS JetStream, InfluxDB (mit Chronograf-UI), Grafana und Cold Azure Blob Storage (jjjj/mm/tt/hh) einschließlich Python-Analytik für robuste, skalierbare Datenanalyse.", subs: [] },
          { main: "Betrieb der gesamten Pipeline in Docker-Containern unter Linux.", subs: [] },
          { main: "Einrichtung von GitLab-CI/CD-Pipelines für automatisierte Builds, Tests und Deployments in mehreren Umgebungen.", subs: [] },
          { main: "Erstellung von Grafana-Dashboards mit Alarmierung für das AHU-Monitoring.", subs: [] }
        ]
      },
      {
        role: "Senior Data Engineer",
        company: "LTIMindtree",
        client: "Navistar International (USA)",
        period: "Apr 2022 – Aug 2025",
        description: [
          { main: "Entwicklung von ETL-Pipelines in Azure Synapse Analytics zur Transformation und Speicherung großer Datenmengen aus ADLS Gen2 in verwertbare Erkenntnisse.", subs: [] },
          {
            main: "Datentransformation & -verarbeitung",
            subs: [
              "Implementierung von Regelmaschinen zur Transformation von Rohdaten aus verschiedenen Quellen zu verarbeiteten Daten.",
              "Haversine-Analyse von Fahrzeugen (Ziel, zurückgelegte Distanz) und letzte Kommunikationsdetails von Geräten und Fahrzeugen.",
              "Bereinigung wichtiger Merkmale der verarbeiteten Daten.",
              "Vorhersage von Dateigrößen- und -anzahlanomalien mittels Random-Forest-ML.",
              "Datenverteilungsanalyse nach Bundes- und Länderdaten.",
              "Qualitätskontrolle von Paketanzahl und Paket-Dictionary."
            ]
          },
          { main: "Implementierung von Apache Spark für verteilte Datenextraktion, -bereinigung und -transformation mit Integration von Notebooks in Pipelines.", subs: [] },
          { main: "Steigerung der Pipeline-Effizienz um 50 % durch Databricks-Job-Cluster mit dynamischer Skalierung und ephemerer Bereitstellung.", subs: [] },
          { main: "Orchestrierung von Databricks-Notebooks aus Azure-Synapse-Pipelines zur Automatisierung und Planung Spark-basierter Workflows.", subs: [] },
          { main: "Einsatz von Azure DevOps zur Implementierung von CI/CD-Pipelines für nahtlose Deployments über DEV, UAT und PROD mit Versionskontrolle.", subs: [] },
          { main: "Erstellung von Python-Wheel-Dateien zur Verbesserung der Kompatibilität und Verarbeitung von Parquet-, JSON- und Avro-Formaten.", subs: [] },
          { main: "Automatisierung von Pipelines mit Triggern, Konfiguration von Fehlerbenachrichtigungen über Azure Logic Apps sowie Überwachung von Job-Performance und Datenintegrität.", subs: [] }
        ]
      },
      {
        role: "Data Engineer",
        company: "LTIMindtree",
        client: "L&T ECC (Indien)",
        period: "Aug 2020 – Apr 2022",
        description: [
          { main: "Migration von Spark-SQL-Jobs von Azure HDInsight zur Databricks-Plattform mit Optimierung von Performance, Skalierbarkeit und Kosteneffizienz.", subs: [] },
          { main: "Überführung interaktiver MS-SQL-Tabellen zu Azure-Delta-Tabellen für verbesserte Job-Effizienz und Zuverlässigkeit.", subs: [] },
          { main: "Entwurf und Konfiguration von Azure-Databricks-Pipelines mit Job-Clustern.", subs: [] },
          { main: "Entwicklung und Optimierung von Spark-SQL-Jobs zur effizienten Verarbeitung, Transformation und Analyse täglicher Rohdaten.", subs: [] }
        ]
      },
      {
        role: "IoT-Ingenieur",
        company: "LTI",
        client: "Tampnet (Norwegen)",
        period: "Jun 2018 – Aug 2020",
        description: [
          { main: "Praktikant mit Fokus auf IoT-Sensoren, ATEX- und IECEx-Zertifizierungen sowie Datenabruf von Sensoren über NB-IoT- und CAT-M-Netze.", subs: [] },
          { main: "Mitwirkung bei der Sensorbeschaffung, Lieferantenkommunikation und Labortests.", subs: [] },
          { main: "Entwicklung Python-basierter APIs zur Verarbeitung von Echtzeit-Sensordaten für prädiktive Analyse- und Monitoring-Anwendungen.", subs: [] },
          { main: "Abschluss von Zertifizierungen in Python, SQL und Apache Spark.", subs: [] }
        ]
      }
    ],
    // Skills
    skillsTitle: "Kenntnisse",
    skillGroups: [
      { category: "Azure-Dienste – ETL/ELT", skills: "Azure Synapse Analytics, Azure Databricks, Azure KeyVault, Azure Logic Apps, ADLS Gen2, Delta Tables, Hadoop, Azure Blob Storage" },
      { category: "Big Data & Verarbeitung", skills: "Apache Spark (PySpark & Spark-SQL), Delta Lake, Kafka, Verteiltes Rechnen" },
      { category: "Daten-Monitoring & Visualisierung", skills: "Grafana, InfluxDB, Chronograf" },
      { category: "IoT & Echtzeit-Daten", skills: "MQTT, EMQX, Node-RED, NATS JetStream, Azure IoT Hub und EventHub, WebPubSub, Telegraf, Echtzeit-Streaming" },
      { category: "Programmiersprachen", skills: "Python, SQL, C#" },
      { category: "Workflow & Orchestrierung", skills: "Apache Airflow, Databricks (Job Cluster & Workflows), Synapse Analytics (Pipelines und Scheduler)" },
      { category: "Versionskontrolle & DevOps & Containerisierung", skills: "Azure DevOps, GitHub, GitLab CI/CD, Docker" },
      { category: "Betriebssysteme", skills: "Linux, MacOS, Windows" }
    ],
    languagesTitle: "Sprachen",
    spokenLanguages: [
      { language: "Tamil", level: "Muttersprache" },
      { language: "Englisch", level: "Fließend (C1)" },
      { language: "Deutsch", level: "B2.2" },
      { language: "Arabisch", level: "Lesekenntnisse" }
    ],
    // Certifications
    viewCertificate: "Zertifikat anzeigen",
    credentialOnRequest: "Zertifikat auf Anfrage",
    // Education
    education: [
      {
        degree: "M.Sc. Erneuerbare Energien und Datentechnik",
        school: "Hochschule Offenburg",
        location: "Deutschland",
        period: "Okt 2025 – Heute",
        details: "1. Semester | Gesamtnote:",
        gpa: "1,7"
      },
      {
        degree: "Bachelor of Engineering – Maschinenbau",
        school: "College of Engineering Guindy, Anna University",
        location: "Indien",
        period: "2014 – 2018",
        details: "Abschlussnote:",
        gpa: "1,6"
      }
    ],
    // Projects
    clientProjects: "Kundenprojekte",
    featuredProjects: "Ausgewählte Projekte",
    viewProject: "Projekt ansehen →",
    viewArchitecture: "Architektur ansehen",
    keyAchievements: "Wichtigste Leistungen:",
    technologiesUsed: "Verwendete Technologien:",
    closeBtn: "Schließen",
    architectureLabel: "Architektur",
    projects: [
      {
        id: 1,
        title: "IoT & Datentechnik-Pipeline – Hochschule Offenburg",
        company: "Hochschule Offenburg",
        period: "Nov 2025 – Feb 2026",
        description: "End-to-End-IoT-Pipeline von AHU-Sensordaten über MQTT-Broker, Node-RED-Workflow, NATS JetStream, InfluxDB und Grafana-Dashboards für Echtzeit-Monitoring, Zustandsanalyse und Trendvorhersage. Gesamte Pipeline containerisiert mit Docker und automatisiert über GitLab CI/CD. Produktionsreife Architektur mit Echtzeit-Monitoring und prädiktiven Fähigkeiten.",
        achievements: [
          "Entwurf und Implementierung einer End-to-End-IoT-Pipeline vom Sensor bis zum Dashboard",
          "Entwicklung des Workflows mit Node-RED, NATS JetStream, InfluxDB, Grafana und Azure Blob Storage",
          "Implementierung der Docker-Containerisierung und GitLab CI/CD für automatisierte Deployments",
          "Erstellung von Monitoring-Dashboards mit Alarmierung für Echtzeit-Asset-Tracking"
        ],
        tech: ["Node-RED", "NATS JetStream", "InfluxDB", "Grafana", "Telegraf", "Azure Blob Storage", "Docker", "Python", "GitLab CI/CD", "Linux"],
        link: "#"
      },
      {
        id: 2,
        title: "Enterprise-Datenpipeline – Navistar International",
        company: "LTIMindtree",
        period: "Apr 2022 – Aug 2025",
        description: "Hochperformante Datenplattform zur Überwachung von Fahrzeugleistung und Betriebskennzahlen. Erstellung von 20+ stündlichen ETL-Pipelines zur Verarbeitung von Rohdaten der Telematik in analysebereit aufbereitete Formate. Implementierung einer mehrschichtigen Verarbeitungsarchitektur mit Delta-Lake-Optimierung. Entwicklung von Datentransformationslösungen für komplexe Kundenanforderungen mit einer SQL-Serverless-Analyseschicht.",
        achievements: [
          "Erstellung von 20+ stündlichen ETL-Pipelines (roh zu verarbeitet) für kontinuierliche Datenverarbeitung",
          "Lösung mehrerer komplexer Kundendatenanforderungen mit individueller Transformationslogik",
          "Optimierung der stündlichen Pipeline-Ausführung mit Delta-Lake-Komprimierung und Partitionierung",
          "Integration von Azure Functions und Logic Apps für ereignisgesteuerte Pipeline-Orchestrierung",
          "Implementierung umfassenden Monitorings über Power-BI-Dashboards und Azure DevOps",
          "Entwicklung von SQL-Serverless-Abfragen für Echtzeit-Analytik auf verarbeiteten Datensätzen"
        ],
        tech: ["ADLS Gen2", "Azure Databricks", "PySpark", "Spark-SQL", "Delta Lake", "SQL Serverless", "Azure Synapse", "Azure Functions", "Logic Apps", "Power BI", "Azure DevOps", "CI/CD"],
        link: "#"
      },
      {
        id: 3,
        title: "Enterprise-Fahrzeuganalyseplattform – L&T ECC",
        company: "Mindtree",
        period: "Aug 2020 – Apr 2022",
        description: "Produktive Medaillon-Architektur zur Verarbeitung von 100.000+ täglichen Fahrzeugtelematik-Datensätzen von ca. 150 IoT-Geräten. Verwaltung von Spark-SQL-Jobs mit Hadoop-Ressourcenzuteilung. Entwurf eines SQL-Sternschemas mit Fakten-, Dimensions-, Letztstand- und Zwischentabellen sowie gespeicherten Prozeduren. Entwicklung einer Asset-Monitoring-Website. Erfolgreiche Migration des gesamten Stacks von Azure HDInsights zu Databricks mit 50 % Kostensenkung.",
        achievements: [
          "Verarbeitung von 100.000+ täglichen Fahrzeugtelematik-Datensätzen auf 150+ IoT-Geräten",
          "Implementierung von Regelmaschinen zur Datenvalidierung mit Anomalieerkennung mittels Random-Forest-ML",
          "Entwurf eines umfassenden SQL-Sternschemas (Fakten-, Dimensions-, Letztstand- und Zwischentabellen)",
          "Migration von 100+ Spark-SQL-Jobs von Azure HDInsights zu Databricks mit 50 % Effizienzsteigerung",
          "Entwicklung einer Asset-Monitoring-Website für Echtzeit-Gerätezustandsverfolgung",
          "Implementierung automatisierter ETL-Pipelines mit Databricks-Job-Clustern (Auto-Skalierung)"
        ],
        tech: ["Azure Databricks", "PySpark", "Spark-SQL", "Delta Lake", "ADLS Gen2", "SQL Serverless", "Star Schema", "Machine Learning", "Azure Synapse", "Power BI", "Azure DevOps", "CI/CD"],
        link: "#"
      },
      {
        id: 4,
        title: "IoT-Sensoren & Cloud-Integration – Tampnet",
        company: "LTI",
        period: "Jun 2018 – Aug 2020",
        description: "End-to-End-IoT-Projekt mit Schwerpunkt auf Beschaffung ATEX/IECEx-zertifizierter Sensoren, Labortests und Cloud-Integration. Verwaltung der Sensorauswahl, Lieferantenkommunikation und strenger Labortestprotokolle. Entwicklung Python-basierter APIs für Echtzeit-Sensordatenverarbeitung und Cloud-Übertragung. Implementierung mehrerer IoT-Kommunikationsprotokolle (MQTT, AMQP, LoRaWAN, NB-IoT) für diverse Gerätekonnektivität.",
        achievements: [
          "Beschaffung und Test von ATEX/IECEx-zertifizierten IoT-Sensoren für gefährliche Umgebungen",
          "Durchführung umfassender Labortests und Validierung aller Sensoren vor dem Einsatz",
          "Entwicklung von Python-APIs für Echtzeit-Sensordatenverarbeitung und Cloud-Integration",
          "Implementierung von Multi-Protokoll-Konnektivität (MQTT, AMQP, LoRaWAN, NB-IoT)",
          "Verwaltung von Lieferantenkommunikation und Sensor-Qualitätssicherungsprozessen",
          "Test von End-to-End-Cloud-Datenpipelines für Sensordatenerfassung und -analytik"
        ],
        tech: ["IoT Sensors (ATEX/IECEx)", "MQTT", "AMQP", "LoRaWAN", "NB-IoT", "Python", "Azure IoT Hub", "API Management", "Cloud Testing", "Lab Testing", "CAT-M", "Wireless Protocols"],
        link: "#"
      }
    ],
    featuredProjectsData: [
      {
        id: 1,
        title: "Grüner Wasserstoff – L&T ECC",
        company: "LTI",
        period: "Jun 2020 – Aug 2021",
        description: "Entwicklung eines End-to-End-IoT-Monitoring-Systems zur Echtzeit-Visualisierung von Anlagen-Sensordaten. Implementierung von Multi-Protokoll-Konnektivität über Azure IoT Hub und Event Hub für die Datenerfassung mit Live-WebSocket-Updates über Azure WebPubSub. Entwicklung eines Python-Skripts auf einem Linux-Rechner zur Sensordatenverarbeitung sowie Erstellung einer REST-API für die Frontend-UI.",
        achievements: [
          "Entwurf und Implementierung einer Echtzeit-Sensordaten-Pipeline von IoT-Geräten über Azure IoT Hub zur Ereignisverarbeitung",
          "Entwicklung eines Python-Skripts auf Linux-Rechner zum kontinuierlichen Lesen und Verarbeiten von Sensordaten mehrerer Anlagensensoren",
          "Implementierung von Azure Event Hub für hohen Durchsatz und niedrige Latenz beim Daten-Streaming und der Ereignisverteilung",
          "Konfiguration von Azure WebPubSub für bidirektionale Echtzeit-Kommunikation zum Übertragen von Live-Sensor-Updates an die Frontend-UI",
          "Erstellung von Python-REST-API-Endpunkten für die Frontend-Nutzung zur Echtzeit-Visualisierung von Anlagengesundheitskennzahlen",
          "Echtzeit-Datenlatenz unter 100 ms vom Sensorauslesen bis zur UI-Anzeige erreicht",
          "Implementierung von Fehlerbehandlung und Datenvalidierung für Sensorzuverlässigkeit und Systemresilienz"
        ],
        tech: ["Azure Event Hub", "Azure IoT Hub", "Azure WebPubSub", "Linux", "Python", "API"],
        link: "#"
      }
    ],
    // Contact
    contactTitle: "Kontakt aufnehmen",
    contactIntro: "Ich freue mich immer über neue Projekte und Möglichkeiten.",
    emailLabel: "E-Mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    formName: "Name",
    formNamePlaceholder: "Ihr Name",
    formEmail: "E-Mail",
    formEmailPlaceholder: "ihre@email.com",
    formCompany: "Unternehmen",
    formCompanyPlaceholder: "Ihr Unternehmen",
    formOptional: "(Optional)",
    formRequired: "*",
    formMessage: "Nachricht",
    formMessagePlaceholder: "Ihre Nachricht...",
    sendMessage: "Nachricht senden",
    // Footer
    footer: "© 2026 Sulthan. Alle Rechte vorbehalten.",
  },

  en: {
    navLabels: { about: 'About', resume: 'Resume', projects: 'Projects', contact: 'Contact' },
    hiIm: "Hi, I'm",
    bio1: "Senior Data Engineer with 6+ years of experience, now pursuing an M.Sc. in Renewable Energy and Data Engineering at Hochschule Offenburg. I build data platforms and ETL/ELT pipelines using Python, PySpark, Spark-SQL, Azure Synapse Analytics, Azure Databricks (Delta Lake, Unity Catalog, Jobs/Workflows scheduler), Spark Streaming (Kafka), ADLS Gen2 and relational databases (PostgreSQL, MySQL). Backed by a B.E. from CEG Anna University and experience at LTIMindtree, I focus on applying data engineering to large-scale analytics and sustainable energy systems.",
    bio2: "IoT data pipeline at Hochschule Offenburg using Node‑RED, NATS JetStream, InfluxDB and Grafana for real‑time monitoring and end‑to‑end analytics, containerized with Docker and now being integrated with GitLab CI/CD for automated deployments.",
    downloadCV: "Download CV",
    getInTouch: "Get In Touch",
    stats: [
      { label: "Projects Completed", value: "10+" },
      { label: "Happy Clients", value: "4+" },
      { label: "Years Experience", value: "6+" }
    ],
    myResume: "My Resume",
    resumeLabels: { experience: 'Experience', skills: 'Skills', certifications: 'Certifications & Modules', education: 'Education' },
    clientLabel: "Client:",
    jobs: [
      {
        role: "HiWi Research Assistant",
        company: "Hochschule Offenburg",
        client: "Research Project - IoT and Data Engineering",
        period: "Nov 2025 - Feb 2026",
        description: [
          { main: "Design and implementation of an End-to-End IoT Pipeline from AHU sensor data to monitoring dashboard for condition and trend analysis.", subs: [] },
          { main: "Development of a workflow with Node-RED, NATS JetStream, InfluxDB (with Chronograf UI), Grafana and cold Azure Blob Storage (yyyy/mm/dd/hh) including Python analytics for robust, scalable data analysis.", subs: [] },
          { main: "Operation of the entire pipeline in Docker containers under Linux.", subs: [] },
          { main: "Setup of GitLab CI/CD pipelines for automated builds, tests and deployments across multiple environments.", subs: [] },
          { main: "Creation of Grafana dashboards with alerting for AHU monitoring.", subs: [] }
        ]
      },
      {
        role: "Senior Data Engineer",
        company: "LTIMindtree",
        client: "Navistar International (USA)",
        period: "Apr 2022 - Aug 2025",
        description: [
          { main: "Developed ETL pipelines in Azure Synapse Analytics to transform and store large-scale data from ADLS Gen2 into actionable insights.", subs: [] },
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
          { main: "Implemented Apache Spark for distributed data extraction, cleaning, and transformation, integrating notebooks into pipelines.", subs: [] },
          { main: "Improved pipeline efficiency by 50% using Databricks Job Clusters with dynamic scaling and ephemeral provisioning.", subs: [] },
          { main: "Orchestrated Databricks notebooks from Azure Synapse pipelines to automate and schedule Spark-based workflows.", subs: [] },
          { main: "Utilized Azure DevOps to implement CI/CD pipelines, ensuring seamless deployment across DEV, UAT, and PROD with version control.", subs: [] },
          { main: "Created python wheel files to enhance utility compatibility and handled parquet, json and avro formats for efficient data processing.", subs: [] },
          { main: "Automated pipelines with triggers, configured failure notifications via Azure Logic Apps, and maintained job performance and data integrity.", subs: [] }
        ]
      },
      {
        role: "Data Engineer",
        company: "LTIMindtree",
        client: "L&T ECC (India)",
        period: "Aug 2020 - Apr 2022",
        description: [
          { main: "Migrated Spark-Sql-based jobs from Azure HDInsight to Databricks platform, optimizing performance, scalability and cost-efficiency", subs: [] },
          { main: "Transitioned interactive MS-SQL tables to Azure Delta Tables for improved job efficiency and reliability.", subs: [] },
          { main: "Designed and configured Azure Databricks pipelines using job clusters.", subs: [] },
          { main: "Developed and optimized Spark-SQL jobs to efficiently process, transform and analyze daily raw data into meaningful insights.", subs: [] }
        ]
      },
      {
        role: "IoT Engineer",
        company: "LTI",
        client: "Tampnet (Norway)",
        period: "Jun 2018 - Aug 2020",
        description: [
          { main: "Research trainee on IoT Sensors, ATEX and IECEx certifications and data retrieval from sensors using NB-IoT and CAT-M networks.", subs: [] },
          { main: "Engaged in sensors procurement, vendor interaction and lab testing.", subs: [] },
          { main: "Developed python based APIs to process real-time sensors data into analytical insights for predictive analysis monitoring applications.", subs: [] },
          { main: "Certifications completion on Python, SQL and Apache-Spark.", subs: [] }
        ]
      }
    ],
    skillGroups: [
      { category: "Azure Services - ETL/ELT", skills: "Azure Synapse Analytics, Azure Databricks, Azure KeyVault, Azure Logic Apps, ADLS Gen2, Delta Tables, Hadoop, Azure Blob Storage" },
      { category: "Big Data & Processing", skills: "Apache Spark (PySpark & Spark-SQL), Delta Lake, Kafka, Distributed Computing" },
      { category: "Data Monitoring & Visualization", skills: "Grafana, InfluxDB, Chronograf" },
      { category: "IoT & Real-time Data", skills: "MQTT, EMQX, Node-RED, NATS JetStream, Azure IoT Hub and EventHub, WebPubSub, Telegraf, Real-time Streaming" },
      { category: "Languages", skills: "Python, SQL, C#" },
      { category: "Workflow & Orchestration", skills: "Apache Airflow, Databricks (Job Clusters & Workflows), Synapse Analytics (Pipelines and Schedulers)" },
      { category: "Version Control & DevOps & Containerization", skills: "Azure DevOps, GitHub, GitLab CI/CD, Docker" },
      { category: "Operating Systems", skills: "Linux, MacOS, Windows" }
    ],
    languagesTitle: "Languages",
    spokenLanguages: [
      { language: "Tamil", level: "Native" },
      { language: "English", level: "Proficient (C1)" },
      { language: "German", level: "B2.2" },
      { language: "Arabic", level: "Reading" }
    ],
    viewCertificate: "View Certificate",
    credentialOnRequest: "Credential on request",
    education: [
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
    ],
    clientProjects: "Client Projects",
    featuredProjects: "Featured Projects",
    viewProject: "View Project →",
    viewArchitecture: "View Architecture",
    keyAchievements: "Key Achievements:",
    technologiesUsed: "Technologies Used:",
    closeBtn: "Close",
    architectureLabel: "Architecture",
    projects: [
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
        link: "#"
      }
    ],
    featuredProjectsData: [
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
        link: "#"
      }
    ],
    contactTitle: "Get In Touch",
    contactIntro: "I'm always interested in hearing about new projects and opportunities.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formCompany: "Company",
    formCompanyPlaceholder: "Your company name",
    formOptional: "(Optional)",
    formRequired: "*",
    formMessage: "Message",
    formMessagePlaceholder: "Your message...",
    sendMessage: "Send Message",
    footer: "© 2026 Sulthan. All rights reserved.",
  }
};

// Image maps (shared across languages)
const projectImages = {
  1: { image: hochschule, architecture: hochschuleproj },
  2: { image: navistar, architecture: navistarproj },
  3: { image: lt, architecture: ltproj },
  4: { image: tampnet, architecture: tampnetproj },
};

const featuredImages = {
  1: { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop", architecture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" }
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [resumeTab, setResumeTab] = useState('experience');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectArch, setSelectedProjectArch] = useState(null);
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);
  const [lang, setLang] = useState('de'); // default: German

  const t = translations[lang];

  // Enrich projects with images
  const projects = t.projects.map(p => ({ ...p, ...projectImages[p.id] }));
  const featuredProjects = t.featuredProjectsData.map(p => ({ ...p, ...featuredImages[p.id] }));

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
    emailjs.send('service_m7ut4x8', 'template_tieb72p', formData, 'TwUziX5RQKIWo_Adq')
      .then(() => { alert('Email sent successfully!'); e.target.reset(); })
      .catch((error) => { alert('Failed to send email. Please try again.'); console.error('Error:', error); });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Muhammed Sulthan Durapsha Haja
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'resume', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'resume') setResumeTab('experience');
                }}
                className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === tab
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {t.navLabels[tab]}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 border border-slate-600 rounded-lg overflow-hidden">
              {['de', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-sm font-bold uppercase transition-all duration-200 ${
                    lang === l
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                  if (tab === 'resume') setResumeTab('experience');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-slate-700 transition-colors"
              >
                {t.navLabels[tab]}
              </button>
            ))}
            {/* Mobile language toggle */}
            <div className="flex gap-2 px-6 pt-3 border-t border-slate-700 mt-2">
              {['de', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-1.5 text-sm font-bold uppercase rounded-lg transition-all duration-200 ${
                    lang === l
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-400 border border-slate-600 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  {t.hiIm} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sulthan MD</span>
                </h1>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">{t.bio1}</p>
                <p className="text-lg text-slate-400 mb-8">{t.bio2}</p>
                <div className="flex gap-4">
                  <a
                    href="/files/sulthan_cv.pdf"
                    download="sulthan_cv.pdf"
                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors inline-block text-white text-center"
                  >
                    {t.downloadCV}
                  </a>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
                  >
                    {t.getInTouch}
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-colors">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resume Tab */}
        {activeTab === 'resume' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">{t.myResume}</h2>

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
                  {t.resumeLabels[tab]}
                </button>
              ))}
            </div>

            {/* Experience */}
            {resumeTab === 'experience' && (
              <div className="space-y-8">
                {t.jobs.map((job, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{job.role}</h4>
                      <span className="text-slate-400 text-sm">{job.period}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-cyan-400 font-semibold">{job.company}</p>
                      {job.client && <p className="text-slate-400 text-sm">{t.clientLabel} {job.client}</p>}
                    </div>
                    <ul className="space-y-3 text-slate-300">
                      {job.description.map((item, i) => (
                        <div key={i}>
                          {item.main ? (
                            <>
                              <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{item.main}</span>
                              </li>
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
                            <li className="flex gap-3">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {resumeTab === 'skills' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {t.skillGroups.map((skillGroup, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                      <h4 className="text-lg font-bold text-cyan-400 mb-3">{skillGroup.category}</h4>
                      <p className="text-slate-300">{skillGroup.skills}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.languagesTitle}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {t.spokenLanguages.map((lang, idx) => (
                      <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-400/50 transition-colors text-center">
                        <p className="text-lg font-bold mb-2">{lang.language}</p>
                        <p className="text-cyan-400">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certifications */}
            {resumeTab === 'certifications' && (
              <div className="space-y-6">
                {[
                  { name: lang === 'de' ? "Data Engineer" : "Data Engineer", issuer: "Datacamp", date: "2026", isPdf: true },
                  { name: lang === 'de' ? "Data Engineer Associate" : "Data Engineer Associate", issuer: "Datacamp", date: "2026", link: datacampdeass, isPdf: true },
                  { name: lang === 'de' ? "Azure Databricks Workload-Automatisierung" : "Azure Databricks work load automation module", issuer: "Microsoft Azure", date: "2026", link: "https://learn.microsoft.com/en-gb/users/sulthanmd-1289/achievements/kczfknzb" },
                  { name: lang === 'de' ? "Spark Structured Streaming – inkrementelle Verarbeitung" : "Spark structured streaming - incremental processing", issuer: "Microsoft Azure", date: "2026", link: "https://learn.microsoft.com/api/achievements/share/en-gb/sulthanMD-1289/YPU5XFPR?sharingId=2C7179B2FFF326F6" },
                  { name: lang === 'de' ? "Spark Masters – PySpark und SparkSQL" : "Spark Masters - PySpark and SparkSQL", issuer: "Udemy", date: "2024", link: "https://www.udemy.com/certificate/UC-e5c4df70-3d0e-4531-bf44-1d440b611742/" },
                  { name: "Data Engineering - DP-900", issuer: "Microsoft Azure", date: "2023", link: null },
                  { name: "Data Engineering - AZ-900", issuer: "Microsoft Azure", date: "2023", link: null },
                  { name: lang === 'de' ? "Data Science und maschinelles Lernen" : "Data Science and Machine Learning", issuer: "Coursera", date: "2023", link: "https://your-coursera-link-here.com" },
                  { name: lang === 'de' ? "GenAI – LTIMindtree" : "GenAI - LTIMindtree", issuer: "LTIMindtree/Coursera", date: "2024", link: "https://your-coursera-link-here.com" },
                  { name: lang === 'de' ? "Python-Programmierung" : "Python Programming", issuer: "Udemy", date: "2023", link: "https://your-udemy-certificate-link.com" },
                  { name: lang === 'de' ? "SQL-Meisterschaft" : "SQL Mastery", issuer: "Udemy", date: "2023", link: "https://your-udemy-certificate-link.com" },
                  { name: "Docker & Kubernetes", issuer: "Udemy", date: "2024", link: "https://your-udemy-certificate-link.com" },
                  { name: "Apache Airflow", issuer: "Udemy", date: "2023", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6aa708e-bda2-4f6e-aca0-939d79627627.pdf" },
                  { name: lang === 'de' ? "Digitale Kompetenz-Selbsteinschätzung" : "Digital skills self-assessment", issuer: "Europa.eu", date: "2024", link: digitalcompeteeu, isPdf: true }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{cert.name}</h4>
                      <span className="text-slate-400 text-sm">{cert.date}</span>
                    </div>
                    <p className="text-cyan-400 mb-3 font-semibold">{cert.issuer}</p>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 text-sm hover:underline">
                        {t.viewCertificate}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm">{t.credentialOnRequest}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {resumeTab === 'education' && (
              <div className="space-y-6">
                {t.education.map((edu, idx) => (
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
            <h2 className="text-4xl font-bold mb-12">{t.clientProjects}</h2>

            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex">
                  <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-cyan-400 font-semibold text-sm mb-1">{project.company}</p>
                      <p className="text-slate-400 text-sm mb-3">{project.period}</p>
                      <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button onClick={() => setSelectedProjectArch(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-colors w-fit">
                        {t.viewProject}
                      </button>
                      <button onClick={() => setSelectedArchitecture(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-colors w-fit">
                        <ExternalLink size={16} />
                        {t.viewArchitecture}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-t border-slate-700 my-16" />

            <h2 className="text-4xl font-bold mb-12">{t.featuredProjects}</h2>
            <div className="space-y-6">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300 flex">
                  <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-blue-400 font-semibold text-sm mb-1">{project.company}</p>
                      <p className="text-slate-400 text-sm mb-3">{project.period}</p>
                      <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button onClick={() => setSelectedProjectArch(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-colors w-fit">
                        {t.viewProject}
                      </button>
                      <button onClick={() => setSelectedArchitecture(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-colors w-fit">
                        <ExternalLink size={16} />
                        {t.viewArchitecture}
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
            <h2 className="text-4xl font-bold mb-12">{t.contactTitle}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-slate-300 mb-8">{t.contactIntro}</p>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Mail size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{t.emailLabel}</p>
                      <p className="text-lg font-semibold">sulthan2510@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Linkedin size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{t.linkedinLabel}</p>
                      <a href="https://linkedin.com/in/sulthan2510" target="_blank" rel="noopener noreferrer"
                        className="text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                        sulthan2510 →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Github size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{t.githubLabel}</p>
                      <a href="https://github.com/sulthan2510" target="_blank" rel="noopener noreferrer"
                        className="text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                        sulthan2510 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmitForm}>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t.formName} <span className="text-red-500">{t.formRequired}</span>
                  </label>
                  <input type="text" name="from_name" required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder={t.formNamePlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t.formEmail} <span className="text-red-500">{t.formRequired}</span>
                  </label>
                  <input type="email" name="from_email" required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder={t.formEmailPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t.formCompany} <span className="text-slate-500 text-xs">{t.formOptional}</span>
                  </label>
                  <input type="text" name="company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder={t.formCompanyPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t.formMessage} <span className="text-slate-500 text-xs">{t.formOptional}</span>
                  </label>
                  <textarea rows={5} name="message"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder={t.formMessagePlaceholder} />
                </div>
                <button type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Project Details Modal */}
      {selectedProjectArch && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-cyan-400 rounded-lg overflow-hidden max-w-3xl w-full max-h-[95vh] relative flex flex-col">
            <button onClick={() => setSelectedProjectArch(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors">
              <X size={24} className="text-white" />
            </button>
            <div className="relative h-48 overflow-hidden">
              <img src={selectedProjectArch.image} alt={selectedProjectArch.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProjectArch.title}</h2>
                <p className="text-cyan-400 font-semibold">{selectedProjectArch.company}</p>
                <p className="text-slate-300 text-sm">{selectedProjectArch.period}</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              <div>
                <p className="text-slate-300 leading-relaxed">{selectedProjectArch.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{t.keyAchievements}</h3>
                <ul className="space-y-3">
                  {selectedProjectArch.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400 flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{t.technologiesUsed}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectArch.tech.map((tech, idx) => (
                    <span key={idx} className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-800 border-t border-slate-700 p-6 flex justify-end gap-4">
              <button onClick={() => setSelectedProjectArch(null)}
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors">
                {t.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Modal */}
      {selectedArchitecture && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-cyan-400 rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] relative">
            <button onClick={() => setSelectedArchitecture(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors">
              <X size={24} className="text-white" />
            </button>
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedArchitecture.title} – {t.architectureLabel}
              </h3>
              <p className="text-cyan-100 mt-2">{selectedArchitecture.company}</p>
            </div>
            <div className="bg-slate-800 p-6 overflow-auto" style={{ maxHeight: 'calc(90vh - 150px)' }}>
              <img src={selectedArchitecture.architecture} alt={`${selectedArchitecture.title} ${t.architectureLabel}`}
                className="w-full h-auto rounded-lg border border-slate-700" />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-24 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>{t.footer}</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}

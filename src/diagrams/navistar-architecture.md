graph TB
    subgraph "Data Ingestion Layer"
        ADLS_RAW["Azure Data Lake Gen2<br/>Bronze Layer<br/>(Raw Data)"]
        EVENT["Event Triggers<br/>Service Principals"]
    end
    
    subgraph "Processing Layer - Medallion Architecture"
        DB_AP["Databricks<br/>All-Purpose Cluster<br/>(For Development)"]
        NB_RAW["Databricks Notebooks<br/>- Data Validation<br/>- Rule Engines<br/>- Data Cleaning"]
        
        ADLS_PROC["Azure Data Lake Gen2<br/>Silver Layer<br/>(Processed/Cleaned)"]
        
        DELTA_TABLES["Delta Tables<br/>(Optimized Format)"]
        
        NB_ETL["Multiple ETL Notebooks<br/>- Business Logic<br/>- Transformations<br/>- Requirements-based"]
        
        ADLS_GOLD["Azure Data Lake Gen2<br/>Gold Layer<br/>(Analytics-Ready)<br/>Job-specific Containers"]
    end
    
    subgraph "Orchestration & Monitoring"
        JOBS_CLUSTER["Databricks<br/>Job Compute Clusters<br/>(Auto-scaling)"]
        PIPELINES["Azure Synapse Pipelines<br/>- Multi-notebook orchestration<br/>- Dependency management"]
        FUNCTIONS["Azure Functions<br/>Event-triggered<br/>Job execution"]
    end
    
    subgraph "Metadata & Analytics"
        SQL_SERVER["SQL Serverless Database<br/>- Star Schema<br/>- Device ID mappings<br/>- Reference tables"]
        POWERBI["Power BI Reports<br/>- Pipeline Monitoring<br/>- Data Quality Dashboards<br/>- Performance Metrics"]
    end
    
    subgraph "Deployment & CI/CD"
        DEVOPS["Azure DevOps CI/CD<br/>- Version Control<br/>- Automated Testing<br/>- Production Deployment"]
        LOGIC_APPS["Azure Logic Apps<br/>- Workflow Orchestration<br/>- Notifications<br/>- Error Handling"]
    end
    
    ADLS_RAW -->|Raw Data| EVENT
    EVENT -->|Triggers| DB_AP
    DB_AP -->|Executes| NB_RAW
    NB_RAW -->|Validated Data| ADLS_PROC
    ADLS_PROC -->|Converted| DELTA_TABLES
    DELTA_TABLES -->|Read| NB_ETL
    NB_ETL -->|Analytics Data| ADLS_GOLD
    
    NB_RAW -->|Uses| JOBS_CLUSTER
    NB_ETL -->|Uses| JOBS_CLUSTER
    JOBS_CLUSTER -->|Executed by| PIPELINES
    FUNCTIONS -->|Triggers| PIPELINES
    
    ADLS_PROC -->|Metadata| SQL_SERVER
    ADLS_GOLD -->|Data Source| SQL_SERVER
    SQL_SERVER -->|Query| POWERBI
    PIPELINES -->|Logs & Metrics| POWERBI
    
    PIPELINES -->|Deployed via| DEVOPS
    LOGIC_APPS -->|Manages| PIPELINES
    DEVOPS -->|To Production| ADLS_GOLD
    
    style ADLS_RAW fill:#8B4513,stroke:#333,color:#fff
    style ADLS_PROC fill:#4A7C59,stroke:#333,color:#fff
    style ADLS_GOLD fill:#2E5090,stroke:#333,color:#fff
    style DB_AP fill:#FF9900,stroke:#333,color:#fff
    style POWERBI fill:#9933FF,stroke:#333,color:#fff
    style DEVOPS fill:#0078D4,stroke:#333,color:#fff
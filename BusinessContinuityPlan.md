# Business Continuity Plan

## 1. Introduction

This Business Continuity Plan (BCP) for [Flo Apps Ltd](https://floapps.com) outlines the strategies, procedures, and processes to follow to ensure the continuity of critical operations in the event of an emergency, disaster, or disruption. The goal is to minimize downtime, protect business assets, and maintain client trust.

## 2. Purpose and Scope

*   **Purpose**: To ensure the company can continue its operations and recover quickly from disruptions, ensuring no major loss in service delivery, data, or reputation.
    
*   **Scope**: This plan applies to all critical functions, systems, and infrastructure, including:
    
    *   Internal operations
        
    *   IT systems and applications
        
    *   Employee operations (on-site, remote)
        
    *   External communications with customers and stakeholders

## 3. Risk Assessment and Impact Analysis

A thorough **Risk Assessment** identifies potential threats that could disrupt operations. The company should prioritize threats based on the likelihood of occurrence and impact severity.

**Possible threats**:

 *   Cyberattacks (e.g., ransomware, data breaches)
        
 *   Natural disasters (e.g., floods, earthquakes)
        
 *   Power outages or electrical failures
        
 *   Hardware or software failure
        
 *   Human error or sabotage
        
 *   Supply chain disruptions
        
 *   Pandemic/health crises
        
 *   Network or internet outages
        
 *   International conflict or war

 *   Loss of key employees: critical system knowledge may reside with only one or two developers, creating bottlenecks during absences or departures. To mitigate,
     * Create and maintain technical documentation
     * Build documented processes
     * Organize regular knowledge-sharing sessions
     * Rotate code ownership among developers
     * Enlargen the team

 *   GDPR Data Breach: compliance with GDPR, including the 72-hour breach notification to the Finnish Data Protection Ombudsman, is essential. Therefore,
     * Implement a Data Breach Response Plan
     * Conduct regular security audits and staff training

 *   Third-party Service Dependency: we rely on external services such as authentication, payment, and mailing systems. Downtime in these services can impact core functionalities. To mitigate,
     * Monitor SLA compliance of critical vendors
     * Implement fallback services for essential APIs 

 *   Insufficient Incident Communication: lack of transparent communication during outages may erode client trust. To mitigate,
     * Set up a public status page
     * Define and follow an incident communication SOP (Standard Operating Procedure)

**Business Impact Analysis (BIA)** evaluates the criticality of various functions:
    
 *   **Critical IT systems and applications** (e.g., cloud services, internal tools, data centers)
        
 *   **Client-facing services** (e.g., [FloMembers](https://flomembers.fi/en) web application, helpdesk)
        
 *   **Employee operations** (on-site, remote work systems, communications)

## 4. Key Components of the Business Continuity Plan

### 4.1. Business Continuity Team (BCT)

A dedicated **Business Continuity Team (BCT)** is responsible for coordinating responses during disruptions. The BCT includes:

*   **BCP Coordinator**: Oversees all recovery and continuity efforts (TN).

*   **IT Lead**: Manages IT infrastructure recovery and continuity (JR).

*   **Communications Lead**: Handles internal and external communications (TR).

*   **HR Lead**: Coordinates with employees and ensures personnel safety (SP).

*   **Operations Lead**: Ensures critical business processes are maintained (SG).

Each member of the BCT must have specific roles and responsibilities.

### 4.2. Emergency Response and Communication

*   **Initial Response**: In the event of a disruption, employees should immediately report issues through predefined communication channels (Slack, email, or phone).
    
*   **Incident Logging**: All disruptions are logged with timestamps for later review and analysis.
    
*   **Communication Protocols**:
    
    *   Notify employees, customers, and stakeholders about the disruption.
        
    *   Set up alternative communication channels (e.g., SMS, phone calls, social media).
        
    *   Maintain clear and regular updates to all parties.
        
### 4.3. IT Infrastructure and Data Backup

*   **Data Backup**: Critical business data is backed up daily to an offsite location. We follow the **3-2-1 Backup Rule**: 3 copies of data, 2 different media types, 1 copy offsite.
    
*   **System Redundancy**: Key systems and services (web servers etc.) should be set up with redundant systems or failover options to ensure availability during a disruption.
    
*   **Disaster Recovery Sites**: Establish secondary data centers or cloud-based disaster recovery solutions for immediate failover.
    
### 4.4. Recovery Procedures

The company maintains a separate Disaster Recovery Plan (DRP). It entails detailed recovery plans for each critical service:

*   **Immediate Recovery**: Address the most critical operations first (e.g., customer service, internal communication systems).
    
*   **Long-Term Recovery**: Gradually restore less critical operations (e.g., IT maintenance, training).
    
*   **System Restoration**: A predefined checklist must be followed for restoring IT infrastructure (servers, networking, databases).
    
**Recovery time objectives (RTO)** and **Recovery Point Objectives (RPO)** should be defined for each critical service in the DRP:

*   **RTO**: How long the business can operate without the service.
    
*   **RPO**: The maximum acceptable data loss.
    
### 4.5. Remote Work Readiness

*   **Secure Access**: SSH or other form of secure access to company networks is made available to employees when necessary.
    
*   **Cloud Tools**: Employees have access to cloud collaboration tools (e.g. Slack, GitHub).
        
### 4.6. Supplier and Vendor Continuity

*   **Third-Party Vendors**: We ensure that all critical third-party service providers (e.g., hosting partners) have their own BCPs in place and can respond quickly to disruptions.
    
*   **Supplier Risk Assessment**: We evaluate each vendor for their ability to continue operations during a disaster and have backup suppliers available.
    
## 5. Testing and Drills

*   **Regular Drills**: The company should conduct simulated disaster recovery drills at least twice a year, testing all aspects of the BCP.
    
    *   **Full Test**: Involve all employees and systems to simulate a complete disaster recovery.
        
    *   **Tabletop Test**: Scenario-based discussion focusing on decision-making and communication.
        
*   **Post-Test Review**: After each test, review the outcomes and update the BCP accordingly.
    
## 6. Employee Training and Awareness

*   **Employee Awareness**: All employees are trained on the BCP, including emergency procedures, communication channels, and how to access remote systems.
    
*   **Role-Specific Training**: Key BCT members should undergo specialized training in disaster recovery, crisis management, and communication.
    
*   **Documentation**: We keep the BCP and related documents accessible to all employees.
    
## 7. Plan Maintenance and Review

The BCP must be a living document:

*   **Review Frequency**: We conduct a full review of the BCP annually or whenever there are significant changes in business operations, infrastructure, or external threats.
    
*   **Continuous Improvement**: After each disruption or test, we gather feedback and improve the plan accordingly.
    
*   **Change Management**: We ensure the BCP reflects changes in business processes, technology, or regulations.
    
## 8. Conclusion

This Business Continuity Plan serves as a roadmap to recover and continue business operations in the event of any unforeseen disruptions. Regular updates, employee training, and comprehensive testing will ensure the company remains resilient and can minimize any adverse effects of potential disasters.

![](media/image3.jpeg)

**Module Code & Module Title**

> **CS6P05NI Project Final Report**

**40% Individual Coursework**

**Submission: Final Submission**

**Academic Semester: Spring Semester 2025**

**Credit: 30 Credit Year Long Module**

**Student Name: Ankit Kumar Bindu**

**London Met ID: 22085800**

########  **College ID:** np01nt4s230069 

**Assignment Due Date: Wednesday, April 30, 2025**

**Assignment Submission Date: Wednesday, April 30, 2025**

**Submitted To: Raman Pradhananga**

**One Drive Folder Link:
<https://islingtoncollegeedunp-my.sharepoint.com/:f:/r/personal/np01nt4s230069_islingtoncollege_edu_np/Documents/22085800%20Ankit%20Kumar%20Bindu?csf=1&web=1&e=oFYOpj>**

*I confirm that I understand my coursework needs to be submitted online
via MST Classroom under the relevant module page before the deadline in
order for my assignment to be accepted and marked. I am fully aware that
late submissions will be treated as non-submission and a mark of zero
will be awarded.*

**Acknowledgement**

I have done a hardwork making this project possible starting with
learning Ansible, Rust, React and Tailwind CSS, but due to my previous
development skills I have completed the project.

I would like to express the deepest appreciation to my Supervisor Mr.
Raman Pradhananga. Without his supervision and constant help this
project and documenting this paper would not have been possible. The
guidance and supervision as well providing necessary information
regarding Networking and Development support in completing this project.

I would like to express my gratitude toward my mentor Mr. Anup Lawati,
his positive attitude toward being my client and test my application
from the start and giving suggestion helped a lot for the completion of
the project development, and also I express my gratitude toward my
colleagues for helping me out for survey and application review. **\**

# 

# Abstract

The modern IT infrastructure depends on network automation which
resolves the issues related to manual configuration while improving
operational efficiency and reducing human errors in extensive networks.
The project delivers Netrunner which serves as a cross-platform desktop
automation tool that achieves network automation through a user-friendly
graphical user interface (GUI). The memory-safe backend of Netrunner
uses Rust while its responsive frontend combines React and Tailwind CSS
as its building blocks and Tauri enables lightweight deployment through
an integration with Ansible for device configuration and inventory
management and playbook automation. The tool was co-developed between
Vianet Communications Ltd. - a Nepalese leading ISP - to provide network
operations centralization which allows instant inventory updates and
real-time logging together with secure credential storage capabilities.

A total of 12 sprints implemented under Scrum served to analyze
requirements and design the system before conducting multiple
development iterations. The testing phase included strict unit and
integration tests which successfully proved both the backend database
functions (CRUD operations) and frontend components while attaining 100%
success rates through 44 separate tests. Netrunner achieves scalability
security and cross-platform compatibility through its architecture which
extends from frontend to backend and includes automation and database
components. The toolset, which includes Puppet and Cisco DNA, shows how
such solutions offer affordable and flexible features to operate in
networks of varying sizes from small to medium.

The platform will be improved through features such as expanded user
accounts and system monitoring interfacing and rollback abilities.
Through Netrunner engineers gain automated control and free up their
time to handle important projects without sacrificing network quality.
This real-world network deployment proves that seamless integration of
contemporary framework development with infrastructure code principles
can transform current networking approaches.

**Keywords**: Network Automation, Ansible, Rust, React, Tauri, Scrum
Methodology, Dynamic Inventory.

# Chapter 1: Introduction

## Project Description

**Network Automation** refers to the deployment, testing, configuration,
management and the operation of physical devices and virtual devices
within a network through programming, automation tools and software.
Traditionally, the configuration of Network device is performed manually
which leads to errors, inefficiencies and delays. When completed
manually, such tasks are time-consuming and often characterized by
inconsistency, but with routine network tasks and functions automated
and repetitive methods controlled and managed automatically, network
service availability advances. (Cisco Systems, 2024)

The "**Netrunner -- Network Automation Tool**" is a desktop application
deliberate to streamline and simplify network device management through
automation. Built with a modern and intuitive graphical user interface
(GUI), Netrunner leverages **Ansible** for network automation tasks
while providing a seamless user experience through a combination of
modern desktop application development tool stack such as **Rust,
React** with **Typescript, TailwindCSS and Tauri.**

Netrunner includes key features such as --

- Dynamic Inventory Management (Add, Modify or delete hosts and Groups)

- Run Ansible playbook on Hosts or Groups via selection,

- Dynamic Selection of Playbook via Dropdown,

- Integrated Switch mode (Light and Dark).

## Current Scenario

Cloud computing, large-scale deployments, and diverse network
infrastructures make manual management impractical. Automation is
essential for initial setup and ongoing management, boosting operational
efficiency and reducing human error.

For supporting statistics and trends on the growing necessity of
automation in networking and IT infrastructure, please refer to
[**Appendix 2**](#appendix-2).

## Problem Domain and Project as a Solution

The Netrunner project simplifies network infrastructure management by
offering a unified automation tool that leverages Ansible, Rust, and
React, enhancing operational efficiency, minimizing errors, and
promoting proactive network management.

For detailed insights into the challenges of KTLO operations and
interface configuration complexities in modern networks, please refer to
[**Appendix 1**](#appendix-1).

### 1.3.3 Problem Analysis

The complex layers of technologies, devices, and protocols are
associated with the Network environment. As networks scale, the
challenges of manual operations become more pronounced:

- **Repetitive Manual Task:** Monitoring, patching and troubleshooting
  the network are time consuming and susceptible to human errors.

- **Increased Complexity:** Networks which are growing, and diversity
  are making it difficult to manage various interfaces and protocols
  manually.

- **Limited Time for Strategic Projects:** Due to the constant focus on
  maintenance, network engineers and network architects struggle to
  implement new, innovative solutions that could optimize network
  performance and resilience.

### 1.4 Project as Solution

The project focuses on leveraging Ansible; suite of software tools that
enable infrastructure as code, for automating network configuration and
management. The primary goal is to shift from reactive, manual
operations to proactive, automated workflows, reducing human error and
creating time for strategic initiatives.

In Brief,

- **Automating Repetitive Task:** Implementing Ansible playbooks for
  automating routine tasks like initial network device configurations
  like banners, interface configuration with protocol assignments. These
  playbooks run on-demand or automatically, reducing human intervention.

- **Centralized Management:** Ansible can be used for centralizing
  devices like routers, switches, firewalls simultaneously using
  inventory as YAML files which ensures consistent and standardized
  network configuration across all the devices on inventory file and
  reduce complexity.

- **Reduce Network Complexity:** Automating the process of assigning
  persistent interfaces to various protocols and handling configuration
  can reduce the risk of misconfiguration and reduces network
  complexity.

- **Infrastructure as Code (IaC) with GUI:** Using Ansible playbooks and
  UI/UX leads to a version controlled (using GitHub), shareable, and
  reproducible codified infrastructure.

## 1.4 Project Aim and Objectives

### 1.4.1 Aim

The project aims to develop a unified, sustainable network automation
platform that combines React' intuitive UI/UX, Rust's memory-safe
backend, Tauri's lightweight cross-platform framework, and Ansible's
robust task automation to empower network engineers. By integrating
these technologies, the tool will streamline repetitive network
operations, enforce codified infrastructure management, and minimize
human error, while prioritizing security, performance, and scalability.

### 1.4.2 Objectives

- Implementation of Ansible Playbooks: Automate repetitive network task
  using Ansible Playbooks which enhance operational efficiency by
  reducing the time and effort required for daily maintenance tasks,

- Dynamic Inventory Management: Utilize Rusqlite databases to centralize
  and dynamically manage network device inventories, enabling real-time
  updates and seamless integration with Ansible. This ensures scalable
  and flexible configurations while reducing manual errors.

- Enhance Network Reliability: Creating awareness using consistent
  configurations as automated network is task driven while addressing
  network issues, using automation to manage diverse devices and
  protocols enhances network reliability.

- Develop Sustainable Network Automation Tool: Using integrated
  capabilities of ReactJS, Tailwind CSS, Rust, Tauri and Ansible this
  project plans to deliver user friendly network automation tool which
  will free up time for innovative and strategic planning for network
  engineers.

# 1.5 Report Structure

The report is organized into several key chapters, each covering
different aspects of the project:

### 1.5.1 Background

This section outlines the motivation for the project, the problem
domain, and the proposed solution. It includes client overview, target
users, and how the Netrunner tool addresses the challenges in modern
network environments.

### 1.5.2 Development

Describes the technology stack used (Rust, React, Tauri, Ansible), the
selected Scrum methodology, and the sprint-based development process. It
also covers system architecture, design diagrams, and implementation
details.

### 1.5.3 Testing and Analysis

This section provides unit and integration test cases for frontend and
backend components, manual inventory and playbook execution tests, and
performance validation. The results of testing and user feedback are
discussed in detail.

### 1.5.4 Evaluation

Here, the project deliverables are reviewed against the original goals.
System evaluation is conducted to verify that all client and functional
requirements are fulfilled.

### 1.5.5 Criteria

Outlines how the success of the project was measured based on client
needs, feature completeness, usability, and system reliability.

### 1.5.6 Future Work

Presents areas for potential enhancement, including multi-user access,
integration with monitoring systems like ELK Stack, API development,
rollback features, and advanced UI/UX.

### 1.5.7 Conclusion

Summarizes the outcomes of the project, its contributions to network
automation, and its value for professional use in environments such as
ISPs.

### 1.5.8 Social, Legal and Ethical Issues

This section explains how the project complies with institutional
ethical standards, legal software usage, and ensures that no social or
privacy issues are violated during or after the project execution.

# Chapter 2: Background

Netrunner is an innovative network automation and Inventory management
tool that is designed and developed to streamline the daily operations
of network engineers the strength of modern development technologies.
The tool integrates Ansible for robust task automation, Rust for a high
performance and memory- safe backend, React for intuitive user
interface, and Tauri for lightweight, cross-platform deployment. By
unifying this mechanism, Netrunner aims to create a sustainable tool for
managing simple to complex networks with improved accuracy, efficiency,
and scalability.

This idea derives from the fact that there exists a lot of need for
automation in IT infrastructure, especially at a large scale where the
repetitive configuration, monitoring tasks are consuming a lot of time
and hence prone to human error. By chance, Netrunner steps into the ring
and addresses these challenges head on with centralized, secure and
customizable platform that is consistent with any scale of
infrastructure, simplifying engineering life and letting professionals
to do more planning on higher level and innovations.

## 2.1 Targeted User Type

Netrunner is focused primarily on network engineers or IT administrators
that manage medium to large network scale within corporate, educational
or governmental infrastructures. It is especially useful for
professionals who need to lessen manual participation in network
operations, emphasize standardized configurations, and constantly
witness the state of network devices at a genuine time.

Netrunner is initially configured to be used within a professional
network environment that is dependent on infrastructure automation which
is growing necessity. Thus, while it solves the problems of repetitive
configuration task held manually using CLI and manual inventory
management, it also provides a modularity and cross-platform
compatibility that make it attractive for use by companies or
educational institutions with smaller networks and less advanced
automation needs. As further enhancements, Netrunner can be used to
support a cooperative environment, multi-user access and integrating
with monitoring system as ELK Stack to become a versatile tool for
modern network operations.

## 2.2 End User 

### 2.2.1 Client Information

**Vianet Communications Ltd.**

<figure>
<img src="media/image3.png" style="width:2.1859in;height:0.53043in"
alt="A black background with a black square AI-generated content may be incorrect." />
<figcaption><p>: Logo of Vianet Communication Pvt. Ltd.</p></figcaption>
</figure>

**Description of Client**

The client for the project is Vianet Communications Ltd., one of Nepal's
leading Internet Service Providers (ISPs), known for delivering reliable
and high-speed internet services across the country. Established in
1999, Vianet has consistently grown to become a trusted name in the
Information and Communication Technology (ICT) sector, serving both
residential and enterprises customers.

Vianet also operates a large-scale dynamic network environment,
including a 24/7 Network Operation Center (NOC), which ensures
uninterrupted service for thousands of customers. The Company
continually seeks to improve its network reliability, minimize downtime,
and provide efficient customer support through the integration of
further introduced technologies and automation tools.

Vianet identified the problem of being in the hands of many repetitive
tasks such as configuration management, inventory tracking, and fault
diagnostics that were performed manually. Because of this, the approach
would often lead to operational inefficiencies, delays in
troubleshooting and human error potential.

Since a more efficient way was recognized, a proposal for a unified
automation platform was submitted. It would attempt to automate routine
network tasks, dynamically manage device inventory, offer constant
network visibility as it exists in real time, improve performance,
reduce tenure, and observe the consistency of network configurations.

**\[Note: More about Client Requirement in [Appendix
3](#_6.3.1_Client_Requirements)\]**

## 2.3 Understanding the Solution

Netrunner is a network automation solution that encompasses the entire
network automation solution, with the ability to entirely automate the
manual network management activities. Solving the operational problems
faced by every network engineer, it integrates all modern technologies
such as Ansible for automation of tasks, Rust for having secure, high
performance back-end processes and React for an intuitive user
interface, and Tauri for cross platform deployment.

All of these become automated workflows; it simplifies complex and
repetitive tasks like inventory management tasks, device configuration,
device information collection, fault management, etc., reducing overall
task time and reducing errors that occur because of humans. The Rusqlite
database of an inventory is always up to date and gives dynamic
inventory management with a lightweight network operation. Netrunner
focuses on important aspects related to performance, reliability and
scalability, offering secure user authentication, controlled access
based on role-based authorization as well as implementing the best
practices in software architecture and security. Equipped with its
user-friendly desktop interface, engineers can simply run Ansible
Playbook on one host, a group of hosts, or multiple groups of hosts,
track tasks progressively, and handle device configurations or fetch
device information from a unified console.

Netrunner unifies and thereby simplifies multiple tools in a cohesive
platform to enhance the way network teams keep their infrastructure and
respond to issues, and plan for future scale. It is expected that this
solution will provide engineers with a dependable and intelligent
automation tool that grows with the needs of the network upon
completion.

### 2.3.1 Overview of the System

#### 2.3.1.1 System Architecture

The architecture of Netrunner is designed to provide a seamless,
efficient, and secure environment for network task automation, utilizing
modern technologies across four key layers -- frontend, backend,
automation, and database. The diagram below illustrates the flow of
information and tasks within the system.

<figure>
<img src="media/image5.png" style="width:6.58926in;height:3.70435in"
alt="A computer network diagram with a computer and a computer AI-generated content may be incorrect." />
<figcaption><p>: Demonstration of System Design.</p></figcaption>
</figure>

The following are the major components of the system that made possible
to develop Netrunner project --

1.  **Rust Backend:**

The Rust backend handles application logic, security, and communication
between frontend and other components. It fetches pre-defined Ansible
Playbooks, interacts with Rusqlite Inventory databases, and executes
fetched playbooks to the selected inventory while creating a temporary
YAML format inventory file required for task execution and captures the
output log.

2.  **React + Tailwind CSS + Typescript Frontend (Desktop GUI)**

The user interface is built using React for component-driven structure,
Tailwind CSS for efficient styling, and TypeScript for type safety and
scalability. This combination offers an intuitive and responsive desktop
application frontend, enabling users to interact with device
inventories, execute playbook, and view output logs.

3.  **Tauri Framework**

Tauri wraps the frontend and backend into lightweight app using OS's
native web renderer as the size of the Tauri application can be little
as 600 KB, Tauri also builds application with Cross-Platform
capabilities for any operating system such as Linux, macOS, Windows,
Android and IOS -- all from single codebase. As it utilizes native OS
integration with minimal resource usage, it allows seamless
communication between frontend and backend.

4.  **Rusqlite Database**

A local, embedded Rusqlite Database stores structured inventory data,
and user credentials. Rusqlite is an ergonomic wrapper for using SQLite
from Rust. It supports fast and reliable data access, enabling dynamic
inventory management and real-time updates.

5.  **Ansible Automation Engine**

Ansible is used to automate repetitive network tasks using YAML-based
playbooks and inventory. It interacts with network devices (simulated
via GNS3), executes defined commands, and returns results back to the
system for logging and visualization.

6.  **GNS3 Client Environment**

GNS3 provides the simulated network topology where the Ansible
automation tasks are executed for testing purposes. It allows testing of
configurations, gathering device information in a controlled virtual
environment before performing on a live system.

7.  **GNS VM using VMware Workstation**

The GNS VM is hosted in VMware Workstation to emulate real network
devices where IOS and IOU images are stored in the VM which can be
accessed with the GNS3 Client. Bridge Mode networking connection is used
to connect the virtual lab with the host with the Ansible automation
engine. This setup enables seamless communication between the Netrunner
application and simulated network devices, allowing for real-time
automation and testing across the network.

#### 2.3.1.2 System Working Mechanism 

The Netrunner application uses a purposeful workflow where users start
with authentication to handle inventory control before choosing
playbooks and creating temporary inventory file while running Ansible
tasks before recording results. The application combines all its steps
through seamless integration between frontend and backend, so users get
a smooth experience while automation runs reliably.

**\[Note:** For a detailed breakdown of the system workflow and
execution flow, please refer to [Appendix 11](#appendix-11).**\]**

## 2.3.2 Technical Components and Tools 

The development of Netrunner used a contemporary technology
infrastructure which integrates React for frontend development with Rust
for backend processes and Ansible for automated network management. A
combination of Tauri along with Vite was used for creating a
platform-agnostic solution that delivered high performance with safe
data storage capabilities. The development puzzled together a set of
architectural components and framework selections to boost system
usability along with performance speed and add scalability
functionality.

**\[Note:** For detailed information, Refer to [Appendix
10](#appendix-10)**\]**

## 2.4 Similar Projects 

To provide a broader perspective on existing network automation
solutions, detailed descriptions of Puppet and Cisco DNA have been
included. These tools represent two different approaches to
automation---system-level configuration and enterprise-level network
orchestration---serving as valuable comparisons to Netrunner\'s
objectives and scope.

**\[Note:** For full descriptions and visual references, please refer to
[Appendix 4](#_6.5_Appendix_4).**\]**

## 2.5 Comparison between Projects 

A comparative analysis was conducted between Netrunner, Puppet, and
Cisco DNA to highlight their purposes, architecture, target users, and
automation capabilities. This comparison helps position Netrunner in the
broader context of network automation tools, especially for small to
medium-scale environments.

**\[Note:** For a detailed comparison table, please refer to [Appendix
5](#_6.4_Appendix_5).**\]**

### 2.5.1 Why Netrunner? 

Netrunner is a network automation tool that is developed to tackle the
modern network intricacies and issues related to scalability. Unlike
traditional methods that often rely on extensive manual configuration
and troubleshooting, Netrunner leverages Ansible playbooks and a React
based graphical user interface (GUI) layer over Ansible to rid
repetitions of manual tasks, guarantee same configurations are employed,
and minimize opportunities for mistakes. This makes it valuable for
automating network tasks raising operational productivity hence enabling
network engineers to manage the networks with little focus on trivial
issues. Through the combination of React, Rust backend and Tauri,
Netrunner presents a sleek cross-platform application giving the
capability to perform activities like network device management, basic
network configurations, and analyzing network interface and
configuration.

Moreover, the Netrunner developed with the concept of scalability and
flexibility in mind the product can be effectively used in the small
branch office networks as well as in the large enterprise networks.
Compared to other tools such as Puppet and Cisco DNA, Netrunner can
provide cost and flexibility-effective solutions that are ultimately
designed for network engineers. It will be completely non-commercial and
freely available, which supports connection with a broad spectrum of
devices and systems, including using SSH interactions. In Netrunner's
ability to customize the various processing pathways, it will position
itself well to be efficient in being fashionable for today's network
handling and management operations.

# Chapter 3: Development

## 3.1 Considered Methodologies

**\[Note: For detailed information on considered methodology refer to
[Appendix 6](#appendix-6)\]**

## 3.2 Selected Methodology

(Schwaber & Sutherland, 2020) Scrum developed by Ken Schwaber and Jeff
Sutherland is used at any time complex products must be developed. Scrum
is an Agile development type. Projects organize Scrum, a management
structure, to manage teams who independently allocate tasks and work
towards a shared goal. It is a structure within which individuals and
groups may address complex adaptive issues and at the same time optimize
product delivery innovation and efficiency. Scrum is used to
self-organize and strive toward a common objective as Scrum ensures that
we remain creative and productive while enabling us to create goods of
the greatest caliber and with Scrum, development happens in small
increments, iterations, and thus capable of adapting to new
requirements.

Scrum has some values which are Courage, Focus, Commitment, Respect and
Openness to be considered by the development team or an individual.

<figure>
<img src="media/image6.jpg" style="width:4.11222in;height:2.2831in"
alt="A diagram of a scrum AI-generated content may be incorrect." />
<figcaption><p>: Demonstration of Scrum Values (org,
2024)</p></figcaption>
</figure>

<figure>
<img src="media/image7.png" style="width:4.45139in;height:2.22569in"
alt="A diagram of scrum AI-generated content may be incorrect." />
<figcaption><blockquote>
<p>: Demonstration of Scrum Guide (org, 2024)</p>
</blockquote></figcaption>
</figure>

## 3.3. Phases of Methodology 

Implementation of the Scrum methodology in the Netrunner tool
development involved the following five key phases. According to the
goal of each phase, tasks were organized into short iterations or
Sprints and tracked using Trello board to ensure timely delivery and
iterative improvement.

### 3.3.1 Inception (Product Backlog)

Every project requiring success needs to establish a solid foundation
initially. The initiation phase sets out a clear product vision which
establishes both project goals and high-level deliverables along with
scope definition and objective description. Team members receive their
responsibilities, and the initial product backlog receives its features
while the development team gets formed. The project initiation phase
establishes a common vision between all stakeholders regarding both the
project objectives and the established goals.

+-------------+--------------------------------------------------------+
| Overall     | - Define the product vision, gather initial            |
| Goal        |   requirements and identify key stakeholders to set a  |
|             |   clear direction for the project and develop a        |
|             |   foundational framework for planning and executing    |
|             |   the project                                          |
+=============+========================================================+
| Expected    | - A comprehensive Product Backlog outlines the core    |
| Overall     |   features and functionalities.                        |
| Outcome     |                                                        |
|             | - Clear understanding of project scope, targeted user, |
|             |   and key business objectives.                         |
|             |                                                        |
|             | - Identification of project risk and strategies for    |
|             |   early mitigation.                                    |
|             |                                                        |
|             | - Defined communication plan and project timeline      |
|             |   aligned with sprint-based delivery.                  |
+-------------+--------------------------------------------------------+

<figure>
<img src="media/image8.png" style="width:1.46765in;height:2.2585in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Product Backlog card from Trello
board.</p></figcaption>
</figure>

\[Note: For Detailed Product Backlog and Screenshots refer to [Appendix
7](#appendix-7)\]

### 3.3.2 Planning and Estimation 

After a vision is established, the team needs to move into planning and
the product backlogs are broken down into epics and refined into
tactical user stories. Collaborating with the Product Owner, the team
estimates and prioritizes these stories. A Sprint Backlog serves as a
document which specifies the information to deliver through the next
sprint period. This stage prepares the way for specific time-constrained
iterations to follow.

### 3.3.3 Execution

Team members proceed to development after finalizing the plan. The team
carries out Sprint execution by processing user stories from the Sprint
backlog. Weekly stand-up meetings allow teams to maintain transparency,
which display advancement as well as remove obstacles. The work progress
is tracked through tools such as burndown charts and Trello to validate
continuous work movement while maintaining focus on the sprint goal.

### 3.3.4 Review and Retrospective

During Sprint Review sessions at the sprint conclusion the team exhibits
their work to stakeholders who then offer their assessment.
Retrospective is conducted afterward when the group assesses successes
and failures while figuring out methods to advance during subsequent
sprints. This phase strengthens Scrum's core value of continuous
improvement alongside adaptive measures.

### 3.3.5 Release

The outcome of development initiatives reaches its end during the
release phase. Through this approach users receive functional product
builds that give them early access to valuable product outputs. The
successful completion of a project may prompt teams to organize both a
project-wide retrospective for success achievement combined with lessons
identification for project evolution.

## 3.4 Survey Results

### 3.4.1 Pre-Survey Results

The pre-development survey was conducted to gather user insights into
network automation preferences, familiarity with automation tools and
user interface exceptions from Netrunner tool. The survey received a
total of 14 responses from individuals ranging from students to
professionals such as network engineers and system administrators.

**Highlights from the pre-survey**

- Respondents were affiliated with organizations like Vianet
  Communications, BL Enterprises, and Islington College.

- 57.1% of participants identified as students, while 35.7% were network
  engineers.

- 78.6% had used Python with libraries like Netmiko or NAPALM, followed
  by Ansible (28.6%) and Cisco NSO (21.4%).

- 50% of respondents rated Ansible as highly suitable, while 35.7% rated
  it as suitable for network automation.

- The most requested features in a network automation tool included:

  - Automated configuration (85.7%)

  - Easy-to-use GUI (85.7%)

  - Multi-vendor support (78.6%)

  - Error detection & rollback (78.6%)

  - Secure communication protocols (78.6%)

- 42.9% rated a React-based GUI as highly important, with an additional
  21.4% giving it a score of 9 out of 10.

- When asked about deployment preferences, 28.6% strongly preferred a
  desktop application built with Electron, while 28.6% remained neutral.

- For running Ansible playbooks, 50% preferred using Python with
  ansible-runner. Other choices included:

  - Ansible Tower (21.4%)

  - Custom REST API (7.1%)

  - Local execution (7.1%)

  - Dockerized Ansible (7.1%)

- 64.3% expressed willingness to test the tool and provide feedback
  during development.

- 3 responses from the participants also suggested insightful
  suggestions for future enhancements.

### 3.4.2 Post-Survey Results

A post-development survey was conducted to evaluate user satisfaction
and effectiveness of the Netrunner network automation tool after
implementation. A total of 23 responses were collected from individuals
including students, network engineers, IT support staff, system
administrators, and programmers.

**Highlights from the post-survey:**

- 47.8% of participants identified as students, while 30.4% were IT
  support staff and 8.7% were network engineers.

- 43.5% had no prior experience with network automation tools, while
  34.8% were at an intermediate level.

- 60.9% of respondents rated Netrunner as very easy to use, while
  another 17.4% found it easy.

- The average UI rating was 9.04 out of 10, with 65.2% giving a perfect
  score of 10.

- 69.6% of users found the interface very intuitive, with another 13%
  rating it as intuitive.

- 78.3% of users said the tool fully met their expectations for
  automating network tasks.

- The most useful features, as voted by users, were:

  - Playbook Runner GUI (100%)

  - Dynamic Inventory Management (95.5%)

  - Toggle Appearance Mode (86.4%)

- 69.6% of users were very satisfied with the performance of the tool,
  and no respondents marked it as unsatisfactory.

- The playbook execution feature was considered very useful by 78.3%,
  with 21.7% finding it useful.

- 68.2% of participants confirmed that output logs provided clear and
  sufficient feedback.

- When asked if they would recommend Netrunner to others in their field:

  - 65.2% responded Definitely

  - 17.4% said Probably

- Participants also suggested insightful suggestions such as:

  - Addition of a playbook creator

  - Implementation of a log analysis dashboard

The post-survey responses indicate a strong positive reception of the
Netrunner tool, particularly for its intuitive GUI, ease of use, and
effective playbook execution features. Constructive suggestions will
inform future enhancements in usability and functionality.

## 3.5 Requirement Analysis

The process of requirement analysis combines user-based system needs
understanding with stakeholder and technical group requirements that
produce functional along with non-functional specifications for guiding
development activities.

A complete specification and description of requirements for successful
development activities has been developed and documented in SRS
document.

Othe requirements for the completion of Netrunner tool development are
listed below:

### 3.5.1 Hardware Requirements

A PC equipped with WIFI or Ethernet connection with minimum
requirements:

- **Processor:** Apple M1/M2 or Intel i5/i7

- **Ram:** 8 GB or higher

- **Storage:** SSD with at least 50 GB free space

- **Operating System:** Debian/ MacOS

### 3.5.2 Software Requirements

- **IDE**: Visual Studio Code,

- **Node JS,**

- **React JS,**

- **Tailwind CSS,**

- **Rust,**

- **VMware Workstation,**

- **GNS3 VM,**

- **IOS and IOU images:** Cisco Router and Cisco L2/L3 switches,

- **Version Control:** GitHub,

- **Designing and Developing Wireframes**: Wireframe

- **Developing Diagrams and Charts**: (Draw.io, PlantUML),

- **Developing Gantt Chart**: TeamGantt,

- **Project Management Tool**: Trello

## 3.6 Design

### 3.6.1 Application Logo

<figure>
<img src="media/image9.png" style="width:5.07745in;height:5.07745in"
alt="A logo for a network AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Logo of Netrunner
Application.</p></figcaption>
</figure>

### 3.6.2 System Design

#### 3.6.2.1 Use Case Diagram

<figure>
<img src="media/image10.png" style="width:4.82391in;height:7.375in"
alt="A diagram of a person AI-generated content may be incorrect." />
<figcaption><p>: Demonstration of Use case diagram of Netrunner
Application.</p></figcaption>
</figure>

#### 3.6.2.2 ER Diagram

![: Demonstration of ER diagram of Netrunner
application.](media/image11.png){width="6.5in"
height="4.643055555555556in"}

#### 3.6.2.3 Activity Diagram

![: Demonstration of Activity Diagram of Netrunner
Application.](media/image12.png){width="6.5in"
height="4.333333333333333in"}

#### 3.6.2.4 Gantt Chart

![: Imported Gantt chart of Netrunner Application Development using
Scrum Methodology.](media/image13.png){width="6.5in"
height="2.441666666666667in"}

#### 3.6.2.5 Work Breakdown Structure

<figure>
<img src="media/image14.png" style="width:6.5in;height:3.56528in"
alt="A diagram of a company AI-generated content may be incorrect." />
<figcaption><p>: Demonstration of WBS for development of Netrunner
Application.</p></figcaption>
</figure>

### 3.6.3 Wireframe

<figure>
<img src="media/image15.png" style="width:5.02326in;height:2.98229in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Wireframe for Playbook Runner
Component.</p></figcaption>
</figure>

<figure>
<img src="media/image16.png" style="width:4.19116in;height:2.5353in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Wireframe for Add Host
component.</p></figcaption>
</figure>

<figure>
<img src="media/image17.png" style="width:4.30331in;height:2.55026in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Wireframe of Add Group
component.</p></figcaption>
</figure>

<figure>
<img src="media/image18.png" style="width:4.31311in;height:2.57082in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Wireframe of Assign Host to Group
component.</p></figcaption>
</figure>

## 3.7 Implementation

This section demonstrates the implementation of Scrum methodology by
showcasing tasks held in each sprint and task status of each sprint with
Review and Retrospective and Sprint Release.

##### Sprint 1: Product Vision

\[For detailed Sprint Information refer to [Appendix 8](#sprint-1)\]

![: Screenshot of Primary card for Sprint 1 in Trello
Board.](media/image19.png){width="1.075450568678915in"
height="0.6598173665791776in"}

![: Screenshot of checklist of Product Vision Card.
(1)](media/image20.png){width="3.7921544181977254in"
height="2.06461832895888in"}

![: Screenshot of checklist of Product Vision Card.
(2)](media/image21.png){width="3.8157305336832894in"
height="2.0675546806649168in"}

![: Screenshot of checklist of Product Vision Card.
(3)](media/image22.png){width="3.8410958005249345in"
height="2.043497375328084in"}

![: Screenshot of checklist of Product Vision Card.
(4)](media/image23.png){width="3.8358694225721783in"
height="1.9617957130358705in"}

##### Sprint 2: Project Stakeholder Mapping

\[For detailed Sprint Information refer to [Appendix 8](#sprint-2)\]

![:: Screenshot of primary card (Stakeholder Mapping) of Sprint 2 in
Trello board.](media/image24.png){width="2.2190594925634297in"
height="1.3231014873140858in"}

![: Screenshot of checklist of Stakeholder Mapping card.
(1)](media/image25.png){width="4.781917104111986in"
height="1.9273523622047244in"}

![: Screenshot of checklist of Stakeholder Mapping card.
(2)](media/image26.png){width="4.7194083552056in"
height="2.073206474190726in"}

![: : Screenshot of checklist of Stakeholder Mapping card.
(3)](media/image27.png){width="4.761081583552056in"
height="1.9273523622047244in"}

##### Sprint 3: Project Initial Requirements

\[For detailed Sprint Information refer to [Appendix 8](#sprint-3)\]

![: Screenshot of primary card (Initial Requirement) of Sprint 3 in
Trello board.](media/image28.png){width="1.2036111111111112in"
height="0.7187434383202099in"}

![: Screenshot of checklist of initial requirement
card.](media/image29.png){width="2.924685039370079in"
height="2.1205588363954506in"}

##### Sprint 4: Drafting Project Timeline

\[For detailed Sprint Information refer to [Appendix 8](#sprint-4)\]

![: Screenshot of primary card (Draft project timeline) of Sprint 4 in
Trello board.](media/image30.png){width="2.2086417322834646in"
height="1.2918471128608924in"}

![: Screenshot of checklist of Draft project timeline
card.](media/image31.png){width="4.688153980752406in"
height="2.917073490813648in"}

##### Sprint 5: Communication Plan

\[For detailed Sprint Information refer to [Appendix 8](#sprint-5)\]

![: Screenshot of primary card (Communication Plan) of Sprint 5 in
Trello board.](media/image32.png){width="1.493720472440945in"
height="0.850492125984252in"}

![: Screenshot of checklist of Communication Plan
card.](media/image33.png){width="2.6375306211723535in"
height="1.4004582239720036in"}

##### Sprint 6: Ansible and Testing Environment Setup

\[For detailed Sprint Information refer to [Appendix 8](#sprint-6)\]

<figure>
<img src="media/image34.png" style="width:1.11068in;height:4.19008in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary cards of Sprint 6 in Trello
board.</p></figcaption>
</figure>

##### Sprint 7: Development Environment Setup

\[For detailed Sprint Information refer to [Appendix 8](#sprint-7)\]

<figure>
<img src="media/image35.png" style="width:2.14613in;height:1.41686in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary card (Setup Development
Environment) of Sprint 7 in Trello board.</p></figcaption>
</figure>

<figure>
<img src="media/image36.png" style="width:4.32633in;height:5.83083in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Development Environment
Setup card.</p></figcaption>
</figure>

<figure>
<img src="media/image37.png" style="width:1.30504in;height:1.75506in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Primary card for retrospective and lesson
learned for Sprint 7 in Trello board.</p></figcaption>
</figure>

<figure>
<img src="media/image38.png" style="width:2.84195in;height:2.65644in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary card with comment of change to
NPM in Trello board.</p></figcaption>
</figure>

<figure>
<img src="media/image39.png" style="width:1.57016in;height:2.972in"
alt="A screenshot of a chat AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of lesson learned to Setup Tauri app at
Sprint 7</p></figcaption>
</figure>

<figure>
<img src="media/image40.png" style="width:2.23731in;height:3.28228in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of lesson learned to install Tailwind CSS at
Sprint 7</p></figcaption>
</figure>

##### Sprint 8: Database Setup and Host Management

\[For detailed Sprint Information refer to [Appendix 8](#sprint-8)\]

<figure>
<img src="media/image41.png" style="width:2.48993in;height:3.15669in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary cards of Sprint 8 in Trello
board.</p></figcaption>
</figure>

![A screenshot of a computer screen AI-generated content may be
incorrect.](media/image42.png){width="2.6161931321084864in"
height="2.088817804024497in"}

![: Screenshot of checklist of Database Initialization
card.](media/image43.png){width="2.5383136482939634in"
height="3.250180446194226in"}

<figure>
<img src="media/image44.png" style="width:2.29107in;height:2.34466in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to initialize
database.</p></figcaption>
</figure>

: Screenshot of checklist of Host Management card.

![A computer screen with text on it AI-generated content may be
incorrect.](media/image45.png){width="5.071528871391076in"
height="1.7376498250218724in"}

<figure>
<img src="media/image46.png" style="width:4.45329in;height:2.56873in"
alt="A screen shot of a computer code AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to add host to
database.</p></figcaption>
</figure>

<figure>
<img src="media/image47.png" style="width:6.5in;height:1.46875in"
alt="A computer code on a black background AI-generated content may be incorrect." />
<figcaption><p>: : Screenshot of Rust backend code to get host list from
the database.</p></figcaption>
</figure>

<figure>
<img src="media/image48.png" style="width:6.5in;height:1.26042in"
alt="A computer screen shot of text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to remove host from the
database.</p></figcaption>
</figure>

<figure>
<img src="media/image49.png" style="width:6.5in;height:1.6625in"
alt="A screen shot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to modify host from
database.</p></figcaption>
</figure>

![: Screenshot of Rust backend code to modify credential of the host
from the database.](media/image50.png){width="2.829715660542432in"
height="3.821516841644794in"}

<figure>
<img src="media/image51.png" style="width:4.97592in;height:2.26267in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Group Management and
Relationship card.</p></figcaption>
</figure>

<figure>
<img src="media/image52.png" style="width:4.97163in;height:1.0177in"
alt="A computer code on a black background AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Group Management
card.</p></figcaption>
</figure>

<figure>
<img src="media/image53.png" style="width:4.82167in;height:2.25527in"
alt="A screen shot of a computer screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to add group to
database.</p></figcaption>
</figure>

<figure>
<img src="media/image54.png" style="width:4.55241in;height:1.81853in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to get group list from
the database.</p></figcaption>
</figure>

<figure>
<img src="media/image55.png" style="width:6.04795in;height:1.36273in"
alt="A computer code on a black background AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to remove group from
the database.</p></figcaption>
</figure>

: Screenshot of Rust backend code to modify group from the database.

<figure>
<img src="media/image56.png" style="width:3.79539in;height:1.57954in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Host-Group Relationships
card.</p></figcaption>
</figure>

<figure>
<img src="media/image57.png" style="width:3.81708in;height:2.92847in"
alt="A computer screen shot of a program code AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to assign host to a
group from the database.</p></figcaption>
</figure>

<figure>
<img src="media/image58.png" style="width:3.43083in;height:3.27541in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to reassign host to a
different group from database.</p></figcaption>
</figure>

<figure>
<img src="media/image59.png" style="width:3.57744in;height:2.7171in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to remove host from an
assigned group from the database.</p></figcaption>
</figure>

##### Sprint 9: Inventory Management and Testing

\[For detailed Sprint Information refer to [Appendix 8](#sprint-9)\]

<figure>
<img src="media/image60.png" style="width:1.73562in;height:1.62292in"
alt="A screenshot of a software application AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary cards of Sprint 9 in Trello
board.</p></figcaption>
</figure>

<figure>
<img src="media/image61.png" style="width:3.44268in;height:2.63939in"
alt="A computer screen shot of a program code AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code to view inventory list
from the database.</p></figcaption>
</figure>

<figure>
<img src="media/image62.png" style="width:3.1192in;height:2.5655in"
alt="A screenshot of a checklist AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Integration Testing
card.</p></figcaption>
</figure>

<figure>
<img src="media/image63.png" style="width:1.6751in;height:2.07597in"
alt="A screenshot of a cell phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist of Review and Retrospective
card for Sprint 9.</p></figcaption>
</figure>

##### Sprint 10: Frontend Development for Dynamic Inventory Management

\[For detailed Sprint Information refer to [Appendix 8](#sprint-10)\]

<figure>
<img src="media/image64.png" style="width:0.72758in;height:2.39652in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of primary cards for Sprint 10 in Trello
Board.</p></figcaption>
</figure>

![: Screenshot of checklist of Host Management
card.](media/image65.png){width="2.1152416885389327in"
height="1.8138615485564304in"}

![: Screenshot of React component (HostForm) to render GUI for adding
new host. (1)](media/image66.png){width="3.0705872703412074in"
height="2.927227690288714in"}

![: Screenshot of React component (HostForm) to render GUI for adding
new host. (2)](media/image67.png){width="4.33005249343832in"
height="2.780300743657043in"}

<figure>
<img src="media/image68.png" style="width:3.94646in;height:5.37284in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (HostList) to render GUI
for modifying, deleting and displaying host from the database.
(1)</p></figcaption>
</figure>

<figure>
<img src="media/image69.png" style="width:5.95045in;height:2.62366in"
alt="A computer screen with text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (HostList) to render GUI
for modifying, deleting and displaying host from the database.
(2)</p></figcaption>
</figure>

<figure>
<img src="media/image70.png" style="width:6.5021in;height:2.3848in"
alt="A black background with a black border AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (HostList) to render GUI
for modifying, deleting and displaying host from the database.
(3)</p></figcaption>
</figure>

![: Screenshot of checklist of Group Management card from Sprint
10.](media/image71.png){width="2.868575021872266in"
height="2.4491502624671915in"}

<figure>
<img src="media/image72.png" style="width:3.78484in;height:2.80264in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (GroupFrom) to render GUI
for adding Group.</p></figcaption>
</figure>

![: Screenshot of React component (GroupList) to render GUI for modify,
remove and display groups from
inventory.](media/image73.png){width="6.0365682414698165in"
height="6.8646620734908135in"}

![: Screenshot of checklist of Assign host to Group card from Sprint
10.](media/image74.png){width="2.925492125984252in"
height="2.3156911636045496in"}

![: Screenshot of React component (AssignHostToGroupForm) to render GUI
for assigning host to a
group.](media/image75.png){width="3.925200131233596in"
height="5.594477252843395in"}

<figure>
<img src="media/image76.png" style="width:4.04701in;height:4.30932in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (InventoryList) to render
GUI for reassigning host to a group and removing host from a group.
(1)</p></figcaption>
</figure>

<figure>
<img src="media/image77.png" style="width:4.21466in;height:3.4816in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (InventoryList) to render
GUI for reassigning host to a group and removing host from a group.
(2)</p></figcaption>
</figure>

![: Screenshot of checklist of Inventory Display card from Sprint
10.](media/image78.png){width="3.9947626859142606in"
height="3.6047725284339456in"}

![: Screenshot of checklist Integration with Backend card from Sprint
10.](media/image79.png){width="3.9971292650918637in"
height="3.605873797025372in"}

<figure>
<img src="media/image80.png" style="width:5.37998in;height:8.23875in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (Inventory) for backend
integration. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image81.png" style="width:6.36157in;height:8.07158in"
alt="A screen shot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (Inventory) for backend
integration. (2)</p></figcaption>
</figure>

![A screen shot of a computer program AI-generated content may be
incorrect.](media/image82.png){width="6.5in" height="7.16875in"}

<figure>
<img src="media/image83.png" style="width:6.22944in;height:8.50986in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (Inventory) for backend
integration. (3)</p></figcaption>
</figure>

<figure>
<img src="media/image84.png" style="width:3.1601in;height:2.59312in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of React component (Inventory) for backend
integration. (4)</p></figcaption>
</figure>

![: Screenshot of checklist Styling card from Sprint
10.](media/image85.png){width="3.44998687664042in"
height="5.524755030621172in"}

<figure>
<img src="media/image86.png" style="width:6.26985in;height:2.95005in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>:Screenshot of CSS file(main.css) importing Tailwind
CSS.</p></figcaption>
</figure>

![: Screenshot of React component (darkModeToggle) for rendering dark
mode feature in GUI.](media/image87.png){width="3.8410312773403326in"
height="3.344433508311461in"}

:Screenshot of Checklist of Sprint Review and Retrospective from Sprint
10.

##### Sprint 11: Playbook Runner (Backend Development) 

\[For detailed Sprint Information refer to [Appendix 8](#sprint-11)\]

![: Screenshot of primary card of Sprint 11 in Trello
Board.](media/image88.png){width="2.022902449693788in"
height="2.9880293088363956in"}

![: Screenshot of checklist of Playbook Management card from Sprint
11.](media/image89.png){width="3.4016174540682416in"
height="3.120003280839895in"}

![: Screenshot of Rust backend code for retrieving playbook path and
list playbook from the local
directory.](media/image90.png){width="4.7422801837270345in"
height="3.8237160979877514in"}

![: Screenshot of checklist of Inventory File Creation card from Sprint
11.](media/image91.png){width="4.750662729658792in"
height="3.979722222222222in"}

![: Screenshot of Rust backend code for dynamically generating inventory
file in YAML format.](media/image92.png){width="5.18442804024497in"
height="3.841240157480315in"}

![: Screenshot of checklist of Playbook Execution card from Sprint
11.](media/image93.png){width="3.3889545056867894in"
height="3.247747156605424in"}

![: Screenshot of Rust backend code for executing playbook.
(1)](media/image94.png){width="4.647456255468066in"
height="4.0948261154855645in"}

![: Screenshot of Rust backend code for executing playbook.
(2)](media/image95.png){width="4.643832020997375in"
height="4.034576771653543in"}

![: Screenshot of Rust backend code for executing playbook.
(3)](media/image96.png){width="5.079016841644794in"
height="4.6427416885389325in"}

![: Screenshot of checklist of Error Handling and Logging from Sprint
11.](media/image97.png){width="3.141183289588801in"
height="2.693426290463692in"}

<figure>
<img src="media/image98.png" style="width:5.34454in;height:1.84651in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust backend code for sending response to
another function for logging.</p></figcaption>
</figure>

![: Screenshot of Rust backend code for logging output in logs
database.](media/image99.png){width="6.5in"
height="5.402777777777778in"}

##### Sprint 12: Playbook Runner (Frontend Development) 

\[For detailed Sprint Information refer to [Appendix 8](#sprint-12)\]

![: Screenshot of primary card for Sprint 12 in Trello
board.](media/image100.png){width="1.570508530183727in"
height="2.706748687664042in"}

![: Screenshot of checklist of Playbook Selection card from Sprint
12.](media/image101.png){width="3.9516994750656167in"
height="3.601991469816273in"}

![: Screenshot of React component (PlaybookSelector) for rendering
dropdown for listing available
playbooks](media/image102.png){width="4.4319870953630796in"
height="3.909239938757655in"}

![fetched by Rust backend.](media/image103.png){width="6.5in"
height="3.5944444444444446in"}

![: Screenshot of React component (PlaybookRunner) for calling Rust API
to fetch list of available
playbook.](media/image104.png){width="2.9885422134733157in"
height="2.5653860454943134in"}

![:Screenshot of checklist of Inventory Selection card from Sprint
12.](media/image105.png){width="5.5041262029746285in"
height="5.2124540682414695in"}

![: Screenshot of React component (PlaybookRunner) to fetch inventory
data by calling fetchData
function.](media/image106.png){width="5.562424540682414in"
height="8.491049868766405in"}

![: Screenshot of React component (PlaybookRunner) to render Inventory
Selector to allow user to select inventory to run ansible playbook on
selected inventories.](media/image107.png){width="4.101846019247594in"
height="4.00796697287839in"}

![: Screenshot of checklist of Playbook Execution card from Sprint
12.](media/image108.png){width="4.806371391076116in"
height="4.030470253718285in"}

![: Screenshot of React Component (PlaybookRunner) to call API to
execute selected playbook on selected
inventory.](media/image109.png){width="6.5in"
height="1.0770833333333334in"}

![: Screenshot of React Component (PlaybookRunner) to render button
which trigger the API call to executed selected playbook into selected
inventory.](media/image110.png){width="2.4104669728783903in"
height="2.085075459317585in"}

![: Screenshot of checklist of Display Execution Result card from Sprint
12.](media/image111.png){width="6.5in" height="2.004166666666667in"}

![: Screenshot of React Component (PlaybookRunner) to render the
execution result in GUI after playbook
execution.](media/image112.png){width="6.5in"
height="1.9368055555555554in"}

: Screenshot of React Component (PlaybookRunner) which called API for
displaying the output in GUI.

![: Screenshot of checklist of Testing and Review card from Sprint
12.](media/image113.png){width="4.178448162729659in"
height="3.908163823272091in"}

# Chapter 4: Testing and Analysis

## 4.1 Test Plan

### 4.1.1 Backend Unit Tests

+-------------------------------------+--------------------------------------------------+
| Test Case                           | Objective                                        |
+=====================================+==================================================+
| Database Operations                                                                    |
+----------------------------------------------------------------------------------------+
| Host                                                                                   |
+-------------------------------------+--------------------------------------------------+
| 1                                   | Test adding a host with valid data.              |
+-------------------------------------+--------------------------------------------------+
| 2                                   | Test adding a host with missing or invalid       |
|                                     | fields (e.g., empty name).                       |
+-------------------------------------+--------------------------------------------------+
| 3                                   | Test retrieving all hosts when the database is   |
|                                     | empty.                                           |
+-------------------------------------+--------------------------------------------------+
| 4                                   | Test retrieving all hosts after adding multiple  |
|                                     | hosts.                                           |
+-------------------------------------+--------------------------------------------------+
| 5                                   | Test modifying a host with valid and invalid     |
|                                     | data.                                            |
+-------------------------------------+--------------------------------------------------+
| 6                                   | Test removing a host and ensure it no longer     |
|                                     | exists in the database.                          |
+-------------------------------------+--------------------------------------------------+
| Group                                                                                  |
+-------------------------------------+--------------------------------------------------+
| 7                                   | Test adding a group with valid data.             |
+-------------------------------------+--------------------------------------------------+
| 8                                   | Test adding a group with a duplicate name.       |
+-------------------------------------+--------------------------------------------------+
| 9                                   | Test retrieving all groups when the database is  |
|                                     | empty.                                           |
+-------------------------------------+--------------------------------------------------+
| 10                                  | Test retrieving all groups after adding multiple |
|                                     | groups.                                          |
+-------------------------------------+--------------------------------------------------+
| 11                                  | Test modifying a group with valid data.          |
+-------------------------------------+--------------------------------------------------+
| 12                                  | Test modifying a group with invalid data.        |
+-------------------------------------+--------------------------------------------------+
| 13                                  | Test removing a group and ensure it no longer    |
|                                     | exists in the database.                          |
+-------------------------------------+--------------------------------------------------+
| Host-Group Relationship                                                                |
+-------------------------------------+--------------------------------------------------+
| 14                                  | Test assigning a host to a group.                |
+-------------------------------------+--------------------------------------------------+
| 15                                  | Test reassigning a host from one group to        |
|                                     | another                                          |
+-------------------------------------+--------------------------------------------------+
| 16                                  | Test removing a host from a group.               |
+-------------------------------------+--------------------------------------------------+
| 17                                  | Test viewing the inventory after assigning hosts |
|                                     | to groups.                                       |
+-------------------------------------+--------------------------------------------------+

+-------------------------------------+--------------------------------------------------+
| Test Case                           | Objective                                        |
+=====================================+==================================================+
| Playbook Management                                                                    |
+----------------------------------------------------------------------------------------+
| Playbook Listing                                                                       |
+-------------------------------------+--------------------------------------------------+
| 18                                  | Test listing playbook from the playbook          |
|                                     | directory when multiple YAML files are present   |
|                                     | with full path.                                  |
+-------------------------------------+--------------------------------------------------+
| Playbook Execution                                                                     |
+-------------------------------------+--------------------------------------------------+
| 19                                  | Test running a playbook with valid inventory and |
|                                     | playbook.                                        |
+-------------------------------------+--------------------------------------------------+

### 4.1.2 Frontend Unit Tests

+-------------------------------------+--------------------------------------------+
| Test Case                           | Objective                                  |
+=====================================+============================================+
| Components                                                                       |
+----------------------------------------------------------------------------------+
| HostForm Component                                                               |
+-------------------------------------+--------------------------------------------+
| 20                                  | Test rendering the form with all input     |
|                                     | fields and the \"Add\" button.             |
+-------------------------------------+--------------------------------------------+
| 21                                  | Test updating state when typing into input |
|                                     | fields.                                    |
+-------------------------------------+--------------------------------------------+
| 22                                  | Test addHost function is called when the   |
|                                     | \"Add\" or "+" button is clicked and the   |
|                                     | host is added.                             |
+-------------------------------------+--------------------------------------------+
| GroupForm Component                                                              |
+-------------------------------------+--------------------------------------------+
| 23                                  | Test rendering the form with the input     |
|                                     | field and the \"Add\" button.              |
+-------------------------------------+--------------------------------------------+
| 24                                  | Test updating state when typing into the   |
|                                     | input field.                               |
+-------------------------------------+--------------------------------------------+
| 25                                  | Test onAddGroup function when the \"Add\"  |
|                                     | button is clicked.                         |
+-------------------------------------+--------------------------------------------+
| AssignHostToGroupForm Component                                                  |
+-------------------------------------+--------------------------------------------+
| 26                                  | Test rendering dropdowns for hosts and     |
|                                     | groups.                                    |
+-------------------------------------+--------------------------------------------+
| 27                                  | Test updating state when selecting a host  |
|                                     | or group.                                  |
+-------------------------------------+--------------------------------------------+
| 28                                  | Test calling the onAssign function when    |
|                                     | the \"Assign\" button is clicked.          |
+-------------------------------------+--------------------------------------------+
| HostsList Component                                                              |
+-------------------------------------+--------------------------------------------+
| 29                                  | Test rendering a list of hosts.            |
+-------------------------------------+--------------------------------------------+
| 30                                  | Test editing a host and saving changes.    |
+-------------------------------------+--------------------------------------------+
| 31                                  | Test deleting a host and ensuring it is    |
|                                     | removed from the list.                     |
+-------------------------------------+--------------------------------------------+
| GroupsList Component                                                             |
+-------------------------------------+--------------------------------------------+
| 32                                  | Test rendering a list of groups.           |
+-------------------------------------+--------------------------------------------+
| 33                                  | Test editing a group and saving changes.   |
+-------------------------------------+--------------------------------------------+
| 34                                  | Test deleting a group and ensuring it is   |
|                                     | removed from the list.                     |
+-------------------------------------+--------------------------------------------+
| InventoryList Component                                                          |
+-------------------------------------+--------------------------------------------+
| 35                                  | Test rendering the inventory of groups and |
|                                     | their associated hosts.                    |
+-------------------------------------+--------------------------------------------+
| 36                                  | Test reassigning a host to a different     |
|                                     | group.                                     |
+-------------------------------------+--------------------------------------------+
| 37                                  | Test removing a host from a group.         |
+-------------------------------------+--------------------------------------------+
| PlaybookSelector Component                                                       |
+-------------------------------------+--------------------------------------------+
| 38                                  | Test rendering the dropdown with a list of |
|                                     | playbooks.                                 |
+-------------------------------------+--------------------------------------------+
| 39                                  | Test selecting a playbook and updating the |
|                                     | state.                                     |
+-------------------------------------+--------------------------------------------+
| PlaybookRunner Component                                                         |
+-------------------------------------+--------------------------------------------+
| 40                                  | Test rendering the playbook selector,      |
|                                     | inventory selector, and \"Run Playbook\"   |
|                                     | button.                                    |
+-------------------------------------+--------------------------------------------+
| 41                                  | Test running a playbook with valid inputs  |
|                                     | and displaying the output of a playbook    |
|                                     | execution.                                 |
+-------------------------------------+--------------------------------------------+
| 42                                  | Test running a playbook with valid inputs  |
|                                     | and displaying the output of a playbook    |
|                                     | execution.                                 |
+-------------------------------------+--------------------------------------------+
| 43                                  | Test displaying the output of a playbook   |
|                                     | execution with invalid playbook value.     |
+-------------------------------------+--------------------------------------------+
| 44                                  | Test handling errors during playbook       |
|                                     | execution.                                 |
+-------------------------------------+--------------------------------------------+

## 4.2 Unit Testing

### 4.2.1 Backend Unit Testing (Database Operation)

#### 4.2.1.1 Host

  -----------------------------------------------------------------------
  Test Case                           1
  ----------------------------------- -----------------------------------
  Objective                           Test adding a host with valid data.

  Action                              Call add_host function to insert
                                      new host into the host table of
                                      inventory database.

  Expected Test                       A test host should be added to the
                                      host table of inventory database.

  Actual Test Result                  A test host is added to the
                                      inventory database.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function for adding host to
inventory.](media/image114.png){width="3.0056496062992126in"
height="2.5512707786526683in"}

<figure>
<img src="media/image115.png" style="width:4.07607in;height:1.91915in"
alt="A screen shot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test result on adding host on
inventory database.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           2
  ----------------------------------- -----------------------------------
  Objective                           Test adding a host with missing or
                                      invalid fields.

  Action                              Adding a host without a host name.

  Expected Test                       Creating a test function to add a
                                      host without name.

  Actual Test Result                  The validation logic gave a
                                      validation output as Host name
                                      cannot be empty.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![](media/image116.png){width="3.930896762904637in"
height="3.2938035870516185in"}

: Screenshot of Rust test code for testing function for adding host with
missing field.

![](media/image117.png){width="5.05691491688539in"
height="2.615980971128609in"}

: Screenshot of Successful test of failing to add host with missing
field.

  -----------------------------------------------------------------------
  Test Case                           3
  ----------------------------------- -----------------------------------
  Objective                           Test retrieving all hosts when the
                                      database is empty.

  Action                              Call get_host function to
                                      retrieving all hosts even the
                                      database is empty.

  Expected Test                       Creating of test
                                      get_host_when_empty function and
                                      call get_host function it should
                                      give the test result.

  Actual Test Result                  The logic gave the test output for
                                      retrieving all hosts when data as
                                      ok.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image118.png" style="width:6.5in;height:3.35in"
alt="A computer screen shot of text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust test code for testing function to
retrieve host list even when the database is empty.</p></figcaption>
</figure>

<figure>
<img src="media/image119.png" style="width:6.5in;height:2.36458in"
alt="A screen shot of a computer AI-generated content may be incorrect." />
<figcaption><p>: : Screenshot of Successful test on retrieving hostlist
even when database is empty.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           4
  ----------------------------------- -----------------------------------
  Objective                           Test retrieving all hosts after
                                      adding multiple hosts.

  Action                              Creating a test function with the
                                      logic for adding multiple hosts and
                                      adding all the host to a group and
                                      calling get_host function to
                                      retrieve all hosts.

  Expected Test                       The logic should give all the host
                                      which are add with the logical test
                                      function.

  Actual Test Result                  The test gave host was added to the
                                      inventory and listed the retrieved
                                      host as output.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![](media/image120.png){width="6.091692913385827in"
height="5.784503499562555in"}

![: Screenshot of Rust test code for testing function to retrieve all
host from database after adding multiple hosts to the
database.](media/image121.png){width="6.356630577427821in"
height="3.1008912948381453in"}

  -----------------------------------------------------------------------
  Test Case                           5
  ----------------------------------- -----------------------------------
  Objective                           Test modifying a host with valid
                                      and invalid data.

  Action                              Creating test function with the
                                      logic for modifying host calling
                                      modify_host function.

  Expected Test                       The test logic host should be
                                      modified as new modified data.

  Actual Test Result                  The test output gave that host was
                                      added and modified with different
                                      data in the inventory.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

  : : Screenshot of Successful test on retriving all host from the
  database after database enriched with multiple host data.

![](media/image122.png){width="5.202770122484689in"
height="2.1378062117235346in"}

![: Screenshot of Successful test on modifying a host with valid
data.](media/image123.png){width="6.58673665791776in"
height="7.826675415573053in"}

: Screenshot of Rust test code for testing function to modifying a host
with valid and data.

  -----------------------------------------------------------------------
  Test Case                           6
  ----------------------------------- -----------------------------------
  Objective                           Test removing a host (remove_host)
                                      and ensure it no longer exists in
                                      the database.

  Action                              Creating test function with the
                                      logic for modifying host calling
                                      remove_host function.

  Expected Test                       The test logic host should be
                                      removing the host from the
                                      inventory database.

  Actual Test Result                  The test output gave that the host
                                      was successfully removed from the
                                      inventory database and displayed
                                      inventory before and after removal
                                      of the host.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to removing host
from the database and ensuring it no longer exist in the
database.](media/image124.png){width="4.977649825021873in"
height="4.950527121609799in"}

<figure>
<img src="media/image125.png" style="width:4.91858in;height:2.54599in"
alt="A computer screen shot of a black screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on removing host from the
inventory and ensure it does not exist in the inventory
database.</p></figcaption>
</figure>

#### 4.2.1.2 Group

  -----------------------------------------------------------------------
  Test Case                           7
  ----------------------------------- -----------------------------------
  Objective                           Test adding a group with valid
                                      data.

  Action                              Creating test function with the
                                      logic for add group calling
                                      add_group function.

  Expected Test                       The test logic group should be
                                      added to the inventory.

  Actual Test Result                  The test output gave that a new
                                      group is added to the database with
                                      group id and group name.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to add group with
valid data.](media/image126.png){width="4.691255468066491in"
height="2.7891918197725283in"}

<figure>
<img src="media/image127.png" style="width:5.02162in;height:1.77312in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on adding group to
database with valid data.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           8
  ----------------------------------- -----------------------------------
  Objective                           Test adding a group with a
                                      duplicate name.

  Action                              Creating test function with the
                                      logic for adding group with
                                      duplicate name calling add_group
                                      function.

  Expected Test                       The test logic should be a failure
                                      due to duplicate group creadential.

  Actual Test Result                  The test failed as duplicate data
                                      cannot be enriched.

  Conclusion                          Sucessful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to adding group
with duplicate name.](media/image128.png){width="4.82077646544182in"
height="3.874646762904637in"}

![: Screenshot of Successful test on getting error while adding group
with duplicate name.](media/image129.png){width="4.724083552055993in"
height="2.776408573928259in"}

  -----------------------------------------------------------------------
  Test Case                           9
  ----------------------------------- -----------------------------------
  Objective                           Test retrieving all groups when the
                                      database is empty.

  Action                              Creating test function with the
                                      logic for retrieving group even
                                      when database is empty calling
                                      get_group function.

  Expected Test                       Test logic should give an ouptup ok
                                      and success.

  Actual Test Result                  The test result show ok and
                                      successful on retrieving group list
                                      even when the database is empty.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to retrive group
list from the database when database is
empty.](media/image130.png){width="4.604616141732284in"
height="2.346091426071741in"}

![: Screenshot of Successful test on retrieving group list from the
database when database is
empty.](media/image131.png){width="4.368507217847769in"
height="1.752069116360455in"}

  -----------------------------------------------------------------------
  Test Case                           10
  ----------------------------------- -----------------------------------
  Objective                           Test retrieving all groups after
                                      adding multiple groups.

  Action                              Creating test function with the
                                      logic for adding multiple groups
                                      calling add_group function and
                                      retrieving calling get_group
                                      function.

  Expected Test                       The test logic should add multiple
                                      group to the database and display
                                      the inventory database.

  Actual Test Result                  The test output shows that the
                                      database is enriched with multiple
                                      groups and printed the inventory
                                      with the added group calling
                                      get_group function.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image132.png" style="width:3.17088in;height:3.04248in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust test code for testing function to
retrieve all groups after adding multiple groups.</p></figcaption>
</figure>

<figure>
<img src="media/image133.png" style="width:4.79703in;height:1.95007in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on retrieving all groups
after adding multiple groups.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           11
  ----------------------------------- -----------------------------------
  Objective                           Test modifying a group with valid
                                      data.

  Action                              Creating test function with the
                                      logic for modifying group with
                                      valid name calling modify_group
                                      function.

  Expected Test                       The test logic should modify group
                                      with the valid data.

  Actual Test Result                  The test result shows modification
                                      of the group data.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to modify a group
with valid data and display group inventory before and after
modification.](media/image134.png){width="5.167512029746281in"
height="3.9197998687664044in"}

<figure>
<img src="media/image135.png" style="width:4.58519in;height:2.03346in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on modifying a group with
valid data and displaying Group Inventory after
modification.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           12
  ----------------------------------- -----------------------------------
  Objective                           Test modifying a group with invalid
                                      data.

  Action                              Creating test function with the
                                      logic for modifying group with
                                      invalid data calling modify_group
                                      function.

  Expected Test                       The test logic should try to modify
                                      group with invalid data and get
                                      failed status.

  Actual Test Result                  The test output shows failed as
                                      invalid data cannot be enriched.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image136.png" style="width:3.98837in;height:3.39992in"
alt="A screen shot of a computer code AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust test code for testing function to
modify a group with invalid data.</p></figcaption>
</figure>

<figure>
<img src="media/image137.png" style="width:3.92636in;height:2.20983in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on getting error while
modifying a group with invalid data.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           13
  ----------------------------------- -----------------------------------
  Objective                           Test removing a group and ensure it
                                      no longer exists in the database.

  Action                              Creating test function with the
                                      logic for removing group with
                                      calling remove_group function.

  Expected Test                       The test logic should remove the
                                      host from the inventory and display
                                      the inventory as empty.

  Actual Test Result                  The test output show that the group
                                      is removed, and the group inventory
                                      is empty.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to remove group
from inventory and display inventory before and after
removal.](media/image138.png){width="3.602012248468941in"
height="3.0636351706036744in"}

<figure>
<img src="media/image139.png" style="width:3.83445in;height:1.55631in"
alt="A screenshot of a computer screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on removing group from
inventory and displaying inventory before and after
removal.</p></figcaption>
</figure>

#### 4.2.1.3 Host-Group Relationship

  -----------------------------------------------------------------------
  Test Case                           14
  ----------------------------------- -----------------------------------
  Objective                           Test assigning a host to a group.

  Action                              Creating test function with the
                                      logic for assigning host to group
                                      calling assign_host_to_group
                                      function.

  Expected Test                       The test logic should assign host
                                      to group and show the inventory
                                      with host assigned to group.

  Actual Test Result                  Test result displayed host is
                                      assigned to group.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to assign host to
a group and display inventory after
assignment.](media/image140.png){width="3.6619652230971127in"
height="3.7449081364829397in"}

<figure>
<img src="media/image141.png" style="width:4.82868in;height:1.90981in"
alt="A screenshot of a computer screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on assigning host to a
group and displaying inventory after assignment.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           15
  ----------------------------------- -----------------------------------
  Objective                           Test reassigning a host from one
                                      group to another.

  Action                              Creating test function with the
                                      logic for assigning host to group
                                      calling assign_host_to_group
                                      function and again reassigning host
                                      to another group calling
                                      reassign_host to_group.

  Expected Test                       Test logic should assign host to a
                                      group then again reassign host to
                                      group.

  Actual Test Result                  Test result displayed that the host
                                      is reassigned to another group and
                                      printed inventory after
                                      reassignment.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image142.png" style="width:6.68271in;height:2.91012in"
alt="A computer screen with white text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on reassigning a host
from one group to another and displaying inventory at initial assignment
and after reassignment.</p></figcaption>
</figure>

![: Screenshot of Rust test code for testing function to reassign a host
from one group to another and display inventory at initial assignment
and after reassignment.](media/image143.png){width="6.637586395450569in"
height="7.234686132983377in"}

  -----------------------------------------------------------------------
  Test Case                           16
  ----------------------------------- -----------------------------------
  Objective                           Test removing a host from a group.

  Action                              Creating test function with the
                                      logic for removing host from group
                                      calling remove_host_from_group
                                      function.

  Expected Test                       Test logic should remove host from
                                      the group.

  Actual Test Result                  Test result displayed that the host
                                      assignment to group is removed and
                                      printed inventory after removal.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image144.png" style="width:5.3582in;height:6.12128in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Rust test code for testing function to
remove a host from a group and display inventory after
removal.</p></figcaption>
</figure>

<figure>
<img src="media/image145.png" style="width:5.37383in;height:2.00083in"
alt="A screenshot of a computer screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on removing a host from a
group and displaying inventory after removal.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           17
  ----------------------------------- -----------------------------------
  Objective                           Test viewing the inventory after
                                      assigning hosts to groups.

  Action                              Creating test function with the
                                      logic for viewing assignment of
                                      host to group calling
                                      view_inventory function.

  Expected Test                       The test logic should display the
                                      inventory

  Actual Test Result                  The test result displays the
                                      inventory and the correct
                                      assignment of the host to group.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer program AI-generated content may be
incorrect.](media/image146.png){width="6.57076990376203in"
height="2.5510859580052494in"}

<figure>
<img src="media/image147.png" style="width:6.25124in;height:7.69785in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful test on viewing the inventory
after assigning hosts to groups.</p></figcaption>
</figure>

: Screenshot of Rust test code for testing function to view the
inventory after assigning hosts to groups.

### 4.2.2 Backend Unit Testing (Playbook Management)

#### 4.2.2.1 Playbook Listing

  -----------------------------------------------------------------------
  Test Case                           18
  ----------------------------------- -----------------------------------
  Objective                           Test listing playbook from the
                                      playbook directory when multiple
                                      YAML files are present with full
                                      path.

  Action                              Creating test function with the
                                      logic for listing the YAML playbook
                                      present in local directory with
                                      retrieval of full path to the
                                      playbook.

  Expected Test                       The test logic should display found
                                      playbooks, its total count and full
                                      path to the playbook.

  Actual Test Result                  The test result displayed found
                                      playbooks, its total count and full
                                      path to the playbook.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Rust test code for testing function to list available
playbooks and get full path to the
playbook.](media/image148.png){width="3.970959098862642in"
height="4.034168853893263in"}

![: Screenshot of Successful test on listing available playbooks with
their full path.](media/image149.png){width="6.458379265091864in"
height="4.338706255468066in"}

#### 4.2.2.2 Playbook Execution

  -----------------------------------------------------------------------
  Test Case                           19
  ----------------------------------- -----------------------------------
  Objective                           Test running a playbook with valid
                                      inventory and playbook.

  Action                              A playbook was created with
                                      inventory file and tested using
                                      manual CLI command to execute
                                      playbook on the inventory.

  Expected Test                       The playbook should run seamlessly
                                      using SSH communication and display
                                      output.

  Actual Test Result                  The playbook executed and returned
                                      output on CLI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image150.jpg" style="width:6.34174in;height:3.18572in"
alt="A computer screen with green text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing using manual CLI
command to execute playbook on the inventory. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image151.jpg" style="width:6.37116in;height:3.95415in"
alt="A black screen with white text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing using manual CLI
command to execute playbook on the inventory. (2)</p></figcaption>
</figure>

### 4.2.3 Frontend Unit Testing (Component Testing)

#### 4.2.3.1 HostForm Component

  -----------------------------------------------------------------------
  Test Case                           20
  ----------------------------------- -----------------------------------
  Objective                           Test rendering the form with all
                                      input fields and the "Add" button

  Action                              Using Tauri dev mode test was
                                      performed on rendering of HostForm
                                      component.

  Expected Test                       The application window should
                                      display HostForm component,
                                      elements and its styling.

  Actual Test Result                  The HostForm component's element
                                      and styling was rendering properly.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image152.png" style="width:6.74719in;height:2.44441in"
alt="A screenshot of a login screen AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on rendering the form
with all input fields and the “Add” button</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           21
  ----------------------------------- -----------------------------------
  Objective                           Test updating state when typing
                                      into input fields.

  Action                              Using Tauri dev mode test was
                                      performed on states of HostForm
                                      component was tested.

  Expected Test                       The text field elements of HostFrom
                                      should be illustrating updated
                                      states.

  Actual Test Result                  The test show that the text field
                                      element illustrates updated states.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image153.png" style="width:6.67438in;height:2.6177in"
alt="A screenshot of a login box AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on updating state when
typing into input fields.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           22
  ----------------------------------- -----------------------------------
  Objective                           Test addHost function is called
                                      when the "Add" or "+" Button is
                                      clicked, and host is added.

  Action                              The test was performed enriching
                                      the text field and clicking the "+"
                                      button on the GUI.

  Expected Test                       Using the enriched data on the text
                                      field should be used to add new
                                      host to the inventory using the
                                      GUI.

  Actual Test Result                  The test result displays that host
                                      was added with the same data
                                      enriched in the text field.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image154.png" style="width:6.60238in;height:2.05337in"
alt="A screenshot of a login box AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on addHost function
call when interacting with add button in GUI.</p></figcaption>
</figure>

#### 4.2.3.2 GroupForm Component

  -----------------------------------------------------------------------
  Test Case                           23
  ----------------------------------- -----------------------------------
  Objective                           Test rendering the form with input
                                      field and the "Add" button.

  Action                              Using Tauri dev mode test was
                                      performed on rendering of the
                                      GroupForm component and its
                                      element.

  Expected Test                       The test should display the
                                      rendered GroupForm component and
                                      its element with its styling.

  Actual Test Result                  The Add Group was rendered with its
                                      text field element and "add" or "+"
                                      button.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image155.png){width="6.552201443569554in"
height="2.9323917322834645in"}

  -----------------------------------------------------------------------
  Test Case                           24
  ----------------------------------- -----------------------------------
  Objective                           Test updating state when typing
                                      into input field of the GroupForm
                                      component.

  Action                              The test was performed enriching
                                      the test field of the GroupForm
                                      component.

  Expected Test                       The text field element of the
                                      GroupForm component should updated
                                      the state while the user is typing
                                      on the text field.

  Actual Test Result                  The text field element shows
                                      positive state updates.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

  : : Screenshot of successful testing on rendering the form with input
  field and the "Add" button.

<figure>
<img src="media/image156.png" style="width:6.80545in;height:2.50188in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on updating state when
typing into input field of the GroupForm component.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           25
  ----------------------------------- -----------------------------------
  Objective                           Test onAddGroup function when the
                                      "Add" or "+" button is clicked.

  Action                              The test was performed enriching
                                      the text field element of the
                                      GroupForm component and clicking
                                      "add" or "+" button.

  Expected Test                       The test should add a group using
                                      the enriched data in the text field
                                      element.

  Actual Test Result                  The test shows that a group was
                                      added with the data enriched in the
                                      text field and updated the
                                      database.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image157.png){width="6.547987751531059in"
height="2.677260498687664in"}

: Screenshot of successful testing on onAddGroup function call
interacting with add button.

#### 4.2.3.3 AssignHostToGroupForm Component

  -----------------------------------------------------------------------
  Test Case                           26
  ----------------------------------- -----------------------------------
  Objective                           Test rendering dropdown for hosts
                                      and groups.

  Action                              Using Tauri dev mode test was
                                      performed on rendering of the
                                      AssignHostToGroup Component and its
                                      elements.

  Expected Test                       The GUI should render the all the
                                      elements of the AssisgnHostToGroup
                                      Component.

  Actual Test Result                  The test result shows that all the
                                      elements render seamlessly with all
                                      the styling and dropdown list.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image158.png" style="width:2.94468in;height:0.92084in"
alt="A screenshot of a group AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on rendering dropdown
for hosts and groups. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image159.png" style="width:4.19118in;height:1.45437in"
alt="A screenshot of a group AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on rendering dropdown
for hosts and groups. (2)</p></figcaption>
</figure>

<figure>
<img src="media/image160.png" style="width:4.12818in;height:1.45633in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on rendering dropdown
for hosts and groups. (3)</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           27
  ----------------------------------- -----------------------------------
  Objective                           Test updating state when selecting
                                      a host or group.

  Action                              Using Tauri dev mode test was
                                      performed on rendering of
                                      AssignHostToGroupForm Component
                                      elements and checking the state
                                      update of the dropdown after
                                      selection.

  Expected Test                       The dropdown element should update
                                      the selected item from the list.

  Actual Test Result                  The test show result displays that
                                      the after selection of the item
                                      list the state of the element is
                                      updated.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image161.png){width="3.6403904199475066in"
height="1.2453554243219598in"}

: Screenshot of successful testing on updating state of dropdown when
selecting a host or group.

  -----------------------------------------------------------------------
  Test Case                           28
  ----------------------------------- -----------------------------------
  Objective                           Test onAssign function when the
                                      "Assign: button is clicked.

  Action                              Using Tauri dev mode test was
                                      performed by rendering of the
                                      AssignHostToGroup Component and
                                      assigning host to group with GUI.

  Expected Test                       The test should display the
                                      assignment of the host to group and
                                      added to the group inventory.

  Actual Test Result                  The test result displays that the
                                      host was assigned to a group and
                                      displayed in the group inventory.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image162.png" style="width:4.32217in;height:2.33979in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on onAssign function
call when the “Assign: button is clicked.</p></figcaption>
</figure>

#### 4.2.3.4 HostList Component

  -----------------------------------------------------------------------
  Test Case                           29
  ----------------------------------- -----------------------------------
  Objective                           Test rendering a list of hosts.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the the host
                                      list in the GUI.

  Expected Test                       Test should display the host list
                                      in the GUI with seamless
                                      integration of backend.

  Actual Test Result                  Test result displayed that the host
                                      list rendered seamlessly in the
                                      GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image163.png" style="width:6.5in;height:0.94931in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on rendering a list of
hosts.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           30
  ----------------------------------- -----------------------------------
  Objective                           Test editing a host and saving
                                      changes.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the Host
                                      list and then editing the data of
                                      the selected host.

  Expected Test                       The test should display the host
                                      data can be modified and saved
                                      using GUI.

  Actual Test Result                  The test result displays that the
                                      host list is edited using newly
                                      rendered text field element and
                                      saved after modification to the
                                      inventory.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image164.png" style="width:6.5in;height:1.48889in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on host data can be
modifidication and saved using GUI. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image165.png" style="width:6.5in;height:1.45in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on host data can be
modifidication and saved using GUI. (2)</p></figcaption>
</figure>

<figure>
<img src="media/image166.png" style="width:6.5in;height:0.93403in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on host data can be
modifidication and saved using GUI. (3)</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           31
  ----------------------------------- -----------------------------------
  Objective                           Test deleting a host and ensuring
                                      it is removed from the list.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the host
                                      list and deleting the host from the
                                      list using GUI delete button
                                      element.

  Expected Test                       The test should display that the
                                      selected host for deletion should
                                      be removed from the host list.

  Actual Test Result                  The test result shows that the
                                      selected host for deletion is
                                      deleted using GUI and the Host List
                                      inventory does not consist of the
                                      deleted host.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image167.png" style="width:6.5in;height:0.93542in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on deleting a host and
ensuring it is removed from the list. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image168.png" style="width:6.5in;height:0.86181in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on deleting a host and
ensuring it is removed from the list. (2)</p></figcaption>
</figure>

#### 4.2.3.5 GroupList Component

  -----------------------------------------------------------------------
  Test Case                           32
  ----------------------------------- -----------------------------------
  Objective                           Test rendering a list of groups.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the group
                                      inventory in GUI.

  Expected Test                       The test should display all the
                                      groups present in the inventory
                                      database.

  Actual Test Result                  The test result shows that the
                                      Group inventory includes two groups
                                      Router and Switch and is displayed
                                      in the GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of successful testing on rendering a list of
groups.](media/image169.png){width="6.5in"
height="0.7770833333333333in"}

  -----------------------------------------------------------------------
  Test Case                           33
  ----------------------------------- -----------------------------------
  Objective                           Test editing a group and saving
                                      changes.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the Group
                                      Inventory in GUI and modifying data
                                      for a group and saving the changes.

  Expected Test                       The test should show that the group
                                      from the inventory can be edited
                                      using textfield and the
                                      modification can be saved using
                                      GUI.

  Actual Test Result                  The test result show that the group
                                      data can be modified and saved in
                                      the inventory database using GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of successful testing on the group data modification and
saving in the inventory database using GUI.
(1)](media/image169.png){width="6.5in" height="0.7770833333333333in"}

<figure>
<img src="media/image170.png" style="width:6.5in;height:0.94583in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on the group data
modification and saving in the inventory database using GUI.
(2)</p></figcaption>
</figure>

![: Screenshot of successful testing on the group data modification and
saving in the inventory database using GUI.
(3)](media/image171.png){width="6.5in" height="0.7340277777777777in"}

  -----------------------------------------------------------------------
  Test Case                           34
  ----------------------------------- -----------------------------------
  Objective                           Test deleting a group and ensuring
                                      it is removed from the list.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the group
                                      inventory in GUI, the selected
                                      group can be removed from the
                                      inventory.

  Expected Test                       Test should show that using GUI a
                                      Group can be removed from the group
                                      inventory.

  Actual Test Result                  Test results show that the selected
                                      group for deletion was removed from
                                      the Group inventory.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![](media/image172.png){width="6.5in" height="0.7458333333333333in"}

[]{#_Toc196904994 .anchor}Figure : Screenshot of successful testing on
deleting a group and ensuring it is removed from the list. (1)

![A close-up of a person AI-generated content may be
incorrect.](media/image173.png){width="6.5in" height="1.7375in"}

: Screenshot of successful testing on deleting a group and ensuring it
is removed from the list. (2)

#### 4.2.3.6 Inventory List Component

  -----------------------------------------------------------------------
  Test Case                           35
  ----------------------------------- -----------------------------------
  Objective                           Test rendering the inventory of
                                      group and their hosts.

  Action                              Using Tauri dev mode test was
                                      performed to render the inventory
                                      of group from the inventory
                                      database in GUI.

  Expected Test                       The test should display all the
                                      group present in the inventory
                                      database in GUI.

  Actual Test Result                  The test results show that all the
                                      group present in the inventory are
                                      displayed at the Group Inventory
                                      list in GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image174.png){width="4.805895669291338in"
height="2.6175699912510937in"}

  -----------------------------------------------------------------------
  Test Case                           36
  ----------------------------------- -----------------------------------
  Objective                           Test reassigning a host to a
                                      different group.

  Action                              Using Tauri dev mode test was
                                      performed by rendering the Group
                                      Inventory list element and using
                                      reassign button to reassign host to
                                      a different group.

  Expected Test                       The test should display that a host
                                      can be reassigned using dropdown
                                      element in GUI.

  Actual Test Result                  The test result shows that a host
                                      is reassigned to a different group
                                      using dropdown and confirming
                                      reassignment with a button element.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

  : : Screenshot of successful testing on rendering the inventory of
  group and their hosts.

<figure>
<img src="media/image175.png" style="width:6.5in;height:1.20903in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on reassigning a host
to a different group. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image176.png" style="width:6.5in;height:1.18681in"
alt="A screenshot of a phone AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on reassigning a host
to a different group. (2)</p></figcaption>
</figure>

<figure>
<img src="media/image177.png" style="width:6.5in;height:1.31597in"
alt="A screenshot of a chat AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on reassigning a host
to a different group. (3)</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           37
  ----------------------------------- -----------------------------------
  Objective                           Test removing a host from a group.

  Action                              Using Tauri dev mode test was
                                      performed by rendering Group
                                      Inventory list in the GUI and
                                      removing a host from a group.

  Expected Test                       The test should display that
                                      selected a host for deletion can be
                                      removed from a group using GUI.

  Actual Test Result                  The test result show that selected
                                      host for deletion from group it is
                                      present is deleted using the
                                      deleted icon button element using
                                      GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image178.png" style="width:6.5in;height:1.28681in"
alt="A screenshot of a chat AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on removing a host
from a group. (1)</p></figcaption>
</figure>

<figure>
<img src="media/image179.png" style="width:6.5in;height:1.70278in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on removing a host
from a group. (2)</p></figcaption>
</figure>

#### 4.2.3.7 PlaybookRunner Component

  -----------------------------------------------------------------------
  Test Case                           38
  ----------------------------------- -----------------------------------
  Objective                           Test rendering the playbook
                                      selector, inventory selector, and
                                      "Run Playbook" button.

  Action                              Using Tauri dev mode test was
                                      performed by rendering Run Playbook
                                      component and all element and
                                      styling it consists of.

  Expected Test                       The test should display all the
                                      elements from the PlaybookRunner
                                      component.

  Actual Test Result                  The test result shows that the GUI
                                      rendered all the elements such as
                                      playbook selector dropdown,
                                      Inventory selector check box with
                                      selected Item information and Run
                                      Playbook button element of the
                                      PlaybookRunner component.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image180.png){width="6.5in"
height="3.127083333333333in"}

: Screenshot of successful testing on rendering the playbook selector,
inventory selector, and "Run Playbook" button.

  -----------------------------------------------------------------------
  Test Case                           38
  ----------------------------------- -----------------------------------
  Objective                           Test running a playbook with valid
                                      inputs and display the output of a
                                      playbook execution.

  Action                              Using Tauri dev mode test was
                                      performed by rendering Run Playbook
                                      Component with all the elements and
                                      its styling, a valid playbook for
                                      gathering information about
                                      interfaces of the network device is
                                      executed, using valid inventory
                                      file created using Inventory
                                      selection from GUI.

  Expected Test                       The test should display the
                                      execution output if the playbook
                                      execution is successful on the
                                      inventory give execution tasks log
                                      and output.

  Actual Test Result                  The test result shows that the
                                      valid playbook was executed and
                                      performed tasks to gather
                                      information of the selected
                                      inventory network device's
                                      interface using GUI.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![A screenshot of a computer AI-generated content may be
incorrect.](media/image181.png){width="6.657053805774278in"
height="3.253847331583552in"}

<figure>
<img src="media/image182.png" style="width:6.5in;height:3.37639in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful testing on running a playbook
with gather interface information on selected inventory and display the
output of a playbook execution. (1)</p></figcaption>
</figure>

: Screenshot of Successful testing on running a playbook with gather
interface information on selected inventory and display the output of a
playbook execution. (2)

  -----------------------------------------------------------------------
  Test Case                           39
  ----------------------------------- -----------------------------------
  Objective                           Test running a different playbook
                                      with valid inputs and displaying
                                      the output of a playbook execution.

  Action                              Using Tauri dev mode test was
                                      performed by rendering RunPlaybook
                                      component and a valid playbook for
                                      task such as creating a DHCP pool,
                                      exclude some IP address and
                                      displaying DHCP configurations is
                                      executed, using valid inventory
                                      file created using Inventory
                                      selection from GUI.

  Expected Test                       The test should perform ansible
                                      task and give execution tasks log
                                      and output.

  Actual Test Result                  The test result shows that DHCP was
                                      configured into the selected
                                      inventory network device and
                                      displayed the DHCP configuration
                                      done in the device as ouput.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

![: Screenshot of Successful testing on running a playbook with DHCP
Configuration on selected inventory and display the output of a playbook
execution. (1)](media/image183.png){width="5.754831583552056in"
height="3.3987937445319334in"}

![image](media/image184.png){width="5.786630577427822in"
height="4.253418635170604in"}

  -----------------------------------------------------------------------
  Test Case                           40
  ----------------------------------- -----------------------------------
  Objective                           Test displaying the output of a
                                      playbook execution with invalid
                                      playbook value.

  Action                              The test was performed using GUI
                                      for executing playbook with invalid
                                      values in YML file.

  Expected Test                       The test should display a error in
                                      the Output console of the GUI with
                                      a directive ansible error
                                      suggestion.

  Actual Test Result                  The test result shows that the
                                      ansible playbook with invalid value
                                      in YML file is executed and error
                                      with suggestion is displayed in the
                                      output element of the GUI.

  Conclusion                          Sucessful.
  -----------------------------------------------------------------------

  : : Screenshot of Successful testing on running a playbook with DHCP
  Configuration on selected inventory and display the output of a
  playbook execution. (2)

<figure>
<img src="media/image185.png" style="width:6.5in;height:4.82778in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Successful testing on displaying the
output of a playbook execution with invalid playbook
value.</p></figcaption>
</figure>

  -----------------------------------------------------------------------
  Test Case                           41
  ----------------------------------- -----------------------------------
  Objective                           Test handling error during playbook
                                      execution.

  Action                              The test was performed using an
                                      invalid playbook and using terminal
                                      the playbook was modified to be
                                      accepted as a correct playbook
                                      without any error for execution.

  Expected Test                       The test should display errors when
                                      using invalid playbook and
                                      Successful execution after
                                      modification of the invalid values
                                      in the playbook should be displayed
                                      during rerun of the playbook on
                                      same inventory.

  Actual Test Result                  The test results show that the
                                      playbook was successfully executed
                                      with desired output in GUI after
                                      modification of invalid value into
                                      valid values present in the
                                      playbook.

  Conclusion                          Successful.
  -----------------------------------------------------------------------

<figure>
<img src="media/image186.png" style="width:6.5in;height:2.56181in"
alt="A screenshot of a computer error AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of playbook execution with error
suggestions.</p></figcaption>
</figure>

<figure>
<img src="media/image187.png" style="width:6.5in;height:2.15972in"
alt="A black screen with white text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of modification of playbook mitigating
previous errors.</p></figcaption>
</figure>

<figure>
<img src="media/image188.png" style="width:3.44513in;height:2.90885in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of successful testing on error handling and
successful playbook execution after error mitigation.
(1)</p></figcaption>
</figure>

![: Screenshot of successful testing on error handling and successful
playbook execution after error mitigation.
(2)](media/image189.png){width="6.5in" height="0.3951388888888889in"}

## 4.3 Critical Analysis

### 4.4.1 Test Summary

Testing under incremental prototyping revealed success by evaluating
functional modules one by one in real operation. The three subsystems
received testing for their main programs combined with playbook resource
management systems and front-end element functionality. Testing focused
on 19 backend tests to confirm both data accuracy and functional CRUD
operations after ensuring playbooks executed without problems. Tests of
frontend system parts were performed on 25 essential components through
unit testing of React elements and dynamic list functions and form
behavior. The tests recognized uncommon situations while strengthening
error reaction which made the program more robust and dependable. During
testing the procedure enhanced the system\'s capability to handle errors
that occur from both user input failures and backend service breakdowns.

### 4.4.2 Evaluation 

The system evaluation took place according to the main project
objectives and primary aim. The primary focus behind Netrunner
development involved building a sustainable tool for network automation
across platforms which automates repetitive tasks while allowing
inventory management from dynamic sources before executing Ansible
playbooks through minimal interface interaction. The system existed to
assist network engineers and system administrators through automation
which reduced manual configurations while maintaining consistency and
enhancing operational efficiency in networks that spanned from medium to
large scales.

The system worked to remove command-line interface dependency by
creating an easy-to-use graphical user interface for desktop application
security and lightness. The system presents a contemporary
infrastructure as code framework through its combination of real-time
logging and secure credential storage features with group-based
inventory resources. Evaluation of the system includes the following
assessment:

#### 4.4.2.1 Evaluation of Project Deliverables

The project delivered several artifacts including Feasibility Report and
Software Requirement Specification (SRS), System Design Documentation
and Frontend and Backend Module Development in addition to Dynamic
Inventory Management and GUI for Playbook Execution and Logging
Mechanism and Testing Reports and Final Working Application. All
deliverables produced from this project underwent validation as the
Scrum methodology guided development work inside the stated project
period. The development process employed stakeholder feedback sessions
followed by successful sprint preparation work with execution delivery
and complete unit testing alongside integration testing. The project
success is confirmed through deliverable completion which followed
defined deadline milestones.

#### 4.4.2.2 System Evaluation

The Netrunner system features received assessments based on the proposed
system objectives. The Netrunner system achieved all functional features
which incorporate device inventory management as well as group control
and secure credential storage and graphical playbook execution. The
system design matched the specifications of Vianet Communications Pvt.
Ltd. As a client established deployment which led to testing operation.
The system currently meets all main project requirements yet still has
potential to develop additional features involving multi-user functions,
GUI playbook creation using templating and system monitoring in future
development.

Testing of the application occurred in a simulated GNS3 environment
which verified automated real network device configurations and output
collection while managing invalid credentials and nonexistent playbook
issues. The tool demonstrates its worth as a functional solution which
helps network engineers, and their organizations eliminate
time-consuming manual work. The system proves to be an effective network
automation solution because it conducts daily operations automatically
while logging activities in real-time and managing network devices from
a centralized position.

### 4.4.3 Criteria

The Netrunner system achieved success in implementing most aspects of
its defined criteria. All the specifications related to the system have
received attention through the creation of an easy-to-use application
that automates network configuration tasks. The system successfully
implements all core requirements defined by the client through its
features for dynamic inventory management together with secure playbook
execution while providing real-time output logging.

The planned system features including using Tauri for cross-platform
capabilities together with Ansible automation capabilities and
Rust-based backend and Tailwind CSS with React for the responsive GUI
were successfully implemented. The project meets all defined evaluation
requirements because stakeholders received successful execution of every
intended functionality.

## 4.4 Future Works

The Netrunner tool current version addresses all its fundamental needs,
yet it presents opportunities for growth in various areas. The
application now enables multiple network engineers to work together
securely under role-based permissions structures that keep access
control requirements intact.

The future work includes integrating the tool with network monitoring
systems using both the ELK Stack and Zabbix platforms. Such integration
would supply real-time network performance visualization to improve the
tool\'s capabilities across configuration management boundaries. The
development of RESTful API support will let external systems access the
inventory database for automatic playbook execution capabilities to
create smooth automation processes across bigger environments.

The tool needs an automatic rollback feature which enables users to
restore previously saved configuration settings after playbook failures
occur. The application development should consider adding bulk import
capabilities based on CSV and JSON files to make it easier for users to
bring in device inventories and create backups of this data.

The user-friendly and scalable capabilities of the application will
improve through enhanced UI/UX features that include better filtering
tools with search options and notification mechanisms for enterprise
implementation. Such developments would transition Netrunner into a
powerful network automation platform able to handle diverse application
needs for the upcoming era for developing technologies.

# Chapter 5: Report Conclusion

## 5.1 Conclusion

The creation of Netrunner network automation represents an important
solution to practical problems faced by network administration personnel
and engineering staff. This project applies Ansible for automation
together with Rust for performance and security while utilizing Tailwind
CSS and React for an intuitive GUI and Tauri to deliver cross-platform
lightweight deployment features for user-centric automation of network
configuration routines.

Real-time feedback enables the tool to give centralized management of
devices with playbooks execution while eliminating manual operations and
human error and streamlining time-consuming operations. The project
adopted industry's best practices that ran from requirement analysis and
agile sprint development all the way to strict testing and stakeholder
validation which made the final product robust as well as secure yet
efficient. The application of Netrunner successfully demonstrates
practical use in operating environments managed by Internet Service
Providers such as Vianet Communications Pvt. Ltd. Simulation platforms
like GNS3 can prove the reliability of the tool by validating the system
through testing operations which preceded live implementation. An
extensible architecture approach gives Netrunner the framework needed to
implement upcoming features including multi-user functionality API
connections and system monitoring capabilities.

The project\'s execution shows deep understanding of current network
infrastructure needs in addition to excellent technical capabilities and
solutions to network problems. This project provides an essential base
for next-generation network automation and showcases open-source
scalable intelligence in modern IT system automation solutions.

## 5.2 Social, Legal and Ethical Issues

To ensure the project adhered to institutional, academic, and
professional standards, all social, legal, and ethical considerations
were carefully addressed throughout the development of Netrunner. From
data privacy and software licensing compliance to ethical research
practices and responsible content creation, every phase was conducted
with integrity and transparency.

**\[Note**: For a comprehensive discussion of these considerations**,**
Refer to [Appendix 9](#social-legal-and-ethical-issues-2).**\]**

# Bibliography

Younes, N. A., 2024. *Network Automation: A Comparative Analysis of
Ansible and a Custom Python-Based Tool,* s.l.: School of Innovation,
Design and Engineering.

w3school, 2024. *The HTML DOM (Document Object Model).* \[Online\]\
Available at: [https://www.w3schools.com/js/js_htmldom.asp]{.underline}

Schwaber, K. & Sutherland, J., 2020. The Scrum Guide. *The Definitive
Guide to Scrum: The Rules of the Game*.

Puppet, 2024. *Products.* \[Online\]\
Available at:
[https://www.puppet.com/products/puppet-enterprise]{.underline}

org, S., 2024. *What is Scrum?.* \[Online\]\
Available at:
[https://www.scrum.org/resources/what-scrum-module]{.underline}

Muyldermans, D., 2019. *How does the virtual DOM compare to other DOM
update mechanisms in,* s.l.: University of Dublin.

Mahant, K., 2019. *Cisco propels intent-based networking through
automation.* \[Online\]\
Available at:
[https://blogs.cisco.com/networking/cisco-propels-ibn-through-automation]{.underline}

Hat, R., 2022. *What is Infrastructure as Code (IaC)?.* \[Online\]\
Available at:
[https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac]{.underline}

geeksforgeeks, 2024. *ReactJS Virtual DOM.* \[Online\]\
Available at:
[https://www.geeksforgeeks.org/reactjs-virtual-dom/]{.underline}

Geekforgeeks, 2024. *What is RUP(Rational Unified Process) and its
Phases?.* \[Online\]\
Available at:
[https://www.geeksforgeeks.org/rup-and-its-phases/]{.underline}

Geekforgeeks, 2019. *Dynamic Systems Development Method (DSDM).*
\[Online\]\
Available at:
[https://www.geeksforgeeks.org/dynamic-systems-development-method-dsdm/]{.underline}

Cisco Systems, I., 2024. *network-automation.* \[Online\]\
Available at:
[https://www.cisco.com/c/en/us/solutions/automation/network-automation.html]{.underline}

Cisco, 2024. *Cisco DNA Software: Subscription Offers At-a-Glance.*
\[Online\]\
Available at:
[https://www.cisco.com/c/en/us/products/collateral/software/dna-software/nb-06-cisco-dna-software-aag-cte-en.html?oid=aagen018985]{.underline}

Burghardt, K., 2014.
*File:140228puppetrunExampleManuallyInvokedPackageUpdate.png.*
\[Online\]\
Available at:
[https://commons.wikimedia.org/wiki/File:140228puppetrunExampleManuallyInvokedPackageUpdate.png]{.underline}

Beevers, K., 2024. *The State of Network Automation in 2024.*
\[Online\]\
Available at:
[https://netboxlabs.com/blog/the-state-of-network-automation-in-2024/]{.underline}\
\[Accessed 16 September 2024\].

Ansible, 2024. *Ansible community documentation.* \[Online\]\
Available at: [https://docs.ansible.com/]{.underline}

Gartner, 2022. *Gartner report: 70% of organizations will implement
structured automation by 2025,* s.l.: Gatner.

# Works Cited

Younes, N. A., 2024. *Network Automation: A Comparative Analysis of
Ansible and a Custom Python-Based Tool,* s.l.: School of Innovation,
Design and Engineering.

w3school, 2024. *The HTML DOM (Document Object Model).* \[Online\]\
Available at: [https://www.w3schools.com/js/js_htmldom.asp]{.underline}

Schwaber, K. & Sutherland, J., 2020. The Scrum Guide. *The Definitive
Guide to Scrum: The Rules of the Game*.

Puppet, 2024. *Products.* \[Online\]\
Available at:
[https://www.puppet.com/products/puppet-enterprise]{.underline}

org, S., 2024. *What is Scrum?.* \[Online\]\
Available at:
[https://www.scrum.org/resources/what-scrum-module]{.underline}

Muyldermans, D., 2019. *How does the virtual DOM compare to other DOM
update mechanisms in,* s.l.: University of Dublin.

Mahant, K., 2019. *Cisco propels intent-based networking through
automation.* \[Online\]\
Available at:
[https://blogs.cisco.com/networking/cisco-propels-ibn-through-automation]{.underline}

Hat, R., 2022. *What is Infrastructure as Code (IaC)?.* \[Online\]\
Available at:
[https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac]{.underline}

geeksforgeeks, 2024. *ReactJS Virtual DOM.* \[Online\]\
Available at:
[https://www.geeksforgeeks.org/reactjs-virtual-dom/]{.underline}

Geekforgeeks, 2024. *What is RUP(Rational Unified Process) and its
Phases?.* \[Online\]\
Available at:
[https://www.geeksforgeeks.org/rup-and-its-phases/]{.underline}

Geekforgeeks, 2019. *Dynamic Systems Development Method (DSDM).*
\[Online\]\
Available at:
[https://www.geeksforgeeks.org/dynamic-systems-development-method-dsdm/]{.underline}

Cisco Systems, I., 2024. *network-automation.* \[Online\]\
Available at:
[https://www.cisco.com/c/en/us/solutions/automation/network-automation.html]{.underline}

Cisco, 2024. *Cisco DNA Software: Subscription Offers At-a-Glance.*
\[Online\]\
Available at:
[https://www.cisco.com/c/en/us/products/collateral/software/dna-software/nb-06-cisco-dna-software-aag-cte-en.html?oid=aagen018985]{.underline}

Burghardt, K., 2014.
*File:140228puppetrunExampleManuallyInvokedPackageUpdate.png.*
\[Online\]\
Available at:
[https://commons.wikimedia.org/wiki/File:140228puppetrunExampleManuallyInvokedPackageUpdate.png]{.underline}

Beevers, K., 2024. *The State of Network Automation in 2024.*
\[Online\]\
Available at:
[https://netboxlabs.com/blog/the-state-of-network-automation-in-2024/]{.underline}\
\[Accessed 16 September 2024\].

Ansible, 2024. *Ansible community documentation.* \[Online\]\
Available at: [https://docs.ansible.com/]{.underline}

Gartner, 2022. *Gartner report: 70% of organizations will implement
structured automation by 2025,* s.l.: Gatner.

# 6. Appendix

## 6.1 Appendix 1

### 6.1.1 KTLO Challenges and Addressing Network Complexity

**'KTLO'** or the 'Keep The Lights On' phrase used to describe the
constant and mundane activity required to sustain and manage a network
infrastructure and ensure that it perseveres to function without
hitches. Daily operations are mainly associated with keeping an eye on
the performance of the network, resolving problems that occur,
installation of patches and updates, responding to client's requests,
dealing with security problems. These tasks affect the network engineers
and architects since most of their time and energy are used in
performing these tasks, with little to no time and energy left to
explore strategic opportunities or to establish efficient automated
frameworks. This way, they end up stuck in fire-fighting mode, which
excludes them from executing proactive strategies, which could
ultimately enhance different aspects of the network infrastructure and
stability, growth, and resilience in the foreseeable future. This
constant attention to managing short-term requirements hampers the drive
to eliminate repetitive tasks. Therefore, advancement in automation
solutions and technologies is necessary for reducing excess workload.

A report from EMA in 2022 revealed 'success' in the daily routine of
networking teams who handle the intricate network only stands at 27%,
compared to \~50% 5 years back. Networking teams are drowning due to
network complexity. We are witnessing the effect of network complexity
and manual network operations daily.

### 6.1.2 Appointing unaware interfaces

Today, modern networks are ever growing, diverse in devices and
communication technologies as well as protocols, and as such its
complexity of managing them is overwhelming. Manual configuration of
logical interfaces is one of the key problems that network administrator
faces most, especially when logical interfaces are not clearly defined
or are unknown to the administrator. Assigning such unaware or undefined
logical interfaces to a library can generate big confusion and recommend
misconfigurations and operational inefficiency.

In addition, such growing complexity makes it more difficult to do
day-to-day network operations, and it makes it less likely to support
consistent and reliable Network Automation strategies. When interfaces
are inconsistently labeled or they are not logically mapped to protocol
requirements, automation tool may not work correctly or may need
extensive customization. Consequently, deployments are delayed,
troubleshooting time is increased and such an environment is an obstacle
towards network automation initiatives. This means that it is important
to establish the practice of standard interface naming and protocol
assignment to minimize the complexity of the network and optimize the
automation efforts.

[\[Back to Report\]](#problem-domain-and-project-as-a-solution)

## 6.2 Appendix 2

## 6.2.1 Current Scenario

The increased use of cloud computing, large-scale networks and
complicated structures has forced the need to automate networks. A
published IDG survey in 2019 with IT decision-makers has also revealed
that automation is growing rapidly in network provisioning (56%), policy
configuration (54%), and resolving issues (50%). There is huge and rapid
growth of the variety of nodes, users and devices linking to the
network. And to meet that increasing demand, networks are becoming more
complex, and deployments are becoming massive. The Network Automation
process has an extremely significant role in making the Day-0 setup
process easier while, at the same time, making it easier to manage and
maintain the network from Day-1 to EOL (End OF Life) of the deployed
devices. (Mahant, 2019)

: Graph representation of Automated Infrastructure for deployment and
manage according to 2022 survey of Gartner. (Gartner, 2022)

[\[Back to Report\]](#current-scenario)

## 6.3 Appendix 3

### 6.3.1 Client Requirements

**Functional Requirements:**

- The platform must allow secure user authentication for inventory
  access and task execution.

- The system should automate repetitive network tasks such as interface
  configuration, hostname setup, and banner configuration using Ansible
  playbooks.

- Users must be able to manage network device inventory dynamically,
  including adding, modifying, grouping, and deleting devices from a
  central interface.

- Enable execution of playbooks on selected hosts or groups directly
  from a graphical user interface.

- Display real-time execution logs for each playbook task to assist with
  troubleshooting and verification.

- Provide a user-friendly desktop interface using React and Tailwind CSS
  for seamless interaction with the backend.

- Integrate a local, secure SQLite database (via Rusqlite) to manage
  inventory and credentials.

- Ensure SSH is used for secure remote execution on network devices.

**Non-Functional Requirements:**

- The application should be lightweight and cross-platform, capable of
  running on Windows, Linux, and macOS using the Tauri framework.

- The system must perform reliably during continuous playbook execution
  and inventory management without crashes.

- The design should prioritize modularity and scalability to accommodate
  future features such as multi-user support and monitoring tool
  integration.

- Ensure low system resource usage and fast performance during both idle
  and execution states.

- Maintain code readability and structure with comprehensive
  documentation for future development and deployment.

[\[Back to report\]](#_2.2.1_Client_Information)

### 6.3.2 Client Approval Letter

<figure>
<img src="media/image191.jpeg" style="width:5.28909in;height:7.34375in"
alt="Close-up of a document with a signature AI-generated content may be incorrect." />
<figcaption><p>: Scan copy of Client Approval Letter.</p></figcaption>
</figure>

[\[Back to report\]](#_2.2.1_Client_Information)

## 6.4 Appendix 4 

### 6.5.1 Puppet 

Puppet is an open**-**source software configuration management tool by
Puppet Inc**,** a company that is owned by Perforce**,** owned by
private equity firms. Puppets are used to manage the stages of the IT
infrastructure life cycle. This tool is used to manage and deploy
systems and applications in a network with or without the need for human
intervention. It is a client-server system with the master node, usually
called the **Puppet master (server)** and the client node often
abbreviated as the **Puppet agent (client)** on the nodes being managed
to ensure their configuration matches the required state. Puppet is well
known to be used for infrastructure automation and is versatile to work
on any OS like Linux, Windows and macOS. It uses declarative language
further system configurations; it means that an admin declares a state
that the system should be in, and Puppet proceeds to make the changes to
make this happen.

<figure>
<img src="media/image192.jpg" style="width:5.40866in;height:4.57335in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of Puppet's Dashboard (Puppet,
2024)</p></figcaption>
</figure>

<figure>
<img src="media/image193.jpg" style="width:6.09811in;height:3.48089in"
alt="A screen shot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of manually invoking Puppet on a client
(Burghardt, 2014)</p></figcaption>
</figure>

### 6.5.2 Cisco DNA Software 

Cisco Digital Network Architecture (DNA) can be described as an
innovative and holistic solution for creating, controlling and
protecting the new generation of enterprise networks. It is a
specialized platform that has been designed by Cisco, which delivers the
potential of software defined networking. Cisco DNA comes with the DNA
Center, a robust network control and policy management tool. This allows
IT personnel to be presented with instances of logical networks for
deployment along with automation which can result in the minimization of
manual control of the networks.

Through Cisco DNA, the network administrators can automate various
functionalities including configuration, monitoring and repairing hence
a high degree of efficiency is achieved in execution of network
functionality. Cisco DNA also transcribes security unlike other network
devices such as IP address filtering, identity-based access control, and
threat detection, making it more comprehensive and flexible in its
solution providing. Also, it supports virtually all Cisco routers,
switches and wireless access points to provide centralized management
and control of networks across multiple segments.

Cisco DNA employs big data and machine learning to generate insights and
alerts for improving network, planning, and investigating. It also makes
it suitable for organizations that need to modernize their network
infrastructure, ranging from campus network to data center level. It
also helps deliver services faster and cuts on operation expenses as it
automates routine tasks and as well ensures that the network is always
well positioned. (Cisco, 2024)

<figure>
<img src="media/image194.jpg" style="width:6.47958in;height:2.65139in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Picture representing Cisco DNA
dashboard</p></figcaption>
</figure>

[\[Back to report\]](#_2.4_Similar_Projects)

## 6.5 Appendix 5

### 6.4.1 Comparison between Projects 

+--------------------+--------------------+----------------------+-------------------+
| **Aspects**        | **Netrunner**      | **Puppet**           | **Cisco DNA**     |
+:==================:+:===================+======================+:==================+
| **Purpose**        | Ansible for        | Automate, basically, | Automate network  |
|                    | automating         | infrastructure       | management,       |
|                    | different tasks    | system settings and  | increase the      |
|                    | occurring over the | applications, mostly | clarity of the    |
|                    | network and        | in terms of          | network, and      |
|                    | creating a proper  | lifecycle            | increase          |
|                    | GUI for handling   | management.          | efficiency in     |
|                    | playbooks.         |                      | enterprise        |
|                    |                    |                      | networks.         |
+--------------------+--------------------+----------------------+-------------------+
| > **Architecture** | Utilizes React     | Client-server model  | Centralized       |
|                    | (frontend) and     | where Puppet Master  | control via DNA   |
|                    | Electron (backend) | acts as a server end | Center with       |
|                    | to create an       | and Puppet Agent as  | distributed       |
|                    | Ansible connected  | a client end.        | devices across    |
|                    | cross platform     |                      | the network.      |
|                    | desktop            |                      |                   |
|                    | application.       |                      |                   |
+--------------------+--------------------+----------------------+-------------------+
| **Automation       | Specializes in     | Configuration        | SDN to enable     |
| Focus**            | regular network    | management of        | automated         |
|                    | configuration      | systems              | configuration,    |
|                    | change,            | infrastructure using | monitoring and    |
|                    | monitoring, and    | declarative language | management of the |
|                    | diagnosing tasks   | of desired state.    | networks with     |
|                    | using Ansible      |                      | ambition to       |
|                    | plays.             |                      | optimize them.    |
+--------------------+--------------------+----------------------+-------------------+
| **Target           | Small to           | System               | Businesses with   |
| Audience**         | medium-sized       | administrators that  | large complex     |
|                    | networks'          | manage servers,      | networks that     |
|                    | technical          | applications as well | need extensive    |
|                    | specialists.       | as the               | automation of the |
|                    |                    | configurations.      | networks with     |
|                    |                    |                      | heightened        |
|                    |                    |                      | security.         |
+--------------------+--------------------+----------------------+-------------------+
| **Technology       | Ansible, ReactJS,  | Puppet declarative   | Cisco-proprietary |
| Stack**            | Tauri, Node.js,    | language, Ruby-based | platform with     |
|                    | Tailwind CSS,      | framework.           | SDN, AI-driven    |
|                    | Rust.              |                      | insights, and API |
|                    |                    |                      | integrations.     |
+--------------------+--------------------+----------------------+-------------------+
| **Cross Platform   | Yes, through Tauri | Yes, supports        | Cisco             |
| Support**          | for Windows,       | multiple             | hardware-based    |
|                    | macOS, and Linux.  |                      | ecosystem with    |
|                    |                    | OS like Linux,       | software support. |
|                    |                    | Windows, and macOS.  |                   |
+--------------------+--------------------+----------------------+-------------------+
| **Ease of Use**    | > Concentrating on | > Runs from command  | > Although not    |
|                    | > GUIs due to the  | > line; uses a       | > directly        |
|                    | > simplicity for   | > language called    | > configurable,   |
|                    | > running the      | > Puppet.            | > these are       |
|                    | > automation       |                      | >                 |
|                    | > scripts, meant   |                      | > GUI-driven      |
|                    | > for users who    |                      | > through DNA     |
|                    | > have little or   |                      | > Center with     |
|                    | > no coding        |                      | >                 |
|                    | > skills.          |                      | > additional      |
|                    |                    |                      | > level of        |
|                    |                    |                      | > support for     |
|                    |                    |                      | > such aggressive |
|                    |                    |                      | > configurations  |
|                    |                    |                      | > as APIs.        |
+--------------------+--------------------+----------------------+-------------------+
| **Customization**  | > High, because    | > High, because it   | > While a         |
|                    | > users can create | > has systematic     | > valuable        |
|                    | > and edit the     | > modules and        | > addition to     |
|                    | > Ansible          | > scripts in         | > developers, it  |
|                    | > playbooks        | > infrastructure     | > only works with |
|                    | > according to the | > automation.        | > Cisco supported |
|                    | > network needs.   |                      | > hardware and is |
|                    |                    |                      | > limited.        |
+--------------------+--------------------+----------------------+-------------------+
| **Scalability**    | > Small and medium | > Easy to be scaled  | > Problem         |
|                    | > size network     | > for managing       | > solving,        |
|                    | > solution;        | >                    | > scalability and |
|                    | > requires further | > infrastructure and | > monstrous       |
|                    | > playbook tuning  | > applications       | > network with a  |
|                    | > for large        | > within large       | > full set of     |
|                    | > environments.    | > environments.      | > complex         |
|                    |                    |                      | > features for    |
|                    |                    |                      | > large           |
|                    |                    |                      | > enterprises.    |
+--------------------+--------------------+----------------------+-------------------+
| **Security         | > Depends on       | > Imposes state      | > It includes,    |
| Features**         | > Ansible as well  | > conforms to wanted | > specifically,   |
|                    | > as the base OS   | > and eliminates     | > identity-based  |
|                    | > security         | > misconfigurations. | > access control, |
|                    | > policies we have |                      | > policy, and     |
|                    | > in place.        |                      | > threat          |
|                    |                    |                      | > protection.     |
+--------------------+--------------------+----------------------+-------------------+
| **Cost**           | > Ansible          | > Free version       | > High initial    |
|                    | > predominant      | > exists; paid       | > costs implying  |
|                    | > tool; its price  | > edition of the     | > reliance on     |
|                    | > will depend upon | > software with more | > expensive Cisco |
|                    | > the development  | > functionalities    | > hardware and    |
|                    | > and the planned  | > comes with         | > software        |
|                    | > deployment       | > licensing fee.     | > license and     |
|                    | > environment.     |                      | > high            |
|                    |                    |                      | > operational     |
|                    |                    |                      | > costs.          |
+--------------------+--------------------+----------------------+-------------------+
| > **Key            | > The GUI is       | > Built-in strong    | > It encompasses  |
| > Strengths**      | > friendly, it     | > infrastructural    | > the total       |
|                    | > includes         | > automation fabric  | > solutions for   |
|                    | > Ansible, and it  | > using declarative  | > the enterprise  |
|                    | > is more of a     | > language, fully    | > network which   |
|                    | > cross-platform   | > compatible with    | > is software     |
|                    | > solution mainly  | > multiple           | > defined         |
|                    | > designed to      | > environments; good | > networking,     |
|                    | > simplify the     | > for DevOps.        | > strong security |
|                    | > work when it     |                      | > and high        |
|                    | > comes to network |                      | > performance.    |
|                    | > automation.      |                      |                   |
+--------------------+--------------------+----------------------+-------------------+

[\[Back to Report\]](#_2.5_Comparison_between)

## 6.6 Appendix 6

### 6.5.1 Considered Methodologies

#### 6.5.1.1 Rational Unified Process (RUP) Methodology 

(Geekforgeeks, What is RUP(Rational Unified Process) and its Phases?,
2024)Rational Unified Process (RUP) is a software development process
for object-oriented models which is also known as the Unified Process
Model, created by Rational Corporation and is designed and documented
using UML (Unified Modeling Language). This process is embedded in the
IBM Rational Method Composer (RMC) software tool. Due to IBM
(International Business Machine Corporation), it allows us to customize,
design, and personalize the unified process.

RUP consists of characteristics as being use-case driven, Iterative
(repetition of the process), incremental by nature, customizable in
modular and electronic form. There are five phases of the life cycle of
RUP, which are Inception, Elaboration, Construction, Transition, and
Production.

<figure>
<img src="media/image195.jpg" style="width:4.89375in;height:4.20833in"
alt="A diagram of a software development process AI-generated content may be incorrect." />
<figcaption><p>: Phases of RUP (Geekforgeeks, What is RUP(Rational
Unified Process) and its Phases?, 2024)</p></figcaption>
</figure>

#### 6.5.1.2 Dynamic System Development Method (DSDM) 

An associate degree agile code development methodology for the
foundation of developing and maintaining systems is called Dynamic
Systems Development (DSDM). DSDM philosophy derives from a variation of
the sociological phenomenon where an application is always developed 80
percent of the time while developing the whole of it in the other 20
percent of the time.

DSDM is an incremental method of programming where every cycle which is
performed follows the 80/20 rule, which dictates that each phase of
development work takes only enough effort to allow movement to the next
stage. It is often the case that once several documented business
requirements or once modifications have been made and addressed, the
rest is usually completed later.

The DSDM has a life cycle that defines three different cycles, preceded
by two further cycles activities which are Feasibility study, Business
study, Functional model iteration, Design and Build iteration,
Implementation.

<figure>
<img src="media/image196.jpg" style="width:5.25597in;height:3.67569in"
alt="A diagram of a system development method AI-generated content may be incorrect." />
<figcaption><p>: DSDM Lifecycle (Geekforgeeks, Dynamic Systems
Development Method (DSDM), 2019)</p></figcaption>
</figure>

[\[Back to Report\]](#_3.1_Considered_Methodologies)

## 6.7 Appendix 7 

### 6.7.1 Product Backlog: Product Vision

#### 6.7.1.1 Problem Statement

+-------------------------------+--------------------------------------+
| **Repetitive CLI Task**       | Network engineer logs into each      |
|                               | router via telnet or SSH and         |
|                               | manually types commands like         |
|                               |                                      |
|                               | - interface GigabitEthernet0/1,      |
|                               |                                      |
|                               | - ip address 192.168.1.1             |
|                               |   255.255.255.0,                     |
|                               |                                      |
|                               | - no shutdown                        |
|                               |                                      |
|                               | repeating this for every device.     |
+:==============================+:=====================================+
| **Wasted Time**               | Configuration of VLAN with same ID   |
|                               | and name is configured in multiple   |
|                               | switches with the command such as    |
|                               |                                      |
|                               | - vlan 10                            |
|                               |                                      |
|                               | - name HR                            |
+-------------------------------+--------------------------------------+
| **Risk of Human Error**       | It takes a whole day to configure    |
|                               | multiple devices during new Point Of |
|                               | Presence (POP) expansion, while      |
|                               | automation can reduce this to        |
|                               | minutes.                             |
+-------------------------------+--------------------------------------+
| **Lack of Centralized         | Engineers use scripts, others Secure |
| Automation**                  | CRT, and most rely solely on         |
|                               | CLI---resulting in inconsistency     |
|                               | across the organization.             |
+-------------------------------+--------------------------------------+
| **Inventory Management        | Engineers try Secure Shell (SSH)     |
| Challenges**                  | into network devices with outdated   |
|                               | user credential or IP addresses,     |
|                               | causing delays in troubleshooting.   |
+-------------------------------+--------------------------------------+

<figure>
<img src="media/image197.png" style="width:4.72963in;height:2.52805in"
alt="A screenshot of a computer error AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Define Problem Statement card
from Product backlog.</p></figcaption>
</figure>

#### 6.7.2.2 Identify Solution 

  -----------------------------------------------------------------------
  **Develop a desktop application     Ensure that the system has native
  using Tauri**                       cross-platform capability together
                                      with low resource usage while
                                      delivering high performance.
  ----------------------------------- -----------------------------------
  **Integrate React frontend for user UI enables engineers to use
  interaction**                       automation tools with ease through
                                      contemporary responsive
                                      user-friendly design.

  **Use Ansible backend for           Tool that supports the execution of
  automation logic**                  YAML playbook for automating
                                      network device.

  **Store inventory dynamically**     Use of light-weight database such
                                      as SQLite.

  **Enable playbook execution with    A application that delivers
  visible output/logs**               real-time terminal output as
                                      Ansible is ran in a terminal.
  -----------------------------------------------------------------------

<figure>
<img src="media/image198.png" style="width:3.47957in;height:1.88254in"
alt="A screenshot of a computer error AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Identify Solution card from
Product backlog.</p></figcaption>
</figure>

#### 6.7.1.3 Validate with Stakeholders 

  -----------------------------------------------------------------------
  **Present product idea to           Present the core problem together
  supervisor**                        with proposed solution while
                                      disclosing the technical stack to
                                      verify it matches organizational
                                      objectives.
  ----------------------------------- -----------------------------------
  **Gather initial feedback from      Discuss technical feasibility,
  mentor**                            scalability, and areas of
                                      improvement and difficulties in
                                      terms of network automation
                                      practices.

  **Conduct short demo of concept --  Showcase a working CLI prototype
  CLI-based prototype**               using Ansible to demonstrate
                                      automation of common tasks such as
                                      show running configuration and show
                                      interface details.

  **Update features based on          The playbook needs execution logic
  suggestions**                       optimization as well as inventory
                                      management improvements and UI flow
                                      adjustments based on obtained
                                      practical feedback.

  **Record stakeholder expectations** The important requirements should
                                      be documented regarding user
                                      convenience along with security
                                      protocols (e.g., encryption of
                                      passwords) and observational access
                                      to logs coupled with device status
                                      monitoring.
  -----------------------------------------------------------------------

<figure>
<img src="media/image199.png" style="width:2.9606in;height:1.60018in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Validate with Stakeholders card
from Product backlog.</p></figcaption>
</figure>

#### 6.7.1.4 Implementation Readiness

  -----------------------------------------------------------------------
  **Project Repository       Initialization of a GitHub repository to
  Setup**                    track source code, issues, and development
                             history.
  -------------------------- --------------------------------------------
  **Ansible Validation**     Install Ansible and test in a development
                             environment to ensure it can communicate
                             with a targeted device.

  **UI Layout Design**       Use concept of React Component to develop
                             Frontend for the application.

  **Frontend-Backend         Use Tauri APIs to bridge the communication
  Bridge**                   of React Frontend and Rust Backend

  **Create First Playbook**  Create sample playbooks for future testing
                             and task automation.
  -----------------------------------------------------------------------

<figure>
<img src="media/image200.png" style="width:4.14909in;height:2.17805in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: : Screenshot of checklist Implementation Rediness card
from Product backlog.</p></figcaption>
</figure>

#### 6.7.1.5 Testing and Feedback

  -----------------------------------------------------------------------
  **Manual Inventory         Manually provide and modify device data to
  Testing**                  confirm the operation of dynamic inventory
                             capability.
  -------------------------- --------------------------------------------
  **Playbook Execution       Allow users to execute Playbooks through the
  Testing**                  user interface which will successfully
                             transmit logs and output data back to the
                             frontend.

  **Log Validation**         Ensured that output (success, failure,
                             warnings) was clearly displayed to the user
                             post-execution.

  **User Feedback            Initial test users provided feedback
  Collection**               regarding UI clarity, error handling, and
                             feature requests such as dark mode or bulk
                             uploads.

  **Bug Logging and Fixing** Register all detected issues into the system
                             including failure incidents due to invalid
                             host input and apply it for upcoming
                             releases.
  -----------------------------------------------------------------------

**Stakeholders Mapping**

<figure>
<img src="media/image201.png" style="width:4.69857in;height:1.45854in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Stakeholders Mapping card from
Product backlog.</p></figcaption>
</figure>

<figure>
<img src="media/image202.png" style="width:4.71941in;height:1.64606in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Lis external stakeholders card
from Product backlog.</p></figcaption>
</figure>

<figure>
<img src="media/image203.png" style="width:4.72983in;height:1.47937in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Engagement strategy card from
Product backlog.</p></figcaption>
</figure>

**Initial Requirements**

<figure>
<img src="media/image204.png" style="width:4.74024in;height:2.96916in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist MVP Features card from Product
backlog.</p></figcaption>
</figure>

**Draft Project Timeline**

<figure>
<img src="media/image205.png" style="width:4.74024in;height:2.08362in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Timeline Planning card from
Product backlog.</p></figcaption>
</figure>

**Communication Plan**

<figure>
<img src="media/image206.png" style="width:4.71941in;height:2.1253in"
alt="A screenshot of a computer program AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of checklist Communication Protocol card
from Product backlog.</p></figcaption>
</figure>

[**\[Back to Report\]**](#_3.3.1_Inception_(Product)

## 6.8 Appendix 8

### 6.8.1 Sprint 1

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Product Vison (Sprint 1)            |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 8, 2024 -- October 11, 2024 |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Define problem occurring due to   |
|                                     |   lack of automation.               |
|                                     |                                     |
|                                     | - Identify the solution for defined |
|                                     |   problems.                         |
|                                     |                                     |
|                                     | - Validate with ideas, feedback,    |
|                                     |   suggestions and expectations with |
|                                     |   stakeholders.                     |
|                                     |                                     |
|                                     | - Implementation of the readiness   |
|                                     |   for project development.          |
+-------------------------------------+-------------------------------------+

+------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                           |
+===================+======================+===================+===================+===================+
| **Task Name**     | **Description**      | **Start Date**    | **End Date**      | **Status**        |
+-------------------+----------------------+-------------------+-------------------+-------------------+
| Define Problem    | Define problem       | Oct 8             | Oct 11            | Completed\        |
| Statement         | occurring due to     |                   |                   | 5/5               |
|                   | lack of automation.  |                   |                   |                   |
+-------------------+----------------------+-------------------+-------------------+-------------------+
| Identify Solution | Identify the         | Oct 8             | Oct 11            | Completed         |
|                   | solution for defined |                   |                   |                   |
|                   | problems.            |                   |                   | 5/5               |
+-------------------+----------------------+-------------------+-------------------+-------------------+
| Validate with     | Validate with ideas, | Oct 8             | Oct 11            | Completed         |
| Stakeholders      | feedback,            |                   |                   |                   |
|                   | suggestions and      |                   |                   | 5/5               |
|                   | expectations with    |                   |                   |                   |
|                   | stakeholders.        |                   |                   |                   |
+-------------------+----------------------+-------------------+-------------------+-------------------+
| Implementation    | Implementation of    | Oct 8             | Oct 11            | Completed         |
| Readiness         | the readiness for    |                   |                   |                   |
|                   | project development. |                   |                   | 5/5               |
+-------------------+----------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | Problems with their solution were   |
|                                     | identified for the need for         |
|                                     | automation in Networking,           |
|                                     | validation with the stakeholders    |
|                                     | was performed which inspired for    |
|                                     | project implementation readiness.   |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | More suggestions with system        |
|                                     | engineers could be made to identify |
|                                     | more problems and inspirations for  |
|                                     | network as well as system           |
|                                     | deployment automation.              |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Mapping of the stake holders.       |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| Defining problems and identifying their solutions went smoothly due   |
| to close collaboration with the network engineers and preparing and   |
| implementing readiness activities laid the foundation for successful  |
| project development.                                                  |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_1:_Product)

### 6.8.2 Sprint 2

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Project Stakeholder Mapping         |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 11, 2024 -- October 13,     |
|                                     | 2025                                |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - List the internal as well as      |
|                                     |   external stake holder for the     |
|                                     |   project.                          |
|                                     |                                     |
|                                     | - Describing engagement strategy.   |
+-------------------------------------+-------------------------------------+

+--------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                   |
+:=================:+==============================+===================+===================+==================:+
| **Task Name**     | **Description**              | **Start Date**    | **End Date**      | **Status**        |
+-------------------+------------------------------+-------------------+-------------------+-------------------+
| List Internal     | Cataloging internal          | Oct 11            | Oct 13            | Completed         |
| Stakeholders      | stakeholders such as         |                   |                   |                   |
|                   | Developer, Scrum Master,     |                   |                   | 3/3               |
|                   | Product Owner, and Mentors   |                   |                   |                   |
|                   | for project development and  |                   |                   |                   |
|                   | management.                  |                   |                   |                   |
+-------------------+------------------------------+-------------------+-------------------+-------------------+
| List External     | Cataloging external stake    | Oct 11            | Oct 13            | Completed         |
| Stakeholders      | holders such as potential    |                   |                   |                   |
|                   | users, testers, and          |                   |                   | 3/3               |
|                   | supervisors.                 |                   |                   |                   |
+-------------------+------------------------------+-------------------+-------------------+-------------------+
| Engagement        | Plot strategies for project  | Oct 11            | Oct 13            | Completed         |
| strategy          | development such as updating |                   |                   |                   |
|                   | supervisors, user feedback   |                   |                   | 3/3               |
|                   | collection and features      |                   |                   |                   |
|                   | validations.                 |                   |                   |                   |
+-------------------+------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - Successfully identified and       |
|                                     |   documented all internal and       |
|                                     |   external stakeholders crucial for |
|                                     |   project development and           |
|                                     |   management.                       |
|                                     |                                     |
|                                     | - Clearly defined an engagement     |
|                                     |   strategy that included regular    |
|                                     |   updates to supervisors, effective |
|                                     |   collection of user feedback, and  |
|                                     |   feature validation steps.         |
|                                     |                                     |
|                                     | - Maintained good collaboration and |
|                                     |   communication between the project |
|                                     |   team and stakeholders, ensuring   |
|                                     |   early alignment.                  |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Initial stakeholder lists could   |
|                                     |   have been finalized faster with   |
|                                     |   more structured interviews or     |
|                                     |   workshops.                        |
|                                     |                                     |
|                                     | - The engagement strategy could be  |
|                                     |   further enhanced by adding more   |
|                                     |   frequent checkpoints or surveys   |
|                                     |   to gather continuous feedback     |
|                                     |   from users.                       |
|                                     |                                     |
|                                     | - Better tracking tools could be    |
|                                     |   used to monitor stakeholder       |
|                                     |   responses and ensure more         |
|                                     |   consistent involvement throughout |
|                                     |   the project lifecycle.            |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Finding the initial requirement for |
|                                     | project completion.                 |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| In this sprint, internal and external stakeholders were successfully  |
| identified and documented, and an engagement strategy was developed   |
| to guide communication and feedback collection. The next steps        |
| involved executing the engagement plan and refining it based on       |
| stakeholder responses.                                                |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_2:_Project)

### 6.8.3 Sprint 3

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Project Initial Requirements        |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 11, 2024 -- October 15,     |
|                                     | 2024                                |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Finalize and confirm the list of  |
|                                     |   Minimum Viable Product (MVP)      |
|                                     |   features for the project.         |
+-------------------------------------+-------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                    |
+:=================:+===============================+===================+===================+==================:+
| **Task Name**     | **Description**               | **Start Date**    | **End Date**      | **Status**        |
+-------------------+-------------------------------+-------------------+-------------------+-------------------+
| MVP Features      | Listing the MVP features for  | Oct 13            | Oct 15            | Completed         |
|                   | the project such as:          |                   |                   |                   |
|                   |                               |                   |                   | 8/8               |
|                   | - Execute Ansible playbooks   |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Display inventory list      |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Show playbook execution     |                   |                   |                   |
|                   |   logs                        |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Add device inventory        |                   |                   |                   |
|                   |   manually                    |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Create and manage groups of |                   |                   |                   |
|                   |   hosts                       |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - View playbook output        |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Secure storage of inventory |                   |                   |                   |
|                   |   data                        |                   |                   |                   |
|                   |                               |                   |                   |                   |
|                   | - Frontend-backend            |                   |                   |                   |
|                   |   communication setup using   |                   |                   |                   |
|                   |   Tauri                       |                   |                   |                   |
+-------------------+-------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | Planning for the product features   |
|                                     | where clear and straightforward.    |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | The planning vision could have been |
|                                     | realized more quickly, but the      |
|                                     | learning curve proved challenging.  |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Drafting project timeline.          |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| Sprint 3 focused on implementing key MVP features, including          |
| executing Ansible playbooks, displaying inventory lists, and securing |
| data storage. The sprint successfully create a vision to set up       |
| frontend-backend communication using Tauri and which will improve     |
| playbook execution with GUI instead of manual CLI commands.           |
+-----------------------------------------------------------------------+

**\
[\[Back to Report\]](#_Sprint_3:_Project)**

### 6.8.4 Sprint 4

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Drafting Project Timeline           |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 15 -- October 18            |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Preparation of the draft          |
|                                     |   proposal,                         |
|                                     |                                     |
|                                     | - List all sprints, define draft    |
|                                     |   start and end dates and assign    |
|                                     |   tasks to each sprint.             |
|                                     |                                     |
|                                     | - Prepare draft Gantt chart and     |
|                                     |   milestone check-in points for     |
|                                     |   proposal.                         |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                      |
+:=================:+=================================+===================+===================+==================:+
| **Task Name**     | **Description**                 | **Start Date**    | **End Date**      | **Status**        |
+-------------------+---------------------------------+-------------------+-------------------+-------------------+
| Timeline Planning | Timeline planning involves      | Oct 15            | Oct 18            | Completed         |
|                   | preparing the draft proposal,   |                   |                   |                   |
|                   | outlining all sprints with      |                   |                   | 6/6               |
|                   | their tentative start and end   |                   |                   |                   |
|                   | dates along with assigned       |                   |                   |                   |
|                   | tasks, and creating a draft     |                   |                   |                   |
|                   | Gantt chart with milestone      |                   |                   |                   |
|                   | check-in points for the         |                   |                   |                   |
|                   | proposal.                       |                   |                   |                   |
+-------------------+---------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - Clear timeline planning helped    |
|                                     |   maintain focus and direction.     |
|                                     |                                     |
|                                     | - Tasks were properly broken down   |
|                                     |   and assigned, improving team      |
|                                     |   coordination.                     |
|                                     |                                     |
|                                     | - Early preparation of the draft    |
|                                     |   proposal provided a strong        |
|                                     |   foundation for the project.       |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Time estimation for some tasks    |
|                                     |   could be more realistic.          |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Planning for communication          |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully delivered key foundational elements for the   |
| project. A draft project proposal was prepared and finalized for      |
| initial review, providing a clear direction. All sprints were         |
| outlined with tentative start and end dates, and tasks were           |
| appropriately assigned to each sprint to ensure organized workflow. A |
| draft Gantt chart was created to visually represent the project       |
| timeline, along with milestone check-in points to monitor progress    |
| effectively.                                                          |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_4:_Drafting)

### 6.8.5 Sprint 5

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Communication Plan                  |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 19 -- October 25            |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Discover how to communicate       |
|                                     |   during project development.       |
+-------------------------------------+-------------------------------------+

+------------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                       |
+:=================:+==================================+===================+===================+==================:+
| **Task Name**     | **Description**                  | **Start Date**    | **End Date**      | **Status**        |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+
| Communication     | Communication plan includes      | Oct 19            | Oct 25            | Completed         |
| Protocol          | weekly stand-ups, GitHub Issues  |                   |                   |                   |
|                   | for tracking, Trello for task    |                   |                   | 5/5               |
|                   | management, weekly supervisor    |                   |                   |                   |
|                   | reviews, and sprint review       |                   |                   |                   |
|                   | meetings ensure clear            |                   |                   |                   |
|                   | communication and progress       |                   |                   |                   |
|                   | monitoring.                      |                   |                   |                   |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - Effective communication through   |
|                                     |   regular meetings and tracking     |
|                                     |   tools.                            |
|                                     |                                     |
|                                     | - Tasks were well-organized and     |
|                                     |   progress stayed on schedule.      |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - More detailed updates during      |
|                                     |   weekly reviews.                   |
|                                     |                                     |
|                                     | - Faster issue resolution on GitHub |
|                                     |   to avoid minor delays.            |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Technical Environment Setup         |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully established the communication plan, set up    |
| GitHub for Issues record and Trello boards for tracking, and          |
| initiated weekly stand-up meetings and supervisor reviews. Sprint     |
| review meetings were also scheduled by college administration to      |
| ensure regular demonstration of progress and team alignment.          |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_5:_Communication)

### 6.8.6 Sprint 6 

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Ansible and testing environment     |
|                                     | setup                               |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | October 27 - November 22            |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Setup Ansible on the control      |
|                                     |   node/ management device,          |
|                                     |                                     |
|                                     | - Setup Virtual machine for testing |
|                                     |   purpose on a real network device  |
|                                     |   such as cisco routers and         |
|                                     |   switches,                         |
|                                     |                                     |
|                                     | - Creation of simple ansible test   |
|                                     |   playbooks,                        |
|                                     |                                     |
|                                     | - Creation of Network topologies    |
|                                     |   with router and switches with     |
|                                     |   established communication with    |
|                                     |   control node.                     |
+-------------------------------------+-------------------------------------+

+--------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                             |
+:=================:+========================+===================+===================+==================:+
| **Task Name**     | **Description**        | **Start Date**    | **End Date**      | **Status**        |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Ansible Setup     | Ansible setup on the   | Oct 27            | Oct 31            | Completed         |
|                   | control node or device |                   |                   |                   |
|                   | which is used to       |                   |                   | 1/1               |
|                   | execute the playbook   |                   |                   |                   |
|                   | on test environment.   |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Creation of show  | Test playbook creation | Nov 1             | Nov 3             | Completed         |
| command playbooks | for testing purpose of |                   |                   |                   |
|                   | show commands on       |                   |                   | 1/1               |
|                   | network devices.       |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Creation of ping  | Test playbook creation | Nov 4             | Nov 7             | Completed         |
| test playbook     | for testing ping test  |                   |                   |                   |
|                   | through ansible        |                   |                   | 1/1               |
|                   | playbook.              |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Creation of       | Test playbook for      | Nov 4             | Nov 7             | Completed         |
| interface         | setting up interface   |                   |                   |                   |
| configuration     | with IP address and    |                   |                   | 1/1               |
| playbook          | state.                 |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| GNS3 client       | GNS3 client desktop    | Nov 8             | Nov 11            | Completed         |
| (Desktop) setup   | app for virtualization |                   |                   |                   |
|                   | of router and switches |                   |                   | 1/1               |
|                   | communication.         |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| GNS3 VM in VMware | GNS3 VM for running    | Nov 8             | Nov 11            | Completed         |
| workstation setup | images of Cisco router |                   |                   |                   |
|                   | and switches           |                   |                   | 1/1               |
|                   | virtually.             |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Upload of IOS and | IOS and IOU image      | Nov 12            | Nov 15            | Completed         |
| IOU images of     | available as open      |                   |                   |                   |
| router and        | source for testing and |                   |                   | 1/1               |
| switches in GNS3  | learning purpose.      |                   |                   |                   |
| VM                |                        |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+
| Creation of       | Creation of a network  | Nov 16            | Nov 22            | Completed         |
| Network topology  | topology for with      |                   |                   |                   |
| with router and   | established            |                   |                   | 1/1               |
| switches          | communication between  |                   |                   |                   |
|                   | router and switches    |                   |                   |                   |
|                   | with SSH enabled.      |                   |                   |                   |
+-------------------+------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - All tasks were completed on       |
|                                     |   schedule, with clear progress and |
|                                     |   effective use of tools like       |
|                                     |   Ansible and GNS3 for network      |
|                                     |   testing and virtualization.       |
|                                     |                                     |
|                                     | - The GNS3 setup and playbook       |
|                                     |   creations were successfully       |
|                                     |   executed, enabling smooth network |
|                                     |   configuration testing.            |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - More time could have been         |
|                                     |   allocated for testing and         |
|                                     |   troubleshooting during the        |
|                                     |   creation of the network topology. |
|                                     |                                     |
|                                     | - Future tasks could benefit from   |
|                                     |   more frequent updates and         |
|                                     |   check-ins to address any          |
|                                     |   potential issues early.           |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Application development setup.      |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully completed the Ansible setup on the control    |
| node, creation of multiple test playbooks (show commands, ping tests, |
| and interface configurations), and the setup of GNS3 client and VM    |
| environments. IOS and IOU images were uploaded to the GNS3 VM, and a  |
| functional network topology with SSH-enabled communication between    |
| routers and switches was established. All tasks were completed within |
| the planned timelines, ensuring a stable environment for further      |
| testing and development.                                              |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_6:_Ansible)

### 6.8.7 Sprint 7 

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Development Environment Setup       |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | December 1 -- December 10           |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Set up the complete development   |
|                                     |   environment by configuring Tauri, |
|                                     |   Bun, React, TypeScript, Vite, and |
|                                     |   Tailwind CSS.                     |
|                                     |                                     |
|                                     | - Ensure all necessary dependencies |
|                                     |   are installed and the frontend    |
|                                     |   development workflow is ready for |
|                                     |   efficient and scalable            |
|                                     |   application development.          |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                                                                |
+:=================:+===========================================================================+===================+===================+==================:+
| **Task Name**     | **Description**                                                           | **Start Date**    | **End Date**      | **Status**        |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Tauri Setup       | Set up Tauri for building the desktop application.                        | Dec 1             | Dec 10            | Completed         |
|                   |                                                                           |                   |                   |                   |
|                   |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Implement Bun     | Integrate Bun as the package manager for faster installations and builds. | Dec 1             | Dec 10            | Completed         |
| package manager   |                                                                           |                   |                   |                   |
|                   |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Implement React   | Set up React framework for building the frontend interface.               | Dec 1             | Dec 10            | Completed         |
| for Frontend UI   |                                                                           |                   |                   |                   |
|                   |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Implement         | Add TypeScript for type-safe frontend development.                        | Dec 1             | Dec 10            | Completed         |
| TypeScript for    |                                                                           |                   |                   |                   |
| frontend          |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Install           | Install all necessary packages and libraries.                             | Dec 1             | Dec 10            | Completed         |
| dependencies      |                                                                           |                   |                   |                   |
| (node_modules)    |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Implement Vite    | Configure Vite for fast development server and production build.          | Dec 1             | Dec 10            | Completed         |
|                   |                                                                           |                   |                   |                   |
|                   |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Configure Vite    | Set up Vite plugin to integrate Tailwind CSS styling.                     | Dec 1             | Dec 10            | Completed         |
| Plugin for        |                                                                           |                   |                   |                   |
| Tailwind CSS      |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Import Tailwind   | Imported Tailwind CSS into the project for frontend styling.              | Dec 1             | Dec 10            | Completed         |
| CSS               |                                                                           |                   |                   |                   |
|                   |                                                                           |                   |                   | 1/1               |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+
| Install Tailwind  |   ----------------------------------------------------------------------- | Dec 1             | Dec 10            | Completed         |
| CSS as Vite       |                                                                           |                   |                   |                   |
| Plugin            |   ----------------------------------------------------------------------- |                   |                   | 1/1               |
|                   |                                                                           |                   |                   |                   |
|                   |   ----------------------------------------------------------------------- |                   |                   |                   |
|                   |   Install and configure Tailwind CSS through Vite plugin                  |                   |                   |                   |
|                   |   ----------------------------------------------------------------------- |                   |                   |                   |
|                   |                                                                           |                   |                   |                   |
|                   |   ----------------------------------------------------------------------- |                   |                   |                   |
+-------------------+---------------------------------------------------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - The development environment was   |
|                                     |   successfully set up with Tauri,   |
|                                     |   React, TypeScript, Vite, and      |
|                                     |   Tailwind CSS without major        |
|                                     |   issues.                           |
|                                     |                                     |
|                                     | - Dependency management using Bun   |
|                                     |   and Vite improved installation    |
|                                     |   and build speed, enhancing        |
|                                     |   workflow efficiency.              |
|                                     |                                     |
|                                     | - Integration of Tailwind CSS and   |
|                                     |   plugin configuration went         |
|                                     |   smoothly, enabling rapid UI       |
|                                     |   development.                      |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Initial setup documentation could |
|                                     |   be more detailed to assist future |
|                                     |   environment setups.               |
|                                     |                                     |
|                                     | - More time could have been         |
|                                     |   allocated for testing the         |
|                                     |   compatibility between Tauri, Bun, |
|                                     |   and Vite in different operating   |
|                                     |   systems.                          |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Change the package manager to Node  |
|                                     | Package Manager (NPM)               |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully completed the setup of the core development   |
| environment, including Tauri for desktop application building, React  |
| and TypeScript for the frontend, and Vite for efficient development   |
| and production builds. Tailwind CSS was installed and configured      |
| through the Vite plugin, providing a scalable and rapid UI            |
| development framework. All necessary dependencies were installed      |
| using Bun to optimize speed. The development environment is now fully |
| prepared for the next phase of application development.               |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_7:_Development)

### 6.8.8 Sprint 8

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Database setup and host management  |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | December 15 -- December 25          |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Creating database using SQLite,   |
|                                     |                                     |
|                                     | - Develop backend for host          |
|                                     |   inventory management in database, |
|                                     |                                     |
|                                     | - Develop backend for Group         |
|                                     |   inventory management in database, |
|                                     |                                     |
|                                     | - Develop backend for host and      |
|                                     |   group relationship of inventory   |
|                                     |   in the database.                  |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                          |
+:=================:+=====================+===================+===================+==================:+
| **Task Name**     | **Description**     | **Start Date**    | **End Date**      | **Status**        |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Database          | Create SQLite       | Dec 15            | Dec 17            | Completed         |
| Initialization    | database to store   |                   |                   |                   |
|                   | inventory of host   |                   |                   | 1/1               |
|                   | and group using     |                   |                   |                   |
|                   | rust backend.       |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Host Management   | Create backend      | Dec 18            | Dec 21            | Completed         |
|                   | functions for       |                   |                   |                   |
|                   | adding, removing,   |                   |                   | 5/5               |
|                   | modifying host and  |                   |                   |                   |
|                   | credentials in the  |                   |                   |                   |
|                   | inventory database  |                   |                   |                   |
|                   | and retrieving      |                   |                   |                   |
|                   | those from host     |                   |                   |                   |
|                   | information.        |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Group Management  | Create backend      | Dec 22            | Dec 25            | Completed         |
| and Relationship  | functions for       |                   |                   |                   |
|                   | adding, removing,   |                   |                   | 7/7               |
|                   | modifying groups    |                   |                   |                   |
|                   | and retrieving      |                   |                   |                   |
|                   | information of      |                   |                   |                   |
|                   | group from the      |                   |                   |                   |
|                   | database as well    |                   |                   |                   |
|                   | create functions    |                   |                   |                   |
|                   | for assign,         |                   |                   |                   |
|                   | reassign or remove  |                   |                   |                   |
|                   | hosts to/from       |                   |                   |                   |
|                   | group.              |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - The database initialization and   |
|                                     |   the development of host and group |
|                                     |   management features were          |
|                                     |   completed successfully within the |
|                                     |   planned timeline.                 |
|                                     |                                     |
|                                     | - Backend functions for managing    |
|                                     |   hosts, groups, and their          |
|                                     |   relationships were implemented    |
|                                     |   efficiently, with good database   |
|                                     |   structure and clean Rust code.    |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Some functions could be further   |
|                                     |   optimized for better error        |
|                                     |   handling and database query       |
|                                     |   performance.                      |
|                                     |                                     |
|                                     | - More unit testing during          |
|                                     |   development could have helped     |
|                                     |   catch minor edge cases earlier.   |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Test integration of backend         |
|                                     | function.                           |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| This sprint successfully delivered the initialization of the SQLite   |
| database to store host and group inventory. Backend functions for     |
| adding, removing, modifying, and retrieving hosts and groups were     |
| completed, along with the implementation of relationships between     |
| hosts and groups. All planned features were completed on time,        |
| providing a solid and reliable foundation for managing inventory data |
| in the application.                                                   |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_8:_Database)

### 6.8.9 Sprint 9 

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Inventory Management and Testing    |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | December 26 -- December 31          |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Performing integration testing    |
|                                     |   for all functions implemented in  |
|                                     |   the backed for host management in |
|                                     |   backend                           |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                          |
+:=================:+=====================+===================+===================+==================:+
| **Task Name**     | **Description**     | **Start Date**    | **End Date**      | **Status**        |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| View Inventory    | Test the view       | Dec 26            | Dec 28            | Completed         |
| testing           | inventory function  |                   |                   |                   |
|                   | to view and list    |                   |                   | 1/1               |
|                   | the inventory from  |                   |                   |                   |
|                   | the database.       |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Integration       | Perform integration | Dec 29            | Dec 31            | Completed         |
| Testing           | testing for all the |                   |                   |                   |
|                   | functions to test   |                   |                   | 1/1               |
|                   | and ensure all the  |                   |                   |                   |
|                   | backend function    |                   |                   |                   |
|                   | for inventory       |                   |                   |                   |
|                   | management work     |                   |                   |                   |
|                   | together            |                   |                   |                   |
|                   | seamlessly.         |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - View inventory functionality      |
|                                     |   worked as expected, correctly     |
|                                     |   listing hosts and groups from the |
|                                     |   database.                         |
|                                     |                                     |
|                                     | - Integration testing successfully  |
|                                     |   validated that all backend        |
|                                     |   functions operated together       |
|                                     |   smoothly without major issues.    |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Minor improvements in test case   |
|                                     |   coverage could further strengthen |
|                                     |   system reliability.               |
|                                     |                                     |
|                                     | - Testing automation could be       |
|                                     |   introduced to speed up future     |
|                                     |   regression tests.                 |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Develop GUI for Dynamic Inventory   |
|                                     | Management.                         |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully completed the testing of the inventory        |
| viewing functionality and performed integration testing across all    |
| backend inventory management features. All components worked together |
| seamlessly, confirming the stability and correctness of database      |
| operations. This sprint ensures that the backend is ready for further |
| development and integration with the frontend.                        |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_9:_Inventory)

### 6.8.10 Sprint 10

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Frontend Development for Dynamic    |
|                                     | Management                          |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | January 3 -- February 1             |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Develop frontend components for   |
|                                     |   Dynamic Inventory Management,     |
|                                     |   ensuring smooth integration with  |
|                                     |   the backend.                      |
+-------------------------------------+-------------------------------------+

+----------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                     |
+:=================:+================================+===================+===================+==================:+
| **Task Name**     | **Description**                | **Start Date**    | **End Date**      | **Status**        |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+
| Host Management   | Develop GUI to add, display,   | Jan 3             | Jan7              | Completed         |
|                   | edit and delete host.          |                   |                   |                   |
|                   |                                |                   |                   | 2/2               |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+
| Group Management  | Develop GUI to add, display,   | Jan 8             | Jan 11            | Completed         |
|                   | edit and delete group.         |                   |                   |                   |
|                   |                                |                   |                   | 2/2               |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+
| Assign host to    | Develop GUI to assign a host   | Jan 12            | Jan 14            | Completed         |
| group             | to group from the inventory    |                   |                   |                   |
|                   | database.                      |                   |                   | 1/1               |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+
| Inventory Display | Develop GUI to display list of | Jan 15            | Jan18             | Completed         |
|                   | groups from inventory database |                   |                   |                   |
|                   | while adding functionality to  |                   |                   | 3/3               |
|                   | reassign hosts between groups  |                   |                   |                   |
|                   | or remove host from group.     |                   |                   |                   |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+
| Styling           | Implement styling to all the   | Jan 25            | Jan 26            | Completed         |
|                   | components using Tailwind CSS  |                   |                   |                   |
|                   | and ensuring all of them       |                   |                   | 2/2               |
|                   | support dark mode.             |                   |                   |                   |
+-------------------+--------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - The development of frontend       |
|                                     |   components for host and group     |
|                                     |   management, assignment, and       |
|                                     |   inventory display was completed   |
|                                     |   successfully and integrated well  |
|                                     |   with the backend.                 |
|                                     |                                     |
|                                     | - Tailwind CSS styling was          |
|                                     |   implemented effectively, ensuring |
|                                     |   responsive design and dark mode   |
|                                     |   compatibility.                    |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Early UI/UX mockups could have    |
|                                     |   made the development process more |
|                                     |   efficient and consistent.         |
|                                     |                                     |
|                                     | - Minor improvements could be made  |
|                                     |   in optimizing component           |
|                                     |   reusability and code modularity.  |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Backend development for running     |
|                                     | playbook using GUI.                 |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| The sprint successfully delivered the frontend components for Dynamic |
| Inventory Management, including host and group management,            |
| host-to-group assignments, and inventory display functionalities. All |
| components were styled using Tailwind CSS with full support for dark  |
| mode. The integration with the backend was seamless, and the user     |
| interface is now ready for further testing and future enhancements.   |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#sprint-10)

### 6.8.11 Sprint 11 

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Playbook Runner (Backend            |
|                                     | Development)                        |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | February 2 -- February 24           |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Develop backend function and      |
|                                     |   logic to fetch playbooks from     |
|                                     |   local directory, temporary        |
|                                     |   inventory file generator,         |
|                                     |   executing playbook and error      |
|                                     |   handling with logging.            |
+-------------------------------------+-------------------------------------+

+------------------------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                                       |
+:=================:+==================================+===================+===================+==================:+
| **Task Name**     | **Description**                  | **Start Date**    | **End Date**      | **Status**        |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+
| Playbook          | Develop logic and function to    | Feb 2             | Feb 6             | Completed         |
| Management        | fetch playbook from local        |                   |                   |                   |
|                   | directory and get full path of   |                   |                   | 2/2               |
|                   | the selected playbook.           |                   |                   |                   |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+
| Inventory File    | Develop logic and function to    | Feb 7             | Feb 11            | Completed         |
| Creation          | dynamically generate inventory   |                   |                   |                   |
|                   | file for selected devices in     |                   |                   | 2/2               |
|                   | correct YAML format.             |                   |                   |                   |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+
| Playbook          | Develop logic and function to    | Feb 12            | Feb 20            | Completed         |
| Execution         | execute selected playbook using  |                   |                   |                   |
|                   | ansible-playbook command and     |                   |                   | 3/3               |
|                   | capture and return execution     |                   |                   |                   |
|                   | output.                          |                   |                   |                   |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+
| Error Handling    | Develop logic for error handling | Feb 21            | Feb 24            | Completed         |
| and Logging       | for invalid playbook, missing or |                   |                   |                   |
|                   | invalid inventory credential or  |                   |                   | 2/2               |
|                   | failed execution for debugging   |                   |                   |                   |
|                   | purposes.                        |                   |                   |                   |
+-------------------+----------------------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - Core functionalities for playbook |
|                                     |   management, inventory file        |
|                                     |   generation, execution, and output |
|                                     |   capture were implemented          |
|                                     |   successfully.                     |
|                                     |                                     |
|                                     | - Error handling and logging        |
|                                     |   mechanisms were added, improving  |
|                                     |   system reliability and            |
|                                     |   simplifying debugging.            |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - Execution speed could be further  |
|                                     |   optimized, especially for large   |
|                                     |   inventories or complex playbooks. |
|                                     |                                     |
|                                     | - More extensive testing with       |
|                                     |   various edge cases would ensure   |
|                                     |   even greater robustness.          |
+-------------------------------------+-------------------------------------+
| **Action Items for Next Sprint:**   | Develop GUI for Playbook runner.    |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| This sprint successfully completed the development of key backend     |
| functionalities, including fetching playbooks, generating dynamic     |
| inventory files in YAML format, executing playbooks with captured     |
| outputs, and implementing robust error handling and logging. These    |
| features ensure smooth playbook execution with better reliability,    |
| debugging support, and readiness for integration with the frontend.   |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_11:_Playbook)

### 6.8.12 Sprint 12

+---------------------------------------------------------------------------+
| **Sprint Information**                                                    |
+=====================================+=====================================+
| **Field**                           | **Description**                     |
+-------------------------------------+-------------------------------------+
| **Sprint Name**                     | Playbook Runner (Frontend           |
|                                     | Development)                        |
+-------------------------------------+-------------------------------------+
| **Sprint Duration**                 | February 23 -- March 27             |
+-------------------------------------+-------------------------------------+
| **Sprint Goals**                    | - Develop frontend components for   |
|                                     |   Playbook Runner for playbook      |
|                                     |   execution via GUI, ensuring       |
|                                     |   smooth integration with the       |
|                                     |   backend.                          |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| **Task Completion Status**                                                                          |
+:=================:+=====================+===================+===================+==================:+
| **Task Name**     | **Description**     | **Start Date**    | **End Date**      | **Status**        |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Playbook          | Develop GUI to      | Feb 23            | Mar 4             | Completed         |
| Selection         | display dropdown of |                   |                   |                   |
|                   | available playbook  |                   |                   | 2/2               |
|                   | which is fetched    |                   |                   |                   |
|                   | using Rust backend  |                   |                   |                   |
|                   | API for listing     |                   |                   |                   |
|                   | playbooks.          |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Inventory         | Develop GUI to      | Mar 5             | Mar 10            | Completed         |
| Selection         | allow users to      |                   |                   |                   |
|                   | select hosts or     |                   |                   | 2/2               |
|                   | groups to run       |                   |                   |                   |
|                   | Ansible playbook on |                   |                   |                   |
|                   | them.               |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Playbook          | Develop the GUI     | Mar 11            | Mar 14            | Completed         |
| Execution         | button to trigger   |                   |                   |                   |
|                   | the Rust backend    |                   |                   | 2/2               |
|                   | API for running     |                   |                   |                   |
|                   | playbooks with the  |                   |                   |                   |
|                   | selected host,      |                   |                   |                   |
|                   | groups, and         |                   |                   |                   |
|                   | playbook.           |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Display Execution | Develop GUI to      | Mar 15            | Mar 18            | Completed         |
| Results           | update the Playbook |                   |                   |                   |
|                   | runner component    |                   |                   | 2/2               |
|                   | and display         |                   |                   |                   |
|                   | execution results   |                   |                   |                   |
|                   | which handle errors |                   |                   |                   |
|                   | and display         |                   |                   |                   |
|                   | appropriate error   |                   |                   |                   |
|                   | message.            |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+
| Testing and       | Perform end to end  | Mar 19            | Mar 27            | Completed         |
| Review            | testing for the Run |                   |                   |                   |
|                   | Playbook features,  |                   |                   | 4/4               |
|                   | while fixing bugs   |                   |                   |                   |
|                   | and then            |                   |                   |                   |
|                   | demonstrating the   |                   |                   |                   |
|                   | complete            |                   |                   |                   |
|                   | application to      |                   |                   |                   |
|                   | stakeholders.       |                   |                   |                   |
+-------------------+---------------------+-------------------+-------------------+-------------------+

+---------------------------------------------------------------------------+
| **Review and Retrospective**                                              |
+=====================================+=====================================+
| **What Went Well:**                 | - The frontend for selecting        |
|                                     |   playbooks, inventory, and         |
|                                     |   executing playbooks was developed |
|                                     |   and integrated smoothly with the  |
|                                     |   backend APIs.                     |
|                                     |                                     |
|                                     | - End-to-end testing was            |
|                                     |   successfully completed, and the   |
|                                     |   final application demonstration   |
|                                     |   to stakeholders was well received |
|                                     |   with positive feedback.           |
+-------------------------------------+-------------------------------------+
| **What Could Be Improved:**         | - UI responsiveness during playbook |
|                                     |   execution could be enhanced to    |
|                                     |   better indicate ongoing           |
|                                     |   operations.                       |
|                                     |                                     |
|                                     | - More automated testing for        |
|                                     |   frontend components could reduce  |
|                                     |   the need for manual bug fixing    |
|                                     |   after integration.                |
+-------------------------------------+-------------------------------------+

+-----------------------------------------------------------------------+
| **Sprint Release**                                                    |
+=======================================================================+
| **Release Notes:**                                                    |
|                                                                       |
| This sprint successfully delivered the complete frontend interface    |
| for running Ansible playbooks, including playbook selection,          |
| inventory selection, execution triggering, and real-time result       |
| display with error handling. The integration between the frontend and |
| backend was validated through thorough end-to-end testing, and the    |
| final application demonstration to stakeholders was completed         |
| successfully, marking the feature as production ready.                |
+-----------------------------------------------------------------------+

[**\[Back to Report\]**](#_Sprint_12:_Playbook)

## 6.9 Appendix 9

### 6.9.1 Social, Legal and Ethical Issues

All guidelines and academic policies issued by Islington College and
London Metropolitan University have been upheld during the Netrunner
project development. The Netrunner development serves exclusively
educational functions to meet B.Sc. (Hons) Computer Networking and IT
Security program requirements for end-of-year studies. The project
development demanded appropriate ethical, legal and social attention
throughout requirement gathering and design and implementation and
documentation phases. All project steps were handled with great care to
maintain respectfulness together with security standards while upholding
academic requirements and institution standards.

#### 6.9.1.1 Social Issues

The research project omits all material that can lead to harm for
individual persons or demographic clusters or community segments. All
data collection materials have been restricted to academic assessment
needs and testing purposes while protecting personal privacy as well as
social delicacy. The program development took place through simulation
using fictitious data instead of real-world user information. The
content deploys both objective and fair treatment towards all mentioned
individuals and organizations and technologies. The project does not
offer any content which could be labeled as religion-based or
politically slanted. The goal throughout development was to build a
responsible social tool which helps professional growth while
maintaining network effectiveness without changing social values.

### 6.9.1.2 Legal Issues

The entire development of Netrunner includes tools and software that
fell into three categories: open-source licenses, free
community-community licenses and developer-owned software. Educational
and research uses benefit from permissive licenses which protect four
tools known as Ansible and Rust and React and GNS3. The testing of the
project along with its implementation took place in virtual environments
through VMware and GNS3 exclusively rather than connecting to live
production networks. The development period was completed without any
occurrence of unauthorized system access. From start to finish the
development process stayed strictly inside global and Nepal legal
boundaries when data protection measures, software licensing terms and
access control rules were followed exactly.

### 6.9.1.3 Ethical Issues

The client organization, Vianet Communications Pvt. Ltd., supported the
project by providing the necessary guidance and feedback during the
development phase. The entire testing data underwent anonymization
processes alongside simulation techniques to preserve ethical standards.
The researchers have properly documented their sources along with
frameworks and libraries which they utilized. The entire project
development process together with documentation stages remains free from
plagiarism. This project abides by all London Metropolitan University
ethical research guidelines as well as intellectual property rights
requirements. The project conserves all data and references citing their
sources with appropriate attribution while showing due care in its use
and collection of information.

[**\[Back to report\]**](#_5.2_Social,_Legal)

## 6.10 Appendix 10

### 6.10.1 Development Environment 

- **Visual Studio Code (VS Code)**

> VS Code is a popular free and open-source code editor developed by
> Microsoft which is a lightweight and powerful with Git integration for
> Version Control, debugging tools to debug code without leaving IDE,
> extension support such as rust-analyzer, Tauri, YAML and Prettier-
> Code Formatter, and in-built terminal access.

### 6.10.2 Frontend Stack

- **React**

> React is a JavaScript library which uses component-based architecture
> developed by Facebook for developing fast and scalable user interface.
> Component-based architecture allows users to break down UI into
> independent and reusable pieces. React uses Virtual DOM for efficient
> UI updates, JSX syntax for combining HTML and JavaScript and One-way
> data binding for predictable state management. The following features
> highlight React's capabilities in GUI development:

- **Component-Based Architecture**

> React allows applications development in the way that each component
> is independent and has its lifetime. Each one of them is to draw some
> part of the interface and they can be shared between the interfaces of
> the application, which helps to avoid code redundancy.

- **Virtual DOM**

> DOM which stands for Document Object Model is basically a programming
> interface that portrays an HTML document as a node tree. Every node
> represents an HTML tag, and it can be read and written to and from
> JavaScript. In other words, the DOM helps script web developers to
> navigate, access, and change the content, structure, and look-and-feel
> of an HTML document. (Muyldermans, 2019)
>
> : Picture representing DOM tree (w3school, 2024)
>
> The Virtual DOM is effectively a real DOM replica stored in the
> memory. Unlike the actual DOM, which JavaScript frameworks such as
> React manipulate, changes are applied to the so-called Virtual DOM.
> Each time something changes for instance when the state of a component
> is changed, React to start with, modifies the Virtual DOM then
> computes the minimal changes which are needed to synchronize it with
> the actual DOM.
>
> This approach eliminates limitations of high frequency DOM updates,
> especially in complex or dynamic web applications. The Virtual DOM is
> an in-memory object which is way faster than the actual DOM since it
> must render the changes in the webpage. (Muyldermans, 2019)
>
> : Picture representing ReactJS Virtual DOM (geeksforgeeks, 2024)
>
> **Declarative Syntax and Dynamic Rendering**
>
> React uses declarative syntax meaning that developers write a
> description for the UI that the program should display for any state.
> React then takes care of the task of updating the view based on change
> in the state. This is a better approach than the imperative
> programming where a programmer must control the Document Object Model
> (DOM).
>
> : Picture representing declarative syntax
>
> In the picture above, the code simply displays "*Hello \${name}*"
> where *\${name}* is a dynamic value passed as a prop, where the DOM
> updates itself when the *name* changes. Furthermore, when the *name*
> changes the content inside the *h1* tag which is the *"Hello
> \${name}"* updates itself as React re-render the component whenever
> the prop changes and updates the UI. This automatic update of the UI
> is known as Dynamic Rendering.
>
> The dependencies used of React for Netrunner Tool:

- react,

- react-dom,

- \@types/react for TypeScript support

<!-- -->

- **Tailwind CSS**

Tailwind is a utility-first CSS framework that enables developers to
build responsive and modern UIs directly in JSX which eliminates the
need for writing custom CSS by offering pre-built classes for layout,
spacing, typography, and more. Its key features include customizable
design system as brand's color can be set in the tailwind.config,js and
then can be used in JSX over and over and rapid UI development without
switching contexts which saves time and improve productivity.

The dependencies of Tailwind CSS implementation for Netrunner Tool:

- tailwindcss,

- postcss,

- autoprefixer,

<!-- -->

- **TypeScript**

TypeScript is a statically typed superset of JavaScript that improves
development speed and reduces bugs by early error detection through
static type checking and enforce type safety. It is also fully
compatible with React, which makes it easier to maintain large
codebases. Typescript includes interfaces and types for better code
clarity with seamless integration with JavaScript features.

The dependencies of TypeScript for Netrunner Tool:

- typescript,

- tsconfig.json

- \@types package for React

<!-- -->

- **Vite**

Vite is a modern frontend build tool that offers fast development
startup and lightning- fast hot module replacement (HRM) which is a
feature in development environment that allows update modules (files) in
the browser without doing a full page reload. It significantly improves
development experiences over traditional bundlers like Webpack.

The dependencies of Vite for Netrunner Tool:

- vite,

- vite-plugin-react,

- vite-plugin-tauri

### 6.10.3 Backend Stack

- **Rust**

Rust is a system programming language known for blazing fast and
memory-efficient with no runtime or garbage collector. It can power
performance-critical services, run on embedded devices, and easily
integrate with other languages. Rust's rich type system and ownership
model guarantee memory-safety and thread-safety eliminating many classes
of bugs at compile-time. Rust has great documentation, a friendly
compiler with useful error messages, and top-notch tooling --- an
integrated package manager and build tool, smart multi-editor support
with auto-completion and type inspections, an auto-formatter, and more.

For Netrunner is used in the backend to manage logic, execute tasks, and
securely interact with frontend components and databases.

Key dependencies for Rust backend in development of Netrunner Tool are:

- Tokio for asynchronous runtime,

- serde, serde_json, serde_yaml for data serialization,

- rusqlite for SQLite interaction,

- regex, std::process for command execution and output handling.

<!-- -->

- **Tauri**

> Tauri is a framework for building lightweight, secure and
> cross-platform desktop application using front-end technologies and a
> Rust backend. It wraps the application into a native binary that
> communicates with the OS using minimal resources. The key features
> Tauri includes -- while building app the binary size is as low and
> small as 600 KB, it has a secure architecture with permission-based
> API access, and the most valuable feature is that it includes Native
> OS API support with seamless frontend-backend communication.

### 6.10.4 Database

- **Rusqlite**

Rusqlite is a wrapper around SQLite for use in Rust application which
provides a lightweight, fast, and reliable way to store data locally
without requiring an external database server.

In Netrunner the databases are used for inventory management of the
network devices and storing user credentials and logs.

### 6.10.5 Automation and Execution Engine

**Ansible**

Ansible is an open-source IT automation tool developed by **Michael
DeHaan** in 2012 and acquired by **Red Hat** in 2015. This tool executes
predefined tasks on the playbook on remote devices using SSH or Netconf
communication. It has a agentless architecture, and the playbooks are
YAML-based, and it supports both dynamic and static inventory.

The dependencies for Ansible automation engine are:

- ansible-core, ansible-galaxy,

- Python runtime

**Inventory Management in Ansible**

Ansible uses an inventory to define the hosts and groups of hosts on
which the automation tasks will be performed. The inventory is a simple
text file in YAML format, it can also be in simple text file in INI
format or a dynamic inventory from an external sources like cloud
providers and APIs. It plays a central role in the management of network
devices for automations tasks. (Ansible, 2024)

<figure>
<img src="media/image210.jpg" style="width:6.17197in;height:3.15572in"
alt="A screenshot of a computer AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of sample manual inventory file in YAML
format.</p></figcaption>
</figure>

**Playbooks in Ansible**

Ansible playbooks are the core of Ansible automation. A playbook defines
a series of tasks to be executed on specified hosts, which can be single
device or groups of devices. Each task represents a single action, such
as executing show interfaces of cisco router; command: "show ip
interface brief" or configure a VLAN on a switch; commands: "vlan
\<vlan_id\>" "name \<vlan_name\>", and these tasks are organized into
plays that target different hosts or groups. The grouping of the tasks
using a playbook format makes the process logical and easy for
development as the format can be easily reused as a blueprint. As
Ansible playbooks have been designed to be idempotent in their
operations or in other words, running a particular task multiple times
on a system does not create unintended effects if the system is already
configured in the way required by the playbook. That is why playbooks
are very useful in terms of configuration management as with their help
the same set of tasks could be run on many systems at once without any
harm to be done to the configurations.

<figure>
<img src="media/image211.jpg" style="width:5.88251in;height:2.37043in"
alt="A computer screen with text AI-generated content may be incorrect." />
<figcaption><p>: Screenshot of smaple playbook file in YAML
format.</p></figcaption>
</figure>

**Key Features of Ansible Network Automation**

Ansible offers several features that make it ideal for network
automation, features as follows:

- **Agentless Architecture:** Ansible does not require agents like
  Puppet, Chef, Saltstack, and CFEngine on the target devices as it uses
  **Secure Shell (SSH)** for communication.

- **Time Saving:** Implementing Automation speeds up configuration tasks
  and reduces manual interventions.

- **Improved Network Performance and Reliability:** By automating
  network tasks, downtime is reduced, and the network performance is
  optimized.

- **Error Reduction:** Automating network tasks minimize human error
  associated with manual configuration, leading to more reliable network
  operations.

[**\[Back to Report\]**](#_2.3.2_Technical_Components)

## 6.11 Appendix 11

### 6.11.1 System Working Mechanism

- **User Authentication and Access**

  - The user launches the Netrunner desktop application.

  - Upon startup, the application checks for stored credentials in the
    Rusqlite database and authenticates the user.

- **Inventory Management**

  - After logging in, the user can view, add, modify or delete device
    inventory through the UI.

  - The inventory data such as hostname, IP address, username and
    password are fetched from the inventory database.

- **Playbook Selection**

  - The user can select pre-defined Ansible Playbook from a list
    dropdown fetched with Rust backend in Run Playbook dashboard.

  - These playbooks are stored in a designated directory and are used
    for automation tasks such as configuration, data collection and
    troubleshooting.

- **Temporary Inventory Generation**

  - Once the user selects the playbooks and hosts or group to run the
    playbook on, the Rust backend dynamically generates a temporary
    inventory file in YAML format.

  - This file includes only the selected devices and required
    credentials and connection information for execution.

- **Task Execution via Ansible**

  - The backend the calls Ansible, passing the playbook and temporary
    inventory path.

  - Ansible executes the playbook against the targeted network devices,
    which are simulated on GNS3 topology.

- **Output Capture**

  - The task execution and output log generated by ansible are captured
    by the Rust backend.

  - This log includes task results errors if any, and execution
    summaries.

- **Log Display & Feedback**

  - The captured logs are sent to the frontend interface and displayed
    in the output section which users can view.

- **Result Persistence**

  - Execution history, logs, and changes are optionally stored in
    another Rusqlite database.

  - This allows tracking of what changes were made to which devices and
    when.

[**\[Back to Report\]**](#_2.3.1.2_System_Working)

## 6.12 Appendix 12

### 6.12.1 Context of Survey Form

![](media/image212.png){width="4.19840769903762in"
height="6.472919947506561in"}

![](media/image213.png){width="2.757642169728784in"
height="3.53544072615923in"}

![](media/image214.png){width="2.8197747156605426in"
height="4.623515966754156in"}

![](media/image215.png){width="4.305872703412073in"
height="5.037793088363954in"}

![](media/image216.png){width="4.31367782152231in"
height="3.1034744094488187in"}

### 6.12.2 Sample of Filled Context Survey Form

![](media/image217.png){width="3.212424540682415in"
height="8.360044838145232in"}

![](media/image218.png){width="4.0653827646544185in"
height="9.128853893263342in"}

![](media/image219.png){width="3.6049332895888013in"
height="8.745697725284339in"}

### 6.12.3 Context Survey Form Result

![Forms response chart. Question title: Your role:. Number of responses:
24 responses.](media/image220.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Your experience with network
automation tools: . Number of responses: 24
responses.](media/image221.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: How easy was it to use the
tool?. Number of responses: 24
responses.](media/image222.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: How would you rate the overall
user interface (UI) design?  . Number of responses: 24
responses.](media/image223.png){width="6.5in"
height="3.0902777777777777in"}

![Forms response chart. Question title: How intuitive was the user
interface? . Number of responses: 24
responses.](media/image224.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Did the tool meet your
expectations for automating network tasks?  . Number of responses: 24
responses.](media/image225.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Which features did you find most
useful?  . Number of responses: 23
responses.](media/image226.png){width="6.5in"
height="3.0902777777777777in"}

![Forms response chart. Question title: Was the performance of the tool
(speed/responsiveness) satisfactory?. Number of responses: 24
responses.](media/image227.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Was the playbook execution
feature useful and functional? . Number of responses: 24
responses.](media/image228.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Did the output logs provide
clear and sufficient feedback after playbook execution? . Number of
responses: 23 responses.](media/image229.png){width="6.5in"
height="2.734722222222222in"}

![Forms response chart. Question title: Would you recommend Netrunner to
others in your field? . Number of responses: 24
responses.](media/image230.png){width="6.5in"
height="2.734722222222222in"}

## 6.13 Appendix 13

### 6.13.1 Important Screenshots

![: Screenshot of the test environment network topology in
GNS3](media/image231.png){width="6.5in" height="2.729861111111111in"}

![: Screenshot of running GNS3 VM on VMware
Workstation.](media/image232.png){width="6.5in"
height="3.704861111111111in"}

![: Initial requirement setup in GNS3
VM](media/image233.png){width="6.5in" height="6.327083333333333in"}

![: Screenshot of initial SSH configuration on control
node](media/image234.png){width="6.5in" height="1.325in"}

![:: Screenshot of enabling DHCP and obtaining IP
address](media/image235.jpg){width="4.86375in"
height="2.640277777777778in"}

![: Screenshot of setting up domain and generating RSA
key](media/image236.jpg){width="6.4375in" height="3.2888888888888888in"}

![: Screenshot of setting up VTY and adding transport input as
SSH](media/image237.jpg){width="6.4134722222222225in"
height="0.7104166666666667in"}

![: Screenshot of setting up SSH
version](media/image238.jpg){width="6.420556649168854in"
height="0.19027777777777777in"}

![: Screenshot of setting up local user with encrypted
password](media/image239.png){width="6.394584426946632in"
height="0.8319444444444445in"}

![: Screenshot of GitHub repository of the codebase of
Netrunner.](media/image240.png){width="6.5in"
height="2.9965277777777777in"}

![: Screenshot of commits done to Netrunner Repo for version
control.](media/image241.png){width="6.5in"
height="7.053472222222222in"}

![: Screenshot of Trello Board used for Project
Management](media/image242.png){width="6.5in" height="1.675in"}

The unit will be 100% coursework assessed and undertaken in your groups. Collectively you will have to deliver:

1. A MEAN stack web app (with source code posted on Github)
2. A project report on GitHub which documents both the product and the process of the development

### MEAN Stack Web App

You must use Github to collect together all your work as a portfolio which you will then deliver at the coursework deadline. However, you should also use continuous integration (Docker or online) so we can provide feedback throughout the development process. You will learn about setting this up in the technical materials and workshop.

### Project Report

Also on your Github repository, you must write a front-page document (readme.md) that will form your project report. It is scored out of 100 marks and should include the following sections in the order outlined.

#### Team

- Team (product) name
- Name / photo / role for each team member.



## System Design

#### Introduction [10 marks]

- Abstract. Motivation for the project, framing of the problem and a high-level overview of the system.
- Project Objectives. The high level goals of the project and the contribution towards solving the problem. A checklist against which the team can evaluate their success.
- <u>Video. Short (1-2min) demo video to explain your system (think Kickstarter)</u>
  - **do this at end**

#### Background and Motivation [10 marks]

- Background literature. Academic research review.
  - **Find a paper** (academic)
- State of the art survey. Current industry review.
  - **Market research report**
- Clear definition of the problem. How does your project relate to the above? We will be marking the ability of your team to identify a worthwhile and important problem and clearly articulate the scope and challenge of the problem.

#### UX Design [15 marks]

- Design Process and Early prototyping and ideation (including mood boards and paper prototyping)
  - **Paper prototype**
  - **Mood boards**
- Identification of interacting users and broader stakeholders.
  - **Backdate Stakeholders** - see stakeholders section here: https://github.com/Team-Jag/Do-or-die-fitness-tracker/blob/develop/Portfolio/SystemDesign.md#end-user
- UX approach – design heuristics/approach, design methods (design fiction / heuristics)
  - **Miro board**
  - **Matrix in teams**
  - Refeerecne game storming book?
- Understanding of user group (questionnaires / user stories / interviews)
  - **Surveymonkey x2, live user testing (over the shoulder)**
- Wireframes and interaction flow diagrams for final key subsystems.
  - **Wireframe (Marvel)**



---

#### System Implementation [20 marks]:

- Stack architecture and system design (e.g. class diagrams, sequence diagrams).
  - [ ] **UML diagrams**
  - [ ] **Example spreadsheet showing data**
  - [ ] **Talk about SQL vs noSQL** (reference "Learning Web App Development pdf")
- Back End - MongoDB - database implementation, the data model that you developed your back end from (e.g. entity relationship diagrams).
  - **Refer to backend meeting log**

- Middle Tier - Express, Node, the RESTful API

  - **Subscribing in quizcomponent.ts and using dataservice.ts**
  - **Importing the big json instead of individual topics** - efficiency, ease of use

- Front End - Angular. Details of implementation.

  - **Refer to backend meeting log**
  - **Spotify quiz **
  - **Pair programming sessions**
  - **choice between frameworks**

- Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!

  - **Social media links**
  - **Could ask one of the TAs** / other repos

- Deployment details (including Docker), include how you have been achieving continuous integration and deployment.

  - **Maybe insertDataScript reference**

  - **Refer to agile**
  - **Deploy.sh script**
  - **Integrating old DemoSite into QuizApp**



#### Sprints & Project Management [15 marks]

- Group working methods used (for instance did your team choose a particular style of agile? what communication channels did you use?)
  - **Expand Software Development Process section to incorporate Agile framework, like do or die**
- Discussion of team roles (specialisation is ok!). A summary of individual contributions (note: this is for reference, your team will all receive the same grade!).
- Documentation of your sprints, including both high level overview, timeline, and selected highlights that were critical points in the project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies for absence etc)
  - **Gantt Chart**
  - **Regular stand ups around assignments** - stand up structure etc
- Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.
  - **Git network graph**: https://github.com/Davospike/segpSPA/network
  - **Branches** - choice to only merge with dev (instead of master) - been using versioning, master is like our release
  - **Reference some good git practices and say we followed these**
  - **Issues faced:** - duplicated files, merge conflicts, was a time we had to look through previous commits as were missing an old method in api.js (general newsTopics get)
  - **Ensured how our commit messages were always meaningful**



---

#### Evaluation [15 marks]

- Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.
  - **User feedback **- surveys, over the shoulder tests
  - **Front end -> back end communication**
  - **Allison & Marceli meeting**
  - **Paper prototype, maybe some old screenshots of design**
- Unit testing / Functional testing.
  - **Mocha**
  - **Git integrating test stuff**
- User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
  - **How we adapted after seeing user feedback?**

#### Conclusion [10 marks]:

- Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc).
- Reflective discussion of the success of the project. How well did your project fulfil the brief? Were all of your own objectives met
  - **not being able to implement statistics (num_correct)**
- This is a chance to reflect on how coronavirus has affected your project (remote working practices etc)
  - **difficulties in brainstorming, pair programming technologies, **
- Discussion of Social and Ethical implications of your work.
  - **ethical framework**
- Discussion of future work (in terms of design, development and evaluation)
  - **more fake news, continuous pulling of data, our own integrate fake news detection model, user accounts, different data formats ie using dataset DB in archive (and different types of quizzes), mobile app, expanding answers beyond true/false**


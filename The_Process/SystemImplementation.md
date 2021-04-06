<h1 align="center"> System Implementation </h1>

## Table of Contents

- [Software Development Process](#software-development-process)
   - [Software Development Lifecycle](#software-development-life-cycle)
   - [Agile](#agile)
   - [GitHub Continuous Integration](#gitHub-continuous-integration)
- [Sprints](#sprints)
   - [Sprint 1 : Webpage Design & Initial Feedback (01.03.21-07.03.21)](#sprint-1--webpage-design--initial-feedback-010321-070321)
   - [No Sprints : Continue Working On Workbooks (08.03.21-21.03.21)](#no-sprints--continue-working-on-workbooks-080321-210321)
   - [Sprint 2 : Market Research & Deploying Boilerplate (22.03.21-28.03.21)](#sprint-2--market-research--deploying-boilerplate-220321-280321)
   - [Sprint 3 : Prepare Backend & Additional Wireframe (29.03.21-04.04.21)](#sprint-3--prepare-backend--additional-wireframe-290321-040421)
- [MEAN Stack System Implementation](#mean-stack-system-implementation)
   - [Stack Architecture & System Design](#stack-architecture--system-design)
   - [Back End : MongoDB](#back-end--mongodb)
   - [Middle Tier : Express, Node, RESTful API](#middle-tier--express-node-restful-api)
   - [Front End : Angular](#front-end--angular)
   - [Deplyoment](#deployment)
   - [Additional](#additional)

## Software Development Process
A software development process can be seen as the application of divide and conquer whereby the development process is divided into smaller, parallel steps or subprocesses. Doing so helps improve the design and management of a project. Given that we, as university students, had other commitments and modules, we were aware that we would have to manage the project development in a flexible manner, and in a fixed amount of time. Unlike in the professional world, we could not get extensions. 

Due to these constraints, we first sought out a strategy to apply to our work approach. We knew little and often be beneficial, ensuring a smoother journey towards a minimal viable product. For that reason we set out to compare and contrast the industry standard software development life cycle methods in order to find our approach.

[ADD TO] - Stuff on "Discussion of team roles (specialisation is ok!). A summary of individual contributions (note: this is for reference, your team will all receive the same grade!)."  OR this goes in conclusion/evaluation? 12.03.21 meeting

### Software Development Life Cycle
[ADD TO/REMOVE] - Discuss SDLC framework/ideas etc. 

### Agile
[ADD TO] - Discuss agile and benefits vs Waterfall and why we chose it.
[ADD TO] - Group working methods used (for instance did your team choose a particular style of agile? what communication channels did you use?)

### GitHub Continuous Integration
[ADD TO] - Stuff on "Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout."

## Sprints
[MARK SCHEME] - Documentation of your sprints, including both high level overview, timeline, and selected highlights that were critical points in the project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies for absence etc)

### Sprint 1 : Webpage Design & Initial Feedback (01.03.21-07.03.21) 
During this week we had a reading week and a break from new content on our modules. We used this as an opportunity to come together to have our first sprint. 

The goals of the first sprint were as follows:
- Come together and brainstorm an initial webpage design.
- Develop a paper prototype design of what we thought our Fake News quiz could look like (to read more about our design processes and ideation, please see the [System Design page](SystemDesign.md)).
- Generate a SurveyMonkey feedback questionaire for our paper prototype ([see here](../Documentation/Paper_Prototype)).
- Familiarise ourselves with GitHub and continuous integration best practises.
- Amalgamate some potential datasets.

Due to the early nature of this sprint, it was heavily focussed on coming up with an initial website design and converting this into a paper prototype so that we could present it to friends and family for early stage feedback. During the design session we brainstormed ideas about what we thought made a quiz engaging and interactive. Given todays day and age, the trend for website seems to be a quite refined, simplistic design, and we thought that the same would apply for a quiz. Having loud, in your face pages can be distracting and take away from the message/aim of the page. Further discussions centred around what other successful websites with quizzes had done and we spoke about what works well about these webpages (e.g. Gapminder). 

Using the takeaways from the design sessions, we were able to develop a paper prototype and relevant questions based off this paper prototype. We had all agreed early user feedback would be beneficial for creating a minimum viable product that works well and is aesthetically pleasing.

Allowing time in this sprint to play around with GitHub also proved beneficial to hit the ground running on the documentation of the project, especially as we had little-to-no experience with it prior to this course. And thinking about and pulling together some potential data sets we saw as a good idea in order to help with the technical side of things further down the line.

### No Sprints : Continue Working on Workbooks (08.03.21-21.03.21)
During this time we worked on other university commitments whilst continuing to follow along with the Software Engineering workbooks and lectures, all the while meeting up to take note of ideas, thoughts and design conceptualization.

### Sprint 2 : Market Research & Deploying Boilerplate (22.03.21-28.03.21)
The second sprint was a brief, achievable sprint that coincided with the last workbook that was required to fully deploy the boilerplate Angular dashboard. We also used this sprint as an opportunity to carry out some market research before the start of the Easter break, where we had foreplanned to have 3 substaintial sprints. Carrying out this market research prior to the break meant that we could go into the forthcoming sprints with fresh ideas for the next round of feedback, wire frame design and building out the webpage.

Key goals:
- Have all team members individually successfully finish boilerplate deployment workbook.
- Upload a complete boilerplate dashboard to GitHub repo for further development.
- Carry out more substantial market research.

As this was also deadline week for another assignment, this sprint was deliberately brief, but was decided with good intentions. Having all teams members at the same level of understanding, regarding the full stack deployment, going into 3 weeks of sprints where we expected to achieve a lot, in terms of advancing the front and backend, would be hugely beneficial. With everyone at the same level, it would mean that if additional resources were required at either end, we would be able to pivot and share the load better amongsts ourselves. Further, with a fully working dashboard up on the GitHub repo, we would be in good stead to hit the ground running for further development on the quiz for the first sprint of Easter.

The documented market research can be found [here](../Documentation/BackgroundResearch/Market+Field_Research.md). Here, we looked into the surrounding field, and our motivations for our web application. In summary, the section explains how fake news can contribute to the detriment of social health, and cost to companies that are the burden of fake news stories.

During the research, we investigated 3 sample websites that offer fake news quizzes (or similar), like ours, and looked into the similarities between our idea and theirs. As of the time of writing, we found no web applications that offer what we have set out to create: a one-stop-shop for demystifying and educating users about fake news in a fun and engaging way. By providing a quiz that is broken down into categories e.g. Brexit, TradeWar, Coronavirus, we hope to target a wider audience.

### Sprint 3 : Prepare Backend & Additional Wireframe (29.03.21-04.04.21)
Sprint number 3 came in the first week on Easter and the key goals related to advancing our paper prototype into a more developed wire frame and develop the backend with respect to the mongoDB containers and finalizing the dataset with sample questions, broken down by news topic. Further we set a stretch goal to prepare the data model for handling HTTP requests.

Key goals:
- Finalize data model.
- Finish hand-made quiz dataset, broken down into various topics ready for linking to the front end.
- Prepare mongoDB container ready for HTTPP requests.
- Create a more developed wire frame, implementing the feedback from the initial paper prototype SurveyMonkey questionnaire.
- Send out new wire frame and questionnaire for further front end feedback.

For the front end, the focus was taking onboard the feedback obtained from the SurveyMonkey questionnaire that was previously sent round based off the initial paper prototype. The feedback proved to be useful, especially points focussed around UI and UX, such as the navigation being intuitive and consistent, colour scheme and suggestions for a social sharing feature. As well as taking onboard UX and UI feedback, we also received reasurring feedback that the idea was liked by respondents and that they were interested to use the webpage and take the quiz.

One of the reasons we wanted to create a wire frame was that the idea behind a prototype/wire frame is to demonstrate the functionality of an idea before the build stage. It is beneficial because it allows to you to visualize and simulate the user experience of your idea; one can consider the users' needs and journey through the webpage more effectively. By developing a wireframe that we think will represent our final product more closely after carrying out market research, taking user feedback, and having thought about the design more, would mean that we could begin building the front end based off the wireframe with more confidence that the design is good.

With the feedback onboard, we set out on making a more robust wire frame that would better represent the end product. We used a software called "MarvelApp" to make the wire frame interactive and more engaging, allowing the users to click and play around with the latest design ideas. We updated the Survey Money to ask people to scale their answers based on whether they "Strongly Agree", "Strong Disagree" etc. By sending out a new revised feedback form during the front end build, we would be able to take on feedback about the design and functionality as we build, allowing us to keep the user feedback loop and adaptation cycle short. This idea of having a short feedback loop and adaptation cycle is a key concept of agile and is something we were keen to do given the short time frame we have to design and build the idea.

With the backend, the aim of the sprint was to prepare our mongoDB containers to the point where we could start calling methods that correspond to HTTP requests. The current state of our backend is as follows:

We currently have a DB set up in a dockerised mongoDB container, with proxy data used for testing purposes. The DB is structured with collections, with relationships represented in our data. For example, in our news topic collection, we have multiple quizquestion references, therefore we are in a place where we can access all the quiz questions related to a particular topic via a mongoDB command. 

Whilst preparing the backend, we faced some structural difficulties. We started off by writing a script, *insertDataScript.js* that constructs collections and inputs data. Since our script was targeted as storing data in a local mongoDB DB, the data was not there when we started a docker mongoDB container. We got around this problem by importing data into the dockerised mongoDB container, using mongoimport on json files we exported from our local mongoDB DB. Hence, we could then access the data in our dockerised mongoDB container. However, when we tested our solution by building the docker images on another machine, the data did not persist. Hence, we created a script, that is run when on another machine to ensure the data persists, this script is found in *deploy.sh*, and running this will build the docker images and mongoDB container, with persistent data inside it.

Although this may not be the most efficient solution, we have decided to focus on the data contained within our DB for the time being, since we're still using proxy data. After consolidating across the back-end team, we will making some further changes to our data model, as we feel that some of the relationships and collections already in place are redundant (for example, the relationship between a useranswer document and quizquestion document). Full details of these changes, and the process by which we got our mongoDB docker container working are found in /Documentation/Backend/Meeting_Log.


## MEAN Stack System Implementation

### Stack Architecture & System Design
[ADD TO] - e.g. class diagrams, sequence diagrams. Might be best place/more detail in SystemDesign.md?

### Back End : MongoDB
[ADD TO] - database implementation, the data model that you developed your back end from (e.g. entity relationship diagrams).

### Middle Tier : Express, Node, RESTful API
[ADD TO] - No further markscheme notes.

### Front End : Angular
[ADD TO] - Details of implementation.

### Deployment
[ADD TO] - Deployment details (including Docker), include how you have been achieving continuous integration and deployment.

### Additional
[ADD TO] - Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!

# Mark Scheme Relevant Topics:

## System Implementation
- Stack architecture and system design (e.g. class diagrams, sequence diagrams).
- Back End - MongoDB - database implementation, the data model that you developed your back end from (e.g. entity relationship diagrams).
- Middle Tier - Express, Node, the RESTful API
- Front End - Angular. Details of implementation.
- Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
- Deployment details (including Docker), include how you have been achieving continuous integration and deployment.

## Sprints & Project Management
- Group working methods used (for instance did your team choose a particular style of agile? what communication channels did you use?)
- Discussion of team roles (specialisation is ok!). A summary of individual contributions (note: this is for reference, your team will all receive the same grade!).
- Documentation of your sprints, including both high level overview, timeline, and selected highlights that were critical points in the project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies for absence etc)
- Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.

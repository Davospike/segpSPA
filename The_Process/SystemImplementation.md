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
   - [Sprint 4 : Build Frontend Webpages & Begin Linking Front and Backend (05.04.21-11.04.21)](#sprint-4--build-frontend-webpages--begin-linking-front-and-backend-050421-110421)
   - [Sprint 5 : Further Front and Backend Integration (12.04.21-18.04.21)](#sprint-5--further-front-and-backend-integration-120421-180421)
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
- Finish hand-made quiz dataset, broken down into various topics ready for linking to the front end.
- Prepare mongoDB container ready for HTTP requests.
- Create a more developed wire frame, implementing the feedback from the initial paper prototype SurveyMonkey questionnaire.
- Send out new wire frame and questionnaire for further front end feedback.

For the front end, the focus was taking onboard the feedback obtained from the SurveyMonkey questionnaire that was previously sent round based off the initial paper prototype. The feedback proved to be useful, especially points focussed around UI and UX, such as the navigation being intuitive and consistent, colour scheme and suggestions for a social sharing feature. As well as taking onboard UX and UI feedback, we also received reasurring feedback that the idea was liked by respondents and that they were interested to use the webpage and take the quiz.

With the feedback onboard, we set out on making a more robust wire frame that would better represent the end product. We used a software called "MarvelApp" to make the wire frame interactive and more engaging, allowing the users to click and play around with the latest design ideas. We updated the Survey Money to ask people to scale their answers based on whether they "Strongly Agree", "Strong Disagree" etc.

With the backend, the aim of the sprint was to prepare our mongoDB containers to the point where we could start calling methods that correspond to HTTP requests. The current state of our backend is as follows:

We currently have a DB set up in a dockerised mongoDB container, with proxy data used for testing purposes. The DB is structured with collections, with relationships represented in our data. For example, in our news topic collection, we have multiple quizquestion references, therefore we are in a place where we can access all the quiz questions related to a particular topic via a mongoDB command. 

Whilst preparing the backend, we faced some structural difficulties. We started off by writing a script, *insertDataScript.js* that constructs collections and inputs data. Since our script was targeted as storing data in a local mongoDB DB, the data was not there when we started a docker mongoDB container. We got around this problem by importing data into the dockerised mongoDB container, using mongoimport on json files we exported from our local mongoDB DB. Hence, we could then access the data in our dockerised mongoDB container. However, when we tested our solution by building the docker images on another machine, the data did not persist. Hence, we created a script, that is run when on another machine to ensure the data persists, this script is found in *deploy.sh*, and running this will build the docker images and mongoDB container, with persistent data inside it.

Although this may not be the most efficient solution, we have decided to focus on the data contained within our DB for the time being, since we're still using proxy data. After consolidating across the back-end team, we will making some further changes to our data model, as we feel that some of the relationships and collections already in place are redundant (for example, the relationship between a useranswer document and quizquestion document). Full details of these changes, and the process by which we got our mongoDB docker container working are found in /Documentation/Backend/Meeting_Log.

### Sprint 4 : Build Frontend Webpages & Begin Linking Front and Backend (05.04.21-11.04.21)
Sprint number 4 saw the team coming together to start bringing the frontend and backend elements together, as well as some individual advancements for each area, separate of the linking work. On the front end, work was done to start trimming down the fat on the quiz framework that we had selected to use, so that it could be ready to link up to the backend, and also we began to start adding some meat to the website. A moodboard was also drawn up in order to help design on the frontend. With the backend, work was done on finalising the data model schema and creating mongoose commands to return the correct JSON payload, ready to be used by the quiz for questions.

Key goals:
- Start stripping out undeed features from quiz framework.
- Add new pages and features to frontend, e.g. landing page, stats page, navigation.
- Start linking up the front and backend.
- Finalize question data model schema appropriate for integration into front end.
- Create mongoose commands for JSON payload retrieval.

This weeks sprint was a busy one with lots of movement on all fronts. There was good collaboration between the front and backend in starting to get the database linked up to the front end so that questions for the quiz wouldn't have to be hard coded.

At the start of the sprint, the frontend crew got together for a pair programming session with the aim to start stripping out needed features that were not needed from the quiz framework, and to start streamline the code ready for database integration towards the end of this sprint, and hopefully finalised by the end of the following weeks sprint. However, it quickly became clear that the quiz framework that we had hoped to use was far too complicated for our use case. It was decided between us that we would need to pivot and find a new, simpler framework instead (please see the [System Design page](SystemDesign.md)) for more on this). Granted, this was a bit of a set back as we had spent some time analysing and understanding how the quiz framework functioned and obviously had to start from scratch with a new framework.

Setback aside, after a new framework was found, the frontend team set about understanding and stripping back any irrelevant features. Once we had an understanding of the framework, simultaneous work on adding new features, and refactoring the quiz question JSON format begun, ready for the connect with backend team later in the week. The front end team was succesfully able to decide on a HTML template to use for the non-quiz pages (see [System Design page](SystemDesign.md)) for more), adding in navigation features, social buttons and generally just starting to work on fleshing the website out. Separately, but simultaneously other members on the team worked with the backend team to refactor the quiz question JSON inputs. Here work was done on re-factoring the typescript models for the quiz and re-factoring the quiz service files that actually operated the questions in the quiz. Some difficulties arose but they were eventually ironed out (JACK TO ADD/CHECK?).

With the frontend taking shape, work with the backend to get the database linked started. Sessions between the front and backend were held where discussions focussed on collaborating to get the most efficient and appropriate JSON setup in our database data schemas and frontend typescript models. As well as this, the backend team started on creating mongoose commands for JSON payload requests (VINI/NATH TO ADD).


On reflection of the sprint, it was a productive week and we were in a position whereby if our stakeholders (ADD TO SYSTEM DESIGN) were to use the quiz, they would be able to navigate through our SPA and take a dummy quiz. We were in a position to start work in the next sprint on requesting the data from the database, and having these questions presented in the quiz.

### Sprint 5 : Further Front and Backend Integration (12.04.21-18.04.21)
In this sprint, the team hoped to finally have a fully integrated front and backend by the end so that general house keeping and tidying up could begin. Further, on the front end, a quiz topic selection page we created so that the user could pick between any of the five different available quizzes. The backend team also investigated the possibility of returning a single quiz topic question set at a time, as opposed to all topics at once.

Key goals:
- Add a data service to frontend to inject API data requests from MongoDB
- Add a quiz topic selection page
- Return mongoDB data topic by topic, as opposed to all at once
- Implement method to keep track of number of times questions were answered correctly

Great progress was made during sprint number 5. During the week, the front end team were able to utilize the API that the backend team had developed in prior weeks. By using the JSON payload returned from the API, the frontend team created a data service to subscribe the front end to. With the API data now being automatically fed into the frontend, the team could then update the quiz component classes so that the individual quizzes were loaded into the quiz framework. By creating this link, the team had a fully operating MEAN stack web quiz. Success!

After the success of finally linking up the front and backend, some minor work was required to allow the user to select which quiz topic they wanted to take. This was straight forward, but required some url redirecting to make sure the links sent the user to the correct quiz.

In this sprint, the backend team also investigated upgrading the API so that it would only return the required quiz questions when a topic was selected on the topic page. The backend team were able to implement this, but upon further discussion with the wider team, we decided that the prefered method was to request all quiz topics at once and let the quiz framework decide which questions to access. Further, the backend team investigated implementing a feature we had been striving for since the first paper prototype; adding a "76% of users got this question wrong" at the end of the question. This proved to be too difficult, despite consulting with the TAs, and was ultimately dropped.

At the end of the sprint, the team were in agreement that we were all happy with the product and how it operated. The team agreed that the current state was our minimum viable product, and every improvement from here would be an added bonus!

Stakeholders Update:

| Stakeholders            | Updated Use Case        |
| ------------------------| ------------------------|
| Donald (End-User)       | Success! I can now use the website to prove that I am indeed the best fake news detector the world has ever seen. I am able to select between my favourite topics (China!), share my scores and this website. Further, I can view interesting stats to see how bad fake news are. The user interface is engaging, and I enjoy visiting the site.|
| Emma (Admin)            | Unfortunately I cannot view how many of our quiz takers got each question right. This would've been helpful for deciding how hard to make future quizzes.|

System implementation issues:

| Stack Part  | Goal        | Issue | Fix |
| ------------| ----------- |-------|-----|
| Backend     | Admin wants to view user question stats| Mainting the state/count of number of times a question was correctly answered proved difficult. Persistence of the data kept getting lost | N/A - Dropped feature|
| Frontend    | Linking up front and backend| Data sent through from API was not being picked up by the data service | Realized that the JSON payload from the API was being sent as an array of topics and questions. quiz.component.ts needed updating to reflect this |

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

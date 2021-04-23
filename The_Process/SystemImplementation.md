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
   - [Sprint 6 : Write-up & Minor Frontend Amendments (19.04.21-07.05.21)](#sprint-6--write-up--minor-frontend-amendments-190421-070521)
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
![Project Management Plan(1)](https://user-images.githubusercontent.com/63299377/115594606-d629ef80-a2cd-11eb-8c4d-9ca2078008c3.png)
As previously mentioned, as a team we were following an agile approach and so broke up our work into (mostly) week long sprints. Given that we all had an idea of the order to which we needed to approach the build, each sprints list of objectives were decided at the beginning of the sprint by assessing the current state of the project. Tasks were prioritised if they were required to continue development. 

By breaking the workload into manageable sprints, we were able to week-by-week slowly build up the product, adding in more features as we went. Any tasks that were not completed by the end of the sprint were noted and these were set as a priority for the next sprint (unless not pivotal). As we were working in self-organising teams (i.e. front and backend), during each sprint we often had regular, sometimes daily, standups and catch ups for each team to make sure we stayed on track. By doing this we were able to catch any potential issues early on and pivot if needed.

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

| Stakeholders            | Updated Use Case        |
| ------------------------| ------------------------|
| Donald (End-User)       | Success! I can now use the website to prove that I am indeed the best fake news detector the world has ever seen. I am able to select between my favourite topics (China!), share my scores and this website. Further, I can view interesting stats to see how bad fake news is. The user interface is engaging, and I enjoy visiting the site.|
| Emma (Admin)            | Unfortunately I cannot view how many of our quiz takers got each question right. This would've been helpful for deciding how hard to make future quizzes.|

System implementation issues:

| Stack Part  | Goal        | Issue | Fix |
| ------------| ----------- |-------|-----|
| Backend     | Admin wants to view user question stats| Mainting the state/count of number of times a question was correctly answered proved difficult. Persistence of the data kept getting lost | N/A - Dropped feature|
| Frontend    | Linking up front and backend| Data sent through from API was not being picked up by the data service | Realized that the JSON payload from the API was being sent as an array of topics and questions. quiz.component.ts needed updating to reflect this |

### Sprint 6 : Write-up & Minor Frontend Amendments (19.04.21-07.05.21)
After succesfully linking up the front and backend last sprint, the team had a minimum viable product and were ready to start focusing on writing up the project alongside attending to any remaining backlog/formatting on the code base and website. The team also undertook a final round of user feedback in order to ensure any quirks/bugs were addressed and to see if there were any finishing touches that could be made.

Backlog of improvements at start of sprint:
- Add line chart onto fake news stats, plus any other stats ideas that arose.
- Code base tidy up; removing unused code and add comments.
- Minor frontend formatting.

By the end of the sprint... [ADD TO]

## MEAN Stack System Implementation

### Stack Architecture & System Design
[ADD TO] - e.g. class diagrams, sequence diagrams. Might be best place/more detail in SystemDesign.md?

### <u>Back End : MongoDB</u>
## 1. SQL vs noSQL

##### Why we switched from SQL to noSQL (mongo)

Although we have pre-defined our DB schema, and checked for normalisation, we made the transition from an SQL schema to noSQL (mongoDB), in order to utilise the mongoose object modelling tool.

Initially, we ventured out designing a relational database for SQL because ...

- SQL performance - 
  - initially, we thought that as we had a rigid structure, that was unlikely to be changed, using the SQL framework for designing our DB schema was the best choice. 
  - We also thought that we would need to incroporate a lot more data for our site. 
  - After designing our schema with normalisation techniques, we realised that all of the data could be sorted into 4 schemas, with a majority of data entries being in 1 of those schemas.

The relative advantages of using SQL at this point were not so apparent, and we started to discuss what a noSQL version of our database may look like.

We vouched for switching to noSQL for the following reasons:

- usable 
  - we feel it would be easier to amend the data scheme using the mongoose object modelling tool. We feel that utilising a framework that resolves around using objects, as opposed to just pure data, would be more suited to the skills of the back-end team in this project.
  - this was supported by Purewal (Learning Web App Development, 2014), who stated that NoSQL data stores use the trade-off of storing some redundant information in "exchange for increased ease-of-use from a programming perspective". As well as this, Purewal discusses how NoSQL data stores are more useful for this reason in applications where "data reading needs to be more efficient than writing data". Since our application tends to read our mongo data a lot more than writing to mongo, we deemed this was a valid reason for utilising a NoSQL DB.
- scalable 
  - we read that  SQL struggles to cope with big data processing requirements (https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/). Although our SPA does not come close to utilising *big data*, we find that to future-proof our SPA, it would be wise to adopt a back-end which incorporates scalability.
- performance / speed 
  - although we do not necessarily avoid data duplication with noSQL, performing queries on single entities is generally faster than SQL. SQL is more suited to doing quick complicated queries on multiple entities, for example joins / sub-selects (https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/)

SQL Databases work best with schema that are long established and aren't prone to change - NoSQL benefits our project as there is scope for further development. As a single page application, there is always potential for improvements and new features. Therefore using a more dynamic, scalable database with NoSQL can benefit our project in the long term.

We have left the SQL DB schema in this [folder](../Documentation/Backend/DatabaseDesign/SQLDBdevelopment) for reference, and also to show our progression to our final DB design. 

## 2. Design of our data model (UML, tables)

Our data model was designed via the use of draw.io, in which we constructed a UML diagram to show relationships among our entities. We defined our final data model as being comprised of the following three entities:

- News Topics
- Quiz Questions
- Options

Quiz Questions are the entities which hold the core of our data for our web application. Each quiz question has the following elements:

- Headline - this is presented to the user, and is the headline of the fake news article.
- web_url - this is the web url of the news article. It is used in the answers section so users can view the fake news article.
- postData - this is the data in which the article was written. It is presented to the user with the question.
- text_body - this is a snippet from the article, in which the user can expand on their judgement of the news headline, in order to give their answer.
- correct_answer_url - this document can be null, and is given when an article is a fake news article. It is an article that either directly or indirectly debunks the fake news article in question
- Num_correct - this is one of the two statistics used to calculate the average number of users that got this quiz question correct
- Num_attempted - this is the other statstic 
  - note, we constructed these two statistics, and various methods to implement them in the answers section of our web application. We had the idea of making them dynamic, so that each time a question is answered, they are updated
- Options - this is an array of options (2 options for each quiz question)

Options are the entities that determine whether a user has answered a particular quiz question correctly. They hold:

- name - a String that is used to refer to that option object
- isCorrectAnswer - a boolean, where for each quiz question, for a particular option, true is selected if this option is the correct answer for this quiz question
- selected - this is set to false by default. If a user selects this option for a quiz question, selected becomes true.



The way we verify the user's response in terms of it being correct was conceptually quite difficult. Our design lead to a situation in which 4 option documents were created:

1. Option 1, name = "R_F"
2. Option 2, name = "R_T"
3. Option 3, name = "F_F"
4. Option 4, name = "F_T"

The syntax is described as follows:

```
OPTION <REAL/FAKE>_<FALSE/TRUE>
```

So, for each quiz question, there will be 2 options - 

OPTION<REAL>_<FALSE/TRUE>

OPTION<FAKE>_<FALSE/TRUE>

- if the quiz question is from a **real** news article, the 2 options for this quiz question will be as follows:

OPTION<REAL>_<**TRUE**>

OPTION<FAKE>_<**FALSE**>

- if the quiz question is from a **fake** news article, the 2 options for this quiz question will be as follows:

OPTION<REAL>_<**FALSE**>

OPTION<FAKE>_<**TRUE**>

Therefore, for a user's answer to be logged as correct, they need to select the option in which the second element is **true**.



Our third entity is News Topic. This includes the following documents:

- news_topic - a string, that defines the news topic, i.e., "Brexit". These strings are used in the landing page, when a user chooses a topic to do a quiz one. 
- Quiz_question - this is an array of quiz questions, that are related to this particular news topic.

News Topic is the entity that includes all the data we need, and it is from this we stem out and retrieve all our object and quiz question data. 

Our data model was designed from the idea of how the pipeline may look for a user's choice of news topic, to the data being presented to them on which they could see how many responses they got correct. From a high level view, the user chooses a news topic. From this, we can retrieve all of this quiz questions needed to do the quiz for the topic, along with their respective options - which will give them back data based on how they did in the quiz. 

We constructed the following UML diagram to visualise our data model:

![Screenshot 2021-04-21 at 15.16.39](/Users/nathantaylor/Library/Application Support/typora-user-images/Screenshot 2021-04-21 at 15.16.39.png)

From this, we can talk about the relationships we deemed necessary for our entities. 

The relationship between quiz question and news topic was clearly a 1 to many relationship. For each quiz question, there was one news topic it stemmed from. In light of one of our project aims, to educate user's about fake news surrounding particular global topics, we seemed it fitting that quiz questions did not overlap across news topics. We did this by keeping in mind the data we were going to collect. We wanted quiz questions that were clearly associated with a particular topic. The opposing relationship was clear too. For each news topic, there are multiple, and more than 1, quiz questions.

The relationship between quiz question was decided to be a 1 to many relationship. For each quiz question, there are 2 options, so this seemed fitting. There was difficulty in deciding the opposing relationship - since each option may be mapped on to multiple quiz questions. However, we decided that if it comes to a point where we need to access a quiz question from an option object, it may prove difficult. We therefore decided that each option should come from one quiz question, in order to isolate the question an option came from.



Following the construction of our UML diagram, we decided to make a spreadsheet to initiate ideas on what data we will be collecting, and to get a more solid understanding of the relationships between our entities. The spreadsheet is as shown below:

![Screenshot 2021-04-21 at 15.51.03](/Users/nathantaylor/Library/Application Support/typora-user-images/Screenshot 2021-04-21 at 15.51.03.png)



Throughout this data model design process, we adhered to conform to good data model design practices. Our previous model, which utilised SQL and its best practices (normalisation), was used to aid the design of our current noSQL model. Via this, we achieved a data model that did not unnecessarily repeat data. 

We also followed this guide, to cater our design choices to best practices:

https://developer.mongodb.com/article/mongodb-schema-design-best-practices/

- our data model is clearly one that uses an embedded design. This allows us to retrieve the necessary data we need for a larger data entity, like a news topic, with a single query. We also found it would be easy to access individual elements within this data type.
- rule number 5 in this guide also solidified our choice in catering out design to our application's data access patterns.

With respect to constructing our mongoose models, to be used when instantiating and loading collections, we created these [three models](../Example_Code/AngularQuizApp/models) that correspond to our three entities. These will be the three collections in our mongoDB database. We start by creating a mongoose schema, which defines all of the data entries for each collection. We then export these as a mongoose model. This is so they can be used with mongoose commands, for example finding a particular object in our database.

Note, in our quiz_question model, we also export the schema. This is to fix an issue we had in which embedded documents were being referenced by value, as oppose to referencing the actual objects themselves.

## 3. Collecting data 

It's critical for a web-app in this category to have accurate and *thought-provoking* data to utilise in order to make it as educational as possible. Our initial thought was to find ready-made datasets that would have formulated all our quiz questions. We found plenty of large datasets that were filled to the brim with articles - good and bad. Most of these datasets had outdated links, broken web-pages and irrelevant material. We wanted our quiz to have proper 'punch' at every question and the datasets found were not going to help us achieve that. Furthermore, the data was not organised in a manner that was useful to us; we are aiming to have a our questions categoriesed into News Topics that the user can choose from. This focussed approach allowed the user to experience how Fake News varies from topic to topic and allows a more comfortable learning exerience as a whole.

So without suitable datasets and no competent web-scraping systems to be seen, we decided to hand-pick the data ourselves making sure the articles were as deserving as possible to be featured in our quiz. This proved a trickier task than you'd assume. Google, being the world's most proficient search engine aims to phase out all fake news in order to give their users the most 'truthful' experience. This wasn't great for us, actively searching for bogus information.

It's worth mentioning that we also wanted to find **debunking** articles in relation to the Fake News we gathered. Venturing into the darkest (but not _too_ dark) depths of the internet, we came across some perfect examples of Fake News and gave the goal of having a mixture of **5 Fake News** articles and **5 Real News** articles for each of our **5 News Topics** that we had proposed.

Aside from the grind in acquiring the necessary data, we also found ways to improve other elements of our backend structure. We initially had a _Many-to-Many_ relationship between questions and news topics; however, refering to the underlying intent to make this as educational as possible for the user, we decided to alter this to a _One-to-Many_ relationship. This meant that there will no longer be multiple news topics related to a question, we intended to make each article as relevant to the news topic as possible - eradicating and vagueness.

## 4. Inputting data via insertDataScript

The mechanism we used to get data ready for use in our application consisted of two main steps: creating the database, and seeding the data from the database into a mongoDB container.

###### Creating a mongoDB database

The first step in allowing us to test our backend structure was to get the data we gathered into a MongoDB client to test how effective it was. We decided that rather than inserting our data within the MongoDB shell, we will aim to run a Javascript 'script' that would insert all this data using Mongoose commands - appropriately named [insertDataScript.js](./Example_Code/AngularQuizApp/insertDataScript.js). In short, the script injects into a MongoDB client (using a URL specified in args[0]), our data.

This script underwent many changes depending on our evolving decisions regarding backend structure but this final script allows us to unload our data into MongoDB ready for use. A reason why we decided to use import our data in this way because it makes it easier to add more data at a later date; i.e, the structure is there and it is set out into `createOption`, `createNewsTopic` and `createQuizQuestion` methods (amongst others). A simple '*copy + paste*' and '*fill in the blanks*' allows us to add more data whenever we need to. 

We needed to require the necessary models at the top of the script:

```javascript
const QuizQuestion = require('./models/quiz_question');
const NewsTopic = require('./models/news_topic');
const Option = require('./models/options');
```

It's worth noting that this script is ran privately and doesn't take part in the deployment of the docker container with [deploy.sh](./Example_Code/AngularQuizApp/deploy.sh). The script allowed us to export from a local MongoDB client into [three JSON files](./Example_Code/AngularQuizApp/blockData) that were prepared for seeding.

###### Seeding

The docker image we create is generally read only. Therefore, for the data to be used in our server, it needs to be stored somewhere that has read/write permissions. The issue that arises is that when someone, who doesn't have the data that we store, starts the docker container when running our application, the mount point is local to that person's machine. In other words, volume is mounted from a local machine, hence data from our own machine's will not persist. Therefore, we decided to create a script that would seed all the relevant JSON data into the dockerised mongoDB container. Thus, when the server starts, all this data can be read from this container using mongoose commands. 

We implemented seeding by issuing the three following commands in our script used to start up our application:

```bash
docker exec -i db sh -c 'mongoimport -u <OUR_USERNAME> -p <OUR_PASSWORD> --authenticationDatabase "admin" -c options -d db --upsert --jsonArray' < blockData/optionsOutput.json

docker exec -i db sh -c 'mongoimport -u <OUR_USERNAME> -p <OUR_PASSWORD> --authenticationDatabase "admin" -c newstopics -d db --upsert --jsonArray' < blockData/newsTopicsOutput.json

docker exec -i db sh -c 'mongoimport -u <OUR_USERNAME> -p <OUR_PASSWORD> --authenticationDatabase "admin" -c quizquestions -d db --upsert --jsonArray' < blockData/quizQuestionsOutput.json

```



### Middle Tier : Express, Node, RESTful API
## Middle Tier

#### Choosing REST

We decided to build a RESTful API to link our mongoDB database to our front-end (Angular). Generally speaking, REST is an interface between HTTP utilising systems, and it can be used to process data operations in many formats (i.e., JSON). 

REST stands for Representational State Transfer, and is commplace in data exchange protocol systems used in web applications today. The REST architectural style determines how the API looks, and how it processes client requests. The main mechanism that RESTful APIs implement is that a resource, (i.e., a piece of data) is retrievable upon a client URL request. This is formally known as a response.

Responses are the result of requests. A response is composed of two parts - the root-endpoint and the path. The root-endpoint is the starting point from where your API lives. In our project, it is where we set the API routes from server.js (localhost:4200/api) - but we will come back to this. The second part of a response is the path. This path determines the resource the client is looking for. We can distinguish between different responses based on these two parts, and implement methods in our api that map responses on to the mongoose and node.js commands that will respond with the correct data from our backend. 

The main advantages of using a RESTful API is that each HTTP has all the information needed. In other words, neither the client nor the server need to remember any previous status to satisfy it (https://www.bbvaapimarket.com/en/api-world/rest-api-what-it-and-what-are-its-advantages-project-development/#:~:text=The%20REST%20API%20is%20always,%2C%20Java%2C%20Python%20or%20Node.). This means that we have a stateless client/server protocol. 

A RESTful API allows for client-server separation. This allows for scalability, since development teams can scale up the application without having to take down the server. Developers can work on the server side of the application, without the client side being affected.

For these reasons above, utilising the RESTful approach seemed appropriate. After making this choice, and setting up our mongoDB database, we started to think about the internals of requests, with relation to how they would interact with our database. REST APIs implement multiple operations (CRUD operations - create, read, update and delete) which are performed giving speicifc requests. We decided the main interaction with our database would come from a get request, in which our response (in the api) takes the form of a JSON payload, containing the data for all news topics (including quiz questions).

#### Implementing REST

To build our API, we used Express, one of the key frameworks in the MEAN stack. We started off by creating server.js, in which we require the express dependency. We also created the file api.js, as well as a folder called server. We then require the api in server.js. 

The whole point of this is that server.js which has all the server code that points to the server folder. Server.js also utilises POST data parsers from express. 

In api.js, we export the routes used by the router required. We creat an express router here, and we implement our main get command. The router is then exported and it's used by server.js. This allows the api to respond to client requests made on the server, from which are fed through to the api. 

Our main get method is as follows:

```javascript
router.get('/NewsTopics', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({})
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics));
})
```

And the process is as follows:

- client enters the http request (i.e., when running locally: localhost:4200/api/NewsTopics)
- this utilises the NewsTopic mongoose model that we require from ../models, and implements the mongoose method **.find**
- since the result of this is a JSON string, it can be stored in a const
- We look for ny errors, and if everything is okay, we respond to that request with a string 

As we're exporting the router made in api.js, which is required in server.js, the output of this (when integrated with angular) is rendered on to the webpage.



---

<NT and Harry>

Ideas...

### Creating a service 

After setting up mongoDB, and importing all the data we need. We need to define a service to handle http calls. Services are great because they're injectable, and they can also have its own injected dependencies - making testing and reuse easier - a services goes and gets your data from a data source 

##### Create a Service 

by running 

```bash
ng generate service data
```

- creates a data.service.ts in the src/app directory

...

---

### Front End : Angular
**Choice and change of Angular Quiz Framework**

Once we had decided on implementing a quiz, our first front end activity involved a morning pair programming session sitting down to research and test and try different Angular quiz frameworks that might be suitable as a template for the purpose of this project.  We looked at a number of different frameworks in depth including this framework developed by Code Project  https://www.codeproject.com/Articles/1167451/Quiz-Application-in-Angular , but we decided we would use this Spotify app https://awesomeopensource.com/project/fabiandev/angular-quiz-app. Our next task was to familiarise ourselves with the Angular component structure that rendered the site, which we tried and tested for some days. This quiz app even formed the basis of one of our rounds of user feedback. However, it was not until we made more concerted attempts to build out and refactor the code on this quiz we realised that this quiz was too advanced for our still relatively nascent experience of Angular. As such, we had to make a u-turn and thus settled on this https://github.com/evagrean/quiz-app new quiz framework altogether which was less complex and more malleable for what we had in mind to achieve.  There were sufficiently less components and the code was more simple to re-work and manipulate. 

During our research of Angular frameworks, we also took the opportunity to brainstorm some design ideas as a team about prospective designs for our quiz. This helped us to focus in on our needs and initiate the creative process of building up the single page application front end in our minds. 

We created this mood board to consolidate and draw ideas from:

![My Post(1)](https://user-images.githubusercontent.com/63299377/115616380-09797800-a2e8-11eb-9224-32af6db66aae.jpg)

**Refactoring and restructuring to prepare for back-end code**

One of the major challenges for the front end was linking with the back end to load their .json file that would render our quiz questions and answers on the website. First, we had to refactor a lot of the models, service and component code on the front end, which included the removal of a lot of unnecessary variables. 

For example, the original quiz service looked as follows originally:

```javascript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/testQuiz.json', name: 'Test Quiz' },
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
```

The three main models were all refactored also to prepare for the new json: question.ts, quiz.ts and option.ts. New option.ts:

```javascript
export class Option {
    id: number;
    questionId: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {

        data = data || {};
        this.id = data.id;
        this.questionId = data.id;
        this.name = data.name;
        this.isAnswer = data.isCorrectAnswer;
        this.selected = data.selected;
    }
}
```

At the beginning, we could not link the back end json file with the front end. This was due to an extra variable within the "options" called "optionR_F" or "optionF_T" that made it very hard to access the data. As shown below:

```typescript
"options":
               [
                  {
                     "optionR_F":{
                        "_id":{"$oid":"606ef4311a70c9229fa6c772"},
                        "name":"Real",
                        "isCorrectAnswer":false,
                        "selected":false,
                        "__v":0
                     }
                  },
                  {
                     "optionF_T":{
                        "_id":{"$oid":"606ef4311a70c9229fa6c773"},
                        "name":"Fake",
                        "isCorrectAnswer":true,
                        "selected":false,
                        "__v":0
                     }
                  }
               ]
```

Eventually, we managed to link up with the back end after lengthy communication between the two teams to produce this working format for the quiz framework:

```typescript
 {
    "topicName": "JavaScript Quiz",
    "quizquestions": [
        {
            "id": 1010,
            "headline": "A first fake news headline",
            "web_url": "www.fakenewswebsite.com",
            "postData": "2021-04-08",
            "text_body": "......fake text.......", 
            "correct_answer_url": "<leave me blank for true headline questions>",
            "num_correct": 10,
            "num_attempted": 20,
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "name": "Real",
                    "isCorrectAnswer": false				
                },
                {
                    "id": 1056,
                    "name": "Fake",
                    "isCorrectAnswer": true					
                }
            ]
        },
```

**Building up Angular features**



### Deployment
**Continuous Integration**

To align with agile working principles, we opted for continuous integration when developing this project. Small incremental progress in the form of frequent commits on our git repositories allowed both for a tangible goals to be realised more easily and for constant revision of our progress. Mentally, this method of working helped to compartmentalise big tasks to make the project at large seem less insurmountable.    

**Deployment with Docker**

Deploying our new quiz framework with Docker involved integrating what we had achieved and learnt through the Angular Demo Site with our new Angular Quiz Framework.  We had to first move across all the relevant files that supported the docker container ecosystem and the MongoDB such as 

deploy.sh, blockData, wait-for.sh, insertDataScript.js and others. Initially we had some difficulty in rendering the new framework with the docker container. This was for myriad reasons. We had to change some dependencies in package.json and package-lock.json which resulted in merge conflicts which were tricky to solve. Another issue we had was that originally we serving our new application with the command npm serve - which was not ideal for the docker container. As such, we installed some further dependencies to ensure the application would be rendered with ng build.  However, the application would not work still. As such, Harry and Jack set up a Teams  pair programming call to run over the changes that had been made and after a good session we realised that we had to tweek a static path in the server.js file. Once we solved this issue, we were jubilant to deploy our full stack through docker. 

Resolving this path issue was the key to full stack deployment through Docker:

```javascript
// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/ng6-quiz')));
```



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

<h1 align="center"> System Design </h1>

## Table of Contents

- [Introduction](#introduction)
- [Background & Motivation](#background--motivation)
   - [Current State of Industry](#current-state-of-industry)
   - [Why Does Fake News Education Matter](#why-does-fake-news-education-matter)
- [Product Requirements](#product-requirements)
   - [Idea Generation](#idea-generation)
   - [Stakeholders & User Stories](#stakeholders--user-stories)
      - [End User](#end-user)
      - [University Professor](#university-professor)
      - [Admin](#admin)
- [Design Process & Early Prototyping](#design-process--early-prototyping)
   - [Design Methods](#design-methods)
   - [Paper Prototypes & Wireframes](#paper-prototypes--wireframes)
   - [User Feedback & Questionnaires](#user-feedback--questionnaires)
- [System Architecture & Design](#system-architecture--design)
   - [Class Diagram](#class-diagram)
   - [Sequence Flow Diagram](#sequence-flow-diagram)

## Introduction
Fake news consists of false stories that appear to be news, which are spread on the internet and social media. In the last five years there has been an explosion in the amount of fake news being spread and due to much of it being believable it has become more difficult for people to detect. Whilst there are numerous sources explaining the danger of fake news and how to spot it, there are fewer that provide a way for people to check whether they are susceptible to it, and even fewer that combine the two. Thus, we not only aimed to create a site that would educate people about fake news in terms of what it is, its history, the dangers, and how to recognise it, but one that would also allow users to test whether they can detect fake news based on an article presented to them. The crux of the site is a quiz with various topics that have been popular targets for fake news. Users select a topic and are presented with several questions and articles, they are then tasked with identifying the articles as real news, or fake news. Upon answering all the questions and completing the quiz, the user is presented with their final score and they are offered a chance to visit the site where the article originated.

Our project objectives were established early on in our [group scoping discussion](https://github.com/Davospike/segpSPA/blob/dan/Documentation/Scoping/GroupScopingDiscussion.md) and are set out as follows:

**Primary Objectives:**

- Develop an educational quiz, tasking users with identifying fake news

- Use the web-page to inform users about fake news; what it is, its history, the dangers of it, and how to recognise it

- Create a static database that holds a hand-picked selection of news articles that are identified as being fact or fiction

**Secondary Objectives:**

- Collect and store user data, such as their quiz score and where they obtain their news from

- Create a login function for the site so users are encouraged to revisit and compare previous scores

- Create a function that allows users to share their score via social media

[ADD VIDEO]

[ADD TO] - Dan

## Background & Motivation
[ADD TO] - Dan

### Current State of Industry
[ADD TO] - Dan

### Why Does Fake News Education Matter
[ADD TO] - Dan

## Product Requirements
Before the team decided on a Fake News quiz website, plenty of work was done on generating ideas that satisfied the "Serious Play" requirements of the project. As a team, we tried out a variety of industry standard techniques which you can read about below.

### Idea Generation

##### Brainstorming Sessions and Idea Matrix

Some of the first work that was done on coming up with the initial idea for the web app was facilitated by various techniques. Prior to carrying out any serious research or work on individual ideas, we first came together for a brainstorm session. There were no wrong answers, as the process was just about getting ideas down which we could then delve into and refine further if they were popular. Coming out of the session, we had settled on just under 20 topic ideas (view these [here](../Documentation/Archive)). With ideas on board, we were able to explore some other techniques to further refine the ideas.

The most successful of these other techniques was creating a matrix of topics to merge; we were combining **Serious** [Topics] and **Play** [Games]. This method was very effective. It worked by using the column headers for one characteristic and the row headers for the other (i.e, serious topics as rows and play/games on the columns) and then combining each of the subjects together to create a **Serious Play** topic. Having 5 people in the group made this technique very robust and helped us refine our ideas settle on our choice of serious play relatively quickly.

##### Miro Whiteboarding

<p align="centre">
    <img src="../Documentation/Images/rsz_miroboard.png" alt="Miro Board">
</p>

After deciding we would be going with the Fake News idea, with no absolute process on how to begin our project, we decided to map out the concept as 'visually' as possible. Using **Miro**, a collaborative whiteboard platform that allowed us to unload our ideas onto to begin with. To view our board, follow [this link](https://miro.com/app/board/o9J_lUwgzKw=/), or view the [pdf](./Documentation/DesignChoices/Woke-apedia.pdf) within this repo. As mentioned previously, the visualisation was key here, we ended up formulating a 'timeline' of sorts - the long, vertical strip of post-its beginning from the top. The timeline demonstrated a rough idea on the web-app's 'narrative'; the first thing the user will see and how they will manoeuvre through the web app to get to certain sections. Obviously, going all out with all of our ideas, some more reasonable than others, allowed us at _this_ moment in time to learn from how to plan things in a suitable manner. We can see from this old Miro boards which ideas came through to the end and which were ignored/forgotten. 

There were elements that stuck throughout our time on the project, such as a punchy landing page that gives the user a full background and overview of the topic, giving precise statistics that the user can base our info on. In the same way, ideas such as storing user data didn't make it into the final product. We were planning on questioning the users on 'why they got the question wrong' - was it because they were misinformed? Or did they genuinely not know anything about the topic. As much as this would be interesting for us to observe; for the user on the other hand, we didn't think this would be as compelling to them. We have branded this web app to allow users to test themselves on how well *they* can spot fake news, so we aimed for the focus to be on that rather than comparing with other users.

### Stakeholders & User Stories
As is standard practice with the agile way of working, for our project to be effective and hit the goals that we desired, we elected to create some theoretical stakeholders for our Fake News quiz app. First, we had to think about what a stakeholder actually is; someone outside the team who frequently interacts with, and has a direct interest in, the projects' outcome. This set a good starting point for thinking about who our stakeholders could and should be.

To come up with appropriate stakeholders, we had to put ourselves in the shoes of the end user and think about who would be engaging with the project throughout the journey. After some discussion, the three obvious choices that came to mind were:

- **Quiz Taker/End User**
- **University Professor**
- **Admin**.

With power (stakeholders), comes great responsibility (user stories)... 

Why user stories? "A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articular how a software feature will provide value to the customers" - Atlassian Agile Coach

As such, user stories are a great way to really put the users first and make sure that throughout the software development process, sight of the end goal is never lost. They make up a core component of agile and help drive collaboration and creativity.  

#### End User
Our first set of user stories relates to the most obvious stakeholder in the project; the End-User. Who are they, and what are they hoping to get out of the end product? These are the people who visit the website and take the quiz to help educate themselves about the dangers of fake news, and how to help combat it. They might be a fake news expert and want to test their own perceived knowledge, or they could be a complete novice who has fallen fowl of fake news before wanting to make sure it doesn't happen again! Their exact use case can vary, but the general user stories are as follows:

- The End User wants to take a quiz on fake news to see how good they are at distinguishing fake news stories with real news.
- The End User has taken the first quiz. Now they want to be able to test their knowledge against a variety of other different topics to really challenge themselves.
- The End User wants to compare themselves to other people taking the quiz. How many other people got those questions right?

#### University Professor
The next stakeholder could really relate to anyone who advocates education in the fake news setting. We elected for a University Professor who is teaching a module in fake news and propaganda. This stakeholder's use case will be a little different, with more focus on education and awareness.

- The University Professor wants to set their class some reading on: the history of fake news and what it is, the dangers of fake news, why it is a problem, with some statistics and finally what can be done to combat it.
- The University Professor also wants to be able to share the website on social media channels to help raise awareness.

#### Admin
Finally, an Admin stakeholder also needs to be involved in the project creating. A fake news quiz website will lose its effect on people if it doesn't have a returnability factor. As such things must be kept upto date a present

- The Admin wants to be able to update, add new questions and add new topics to the quiz framework.
- The Admin wants to be able to see how many quiz takers are getting each quiz question correct so that they can tailor the difficulty of future quizzes.

#### Use Case Diagram
Using UML, we can represent the main user stories in a use case diagram:

<p align="center">
    <img src="../Documentation/Images/Would_They_Lie_To_You_Use_Case_Diagram.png" alt="Use Case Diagram" width=80%>
</p>

## Design Process & Early Prototyping
[ADD TO]

### Design Methods
[ADD TO]

### Paper Prototypes & Wireframes

#### Paper Prototype

#### Wireframe

<p align="center">
    <img src="../Documentation/Images/Wireframe_question.PNG" width=80%>
</p>

One of the reasons we wanted to create a wireframe was that the idea behind a wireframe is to demonstrate the functionality of an idea before the build stage. It is beneficial because it allows you to visualize and simulate the user experience of your idea; one can consider the users' needs and journey through the webpage more effectively. We developed a wireframe that we thought would represent our final product more closely after carrying out market research, taking user feedback, and having thought about the design more. This meant that we were able to begin building the front end based off the wireframe with more confidence that the design is good. However, as noted in the System Implementation section, our end design still had to change from the wireframe in the end.

To build our wireframe, we used a software called "MarvelApp" to make the wireframe interactive and more engaging, allowing the users to click and play around with the latest design ideas. We updated our first Survey Monkey questionnaire to ask people to scale their answers based on whether they "Strongly Agree", "Strong Disagree" etc, as opposed to: "Do you like this?". Allowing for some variation in the responses gave us more granularity in gauging whether things were well-received. By sending out a new revised feedback form during the front end build, we were able to take on feedback about the design and functionality as we built, allowing us to keep the user feedback loop and adaptation cycle short. This idea of having a short feedback loop and adaptation cycle is a key concept of agile and was something we were keen to do given the short time frame we had to design and build the website.

### User Feedback & Questionnaires
As an educational device, our web-app had to be as user-friendly as possible. It made sense to get feedback on more than one occasion throughout development. 

Our first round of user feedback came early on, where we had users view our [paper prototype](../Documentation/Paper_Prototype/Paper_Prototype.pptx). This was effective as it allowed us to get our design choices; colour scheme, layout, navigation around menus etc, solidified before actual development began. It ratified some aspects of our prototype such as the title and strap-line but also pointed us in the right direction of more unpopular aspects of our design such as colour scheme (50%/50% split) and finding better ways to get users to return to the app; i.e by updating the quiz regularly. A *feature* came from this feedback also; in order to entice users to spread the word about this web-app so it can gain popularity, there were some suggestions to add social media links to the bottom of certain pages so they can be shared with followers/friends alike. Finally, the actual premace of the web-app was affirmed and was widely recieved by all users as a fun and educational application. (So the most crucial box is ***ticked***).

The second round of feedback incorporated more specific elements of our development and design. Beginning with the colour scheme, a big issue in our last set of feedback, there was now a majority (43.75%) of people liking the colours in comparison with the disagree-ers (37.50%). We quickly realised that colour scheme is painfully subjective so as long as this colour scheme was in the right majority and gave off the right mood of the topic, it would be an acceptable choice. Our overall mix of *serious and play* was semi-proved over this feedback also with agreeing majorities in "This quiz looks fun" and "I would like to take this quiz". We were however pushed to include more information on what fake news is and the damage it can cause, leading to more research and facts being made about fake news. Finally, we were able to refine some aethetics of our visual themes such as logos to include on the page with users picking one logo over the other. The second round was overall more positive than the first.

## **[ADD FINAL ROUND OF USER TESTING]**

## System Architecture & Design
[ADD TO]

### Class Diagram
[ADD TO]

### Sequence Flow Diagram
[ADD TO]

- [Next Section: Project Evaluation](SystemImplementation.md)
- [Back to Top](#table-of-contents)
- [Back to Home](../README.md)

# Mark Scheme Relevant Topics:

## Background and Motivation
- Background literature. Academic research review.
- State of the art survey. Current industry review.
- Clear definition of the problem. How does your project relate to the above? We will be marking the ability of your team to identify a worthwhile and important problem and clearly articulate the scope and challenge of the problem.

## UX Design
- Design Process and Early prototyping and ideation (including mood boards and paper prototyping)
- Identification of interacting users and broader stakeholders.
- UX approach – design heuristics/approach, design methods (design fiction / heuristics)
- Understanding of user group (questionnaires / user stories / interviews)
- Wireframes and interaction flow diagrams for final key subsystems.

Design of the prototype started with a wire frame prototype on powerpoint that was designed collabaratively on Teams. After refactoring the design, we created a  Survey Monkey to send to 20 people. This informed our following design on.....

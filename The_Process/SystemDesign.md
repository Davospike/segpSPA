<h1 align="center"> System Design </h1>

CONTENTS SUBJECT TO CHANGE

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

Our project objectives were established early on in our [group scoping discussion](GroupScopingDiscussion.md) and are set out as follows:

**Primary Objectives:**

- Develop an educational quiz, tasking users with identifying fake news

- Use the web-page to inform users about fake news; what it is, its history, the dangers of it, and how to recognise it

- Create a static database that holds a hand-picked selection of news articles that are identified as being fact or fiction

**Secondary Objectives:**

- Collect and store user data, such as their quiz score and where they obtain their news from

- Create a login function for the site so users are encouraged to revisit and compare previous scores

- Create a function that allows users to share their score via social media

[ADD VIDEO]

## Background & Motivation
[ADD TO]

### Current State of Industry
[ADD TO]

### Why Does Fake News Education Matter
[ADD TO]

## Product Requirements

### Idea Generation
##### <u>Miro</u>

With no absolute process on how to begin our project, we decided to map out ideas as 'visually' as possible. Using **Miro**, a collborative whiteboard platform which we could unload our ideas into to begin with. To view our board, follow [this link](https://miro.com/app/board/o9J_lUwgzKw=/), or view the [pdf](./Documentation/DesignChoices/Woke-apedia.pdf) within this repo. As mentioned previously, the visualisation was key here, we ended up formulating a 'timeline' of sorts - the long, vertical strip of post-its beginning from the top. The timeline demonstrated a rough idea on the web-app's 'narrative'; the first thing the user will see and how they will manoever through the web app to get to certain sections. Obviously, going all out with all of our ideas, some more reasonable than others allowed us at _this_ moment in time to learn from how to plan things in a suitable manner. We can see from this old Miro board which ideas came through to the end and which were ignored/forgotten. 

There were elements that stuck throughout our time on the project, such as a punchy landing page that gives the user a full background and overview of the topic, giving precise statistics that the user can base our info on. In the same way, ideas such as storing user data didn't make it into the final product. We were planning on questioning the users on 'why they got the question wrong' - was it because they were misinformed? Or did they genuinely not know anything about the topic. As much as this would be interesting for us to observe; for the user on the other hand, we didn't think this would be as compelling to them. We have branded this web app to allow users to test themselves on how well *they* can spot fake news so we aimed for the focus to be on that rather than comparing with other users.

##### <u>Idea Matrix</u>

Prior to this, coming up with the initial idea for the web app was facilitated by various techniques. The most successful was creating a matrix of topics to merge; we were combining **Serious** [Topics] and **Play** so this method was very effective. It works by using the column headers for one characteristic and the row headers for the other (I.e serious topics on as rows and 'play' on the columns) and then combining each of the subjects together to create a **Serious Play** topic. Having 5 people in the group made this technique very robust and gave us just the right amount of choices to come up with our idea relatively quickly.

### Stakeholders & User Stories
As is standard practice with the agile way of working, for our project to be effective and hit the goals that we desired, we elected to create some theoretical stakeholders for our SPA quiz app. First, we had to think about what a stakeholder actually is; someone outside the team who frequently interacts with, and has a direct interest in, the projects outcome. This set a good starting point for thinking about who our stakeholders could and should be.

To come up with appropriate stakeholders, we, as a team, had to put ourselves in the shoes of the end user and think about who would be engaging with the project throughout the journey. After some discussion, the three obvious choices that came to mind were:

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

<p align="center">
<img src="../Documentation/Images/Would_They_Lie_To_You_Use_Case_Diagram.png" alt="Use Case Diagram" width=60%>
</p>

## Design Process & Early Prototyping
[ADD TO]

### Design Methods
[ADD TO]

### Paper Prototypes & Wireframes
[ADD TO] Flow Diagrams?

### User Feedback & Questionnaires
[ADD TO]

## System Architecture & Design
[ADD TO]

### Class Diagram
[ADD TO]

### Sequence Flow Diagram
[ADD TO]

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

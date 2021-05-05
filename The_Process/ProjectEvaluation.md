<h1 align="center"> Project Conclusion </h1>

## Table of Contents

- [Evaluation](#evaluation)
  - [Evaluation Techniques & Timeline](#evaluation-techniques--timeline)
  - [Testing](#testing)
    - [Functional Testing](#functional-testing)
    - [Unit Testing](#unit-testing)
    - [User Acceptance Testing](#user-acceptance-testing)
- [Conclusion](#conclusion)
  - [Reflection on Working Practices](#reflection-on-working-practices)
  - [Project Success](#project-success)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Overall](#overall)
  - [Covid-19 Implications](#covid-19-implications)
  - [Ethical Framework](#ethical-framework)  
  - [Future Work](#future-work)

## Evaluation

### Evaluation Techniques & Timeline

### Testing

In order to help continually assess and improve our project, various methods of testing were carried out throughout the project. As a team, we felt it was important to carry out multiple types of testing as it meant we would be able to test different aspects of the project, as opposed to just focussing on, for example, the code base. Please see below to read about what we did and why.

#### Functional Testing

User journey tests are ways to test a certain path a *user* could take through a system. They're considered a 'BusinessFacingTest' and are conducted by putting the developer into the user's shoes. They are well detailed documents that present a set of steps (including setup and teardown) on what to engage with and what to expect on the screen in order to make sure that the program acts as expected.

We created three user journey tests:

- [Getting to the info page and to a quiz](User_Journey_Testing/User_Journey_1)
- [Taking a quiz](User_Journey_Testing/User_Journey_2)
- [Sharing the web-app on social media](User_Journey_Testing/User_Journey_3)

The general structure we used for each was: to conduct the user's intention during the test, how to set up the environment, how to tear down the environment after testing, and a list of tests to actually carry out (with a step-by-step list for each one). User journey 1 directed the user to the main two features of our web-app - the 'about Fake News' page and the 'Take the quiz' page. User journey 2 made sure that completing the quiz was as expected, the set up was starting the 'China' quiz from the selection page; the test consisted of selecting answers and submitting the quiz, as well as making sure that the answer page was properly presented. User journey 3 focussed on sharing the quiz on social media, involving scrolling to the necessary selection of buttons and clicking 'Twitter'.

These tests were useful as they compelled us to take a closer look at our web-app and document every feature that the user should expect to see - it made us consider errors that may not have been obvious at first.

#### Unit Testing

In order to verify that our quiz was working exactly in the way that we intended it to, we devised unit tests using Karma and Jasmine. We all agreed that the most essential part of the application is navigating through the actual quiz: Do the buttons on our quiz page function correctly? Is the user able to move to the next question? Can the user select answers for the questions? Can the user submit answers to the quiz?

Our quiz is central to our application, and we need to be able to ensure at all times that this user journey functions properly; the brief for the project was to develop a single page application that is based around the subject of “serious play”. As our quiz represents the playful aspect of our application, first and foremost, we must be able to rely on our software to do its job in rendering the quiz on a page and to update the page with new questions in response to a click of buttons. As such, we wrote the following test case to correspond to this user story:

“As a user, I want to be able to move through different quiz questions, select my appropriate responses and submit answers to my quiz at the end.”

##### 1. Test a user can select next question

- Start on a questionnaire page
- Select ‘next question’
- Application page should render following question
- Ensure the design of the page looks correct

```javascript
it('should go to next question', fakeAsync(() => {
    spyOn(component, 'goTo');
    const goToLink = fixture.debugElement.query(By.css('#goto'));
    goToLink.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.goTo).toHaveBeenCalled();
  }))
```

##### 2. Test a user can select answer

- Start where Test A finished

- Select ‘Fake’ or ‘True’ in response to question

- Box should fill with a tick on the screen

  ```javascript
  it ('should select the selected option', fakeAsync(() => {
      spyOn(component, 'onSelect');
      const selectLink = fixture.debugElement.query(By.css('.onselectbutton'));
      selectLink.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(component.onSelect).toHaveBeenCalled();
    })) 
  
  ```

#### 3. Test a user can submit answers

- Start where Test B finished

- Select ‘Submit Answers’

- Answer page should render correctly

  ```javascript
  it('should submit quiz answers', fakeAsync(() => {
      spyOn(component, 'onSubmit');
      const submitLink = fixture.debugElement.query(By.css('#submit'));
      submitLink.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(component.onSubmit).toHaveBeenCalled();
    }))
  ```

All three of these tests can be found within quiz.component.spec.ts and all of them test functions outlined within quiz.component.ts file. In addition to these tests, there are 8 other tests that were already created when developing the app. This was our first exposure to both Jasmine and Karma and as a result, a number of issues arose in the writing of these tests that we were thankfully able to solve. Most notably, Test 2 above would not pass because the type of event that was used to trigger the checkbox input selection was using 'onChange' as opposed to 'onClick'. In the end, the fix was just changing the function used on that part of the html from 'onChange' to 'onClick'.

#### User Acceptance Testing

The final set of testing that we carried out was in-person user acceptance testing. For this, we sat down with housemates and family at the end of our website build process and let them play around, and interact, with it. After the testers felt they were done with the website, they had to fill out a Survey Monkey questionairre, allowing them to voice their opinions and thoughts. As a result, this meant the testers were interacting with the website in its most complete state throughout the whole project. By letting them interact with a complete state meant that they could be critical about what we deemed a finished state and thus help provoke improvements, and/or validate whether we achieved our project goals. 

Overall, feedback was positive and confirmed that the website was easy and intuitive to interact with. Further, testers left good feedback for improvements that could be implemented in any further work done on the project. 

Some feedback is as follows:
- Some users found at the end of the quiz it wasn't entirely clear that you needed to select `Submit Quiz` and assumed clicking `Next` at the end would finish and submit the quiz. 
- Others suggested showing your total score at the end; this was something that we thought we had done, but clearly hadn't, thus showing the importance of carrying out these tests.
- Another tested thought that there was too much content to read in the 5 minute time cap and as a result didn't end up reading everything. They also suggested extra context to help gauge the article, e.g. dates.

As a team, we believe that all the feedback could be implemented to improve the user experience on the website and so are grateful that we carried out the testing. It was able to highlight things that we thought we had done, but had not noticed due to us interacting with it daily and thus having a bias to knowing how it works and what to expect. By allowing testers to interact with it and feedback these irks will be helpful for further work.

## Conclusion

### Reflection on Working Practices

As mentioned in the System Implementation, we used an agile methodology when developing this application, sticking as closely as possible to the agile manifesto. Due to the nature of the write up of this whole project taking place when the application was in the final throngs of development, albeit from copious notes, agendas, reports on meetings etc., we have already reflected on our decision to follow agile principles to a large extent within that section. However, it cannot be harmful to briefly reiterate here the success of our working methods with some further reflection on how we can improve for the future. 

The core practices that we took on board during this project concern constant communication, reflection of our work and continuous delivery of our project. These three working methods are all referenced within the twelve principles of agile, and we believe that they served to enable collaboration to flourish within our team, maintain a high level of motivation among individuals within the team, deliver working software frequently, solve issues quickly and ultimately deliver a project that we take pride in. If there was one working method that we would prize above the rest it would have to be constant communication. Working together was essential for this project and it provided an environment for us all to deliver on an individual level also. 

Upon reflection, given the circumstances of a global pandemic we are thankful for the technology platforms that enabled us to adapt our communication channels. As team members, we have not all met each other in person, indeed many of us have been collaborating on this project from different cities across the UK. Our Monday morning stand-ups set the precedent for communication every week, which continued after our lectures and whenever we saw fit. Indeed, as this project drew to a close, we started to meet every morning to ensure that all our targets were being achieved and so we could reflect more deeply on our project. This would not have been possible without modern technology platforms such as Discord and Teams and it shows that in our modern world, you do not need face-to-face interaction to collaborate successfully in a working environment. 

That said, there is always room for improvement. The agile manifesto states that 'the most efficient and effective method of conveying information to and within a development team is face-to-face conversation'. While this was not possible this year, we look forward to a time in the future where we can engage in pair programming sessions in the same room and take meetings in person. We believe that closer collaboration would lead to an even better working environment and cohesive project. 

### Project Success

#### Backend

Overall, the backend development was a success. We used innovative methods to inject our data into our database using [insertDataScript.js](../Application/AngularQuizApp/insertDataScript.js). This, combined with `mongoimport`s and `mongoexport`s allowed us to inject the data into the *docker container*. It was a effective solution to the problem by which the Mongo container mounts its volume locally. I.e We couldn't assume that users composing the docker environment had the data locally.

[insertDataScript.js](../Application/AngularQuizApp/insertDataScript.js) alongside the Mongoose models successfully populated the schemas that reflected our data model design. This was evident when exporting into JSON files and being fully compatitible with the frontend's requests. The linking of the backend and the frontend required some backend configuration; the frontend relied on a schema `Options` that referred to the answer choices the user had to take. At first this wasn't part of our backend data structure, but was crucial in making the whole web-app functional. We made sure these schemas were working correctly when testing the quiz ourselves - cross-referencing the result on the page to the data we stored.

We also made sure that our web-app was as secure as possible, especially during deployment. We wanted to avoid hard-coding usernames, passwords, local and container Mongo ports, and the same for App ports. Our `.env` file held this information and we wanted to reference those values correctly. To be able to access MongoDB and various commands, you need to authenticate yourself beforehand; to prevent any malicious intent from other individuals that could compromise our data.

We didn't manage to fulfil our extension of being able to update fields in MongoDB from frontend requests. We wanted to store two parameters per question: the number of users that had attempted the question and the number of users that had got the answer correct, hoping to display this data to the user afterwards. To implement this, we initially experimented using HTTP `get` methods but we were unable to utilise these and call `.save` on Mongoose models to update the appropriate fields. Also, we tried using HTTP `put` methods which we couldn't get to work with our models either. We felt this didn't make a significant difference to the user experience so we decided to focus on other aspects of the web-app instead. The methods that we tried to implement can be found in Api.js (Comments stating `FUTURE DEVELOPMENT CODE`), we would like to implement these features in future developments which we will go into more detail later on.

#### Frontend

For the frontend, we also believe we had success with our design and implementation. We started out with thorough sessions for early design conceptualizeation and put time and effort into paper prototypes and wireframes. Throughout the process we were constantly reviewing the design, remembering to put ourselves in the users shoes and always referring to the user stories. During the design process, we were carrying out the aforementioned surveys to help steer the direction of our work, keeping us aligned to what the end user wanted. 

On the implementation side, we picked up on the relevant technologies quickly in order to effectively implement a pre-made quiz framework into our base site, allowing us to spend more time focused on the educational aspects of the site; arguably the most important part. Using bootstrap and custom HTML design templates allowed us to make the site visually appealing, something that the final round of user acceptance testing confirmed.

There were, however, some aspects of the frontend that did not go quite to plan/weren't executed perfectly. Initially we had overestimated our ability to deconstruct an advanced Spotify quiz and thus failed in implementing that quiz framework, wasting valuable sprint time. It wasn't all bad news, however, as we were able to learn more about how Angular web applications are set-up and executed. It could be said that we bite off more than we could chew with this framework. Despite the setback we were able to quickly pivot and find a more appropriate framework to use. With this one, we were able to tailor it to our needs, e.g. adding shuffle questions features and adding more detail to the question presented, and produce a well functioning fake news quiz and educational website. 

Feedback from the user acceptance testing showed some flaws/suggested potential improvements in the design. You can read about this in the earlier [User Acceptance Testing](#user-acceptance-testing) section.

#### Overall

If we think about overall success as the extent to which the website achieves the primary and secondary objectives set out at the start of the project, we believe we can deem the project to be mostly successful.

Towards the start of the project, we set out key objectives to strive towards achieving. These objectives were highlighted in the [System Design](SystemDesign.md) section. Looking at the primary objectives first:

- Develop an educational quiz, tasking users with identifying fake news
- Use the webpage to inform users about fake news; what it is, its history, the dangers of it, and how to recognise it
- Create a static database that holds a handpicked selection of news articles that are identified as being fact or fiction

We believe that we completed all three with good success. Feedback from the user acceptance testing showed that the quiz was easy to do and engaging. The website has an in-depth page on the history of fake news, what it is and how to handle it. Feedback also suggested that testers found that after engaging with the website, they felt more comfortable with their ability to recognise and deal with fake news, thus implying that the page does what it set out to do. The database went through a solid design process and successfully holds the various quiz topic question sets.

Whilst the primary objectives were a good indicator to overall success at the base level, further secondary objectives were set in order to stretch and challenge ourselves during the project. These were:

- Collect and store user data, such as their quiz score and where they obtain their news from
- Create a login function for the site so users are encouraged to revisit and compare previous scores
- Create a function that allows users to share their score via social media

For the secondary objectives, unfortunately we were not able to achieve the same success as with the primary objectives. Difficulties arose when trying to implement features in the database to collect and store data. Extensive work was done in attempts to achieve the goal, but unfortunately we had to take the executive decision to drop the feature. The difficulties were well documented in the [System Implementation](SystemImplementation.md). Implementation of login functionality was also a failed objective; this was not down to unsuccessful attempts, but rather down to running out of time. As a team, at some point we had to decide when to stop working on adding features, and focus on the write-up and improvements of the current state. As an advanced feature, when it got round to being able to start attempting implementation, we felt that time would not have allowed a successful attempt and thus agreed to drop the feature. Fortunately the final secondary objective was a success. A social footer was placed at the bottom of each page to allow users to share the site on their favourite social platforms. 

Given a success rate of 4/6 objectives, with all three primary objectives passing with good feedback on multiple user testing rounds, we believe we can say with confidence that overall the project was a success. 

#### Other Aspects Of Success

Whilst success can be measured against achievement of objectives, as a team we also feel that a successful project is also one that exhibits the following qualities: maintainable, secure and easy to use. We believe we have already touched upon these three aspects in the write-up already, but we would like to highlight them again here.

Looking at the project from a maintainable point of view, we believe by using the MEAN stack, and in particular Angular for the front end, we have made it easy to expand upon and improve further down the line. The use of components help keep the code base DRY for certain aspects of the website, such as navgiation toolbars and social footers. Further, with a purely JavaScript/TypeScript code base, the language is consistent from front to backend so as a result, adding new quizzes and features would be straight forward.

Ease of use can refer to the actual UX of the website, but also on a more granular level we believe it can relate to documentation and direction for the code base. Multiple rounds of user feedback frequently confirmed that the UX of the website was engaging and easy, succeeding for most of the user stories. However on the code base and instruction, we feel we have been focussed throughout the project on making sure naming conventions, documentation etc. have been aligned and clear. Combining the successes of maintability and ease of use, we believe that if a third party wanted to add new features to the website, it would be relatively straight forward, as a result.

Finally, security admittedly played less of a part, but was never forgotten. Throughout we have been careful not to share passwords and logins to our databse on the github and have spoken in detail about the issues around data protection and collection in our ethical evaluation.

### Covid-19 Implications

Aside from finding some interesting fake news surrounding Covid-19, the pandemic has given us some more serious issues to overcome. It is worth noting that the developers contributing to this project are new to the technologies used, and this, alongside Covid-19, has lead to multiple brainstorming and many "Teams" meetings. It was clear that since we would not be meeting in person, a clear structure to meetings was needed, and the frequency of them was imperative. Furthermore, it meant that we would need to get used to using technologies that aid virtual collaboration. In light of this, this section starts by discussing our meeting structure, the success of that structure and technologies we feel were useful, and are worth considering for future use.

In the earlier development days of "*Would They Lie To You?"*, we would meet once a week, over Microsoft Teams. Meetings were booked in advance, at a time and date agreed on in the previous meeting. It was clear, after a few meetings, that we needed to utilise the time we had in these meetings more efficiently. We then decided to call our meetings *Stand-Ups*, in which each member would present what they had done in the previous week, what they want to do in the coming week and their general progress on their current sprint. In an environment without a pandemic, discussions of this sort would probably happen in person, with a less formal structure. In the front-end and back-end teams, we also implemented meeting logs in respective directories, alongside the general [team meeting logs](../Documentation/Meeting_Log). This meant that members in the other team could refresh themselves on what the counterparty team was up to. This meant that, if team members were unavailable, for Covid-19 related issues, for example, they could get up to date, with sufficient detail. Our full processes were documented [here](SystemImplementation.md/#sprints) under the **sprints** section, and [here](../Documentation/Backend/README.md) for back end specific meeting logs.

#### Technologies Used

We used multiple technologies that allowed for collaboration throughout the project. Without these technologies, we would probably have a much less sophisticated project, and a lot more merge conflicts. From the outset of the project, screen sharing was the extent to our collaboration in IDE's and other technical work. The first technology we found that came to our aid was in the system design process. Aside from using our idea matrix in Excel, we used Miro, to generate ideas for our project. *Post-it notes* were put down on the interface in a random fashion, and after some time we started grouping similar ideas into sections. This allowed us to map out our project ideas, in a way that would probably not be possible over a group call. 

When it came to the actual implementation of some aspects of our project, pair-programming became a skill we needed to acquire with strength. There are some well-known technologies we used here. A first example was Atom's Teletype. This meant that scripts, like the [*insertDataScrtipt*](../Application/AngularQuizApp/insertDataScript.js), could be completed in a fraction of the time. Since this is where we sorted all our data into schemas, it took a lot of formatting and was fairly repetitive after copying in multiple URLs and a lot of closing braces. For avoiding syntax errors like these, it was useful to not go for the typical driver-navigator pair-programming approach, since no in-depth thinking was required. After a while, the team generally drifted over to Visual Studio Code's Live Share Plugin. This allowed for a similar implementation to Atom's Teletype, however, guests could also run commands in the terminal. This became useful if the host needed a break for whatever reason, and meant that work could continue.

Finally, we felt that the whole integration of Docker allowed for collaboration across our teams. Although this is generally a design choice, and the benefits of containerisation go without mentioning, we still feel that this helped us in Covid-19 times. Without the easy build process of Docker, and the uniform environment across operating systems and machines meant that if there was a bug, everyone would have it (given it was in the Dev branch), and we could all brainstorm and debug the same error. This saved us a lot of time, and we felt that inexperience with some of the tools we used, alongside the confusion of Covid-19 times, the Docker containerisation ecosystem proved to be of great use.

### Ethical Framework

#### Code of ethics

We decided to investigate the ethical implications of delivering this project through the lens of normative ethics. The framework we opted for is adapted from the [DIODE framework](https://www.researchgate.net/publication/220173139_Ethical_assessment_of_new_technologies_A_meta-methodology ), which is used to assess new technologies. The procedure for this type of analysis involves highlighting a possible ethical issue and considering its alternatives from three ethical perspectives: Consequentialist, Deontic and Virtue. For the purpose of this project, we considered Consequentialist perspectives in terms of the possible outcomes to stakeholders, Deontic in terms of rules and legality. For the values based ethics, we set out our own company ethical principles that we aspire to in our daily work. These comprise:

- Respect for others
- Integrity and honesty
- Justice
- Lawfulness
- Competence and accountability
- Teamwork

With this framework in place, we sat down together for an ethical workshop and ruminated on the ethical issues of developing the Would They Lie To You? single page application. We underscored the importance of talking through this debate as a group in order to bring as many perspectives and opinions to the table as possible. The considerations and outcomes of our workshop are below:

#### Data privacy

As a team, we discussed data privacy as the pertinent ethical issue concerning this project. We first identified the stakeholders as our users and considered potential outcomes of holding their data.  During this process, we amassed a series of questions that we thought would be important to investigate, including: Would we be prepared for a data breach? Would we be able to ensure the privacy and security of our users' data? Would we have the right mechanisms in place to destroy or delete data if requested to do so? Due to the nature of our social-political quiz topics and the theme of fake news, user data that we collect by way of the quiz could be sensitive. For example, the responses a user inputs into the quiz could reveal an apparent accord with racist stereotypes or prejudices relating to Brexit. It is plausible that this data could be harmful or libellous if publicised or in the case of a security breach. Given that this is the first application that we have built together, we may not be able to build a system with adequate security to house this sensitive data and answer the aforementioned questions with confidence.

Next, we considered the ethical issue of data privacy in terms of its legality. We consulted the UK's [Data Protection Act 2018](https://www.gov.uk/government/collections/data-protection-act-2018) to inform this discussion, which clearly states 'everyone responsible for using personal data' must ensure, among other things, that it is handled with appropriate security, including protection against loss, destruction or damage. Additionally, the document stipulates that there is stronger legal protection for more sensitive information such as political opinions and religious views. Given the recent political data scandal involving Facebook and Cambridge Analytica, we took this issue of legality incredibly seriously. We certainly did not want to be implicated in any scandal, no matter how small, relating to the possession of our users' sensitive data.

The third perspective involved in our ethical framework allowed us to consider data privacy against our own code of ethics. We had already discussed our third code of lawfulness when considering the legality of holding user data and we had also touched upon competence and accountability when considering potential outcomes to our stakeholders. We were of the opinion that holding user data would not violate our remaining values of respect for others, integrity and honesty, justice and teamwork. Our intentions were always honest and good-natured. We were definitely not planning to manipulate user data in any way or sell it to a third party.

This framework for ethical thinking directly impacted our thinking for the design of our website. We originally thought to enable the collection of user-specific data, which would therefore allow users to compare scores with each other and also offer them the opportunity to improve on previous performances. However, having taken into account the ethical issue of data privacy from a Consequentialist, Deontic and Virtue-based persective, we decided not to include user-specific features in our application because of the issues around housing sensitive personal data that we discussed.

#### Future Data Privacy

In the future, we would like to be able to add extra functionality to our application for our users by allowing them to create usernames and share their scores. To enable the comparison of test scores, we would need to collect user-specific data. We believe this would improve the user experience and increase the likelihood of return users as they would be able to benchmark their scores with their friends and against their previous attempts. This would serve to make our application both more competitive and social for our users, thereby increasing the amount of traffic our application receives. 

However, it is clear that we would need stronger security in our database before we could consider rolling out this added functionality. We would therefore look for consultation on best database practices to evaluate our security further. As multinational technology company [IBM states](https://www.ibm.com/cloud/learn/database-security#toc-best-pract-v7bPIzDi), this may include physical security, administrative and network access controls, end user account/ device security, encryption, database software security, application/ web server security, backup security and auditing. 

#### User Data Collection

We used several rounds of user testing for varying stages of development of this project. We had to consider collecting qualitative data or quantitative data for this user evaluation process. We thought a quantitative data collection approach would be more useful for the purpose of this project because we would be able to measure the success of our design decisions and our feedback would be less subjective. In particular, we used a 5-point Likert scale, named after inventor, psychologist Resins Likert, for the majority of the questions on our questionnaires. This facilitated the collection of easy-to-interpret data as shown below.

![Screenshot from 2021-05-03 09-30-55](https://user-images.githubusercontent.com/63299377/116867516-4bb68980-ac05-11eb-9d3b-21185ce2c815.png)

We also included options within many of our questions for some anonymous personalised feedback, should the Likert scale not adequately reflect the opinion of the user. This helped to curtail any shortfalls in the simplicity of the five-point answers and to provide more meaningful and considered responses when required. We were careful not to ensure these responses were always entirely anonymous. 

#### Future User Data Collection

However, we are aware that in the future, the combination of deeper quantitative and qualitative research would aid the development of this application. We would like to sit down with our end users to perform in depth interviews, audio recordings, product reviews, customer testimonials and other observations and descriptions about our application. We believe that the more we know and understand about our users, the more we can cater our application to their needs and desires. This type of research would provide us with rich, in-depth insight from our users about using our fake news quiz, areas of room for improvement, thoughts on the design of the application, further opportunities to share with friends, enhancement of game play, new subjects, and much more. These insights would be crucial for adding new features and taking further steps in the development of this application.  

In order to collect and draw on this personal data, we acknowledge that we will need informed consent from our users. 

### Future Work

#### Backend

When we were collecting data, the articles that we read mostly referenced facebook and twitter posts when discussing fake stories - fake news is rife on these platforms. We found this difficult as the search engines that we used were aiming to [filter out](https://www.nytimes.com/2016/11/15/technology/google-will-ban-websites-that-host-fake-news-from-using-its-ad-service.html) any websites that commonly posted fake news. Therefore in the future, we aim to scrape data from facebook and twitter in order to acquire these news items. In fact, Twitter has a [tool](https://blog.twitter.com/en_us/topics/product/2020/updating-our-approach-to-misleading-information.html) that labels tweets as containing fake or misleading news, this could be a good data source that we can incorporate into our database in the future.

Furthermore, in order to improve our database we aim to transition from a **static** database to a **dynamic** one. This would involve pulling data from various sources at a predetermined rate, one example would be the aforementioned web-scraping of social media websites. Another could be importing large datasets from sources such as [Kaggle](https://www.kaggle.com) in order to create more variety in our data. In order to extract data from multiple sources, and utilise it in our database, we will have to conduct ETL data management and analysis (extract, transform, load). Data will need to be transformed in ways that all data items share common fields. As well as this, the data must be transformed so it can be loaded into our mongoDB database uniformly. This would require the use of data warehousing. An example of when this will be useful is pulling sources that label fake news in different ways. One source may call a data item "fake", and another may call it "biased". Agreeing on a model to amend to this problem would be one of the first steps of this process.

The final element that we would like to improve for our app is the way that API functions. Firstly we would want to implement multiple News Topic `get` methods (for each topic) rather than sending one JSON payload for all our data. In order to implement some form of scalability into our project, this is an important step; as our database grows, this will be crucial as system performance could be comprimised by heavier network requests from our API. 

We also aim to create bi-directional communication between the frontend and the backend via our API. We were unable to achieve this with the `num_attempted` and `num_correct` fields in our schemas. After implementing this correctly, we could provide users with relative performance (in comparison with other users) on particular quiz questions. It would also be useful to collect more data about specific topics for fake news research. This data collection could also be combined with the addition of user accounts. Over time, with constantly updated and dynamic quiz datasets, users could track and record their score history on their personal accounts, allowing for better comparison and competition between fake news enthusiasts. Further, it could be better place to fulfil the University Professor user story by increasing the functionality as an educational service.

#### Frontend

Throughout the development process, the frontend user experience was driven by the ongoing user feedback that we ran, taking onboard feedback as we went to influence our design choices. Our final round of user feedback was able to highlight some points for further work as well as pointing out bugs that had flown under our radar. In hindsight, a few areas of the feedback further work were quite obvious, e.g. presenting the total score at the end of the quiz, as opposed to just stating whether individual questions were correct, and a table of contents for the reading heavy About Fake News page. These issues could be ironed out quite quickly should time have permitted. Whilst there are no doubt plenty of potential UX improvements that could also be implemented over time with more feedback being taken, we have also identified some more substantial areas:

Firstly, we have identified more diverse questions as one area of improvement. Whilst real or fake provides a to the point quiz experience, introducing datasets and questions which allow the users to guess/workout to what degree a news article is real or fake. As mentioned above, we identified datasets at the start of our project that did indeed categorise news as: bias, conspiracy, half true etc. Adding additional options to the frontend quiz experience would encourage returnability and keep the experience fresh and engaging.

Second, the team had previously discussed the idea of a more playful fake news game at the start of the project, during the ideation stage, in the form of a graphical or text based fake news RPG. As further work goes, this would be a more substantial piece of work and the limitations of Angular for games would probably mean that it would be better placed as a simple text adventure game. For this, the ideas was that it would be more playful and engaging if the user played through a text based game as a journalist trying to make their break into the industry. The user would be able to make decisions on whether they "wrote" real or fakes news throughout their career with each decision having consequences and highlighting the dangers of fake news.

Finally, the team thought that adding more interactive educational aspects would serve the project brief well. Rather than just educating the user through quizzes and a information page, the information page could be refactored to present the information in a more interactive manner. Similar to educational picture books, attention grabbing headlines or images could be shown on the page, drawing the user to interact and reveal fake news information "under" the headline/image. Further, for the history of fake news, the team thought that incorporating an interactive dyanmic timeline, highlighting significant events/news/tweets, through time, whilst also presenting information about the origins and life of fake news, would have been an interesting aspect.

### Fin

Thank you for taking the time to read through our project report. We hope you enjoyed it and learnt something new about fake news along the way.

- [Previous Section: System Implementation](SystemImplementation.md)
- [Back to Top](#table-of-contents)
- [Back to Home](../README.md)

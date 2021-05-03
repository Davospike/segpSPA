<h1 align="center"> Project Conclusion </h1>

## Table of Contents

- [Evaluation](#evaluation)
  - [Evaluation Techniques & Timeline](#evaluation-techniques--timeline)
  - [Testing](#testing)
    - [Functional Testng](#functional-testing)
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

#### Functional Testing


#### Unit Testing

#### User Acceptance Testing

## Conclusion

### Reflection on Working Practices

**Data Collection**

We used several rounds of user testing in the development of this single page application for varying stages of the project. We had to consider collecting qualitative, personalised data or quantitative data for this user evaluation process. We thought a quantitative data collection approach would be more useful for the purpose of this project because we would be able to measure the success of our design decisions and our feedback would be less subjective. In particular, we used a 5-point Likert scale, named after inventor, psychologist Resins Likert, for the majority of the questions on our questionnaires. This facilitated the collection of easy-to-interpret data as shown below.



![Screenshot from 2021-05-03 09-38-50](https://user-images.githubusercontent.com/63299377/116856633-66800280-abf3-11eb-9819-431b7e526aa9.png)



However, we are aware that in the future, we may want to combine the collection of quantitative and qualitative data to continue the development of this application. This may include interview transcripts, audio recordings, product reviews, customer testimonials and other observations and descriptions. This type of research might provide us with rich, in-depth insight about our application. In order to collect this personal data, we acknowledge that we will need informed consent from our users. 

### Project Success

#### Backend

Overall, the backend development was a success. We used innovative methods to inject our data into our database using [insertDataScript.js](../Example_Code/AngularQuizApp/insertDataScript.js). This, combined with `mongoimport`s and `mongoexport`s allowed us to inject the data into the *docker container*. It was a effective solution to the problem by which the Mongo container mounts its volume locally. I.e We couldn't assume that users composing the docker environment had the data locally.

[insertDataScript.js](../Example_Code/AngularQuizApp/insertDataScript.js) alongside the Mongoose models successfully populated the schemas that reflected our data model design. This was evident when exporting into JSON files and being fully compatitible with the frontend's requests. The linking of the backend and the frontend required some backend configuration; the frontend relied on a schema `Options` that referred to the answer choices the user had to take. At first this wasn't part of our backend data structure, but was crucial in making the whole web-app functional. We made sure these schemas were working correctly when testing the quiz ourselves - cross-referencing the result on the page to the data we stored.

We also made sure that our web-app was as secure as possible, especially during deployment. We wanted to avoid hard-coding usernames, passwords, local and container Mongo ports, and the same for App ports. Our `.env` file held this information and we wanted to reference those values correctly. To be able to access MongoDB and various commands, you need to authenticate yourself beforehand; to prevent any malicious intent from other individuals that could compromise our data.

We didn't manage fo fulfil our extension of being able to update fields in MongoDB from frontend requests. We wanted to store two parameters per question: the number of users that had attempted the question and the number of users that had got the answer correct, hoping to display this data to the user afterwards. To implement this, we initially experimented using HTTP `get` methods but we were unable to utilise these and call `.save` on Mongoose models to update the appropriate fields. Also, we tried using HTTP `put` methods which we couldn't get to work with our models either. We felt this didn't make a significant difference to the user experience so we decided to focus on other aspects of the web-app instead. The methods that we tried to implement can be found in Api.js (Comments stating `FUTURE DEVELOPMENT CODE`), we would like to implement these features in future developments which we will go into more detail later on.

#### Frontend


#### Overall


### Covid-19 Implications

Aside from finding some interesting fake news surrounding Covid-19, the pandemic has given us some more serious issues to overcome. It is worth noting that the developers contributing to this project are new to the technologies used, and this, alongisde Covid-19 has lead to multiple brainstorming and and many Teams meetings. It was clear that since we would not be meeting in person, a clear structure to meetings was needed, and the frequency of them was imperative. Furthermore, it meant that we would need to get used to using technologies that aid virtual collaboration. In light of this, this section starts by discussing our meeting structure, the success of that structure, and technologies we feel that were useful and are worth considering for users.

In the earlier development days of *Would They Lie To You?*, we would meet once a week, over Microsoft Teams. Meetings were booked in advance, at a time and date agreed on in the previous meeting. It was clear, after a few meetings, that we needed to utilise the time we had in these meetings more efficiently. We then decided to call our meetings *Stand-Ups*, in which each member would present what they had done in the previous week, what they want to do in the coming week, and their general progress on their current sprint. In an environment without a pandemic, these sorts of discussion would probably happen in person, with a less formal structure. In the front end and back end teams, we also implemented meeting logs in respective directories. This meant that members in the other team could refresh themselves on what their counterparty team were up to. This meant that, if team members were unavailable, for Covid-19 related issues for example, they could get up to date, with sufficient detail. Our full processes were documented [../Documentation/The_Process/SystemImplementation](here, (front end, see **sprints**)), and [../Documentation/Backend/README.md](here, back end).

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

### Future Work



#### Technologies Used

We used multiple technologies that allowed for collaboration throughout the project. Wthout these technologies, we would probably have a much less sophisticated project, and a lot more merge conflicts. From the outset of the project, screen sharing was the extent to our collaboration in IDE's and other technical work. The first technology we found that came to our aid was in the system design process. Aside from using our idea matrix in Excel, we used **can't remember what it was called**, in order to generate ideas for our project. *Post-it notes* were put down on the interface in a random fashion, and after some time we started grouping similar ideas into sections. This allowed us to map out our project ideas, in a way that would probably not be possible over a group call. 

When it came to the actual implementation of some aspects of our project, pair-programming became a skill we needed to acquire with strength. There are some well-known technologies we used here. A first example was Atom's Teletype. This meant that scripts, like the *insertDataScrtipt*, could be completed in a fraction of the time. Since this is where we sorted all our data into schemas, it took a lot of formatting and was fairly repetitive after copying in multiple URLs and a lot of closing braces. For syntax errors like these, it was useful to not go for the typical driver-navigator approach, since no in-depth thinking was required. After a while, the team generally drifted over to Visual Studio Code's Live Share Plugin. This allowed for a similar implmentation to Atom's Teletype, however guests could also run commands in the terminal. This became useful if the host needed a break for whatever reason, and meant that work could continue.

Finally, we felt that the whole integration of Docker allowed for collaboration across our teams. Although this is generally a design choice, and the benefits containerisation goes without mentioning, we still feel that this helped us in Covid-19 times. Without the easy build process of Docker, and the uniform environment across operating systems and machines, meant that if there was a bug, everyone would have it (given it was in the Dev branch), and we could all brainstorm and debug the same error. This saved us a lot of time, and we felt that inexperience with some of the tools we used, alongside the confusion of Covid-19 times, the Docker containerisation ecosystem proved to be of great use.

- [Previous Section: System Implementation](SystemImplementation.md)
- [Back to Top](#table-of-contents)
- [Back to Home](../README.md)


# Mark Scheme Relevant Topics:

## Evaluatio 

- Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.
- Unit testing / Functional testing.
- User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
- Refer to the detchment between the frontend and backend
  - Some features could not be completed 
    - due to lack of javascript knowledge and a proper synergy between the front and back end structures
  - Next time it would be better to communicate more and make the front end frame work more compatible with the back end **and vice versa**.

## Conclusio
- Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc).
- Reflective discussion of the success of the project. How well did your project fulfil the brief? Were all of your own objectives met
  - **not being able to implement statistics (num_correct)**
- This is a chance to reflect on how coronavirus has affected your project (remote working practices etc)
  - **difficulties in brainstorming, pair programming technologies, **
- Discussion of Social and Ethical implications of your work.
  - **ethical framework**
- Discussion of future work (in terms of design, development and evaluation)
  - **more fake news, continuous pulling of data, our own integrate fake news detection model, user accounts, different data formats ie using dataset DB in archive (and different types of quizzes), mobile app, expanding answers beyond true/false**
  - can put here that if were to do a similar project / extend this one, would implement use of jasmine / karma tools in early stages of the process, to get live error checking etc

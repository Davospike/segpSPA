<h1 align="center"> Project Conclusion </h1>

### Ethical Framework

**Code of ethics** 

We decided to investigate the ethical implications of delivering this project through the lens of normative ethics. The framework we opted for is adapted from the [DIODE framework](https://www.researchgate.net/publication/220173139_Ethical_assessment_of_new_technologies_A_meta-methodology ), which is used to assess new technologies. The procedure for this type of analysis involves highlighting a possible ethical issue and considering its alternatives from three ethical perspectives: Consequentialist, Deontic and Virtue. For the purpose of this project, we considered Consequentialist perspectives in terms of the possible outcomes to stakeholders, Deontic in terms of rules and legality. For the values based ethics, we set out our own company ethical principles that we aspire to in our daily work. These comprise:

- Respect for others
- Integrity and honesty
- Justice
- Lawfulness
- Competence and accountability
- Teamwork

With this framework in place, we sat down together for an ethical workshop and ruminated on the ethical issues of developing the Would They Lie To You? single page application. We underscored the importance of talking through this debate as a group in order to bring as many perspectives and opinions to the table as possible. The considerations and outcomes of our workshop are below:

**Data privacy** 

As a team, we discussed data privacy as the pertinent ethical issue concerning this project. We first identified the stakeholders as our users and considered potential outcomes of holding their data.  During this process, we amassed a series of questions that we thought would be important to investigate, including: Would we be prepared for a data breach? Would we be able to ensure the privacy and security of our users' data? Would we have the right mechanisms in place to destroy or delete data if requested to do so? Due to the nature of our social-political quiz topics and the theme of fake news, user data that we collect by way of the quiz could be sensitive. For example, the responses a user inputs into the quiz could reveal an apparent accord with racist stereotypes or prejudices relating to Brexit. It is plausible that this data could be harmful or libellous if publicised or in the case of a security breach. Given that this is the first application that we have built together, we may not be able to build a system with adequate security to house this sensitive data and answer the aforementioned questions with confidence. 

Next, we considered the ethical issue of data privacy in terms of its legality. We consulted the UK's [Data Protection Act 2018](https://www.gov.uk/government/collections/data-protection-act-2018) to inform this discussion, which clearly states 'everyone responsible for using personal data' must ensure, among other things, that it is handled with appropriate security, including protection against loss, destruction or damage. Additionally, the document stipulates that there is stronger legal protection for more sensitive information such as political opinions and religious views. Given the recent political data scandal involving Facebook and Cambridge Analytica, we took this issue of legality incredibly seriously. We certainly did not want to be implicated in any scandal, no matter how small, relating to the possession of our users' sensitive data.  

The third perspective involved in our ethical framework allowed us to consider data privacy against our own code of ethics. We had already discussed our third code of lawfulness when considering the legality of holding user data and we had also touched upon competence and accountability when considering potential outcomes to our stakeholders. We were of the opinion that holding user data would not violate our remaining values of respect for others, integrity and honesty, justice and teamwork. Our intentions were always honest and good-natured. We were definitely not planning to manipulate user data in any way or sell it to a third party. 

This framework for ethical thinking directly impacted our thinking for the design of our website. We originally thought to enable the collection of user-specific data, which would therefore allow users to compare scores with each other and also offer them the opportunity to improve on previous performances. However, having taken into account the ethical issue of data privacy from a Consequentialist, Deontic and Virtue-based persective, we decided not to include user-specific features in our application because of the issues around housing sensitive personal data that we discussed. 

### Project Success

###### Backend

Overall, the backend development was a success. We used innovative methods to inject our data into our database using [insertDataScript.js](../Example_Code/AngularQuizApp/insertDataScript.js). This, combined with `mongoimport`s and `mongoexport`s allowed us to inject the data into the *docker container*. It was a effective solution to the problem by which the Mongo container mounts its volume locally. I.e We couldn't assume that users composing the docker environment had the data locally.

[insertDataScript.js](../Example_Code/AngularQuizApp/insertDataScript.js) alongside the Mongoose models successfully populated the schemas that reflected our data model design. This was evident when exporting into JSON files and being fully compatitible with the frontend's requests. The linking of the backend and the frontend required some backend configuration; the frontend relied on a schema `Options` that referred to the answer choices the user had to take. At first this wasn't part of our backend data structure, but was crucial in making the whole web-app functional. We made sure these schemas were working correctly when testing the quiz ourselves - cross-referencing the result on the page to the data we stored.

We also made sure that our web-app was as secure as possible, especially during deployment. We wanted to avoid hard-coding usernames, passwords, local and container Mongo ports, and the same for App ports. Our `.env` file held this information and we wanted to reference those values correctly. To be able to access MongoDB and various commands, you need to authenticate yourself beforehand; to prevent any malicious intent from other individuals that could compromise our data.

- What went well:
  - 
  - 
  - 
  - 
  - 
    - 
- What didnt go as well:
  - Couldnt update fields in MongoDB through mongoose commands
    - Via a request to the api
  - Tried using `put` methods to do the same thing but didn't work
    - Frontend <-> backend link was very fragile

###### Frontend



###### Overall

# Mark Scheme Relevant Topics:

## Evaluation 

- Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.
- Unit testing / Functional testing.
- User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
- Refer to the detchment between the frontend and backend
  - Some features could not be completed 
    - due to lack of javascript knowledge and a proper synergy between the front and back end structures
  - Next time it would be better to communicate more and make the front end frame work more compatible with the back end **and vice versa**.

## Conclusion
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
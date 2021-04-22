## Meeting 25.02.2021

- Aim of meeting to design our first paper prototype.
- Collaborated together to design prototype on powerpoint through Teams.
- Put together 5 slides including: Home Page, Questions Page, Fake News Article Page, Answer Page, Data Visualization Page.
- Discussed data sets that we could use, plans for ditributing prototype to potential users for feedback and our next meeting.

------------------------
## Meeting 02.03.2021

- Did some Git branch practice - making sure everyone is up to date with git knowledge
- Changed and finished first Paper prototype on powerpoint - all updates noted in Notes section of each slide
- Created a list of questions for users to give feedback on the first paper prototype
- Booked next meeting - started to think about delegating tasks -> doing more research on parts of the stack
  before next meeting to help with deciding individual tasks. Also going to try and get user feedback before next meeting.

------------------------
## Meeting 10.03.2021

Agenda:
- Discuss our progress made on the week 6 API development workbook;
- Review Survey Monkey responses to our Paper Prototype we sent out last week and note down any changes to be made; 
- Discuss role distribution (i.e. front vs backend assignment);
- Review previous project examples from GitHub.

Log:

Survey Monkey Summary:
- Name is OK
- Navigation seems OK
- Substantial negative feedback about the colour scheme 
- Appealed as interesting to users 
- Not a lot of users would suggest to a friend – add a social element, link to friend / social media account? 

Actions:
- Update colour scheme, add new page for just Fake News info/education
- New meeting for 12/03/2021 for final discussion on role distribution
- Achieve by easter state agreed - Aim to have landing page on webpage done and maybe some DB integration

------------------------
## Meeting 11.03.2021

- Started to properly outlined and formatted README file on github landing page.
- Took time to discuss a roadmap (e.g. Reading week a good time for first sprint??)
- Discussed market research and how useful it could be to make the project as effective as possible.
   - For Background and motivations.
   - To potentially find new ideas.
- Potentially having another single page app to display where data was coming from
   - Using a static database O.K.
   - For testing and incase we don't find a suitable enough dataset.
- Discussion with Tom Bale:
- Tracking user progress, can do it, but could be very difficult. Can use 3rd party authenticators for this; May have to pay for these 3rd party authenticator. Doing it ourselves could be tricky.
- Options:
   - Use the 'session'; browser is handling and executing the code
   - Can hold variables and arrays etc. which doesnt change locally
   - To use for a leaderboard perhaps
   - Could set timeouts to longer to perhaps hold this info? [Probably not as effective]
   - Use a resume 'code' to store user data?
   - Probably a JS 'Quiz' framerwork we can use.
   - Tom urged to try things asap and learn from doing.
   - Early Implementation and testing is key.
- Organised to commit the Angular Dashboard, Design Choices directory and Meeting Log (Obviously).

------------------------
## Meeting 12.03.2021

Log:
- Agreed on role split, but also agreed that roles can be flexible as most are keen to try a bit of everything.
   - JP, DD and HS on front end
   - NT and VG on back end
- Agreed targets for next sprint

Actions:
- NT and VG to begin to mock up a DB design in excel
- JP and DD to look into appropriate JS quiz frameworks
- HS to format and organise GitHub page and some market research

------------------------
## Meeting log 18.03.2021 - back end work (VG and NT)

- discussed progress in separate group tasks, i.e, backend and front end development stages (see corresponding meeting logs for individual meetings)
- dicussed scoping / evaluationg methods to maintian consistent work flow and effective project outcome visualisation 
- booked a meeting with TAs (Allison / Marceli) in Easter break for feedback on our project 
- constructed a notebook for documenting scope / further evaluation ideas, see scoping discussion document 

Actions for next meeting:
- further develop respective parts of the application - back end and front end 
- get feedback on respective parts of the application from those working in a different part of the application (ie front end team look at back end and   vice versa) to allow everyone to be on the same page, and provide constructive feedback.


------------------------
## Meeting log 18.03.2021 - front end work (JP, DD and HS)

DD, JP and HS met at 10am to discuss potential JavaScript frameworks that could be used to run the quiz element of our SPA on fake news.
- As the focus of the project is not on becoming quality JavaScript developers, we were advised by Thomas Bale (TB) to find a premade quiz framework and implement it.
Spent first 30 minutes doing some market research trying to find appropriate and potentially usable JavaScript frameworks to implement into our codebase.
- Evaluated ~5 premade quiz frameworks/tutorials plus investigated YouTube video tutorials on how to create an Angular quiz.
Spent ~2hrs “pair programming” where we followed along with some of the tutorials getting a feel for the codebase and potential for each tutorial/framework
- Decided that a few of the framework's UI/design was a bit basic, and we wanted a more engaging UI that would be more enjoyable to use
- Settled on a framework that had animations and progress bars etc.
- Extracted and got running the base quiz framework on our local host webpages

Actions:

- Study and begin to understand the structure/framework of chosen quiz interface
- Begin to deconstruct and extract relevant code and remove redundant features of quiz

Notes/images view [here](../DesignChoices)

------------------------
## Meeting Log 31.03.2021

- Full team meeting to prepare for feedback session and discuss our first sprint.
- Discussed overall structure of our repository.

- Feedback session notes in ./Documentation/Paper\ Prototype\/

------

## Meeting Log 08.04.2021

- Discussed how frontend will start to link to backend.
- Backend were planning on randominsing the questions in each news topic and handing questions one at a time.
- After discussion, came to the conclusion that it would be easier to pass all of the questions as a big payload for the front end to randomise and display to the user.
- Backend will need to add certain fields such as an options array to make sure that the front and back end align properly. [See backend meeting log for more details.]
- Front and backend consolitation wasn't a complete trainwreck, which is positive! Working towards the merge and aiming for a full link by tomorrow.

------

## Meeting Log 12.04.2021

- Discussed sprint 4 goals and objectives for this week.
- Further discussion around how the frontend and backend will come together. Currently JSON payload and JSON quiz format are mostly the same and so once DB requests have been finalised, we can start having the quiz service subscribe to the API data request for the quiz questions.
- Set up meeting to go through latest round of user feedback. 

------

## Meeting Log 15.04.2021

- Troubleshooting some issues when trying to merge Frontend frameword with current backend structure
  - At the moment trying to merge AngularDemoSite and AngularQuizApp.
- We think it'd be better to git reset to a working state and try again.
- Trying to take a more meticulous route by planning which files are needed from each directory before merging them (Included the hidden `.` Files!)
  - Will plan a proper merge of the two frontend/backend projects for later on today.
  - This has been useful as it allowed the whole group to go through all files/directories one-by-one together to make sure we all understand what is going on under the hood in each of these projects.

------

## Meeting Log 21.04.2021

- Came together to discuss backend team unfortunately having to give up on tracking the number of times an answer was correctly answered to present to the user.
  - i.e. 50% of players got this question right - as per wireframe/paper prototype.
- Agreed we were comfortable with the website and its front and backend design.
  - From here on in, only minor changes should be made as it is in a good place.
- Discussed the project write-up and work break up
  - Went through and annotated mark scheme noting down previous work/notes/meeting logs that would be relevant to each part of write up
  - Decided on what would be more front end, back end or general content
  - Did a break down on who would do which bits.

------

## Meeting Log 22.04.2021

#### Feedback during tutorial:

- Front landing page needs work
- Screenshots showing key interaction points
- Social media link
  - Fine in terms of ethics etc.
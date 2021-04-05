14-03-2021:

Objectives of meeting :
-> Start thinking about the construction of our static DB
-> Start with ER model - list attributes, relationships etc
-> Construct list of sources
-> Think about how to integrate with API? -> store as CSV, use SQL?

Made basic ER Diagram for backend work.
Consolidate with front end members to where we can incorporate images via a Fake News link.
As another team-member to check the ER diagram, probably via a pull request.
Made decisions regarding dependencies and uses of articles in terms of quiz questions.
Ambiguity regarding News items having multiple News topics
	-Would be good to utilise news info to declare a topic
	-and then tell the user what topic the news item is regarding

For next session:
	-review notes on normalisation
	-check it conforms to BCNF (for writing tables)

---------------------------------------------

17-03-21:

Objectives of meeting:
-> check DB structure conforms to BCNF
-> start creating directory structure and input examples
-> decide on coherent list of datasets we will use
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::												:::
::: WHEN CREATING EXAMPLE .CSV FILE TO TEST ER DIAGRAM:						:::
:::												:::
:::-Realised that News_Item table would only be used to ask a Quiz Question			:::
:::-Therefore having a Quiz Question table is redundant.					:::
:::-Due to the 1 to 1 relationship between News Item and Quiz Question.				:::
:::--Solution: merge Quiz Question and News_Item						:::
:::												:::
:::-Even though in our original model, each question was going to be based on one news topic.	:::
:::-If we can, we would implement multiple news topics per question				:::
:::-Therefore we have left 'News Topic' as a separate table.					:::
:::												:::
:::-Researched about join tables, realised they don't necessarily need a PK			:::
:::-Removed PK from join table Topic_Library for clarity and ease of use.			:::
:::												:::
:::-Considered when we would store user follow up input						:::
:::-i.e when user is incorrect *then* they will be prompted with a follow up qu.		:::
:::-Need to consult with team (See 'for next session')						:::
:::												:::
:::												:::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

-Updated ERDiagram considering changes made from .csv example
-Checked for normalisation in the backend layout (See '../DatabaseDesign/Normalisation_RunThrough.txt').
-Slight confusion between Composite/Non-composite candidate keys in terms of violating BCNF 2.
	-> checked notes and David's powerpoints to iron out this issue. (BCNF2 O.K now).

For next session:
	- add actual data to directory/mongoDB
	- consult with team when to program user follow-up questions 
	- hard to explain but 'is the follow up going to be triggered from the backend or the frontend.'
	- choose datasets and start filling in databses
		-> may have to change backend structure depending on dataset found

31/03/2021:

	Backend meeting VG & NT.

-Discussion after completing MongoDB workbook on SEGP Github.
-We originally developed our database/schema to be used in a full SQL environment.
-Took the time to discuss and research the differences between SQL and NoSQL databases (As MongoDB is a NoSQL service).
-We initially believed that an SQL database would suit us better as we had a pre-defined and long-standing layout for our data that we were not planning on changing.
-However (in short), we decided to persue a NoSQL database as it would be easier to implement new features if we had the time at the end of the core development.
-The flexibility and scalability that NoSQL has over SQL is much more useful for us as we have narrowed our developmental ideas for the project in order to maximise our applications performance.

-Full documentation of our choice is in ./Documentation/DesignChoices

	2nd Meeting VG & NT
-Starting extra exercise given at the end of workbook 7. (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
-Started to adapt original SQL schema for MongoDB use, based off tutorial and our old SQL work.

---

---

#### **01/04/21**

Database construction:

<u>Objectives for the meeting:</u>

- design a data model that conforms to noSQL - for this we will convert the old SQL model and construct models
- create a data model diagram with relationships and attributes
- construct javascript classes and start filling in data

*Following this tutorial for the session: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#related_documents*



##### Meeting notes:

###### [Designing the data model]

- got up excel spreadsheet (old SQL) + old ER diagram
- changed excel spreadsheet to make documents for noSQL DB - saved in *noSQLDBdevelopment/NoSQLDatabaseModel*
  - a document in noSQL is a collection of data, like an entity. 
  - we split ours up by similar tables as we had before, and removed the join table
- chagned ER diagram to make noSQL data model diagram - saved in *noSQLDBdevelopment/NoSQLUML*



###### [Designing schemas]

- made an init.js file to practice connecting to mongo
- defined our schemas:
  - Quiz_question
  - user_answer
  - news_topic
- ...and constructed them in js files, with the data fields they contain, and links to arrays of collections to access other collections in a collection (i.e., for modelling relationships)
- since our DB is static, we decided not to enter custome validators in our schemas - we will be hand selecting the data

- connected to mongoDB locally, and wrote a script for inserting example data in mongo collections (Example_Code/AngularDemoSite/insertDataScript.js)



---

Meeting objectives for next meeting:

- read through <https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes> to gain a better understanding on route modules/functions, and start planning our route modules and use of http verbs (ie get, post, ...)
- plan integration of insertDataScript.js within our project, and test pushing json data to our /api page



###### [Routes and Controllers]



---



### 02/04/2021

###### <u>NT & VG had meeting with Marceli (40m)</u>

- Went through our current methods for inserting data into MongoDB

  - Discussed the use of callbacks and decided to keep them within our code.

  - Marceli suggested ways of making insertion easier.

    - i.e by using seeds and migrations through mongoose.

    - Rather than inserting multiple parameters into our 'create' functions.

      - i.e with 'QuizQuestionCreate'.

    - Passing objects into the create functions that are defined by migration (Mongoose seed/migration).

    - Migration was similar to **Create/Drop Scripts** in MySQL.

      

- Spoke about sub documents

  - to reference objects within objects
  - news topics within quiz questions.
  - Suggestions for news_topic to not be a separate entity
  - A list would be made with a complete list of News Topics that would be made in the migration.
    - Each quiz question would hold one or more references to this News Topic list via indexing.

- Confirmed with Marceli our structure when handling requests and returning the required data from the Database.

##### <u>NEW MEETING OBJECTIVES:</u>

- Alter insertScript to utilise seeds and migration.
- Gain a better understanding of Seeds, Migration and Many-to-Many relationships in Mongoose via these links:
  - https://university.mongodb.com/
  - https://bezkoder.com/mongodb-many-to-many-mongoose/
  - https://www.madetech.com/blog/migrations-seeds-and-pipelines
  - https://www.npmjs.com/package/mongoose-seed
  - https://mongoosejs.com/docs/subdocs.html



- Discussed the relationship between News Topics and Quiz Questions and their uses in the web application.
- Perhaps a Many-to-Many relationship is best because we need to categorise the Quiz Question by News Topic.



- Tested running insertScript with different devices.
- Discovered a VSCode extension for MongoDB to help us work through the assignment and understand the backend further.
- Didn't manage to complete Meeting Objectives:
  - Have been trying to store filled DBs in docker container/image to be used on other devices.
- Next meeting tomorrow we will give insertScript a rehaul.



---

#### Meeting Log 04/04/2021

Plans for meeting:

- by the end of the day, want to be able to run *docker-compose up* and after this, whoover's machine is running the container, to have a populated database  that we have created 

- current problems: we can populate a db by passing in a json file, as follows:

  ```sh
  docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c test_collection -d db --jsonArray' < testJSON.json
  ```

  - *note, testJSON* is just a sample json file we took from our local mongo, just to test this mongoimport command ^ works

- ...however, this data does not persist when starting the docker container on a different machine - still staying local

- So our idea is to construct all the json files via our insertDataScript.js and get the correct data out of mongo (local mongo, not dockerised mongo) into a json file, from then we will mongoimport this json payload into the dockerised mongo (From the start)



We constructed a shell script (*deploy.sh*) which does the following:

- builds docker - *docker build .*
- aggregate the output of each container in detached mode - *docker-compose up -d*
- inserts all the JSON data we need into the dockerised mongoDB DB



Tested this initally with a file: *testJSON.json* 

Next, tested with an exported file from a local mongoDB DB

- hence, the third command in our script was:

  - *mongoexport -d test -c newstopics -o newsTopicsOutput.json --jsonArray*

  - here, we exported the newsTopics collection from our local mongoDB DB to a file called newTopicsOutput

  - we then imported this file into our dockerised MongoDB DB via the command (in deploy.sh):

    - ```sh
      docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c test_collection -d db --jsonArray' < newsTopicsOutput.json
      ```

Now checked the correct data was in our dockerised mongoDB DB using the following commands:

```sh
$ sudo docker exec -it db bash
$ mongo
# use admin
# db.auth("<OUR_USERNAME>",passwordPrompt());
# <OUR_PASSWORD>
# db.collection.find() 											// replaced collection with collection name, so test_collection in this case
```



##### Now we've correctly imported some our data, going to create a DB with the right collection names, and populate via this method.

- i.e., each time you run ./deploy.sh now, it will build and start docker containers, then create the collections we need, and populate the entire DB.

- made DB called fakeNewsDB - this is where all data is stored

- got quiz questions data and user answer data into this data in their respective collections using the commands:

  - for **quizquestions** collection:

    ```bash
    $ mongoexport -d test -c quizquestions -o quizQuestionsOutput.json --jsonArray
    ```

  - for **useranswers** collection:

    ```bash
    $ mongoexport -d test -c useranswers -o userAnswersOutput.json --jsonArray
    ```

  - then imported these, like we did with newsTopicsOutput.json:

  ```sh
  docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c quizquestions -d fakeNewsDB --upsert --jsonArray' < quizQuestionsOutput.json
  
  docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c useranswers -d fakeNewsDB --upsert --jsonArray' < userAnswersOutput.json
  ```

  - note, in these commands, and the command for importing newsTopicsOutput, included --upsert flag, which modifies the import process so the we drop the collection before importing the data, hence we avoid the duplicate import errors, i.e.,

    ```bash
    error inserting documents: multiple errors in bulk operation:
    
    - E11000 duplicate key error collection: fakeNewsDB.useranswers index: _id_ dup key: { _id: ObjectId('6069a6379da6ffa6ec3c2e0f') }
    ```

    

Now our ./deploy.sh script creates and runs docker container, with the correct data in our mongoDB DB.

Also, for navigation, added the 3 JSON files (exported from local mongo) into a folder called **blockData**. 



#### Before Inserting All our Data, checked Data Model Again...

- the useranswers collection may be redundant, since the only use for this is to give a statistic on how many users answered a particular question right / wrong, hence could just store that statistic in the quizquestion collection
- also, the relationship between quizquestion and newstopic collections is a many-to-many relationship, so will want to have arrays of quiz questions in a news topic, and arrays of news topics in a quiz question

- hence reajdusted our datamodel again, and the resulting model is reflected in the model diagram, insertdatascript and the final data that lay in our mongoDB database
- also, should we include a text body explaining why the answer is true



#### Inserting Data

- agreed on fake news categories as listed on our marvel paper prototype: 
  - Brexit
  - Coronavirus
  - Immigration
  - China 
  - Economy
- also agreed to add:
  - Climate Change


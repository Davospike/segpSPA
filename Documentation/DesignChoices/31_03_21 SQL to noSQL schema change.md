##### Why we're switching from SQL to noSQL (mongo)

Although we have pre-defined our DB schema, and checked for normalisation, we have decided to make the transition from an SQL schema to noSQL (mongoDB), in order to utilise the mongoose object modelling tool.

Initially, we ventured out designing a relational database for SQL because ...

- SQL performance - initially, we thought that as we had a rigid structure, that was unlikely to be changed, using the SQL framework for designing our DB schema was the best choice. We also thought that we would need to incroporate a lot more data for our site. After designing our schema with normalisation techniques, we realised that all of the data could be sorted into 4 schemas, with a majority of data entries being in 1 of those schemas. The relative advantages of using SQL at this point were not so apparent, and we started to discuss what a noSQL version of our database may look like.

We vouched for switching to mongoDB for the following reasons:

- usable - we feel it would be easier to amend the data scheme using the mongoose object modelling tool. We feel that utilising a framework that resolves around using objects, as opposed to just pure data, would be more suited to the skills of the back-end team in this project.
- scalable - we read that  SQL struggles to cope with big data processing requirements (https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/). Although our SPA does not come close to utilising *big data*, we find that to future-proof our SPA, it would be wise to adopt a back-end which incorporates scalability.
- performance / speed - although we do not necessarily avoid data duplication with noSQL, performing queries on single entities is generally faster than SQL. SQL is more suited to doing quick complicated queries on multiple entities, for example joins / sub-selects (https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/)



SQL Databases work best with schema that are long established and aren't prone to change - NoSQL benefits our project as there is scope for further development. As a single page application, there is always potential for improvements and new features. Therefore using a more dynamic, scalable database with NoSQL can benefit our project in the long term.



We will leave the SQL DB schema in the folder Documentation/Backend/DatabaseDesign/SQLDBdevelopment for reference, and also to show our progression to our final DB design. It will also be useful to look back to check our decision to switch to noSQL.
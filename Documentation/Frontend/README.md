Front End

__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

RESTRUCTURING FRONT END CODE TO PREPARE FOR BACK END DATA 

6-9th April

- Deleted a number of JSONs 

- Re-write quiz service to redirect to new JSON file

  ```typescript
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

  

- Remove a number of variables that were not necessary. 

  __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

PREPARING JSON FILE FROM BACK END

- Understand JSON 

- Re-write models to take data from JSON.

- New quiz.ts

  ```typescript
  import { QuizConfig } from './quiz-config';
  import { Question } from './question';
  
  export class Quiz {
      id: number;
      name: string;
      description: string;
      config: QuizConfig;
      questions: Question[];
  
      constructor(data: any) {
          if (data) {
              this.id = data.id;
              this.name = data.topicName;
              this.description = data.description;
              this.config = new QuizConfig(data.config);
              this.questions = [];
              data.quizquestions.forEach(q => {
                  this.questions.push(new Question(q));
              });
          }
      }
  }
  ```

  

- New question.ts:

  ```typescript
  import { Option } from './option';
  
  export class Question {
      id: number;
      name: string;
      questionTypeId: number;
      options: Option[];
      answered: boolean;
  
      constructor(data: any) {
          data = data || {};
          this.id = data.id;
          this.name = data.headline;
          this.questionTypeId = data.questionTypeId;
          this.options = [];
          data.options.forEach(o => {
              this.options.push(new Option(o));
          });
      }
  }
  ```

  

- New option.ts:

  ```typescript
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

  ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  ISSUES LINKING JSON DATA FROM BACK END TO FRONT END 

  

- Encountered many difficulties linking up the back-end with the front-end. Originally could not get the JSON provided by the back-end to work with the front end. 

- This was due to an extra variable within the "options" called "optionR_F" or "optionF_T" that made it very hard to access the data. As shown below:

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

  

- Eventually managed to work with back-end to produce questions in this working format for quiz framework:

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




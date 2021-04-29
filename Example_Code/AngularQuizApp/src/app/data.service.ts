import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:4200/api/NewsTopics";
  private REST_API_SERVER_UPDATE_CORRECT = "http://localhost:4200/api/correct";
  private REST_API_SERVER_UPDATE_INCORRECT = "http://localhost:4200/api/incorrect";

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(this.REST_API_SERVER)
  }

  // this method gets called if the user answered the question with this questionURL correctly
  // it passes the questionURL to the API, which updates num_correct / num_answered

  public update_question_correct(question_id) {
    let params = new HttpParams();
    params = params.append('id', question_id);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_CORRECT,{params: params})
  }

  /*
  Better to create a new collection of ANSWERS to process after the quiz
  */

  // this method gets called if the user answered the question with this questionURL incorrectly
  // it passes the questionURL to the API, which updates num_correct / num_answered

  public update_question_incorrect(question_id) {
    let params = new HttpParams();
    params = params.append('id', question_id);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_INCORRECT,{params: params})

    //return this.httpClient.get(this.REST_API_SERVER_UPDATE_INCORRECT,{id: question_id})
  }

  public getQuizNames() {
    return [
      {name: 'Brexit'},
      {name: 'Coronavirus'},
      {name: 'Climate-Change'},
      {name: 'General'},
      {name: 'china'}
    ];
  }
}

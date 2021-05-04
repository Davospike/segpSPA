import { Component, OnInit } from '@angular/core'; // need to make sure we import oninit
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
}

// need to ensure we include a dectorator and export calss as abstract

@Component({
  template: ''
})

export abstract class DataComponent implements OnInit {
  // instantiate data to an empty array
  data: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.dataService.getAll().subscribe(data => {
      this.data = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpoll',
  templateUrl: './viewpoll.component.html',
  styleUrls: ['./viewpoll.component.scss']
})
export class ViewpollComponent implements OnInit {

  title: string = "Fake Title";
  question1: any = {questionTitle: "Fake?", answerChoices: ["a", "b"]};
  answerChoices: any = ["a", "b"];
  
  constructor(public data: DataService, public router: Router) { 
  }

  ngOnInit(): void {
    
    this.title = this.data.getSurveyTitle();
    this.question1 = this.data.getQuestion1();
    this.answerChoices = this.question1.answerChoices;
  
   
  }


  toPolls() {
    this.router.navigate(['polls']);
  }

}

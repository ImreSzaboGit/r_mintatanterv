import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {ISubject} from '../isubject';

@Component({
  selector: 'app-subject-control',
  templateUrl: './subject-control.component.html',
  styleUrls: ['./subject-control.component.css']
})
export class SubjectControlComponent implements OnInit {

  subjects: ISubject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjects = this.subjectService.actualSubjects;
  }

  controlData(emitted): void {
    switch (emitted[0]) {
      case 'reset': {
        this.subjectService.getSubjects();
        this.subjects = this.subjectService.actualSubjects;
        break;
      }
      case 'load': {
        this.subjects = JSON.parse(localStorage.getItem(emitted[1]));
        break;
      }
      case 'save': {
        localStorage.setItem(emitted[1], JSON.stringify(this.subjects));
        break;
      }
    }
  }
}

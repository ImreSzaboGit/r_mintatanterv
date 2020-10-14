import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ISubject} from '../isubject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit, OnChanges {

  @Input() subjects: ISubject[];
  showSubjects: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.showSubjects = true;
    this.checkBlockedState(this.subjects);
  }

  ngOnChanges(): void {
    this.checkBlockedState(this.subjects);
  }

  togglePassed(clickedSubject: ISubject): void {
    if (!clickedSubject.blocked) {
      clickedSubject.passed = !clickedSubject.passed;
      this.checkBlockedState(this.subjects);
    } else {
      const blockedFrom = this.subjects.find(item => item.id === clickedSubject.precondition);
      blockedFrom.blocker = true;
      setTimeout(() => { blockedFrom.blocker = false; }, 3000);
    }
  }

  private checkBlockedState(subjects): void {
    subjects.forEach(item => {
      const preItem = subjects.find(data => data.id === item.precondition);
      item.blocked = preItem?.passed === false;
    });
  }
}

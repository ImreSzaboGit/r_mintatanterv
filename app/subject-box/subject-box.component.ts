import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ISubject} from '../isubject';

@Component({
  selector: 'app-subject-box',
  templateUrl: './subject-box.component.html',
  styleUrls: ['./subject-box.component.css']
})
export class SubjectBoxComponent {

  @Input() subject: ISubject;
  @Output() changePassed = new EventEmitter();

  constructor() {
  }

  onClickButton(): void {
    this.changePassed.emit(this.subject);
  }
}

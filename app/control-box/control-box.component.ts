import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISubject} from '../isubject';

@Component({
  selector: 'app-control-box',
  templateUrl: './control-box.component.html',
  styleUrls: ['./control-box.component.css']
})
export class ControlBoxComponent implements OnInit {

  @Input() subjects: ISubject[];
  inputText: string;
  @Output() clickControlButtons = new EventEmitter();
  showPanel: boolean;

  constructor() { }

  ngOnInit(): void {
    this.inputText = '';
    this.showPanel = true;
  }

  controlData(operation, inputText): void {
    this.clickControlButtons.emit([operation, inputText]);
  }
}

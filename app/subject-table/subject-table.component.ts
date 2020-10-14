import {Component, Input, OnInit} from '@angular/core';
import {ISubject} from '../isubject';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.css']
})
export class SubjectTableComponent implements OnInit {

  @Input() subjects: ISubject[];
  tableShow: boolean;

  constructor() { }

  ngOnInit(): void {
    this.tableShow = true;
  }

}

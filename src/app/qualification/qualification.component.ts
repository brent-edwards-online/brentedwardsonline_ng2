import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  @Input() qual;
  constructor() { }

  ngOnInit() {
  }

}

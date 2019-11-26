import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'starselect',
  templateUrl: './starselect.component.html',
  styleUrls: ['./starselect.component.css']
})
export class StarselectComponent implements OnInit {

  isSelected = true;
  onClick(){
    this.isSelected = !this.isSelected;
}
  constructor() { }

  ngOnInit() {
  }

}

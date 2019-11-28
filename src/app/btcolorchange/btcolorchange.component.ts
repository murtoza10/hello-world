import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'btcolorchange',
  templateUrl: './btcolorchange.component.html',
  styleUrls: ['./btcolorchange.component.css']
})
export class BtcolorchangeComponent implements OnInit {

  @Input('colorchange') color = "blue";
  @Output('clickchange') change = new EventEmitter();

  isClicked= false;
  onClicked(){
      this.isClicked=!this.isClicked;
      if(this.isClicked) this.color="green";
      else this.color="blue";   
      this.change.emit({newValue :this.color});   
  }
  constructor() { }

  ngOnInit() {
  }

}

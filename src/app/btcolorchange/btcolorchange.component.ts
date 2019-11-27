import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btcolorchange',
  templateUrl: './btcolorchange.component.html',
  styleUrls: ['./btcolorchange.component.css']
})
export class BtcolorchangeComponent implements OnInit {

  @Input() color = "blue";
  isClicked= false;
  onClicked(){
      this.isClicked=!this.isClicked;
      if(this.isClicked) this.color="green";
      else this.color="blue";      
  }
  constructor() { }

  ngOnInit() {
  }

}

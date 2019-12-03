import { Component,Input } from '@angular/core';

@Component({
  selector: 'toggle-body',
  templateUrl: './toggle-body.component.html',
  styleUrls: ['./toggle-body.component.css']
})
export class ToggleBodyComponent {
  @Input('title') title:string;
  isExpanded: boolean;
  toggle(){
    this.isExpanded=!this.isExpanded;
  }

}

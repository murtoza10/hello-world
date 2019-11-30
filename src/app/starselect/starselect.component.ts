import { Component } from '@angular/core';

@Component({
  selector: 'starselect',
  templateUrl: './starselect.component.html',
  styleUrls: ['./starselect.component.css']
})
export class StarselectComponent {

  isSelected = true;
  onClick(){
    this.isSelected = !this.isSelected;
}
  canSave =false;

  task={
    title: 'Review the Applications',
    assignee: null  
  }
  

}

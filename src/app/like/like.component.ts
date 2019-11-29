import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isClicked') isClicked: boolean;
  @Input('likesCount') likesCount:number;
  color = "blue";
  
  onClicked(){
      this.isClicked=!this.isClicked;
      this.likesCount += (this.isClicked) ? 1 : -1;
      if(this.isClicked) this.color="green";
      else this.color="blue";   
  }

}

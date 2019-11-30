import { Component} from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  viewMode ='map';
  courses;
  onAdd(){
    this.courses.push({id:3,name:'Angular'});
  }
  onRemove(course){
    this.courses.splice(this.courses.indexOf(course),1);
  }
  loadCourse(){
    this.courses =[
      {id:1, name: 'Java'},
      {id:2, name: 'Machine Learning'},
      {id:3, name: 'Data Science'}
    ];
  }
  trackCourse(index,course){
    return course ? course.id : undefined;
  }
}

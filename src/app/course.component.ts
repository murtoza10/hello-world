import { Component } from '@angular/core';
 
@Component({
    selector : 'course',
    template : `
    <h2> {{"100 " + title + getFun() }} <h2>
    <ul>
        <li *ngFor= "let course of courses">
        {{course}}
        </li>
    </ul>
    `

})

export class CourseComponent{
    title = "List of Courses ";
    fun ="for fun";
    courses= ["Java","C++","Machine Learning"];
    getFun(){
        return this.fun;
    }
} 
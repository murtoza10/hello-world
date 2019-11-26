import { Component } from '@angular/core';
import { CourseService } from './course.service';
 
@Component({
    selector : 'course',
    template : `
    <h2> {{"100 " + title + getFun() }} </h2>
    <h2> {{courses.length}} Courses </h2>
    <ul>
        <li *ngFor= "let course of courses">
        {{course}}
        </li>
    </ul>
    <img src="{{imgURL}}"/> 
    <img [src]="imgURL"/>
    <table>
    <tr>
        <td [attr.colspan]="colspan">Title</td>
    </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">Click</button>
    <button [style.backgroundColor]="isActive ? 'blue': 'green'">Save</button>
    `

})

export class CourseComponent{
    title = "List of Courses ";
    fun ="for fun";
    imgURL ="http://lorempixel.com/400/400";
    colspan =10;
    isActive = true;
    courses;
    getFun(){
        return this.fun;
    }

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }
    
} 
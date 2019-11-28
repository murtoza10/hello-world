import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CourseService } from './course.service';
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

 
interface ColorChangedEventArgs{
    newValue: string
}

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
    <div (click)="onDivClicked()">
    <button (click)="onClicked($event)">Clicked</button>
    </div>

    <input (keyup)="onKeyPressed($event)"/>
    <input (keyup.enter)="onEnterPressed()"/>
    <input [value]="email" (keyup.enter)="email= $event.target.value; onKeyUp()"/>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <br/>
    {{course.title | lowercase |uppercase}} <br/>
    {{course.rating |number:'2.1-1'}} <br/>
    {{course.students |number}} <br/>
    {{course.price |currency:'AUD':'true':'3.2-2'}} <br/>
    {{course.releasedate | date:'shortDate'}} <br/>

    {{text|readmore: 40}} <br/>

    <i class="far fa-star"></i>

    <fa-icon [icon]="faSta"></fa-icon>
    <fa-icon [icon]="ft"></fa-icon>
    <btcolorchange [colorchange]="color" (clickchange)="onColorChanged($event)" ></btcolorchange>

    <starselect>
    <div class="heading">heading</div>
    <div class="body">
    <h2>Body</h2>
    <p>Something to write</p>
    </div>
    </starselect>

    `,
    encapsulation: ViewEncapsulation.Emulated
})

export class CourseComponent{
    faSta =faStar;
    ft=faStarHalfAlt;
    title = "List of Courses ";
    fun ="for fun";
    imgURL ="http://lorempixel.com/400/400";
    colspan =10;
    isSelected = true;
    isActive = true;
    color ="blue";
    
    course ={
            title: "The Complete Angular Course",
            rating: 4.9678,
            students: 10007,
            price: 141.9011,
            releasedate: new Date(2019,4,1)
    }
    text ="Sci-Hub is a website that provides free access to millions of research papers and books, without regard to copyright, by bypassing publishers' paywalls in various ways. Sci-Hub was founded by Alexandra Elbakyan in 2011 in Kazakhstan in response to the high cost of research papers behind paywalls.";
    courses;
    email ="me@gmail.com";



    getFun(){
        return this.fun;
    }

    onColorChanged(eventArgs: ColorChangedEventArgs){
        console.log("color changed ", eventArgs);
    }

    onClick(){
        this.isSelected = !this.isSelected;
    }

    onKeyUp(){
        console.log(this.email);
    }

    onKeyPressed($event){
        if($event.keyCode===13) console.log("Enter was pressed from KeyPressed method & Input has ", $event.target.value);
    }
    onEnterPressed(){
        console.log("Enter was pressed from EnterPressed method");
    }

    onDivClicked(){
        console.log("Div was Clicked");
    }
    onClicked($event){
        $event.stopPropagation();
        console.log("Button was Clicked", $event);
    }

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }
    
} 
import { ReadMorePipe } from './readmore.pipe';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { from } from 'rxjs';
import { StarselectComponent } from './starselect/starselect.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    ReadMorePipe,
    StarselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TitleCasePipe } from './title-case.pipe';
import { ReadMorePipe } from './readmore.pipe';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';
import { StarselectComponent } from './starselect/starselect.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { BtcolorchangeComponent } from './btcolorchange/btcolorchange.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ToggleBodyComponent } from './toggle-body/toggle-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    ReadMorePipe,
    StarselectComponent,
    TitleCaseComponent,
    TitleCasePipe,
    BtcolorchangeComponent,
    LikeComponent,
    InputFormatDirective,
    ToggleBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

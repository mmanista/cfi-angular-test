import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const routes = [
  { path: '', component: CourseListingComponent },
  { path: ':id', component: CourseDetailComponent }
];

@NgModule({
  declarations: [CourseListingComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }

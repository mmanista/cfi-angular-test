import { CourseListingFilterComponent } from './course-listing/course-listing-filter/course-listing-filter.component';
import { CourseListingRowComponent } from './course-listing/course-listing-row/course-listing-row.component';
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
  declarations: [CourseListingComponent, CourseDetailComponent, CourseListingRowComponent, CourseListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }

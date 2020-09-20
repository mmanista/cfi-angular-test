import { CoursesService } from './../courses.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cfi-courses',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListingComponent implements OnInit {
  courses$ = this.coursesService.getCourses();

  constructor(private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
  }

}

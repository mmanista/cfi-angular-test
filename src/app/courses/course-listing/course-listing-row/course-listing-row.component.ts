import { Course } from './../../shared/entities/course.interface';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cfi-course-listing-row',
  templateUrl: './course-listing-row.component.html',
  styleUrls: ['./course-listing-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListingRowComponent {
  @Input() course: Course;
}

import { CoursesService } from './../courses.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Course } from '../shared/entities/course.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'cfi-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListingComponent implements OnInit {
  courseStatusesStream$ = new BehaviorSubject<string[]>([]);
  courseStatuses$ = this.courseStatusesStream$.asObservable();
  allCourses$ = this.coursesService.getCourses()
    .pipe(
      tap((courses: Course[]) => {
        this.filteredCoursesStream$.next(courses);
      }),
      tap((courses: Course[]) => {
        const courseStatusesList = [];
        courses.forEach((course: Course) => {
          if (!courseStatusesList.includes(course.status)) {
            courseStatusesList.push(course.status);
          }
        });
        this.courseStatusesStream$.next(courseStatusesList);
      })
    );
  filteredCoursesStream$ = new Subject<Course[]>();
  filteredCourses$ = this.filteredCoursesStream$.asObservable();

  constructor(private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onStatusFilterChange(selectedStatusFilter: string, allCourses: Course[]): void {
    if (!selectedStatusFilter) {
      this.filteredCoursesStream$.next(allCourses);
    } else {
      this.filteredCoursesStream$.next((
        allCourses.filter((course: Course) => course.status === selectedStatusFilter)
      ));
    }

  }

}

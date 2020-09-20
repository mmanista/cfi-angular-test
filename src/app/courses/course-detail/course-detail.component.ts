import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from './../courses.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'cfi-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {
  course$ = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => this.coursesService.getCourseById(params.id))
    );

  constructor(private readonly coursesService: CoursesService,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

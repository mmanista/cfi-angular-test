import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './shared/entities/course.interface';

@Injectable(
  { providedIn: 'root'}
)
export class CoursesService {
  private readonly COURSES_API_ENDPOINT = '/api/courses';
  constructor(private readonly http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.COURSES_API_ENDPOINT);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${ this.COURSES_API_ENDPOINT }/${ id }`);
  }
}

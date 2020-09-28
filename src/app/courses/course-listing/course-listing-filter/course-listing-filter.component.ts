import { Course } from './../../shared/entities/course.interface';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cfi-course-listing-filter',
  templateUrl: './course-listing-filter.component.html',
  styleUrls: ['./course-listing-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListingFilterComponent {
  @Input() courseStatuses!: string[];
  @Output() filterChanged = new EventEmitter<string>();

  filterValue!: string;

  changeFilter(selectedFilter: string): void {
    this.filterChanged.emit(selectedFilter);
  }

  clearFilter(filterElement: HTMLSelectElement): void {
    if (!filterElement.value) { return; }

    filterElement.value = '';
    this.filterChanged.emit(filterElement.value);
  }
}

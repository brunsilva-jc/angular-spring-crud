import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Frontend development'},
    {_id: '1', name: 'React', category: 'Frontend development'},
    {_id: '1', name: 'Python', category: 'Backend Development'},
    {_id: '1', name: 'MySql', category: 'Backend Development'},
  ];
  displayedColumns = ['name','category']

  constructor () {
  }

  ngOnInit() : void {

  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  courses$: Observable<Course[]> ;

  displayedColumns = ['name','category']

  constructor (private coursesService: CoursesService) {
    //recebendo os dados do serviço...
    this.courses$ = this.coursesService.list();
  }

  ngOnInit() : void {

  }
}

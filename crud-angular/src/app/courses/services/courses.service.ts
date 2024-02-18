import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import {delay, take, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //´´E ESSE SERVIÇO QUE CONSOME OS DADOS DA API

  private readonly API = '../../../assets/cursos.json';

  constructor(private httpClient:HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).
    pipe(
      take(1),
      tap(courses => console.log(courses))
    );
  }
}

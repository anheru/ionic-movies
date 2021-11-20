import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ResponseMovies } from '../interfaces/movie';

const API_URL = environment.apiUrl
const params = new HttpParams().set('api_key', environment.apiKey)

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  getPremiereMovies() {
    const today = new Date()
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const month = (today.getMonth() + 1).toString().padStart(2, '0')

    const start = `${today.getFullYear()}-${month}-01`
    const end = `${today.getFullYear()}-${month}-${lastDay.getDate()}`

    const currentParams = params
      .set('primary_release_date.gte', start)
      .set('primary_release_date.lte', end)
    return this.http.get<ResponseMovies>(`${API_URL}/discover/movie`, { params: currentParams })
  }

  getPopularMovies() {
    const currentParams = params.set('sort_by', 'popularity.desc')
    return this.http.get<ResponseMovies>(`${API_URL}/discover/movie`, { params: currentParams })
  }
}

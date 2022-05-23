import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeamMembers(page: number, limit: number, duty: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('limit', limit);

    if (duty != 'show all') {
      params = params.append('duty', duty);
    }

    return this.http.get(
      'https://challenge-api.view.agentur-loop.com/api.php',
      { params }
    );
  }
}

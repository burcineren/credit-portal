import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditApplication } from '../states/credit-form/credit-application.model';

@Injectable({ providedIn: 'root' })
export class CreditApplicationService {
  private apiUrl = 'http://localhost:3000/applications';

  constructor(private http: HttpClient) { }

  addApplication(application: CreditApplication): Observable<CreditApplication> {
    return this.http.post<CreditApplication>(this.apiUrl, application);
  }
}

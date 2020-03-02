import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private httpClient: HttpClient) { }

  getByStatus(statusType: string){
    const url = `http://localhost:8080/ERS/ManagerServlet?statusType=${statusType}`;
    this.httpClient.get(url);
  }
}

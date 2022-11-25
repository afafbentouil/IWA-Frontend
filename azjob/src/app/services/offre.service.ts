import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Offre } from '../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  getAllOffre() {
    return this.http.get(environment.apiUrl+'offres/');
  }

  getOffreById(id: any) {
    return this.http.get(environment.apiUrl+'offres/' + id);
  }

  createOffre(offre: Offre) {
    return this.http.post(environment.apiUrl+'offres/', offre);
  }

  updateOffre(id: any, offre: Offre) {
    return this.http.put(environment.apiUrl+'offres/' + id, offre);
  }

  deleteOffre(id: any) {
    return this.http.delete(environment.apiUrl+'offres/' + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  getAllOffre() {
    return this.http.get('http://localhost:8080/offres/');
  }

  getOffreById(id: any) {
    return this.http.get('http://localhost:8080/offres/' + id);
  }

  createOffre(offre: Offre) {
    return this.http.post('http://localhost:8080/offres/', offre);
  }

  updateOffre(id: any, offre: Offre) {
    return this.http.put('http://localhost:8080/offres/' + id, offre);
  }

  deleteOffre(id: any) {
    return this.http.delete('http://localhost:8080/offres/' + id);
  }
}

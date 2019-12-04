import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private ht: HttpClient) { }

  po(d) {
    return this.ht.post('http://localhost:3000/details', d);
  }
}

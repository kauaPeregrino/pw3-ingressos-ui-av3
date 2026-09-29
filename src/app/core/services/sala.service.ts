 import { Injectable, inject } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable, of } from 'rxjs';
 import {  Sala } from '../models';
 
 
 @Injectable({
   providedIn: 'root'
 })
 export class SalaService {
   group(arg0: { id: number[]; nome: string[]; preco: number[]; }) {
     throw new Error('Method not implemented.');
   }
   private http = inject(HttpClient);
   private apiUrl = 'http://192.168.2.159:8080/salas';
 
    listarAtivas(id: Number): Observable<Sala[]>{
     return this.http.get<Sala[]>(`${this.apiUrl}/${id}/salas`);
   }

   buscarSala(id: Number): Observable<Sala>{
     return this.http.get<Sala>(`${this.apiUrl}/${id}/salas`);
   }

   salvar( sala: Sala): Observable<Sala>{
    if(sala.id){
             return this.http.put<Sala>(`${this.apiUrl}/${sala.id}`, sala);
    }
     return this.http.put<Sala>(this.apiUrl, sala);
    }

    excluir( id:number): Observable<void>{
     return this.http.delete<void>(`${this.apiUrl}/${id}`);    
    }

}
 
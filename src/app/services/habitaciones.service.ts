import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) { }

  consultarHabitaciones():Observable<any>{
    let url = 'https://serve20222.herokuapp.com/hotelesnick/habitaciones'
    
    return this.peticion.get(url)
  }

  consultarHabitacion(){}
}

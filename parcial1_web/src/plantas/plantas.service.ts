
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantas } from './plantas';

@Injectable({
  providedIn: 'root'
})
export class PlantasService 
{
  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Plantas[]> 
  {
    return this.http.get<Plantas[]>(this.apiUrl);
  }
}

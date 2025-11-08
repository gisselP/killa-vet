import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veterinario } from "../../features/client/interfaces/response/veterinario.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeterinariosService {
  private readonly baseUrl = 'assets/json/veterinarios.json';;
    // src\backend\json\veterinarios.json

  constructor(private http: HttpClient) {}

  getVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.baseUrl);
  }
}
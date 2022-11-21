import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'http://localhost:3000/rockets';
let rockets: Array<RocketInterface> = [];

export interface RocketInterface {
  id: number;
  name: string;
  description: string;
  height: number;
  country: string;
  flickr_images: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private http: HttpClient) { }

  get() {
    return rockets.slice();
  }

  load() {
    return this.http.get<Array<RocketInterface>>(service);
  }

  add(rocket: RocketInterface) {
    rockets.push(rocket);
    console.log(rocket);
    this.http.post(service, rocket).subscribe();
    return this.get();
  }

  remove(id: any) {
    console.log("Id del cohete a eliminar" + id);
    this.http.delete(service + '/' + id).subscribe();
    return this.get();
  }

  edit(rocket: RocketInterface) {
    this.http.put(service + '/' + rocket.id, rocket).subscribe();
    return this.get();
  }
}

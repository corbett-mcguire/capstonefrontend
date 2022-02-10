import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "http://localhost:9092/api/types/"
  constructor(private http:HttpClient) { }
  getAllPosts(typeId: any){
    return this.http.get(this.url+typeId+"/posts");
  }
}

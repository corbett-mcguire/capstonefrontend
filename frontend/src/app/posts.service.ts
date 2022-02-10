import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "http://localhost:9092/api/types/"
  constructor(private http:HttpClient) { }
  getAllPosts(typeId: any){
    return this.http.get(this.url+typeId+"/posts");
  }
  createPost(post: any, typeId: any): Observable<any>{
    return this.http.post(this.url+typeId+"/posts",post);  
  }
  getOneType(typeId: any){
    return this.http.get(this.url+typeId);
  }
  deletePost(typeId: any, postId: any){
    return this.http.delete(this.url+typeId+"/posts/"+postId);
  }
   
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "http://localhost:9092/api/types/"
  constructor(private http:HttpClient) { }
  getAllPosts(typeId: any){
    return this.http.get(this.url+typeId+"/posts");
  }
  createPost(post: {title: any;description: any;name: any;}): Observable<any>{
    return this.http.post(this.url+"/1/posts",{
      title: post.title,
      description: post.description,
      name: post.name
    },httpOptions);
  }
   public deletePost(post: { id: any; }) {
     return this.http.delete(this.postUrl + "/"+ post.id);
   }
}

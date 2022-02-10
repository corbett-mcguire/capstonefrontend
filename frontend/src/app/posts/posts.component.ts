import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  typeId: any;
  typeName: any;
  posts: any;
  post: any= {
    title: null, 
    description: null,
    name: null
  };
  
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.typeId = params["id"]
      this.getAllPosts();
      this.getOneType();
    })
  }
  getAllPosts(): void {
    this.postsService.getAllPosts(this.typeId).subscribe((response)=>{
      this.posts= response;
      console.log(this.posts);
    })
  }
  createPost(): void {
    console.log(this.post)
    this.postsService.createPost(this.post, this.typeId).subscribe((data)=>{
      console.log(data);
      // this.updatePost()
    })
  }
  updatePost(){
    this.getAllPosts()
  }
  getOneType(): void {
    this.postsService.getOneType(this.typeId).subscribe((data)=>{
      console.log(data);
      this.typeName= data
    })
  }
  deletePost(postId: any){
    console.log(this.typeId)
    console.log(postId)
    this.postsService.deletePost(this.typeId, postId).subscribe((data)=>{
      // this.updatePost()
    })
  }
 
};
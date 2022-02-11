import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  typeId: any;
  typeName: any;
  posts: any;
  post: any= {
    title: null, 
    description: null,
    name: null,
    edit: false
  };
  
  constructor(private route: ActivatedRoute, private postsService: PostsService, private router:Router) { }

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
      this.posts.map((item: any) =>{
        item.edit= false
        console.log(item)
      })
    })
  }
  createPost(): void {
    console.log(this.post)
    this.postsService.createPost(this.post, this.typeId).subscribe((data)=>{
      console.log(data);
      this.updatePost()
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
      this.updatePost()
    })
  }
  editPost(post: any){
    console.log(post)
    if (post.edit){
      post.edit = false
    }
    else {
      post.edit = true
    }
  }
  saveEditedPost(post: any){
    console.log(post)
    this.postsService.updatePost(this.typeId, post.id, post).subscribe((response)=>{
      this.updatePost() 
    })
  }

 
};
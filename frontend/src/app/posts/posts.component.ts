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
  posts: any;
  post: any;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.typeId = params["id"]
      this.getAllPosts();
    })
  }
  getAllPosts(): void {
    this.postsService.getAllPosts(this.typeId).subscribe((response)=>{
      this.posts= response;
      console.log(this.posts);
    })
  }
  createPost(): void {
    this.postsService.createPost(this.post).subscribe((data)=>{
      this.post = data;
      console.log(data);
    })
  }
  deletePost(): void {
    this.postsService.deletePost(this.post)
    .subscribe( (data: any) => {
      console.log(data)
    })
  }
}

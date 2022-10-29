import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts:any=[];
black: any;
yellow: any;
blue: any;

  constructor(private _postService:PostService) {
    this._postService.getposts().subscribe(
      (data:any)=>{
        this.posts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

}

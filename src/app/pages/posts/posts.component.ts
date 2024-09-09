import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  post: any;
  
  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.post = this.dataService.getPosts();
  }
}

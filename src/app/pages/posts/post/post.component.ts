import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post: any;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(){ }

  Onclick(){
    this.clickPost.emit(this.post.id);
  }
}
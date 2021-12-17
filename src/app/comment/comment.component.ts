import {Component, OnDestroy, OnInit} from '@angular/core';
import {Comment, Comments} from "./comment";
import {Subscription} from "rxjs";
import {CommentApiService} from "./comment-api.service";
import {ElementToDelete} from "../commons/element-to-delete";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {

  comments : Comments = [];
  subscriptions:  Subscription[] = [];


  constructor(private commentRepository: CommentApiService) { }

  ngOnInit(): void {
    this.loadComments();

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }

  private loadComments() {
    this.subscriptions.push(
        this.commentRepository.getAll()
            .subscribe(comments => this.comments = comments)
    );
  }

  postComment(comment: Comment) {
    this.subscriptions.push(
        this.commentRepository.create(comment)
            .subscribe(comment => this.comments.push(comment))
    );
  }

  deleteComment(elementToDelete: ElementToDelete<Comment>) {
    const DELETE_COMMENT = () => this.comments.splice(elementToDelete.index, 1);
    this.subscriptions.push(
        this.commentRepository
            .delete(elementToDelete.element.id)
            .subscribe(DELETE_COMMENT)
    );
  }

  updateComment(comment: Comment) {
    this.subscriptions.push(
        this.commentRepository.update(comment.id, comment)
            .subscribe()
    );
  }
}

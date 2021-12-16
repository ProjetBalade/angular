import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output()
  commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();

  form: FormGroup = this.fb.group({
    content: ['', Validators.required],
    score: ['', Validators.max(5)],
    difficulty: [0, [Validators.max(5), Validators.required]],
    idRider: ['', Validators.required],
    idUser: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.commentCreated.emit(this.form.value);
  }
}

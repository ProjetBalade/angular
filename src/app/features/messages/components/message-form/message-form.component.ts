import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from "../../../../core/models/message";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Output() messageCreated: EventEmitter<Message> =
      new EventEmitter<Message>();


  constructor(private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group({
    content: ['', Validators.required],
    idRecipient: [0, Validators.required],
    idSender: [0, Validators.required],
    object: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  submit() {
    this.messageCreated.emit(this.form.value);
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
  ,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ComposeMessageComponent {
  messageForm: FormGroup;
  recipient = 'Customer Care';
  fromNames = ['Sophia Johnson', 'John Smith'];

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      from: [this.fromNames[0], Validators.required],
      email: ['Sohphia.J@company.com', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(80)]],
      message: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  selectRecipient(type: string) {
    this.recipient = type;
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const data = {
        ...this.messageForm.value,
        recipient: this.recipient
      };
      console.log('Form Data:', data);
    }
  }

  resetForm() {
    this.messageForm.reset({
      from: this.fromNames[0],
      email: '',
      subject: '',
      message: ''
    });
    this.recipient = 'Customer Care';
  }
}

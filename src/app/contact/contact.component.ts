import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private emailService: EmailService) { }

  sendEmail(form: NgForm) {
    const email = form.value.email;
    const name = form.value.name;
    const subject = form.value.subject;
    const message = form.value.message;

    this.emailService.sendEmail(email, name, subject, message).subscribe(
      response => {
        // handle response
      },
      error => {
        // handle error
      }
    );
  }
}
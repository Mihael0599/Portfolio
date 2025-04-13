import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(private router: Router) { }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  privacyAccepted: boolean = false;
  @Output() messageSent = new EventEmitter<boolean>();

  mailTest = false;

  post = {
    endPoint: 'https://mihael-drazic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.messageSent.emit(true);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  isSubmitDisabled(form: NgForm) {
    return !form.valid || !this.privacyAccepted || form.pristine;
  }

}

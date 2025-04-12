import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent, ReactiveFormsModule, TranslateModule, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  messageSent: boolean = false;

  onMessageSent(event:boolean){
    this.messageSent = event;

    setTimeout(() =>{
      this.messageSent = false;
    }, 1500)
  }
}

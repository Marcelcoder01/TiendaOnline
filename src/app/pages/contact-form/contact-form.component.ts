import { Component } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { ItemServiceService } from 'src/app/shared/item-service.service';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm: FormGroup;

  public user: user = new user('','','','')

  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      name:[this.user.name, Validators.required],
      surname:[this.user.surname, Validators.required],
      email:[this.user.email, Validators.required],
      message:[this.user.message, Validators.required]
    })
  }
  onSubmit(){
    if(this.contactForm.valid){
    this.user = this.contactForm.value;
    console.log(this.user)
    }
  }
}

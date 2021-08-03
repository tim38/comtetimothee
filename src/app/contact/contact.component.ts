import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup ;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm= this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(20),Validators.maxLength(300)]]
    });
    
  }

  onSubmit() {
    alert('Email envoyé !');
    this.contactForm.reset();
  }

  get f() {
    return this.contactForm.controls;
  }
}

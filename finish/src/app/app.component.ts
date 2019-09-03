import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: [ '' ],
      phone: [ '' ],
      fullName: [ '' ],
    });
  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}

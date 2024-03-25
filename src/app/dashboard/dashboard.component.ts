import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
onLogoff() {
throw new Error('Method not implemented.');
}
  claimForm: FormGroup;
  claimSubmitted: boolean = false;
loggedUser: any;

  constructor(private formBuilder: FormBuilder) {
    this.claimForm = this.formBuilder.group({
      vehicleType: ['', Validators.required],
      vehicleRegNumber: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleYear: ['', Validators.required],
      accidentDetails: ['', Validators.required],
      files: ['', Validators.required]
    });
  }

  submitClaim() {
    if (this.claimForm.valid) {
      console.log(this.claimForm.value);
      this.claimSubmitted = true;
    } else {
      alert('Please fill out all required fields.');
    }
  }
}

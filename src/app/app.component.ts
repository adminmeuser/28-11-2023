import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe--intern';

  user = {
    username: '',
    email: '',
    address: '',
    dob: '',
    password: '',
    phone: ''
  };

  saveUser() {
    
    console.log('User details submitted:', this.user);

    alert('Form submitted successfully!!')

    this.user = {
      username: '',
      email: '',
      address: '',
      dob: '',
      password: '',
      phone: ''
    };
  }
}

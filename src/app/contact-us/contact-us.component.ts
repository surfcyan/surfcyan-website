import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FireServiceService } from '../services/fire-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb: FormBuilder, private fService: FireServiceService) { }

  ngOnInit(): void {
  }

  message = ''

  form = this.fb.group({
    name: this.fb.control(''),
    email: this.fb.control(''),
    phone: this.fb.control(''),
  })

  submit() {

    if (this.form.get('name').value == '') {
      this.message = 'Please fill all the details!'
      this.wiggle()
      return 0
    }

    if ((this.form.get('email').value == '' || this.form.get('email').value == null) && (this.form.get('phone').value == '' || this.form.get('phone').value == null)) {
      this.message = 'Please fill either your email or phone number!';
      this.wiggle()
      return 0;
    }

    var obj = { name: this.form.get('name').value, email: this.form.get('email').value, phone: this.form.get('phone').value }
    console.log(obj)
    this.fService.postContactUs(obj).then(res => {
      this.message = 'Thank You, We will contact you soon!'
    }).catch(err => {
      this.message = 'Uh Snap! Please try again.'
      this.wiggle();
      console.log(err)
    })
  }

  wiggle() {
    document.getElementById("message").classList.add("wiggle")
    setTimeout(() => {
      document.getElementById("message").classList.remove("wiggle")
    }, 1000);
  }

}
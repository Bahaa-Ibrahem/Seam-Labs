import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private Srv: DataService) { }

  Form = this.fb.group({
    email: ['',[ Validators.required, Validators.email ]]
  });

  ngOnInit() { }

  onSubmit() {
    console.log(this.Form.value);
    if(this.Form.valid) {
      this.Srv.insert(this.Form.value);
    }
  }

}

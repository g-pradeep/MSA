import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Data.services';

@Component({
  selector: 'app-reactivef',
  templateUrl: './reactivef.component.html',
  styleUrls: ['./reactivef.component.css']
})
export class  FormreactiveComponent implements OnInit {
  form = new FormGroup ({
    FirstName : new FormControl (" ",[ Validators.required,Validators.minLength(6)]),
    Lastname : new FormControl ('',Validators.required),
    Email : new FormControl ('',[Validators.email,Validators.required]),
    Password : new FormControl ('',[Validators.required,Validators.maxLength(6)])

});

  constructor(
    private Data1 : DataService
  ) { }
  

  ngOnInit(): void {
  }
  onSubmit(){}
  

}

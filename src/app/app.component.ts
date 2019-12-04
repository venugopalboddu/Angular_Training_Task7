import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { DetailsService } from './details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  value = this.fb.group({
      sname: ['', Validators.required],
      vname: ['', Validators.required],
      cname: ['', Validators.required],
      pname: ['', Validators.required]
    });
  constructor(private fb: FormBuilder, private s: DetailsService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      times: this.fb.array([
        
      ])
    });
  }
  get f() { return this.form.controls; }
  get t() { return this.f.times as FormArray; }
  addGroup() {
    const val = this.fb.group({
      sname: ['', Validators.required],
      vname: ['', Validators.required],
      cname: ['', Validators.required],
      pname: ['', Validators.required]
    });

    const form = this.form.get('times') as FormArray
    form.push(val);

  }

  removeGroup(index) {
    const form = this.form.get('times') as FormArray
    form.removeAt(index);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onSubmit() {
    console.log('value: ', this.form.value);
    alert("Your details posted successfully");
    this.s.po(this.form.value).subscribe((res)=>{
      console.log("Post to DB", res);
    });
  }
 
}


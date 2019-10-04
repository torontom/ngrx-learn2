import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cusotm-dialog',
  templateUrl: './cusotm-dialog.component.html',
  styleUrls: ['./cusotm-dialog.component.css']
})
export class CusotmDialogComponent implements OnInit {

  form: FormGroup;
  name:string;
  uuid:string;
  url:string;
  title:string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CusotmDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {

    this.title = data.title;
    this.uuid = data.tutorial.uuid;
    this.name =data.tutorial.name;
    this.url = data.tutorial.url;

   }

  ngOnInit() {

    this.form = this.fb.group({
      uuid:[this.uuid, []],
      name: [this.name, [Validators.required]],
      url: [this.url, [Validators.required]]
  });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(false);
  }
}

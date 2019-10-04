import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Tutorial } from "../models/tutorial.models";
import * as TutorialActions from "./../actions/tutorial.actions";
import { Observable } from "rxjs";
import * as uuid from 'uuid';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit, AfterViewInit  {

  @ViewChild("url", { static: false }) url: ElementRef;
  @ViewChild("name", { static: false }) name: ElementRef;

  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {

    const newUUID = uuid.v4();
    this.store.dispatch(
      new TutorialActions.AddTutorial({uuid: newUUID, name: name, url: url })
    );
  }
  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.name.nativeElement.focus();
  }

  shiftFocus() {
    this.url.nativeElement.focus();
  }
}

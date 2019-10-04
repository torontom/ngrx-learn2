import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.models";
import { AppState } from "../app.state";
import { Observable } from "rxjs";
import * as TutorialActions from "../actions/tutorial.actions";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {
  ConfirmDialogModel,
  ConfirmDialogComponent
} from "../confirm-dialog/confirm-dialog.component";
import { CusotmDialogComponent } from '../cusotm-dialog/cusotm-dialog.component';

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;
  confirmResult: boolean;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.tutorials$ = store.select("tutorial");
  }

  ngOnInit() {}

  editTutorial(tutorial: Tutorial ) {

    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
     
      title: 'Please edit this item',
      tutorial: tutorial
  };
    const dialogRef = this.dialog.open(CusotmDialogComponent, dialogConfig); 

    dialogRef.afterClosed().subscribe(
      result => {
        if(result) {
          //console.log('old tutorial', tutorial);
          //console.log('updated tutorial', result);
          this.store.dispatch(new TutorialActions.UpdateTutorial(result));
        }
      }
  );   
}


  deleteTutorial(tutorial: Tutorial): void {
    //this.store.dispatch(new TutorialActions.RemoveTutorial(index))

    const message = `Are you sure you want to delete this item?`;

    const dialogData = new ConfirmDialogModel("Please Confirm", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.confirmResult = dialogResult;
      console.log(dialogResult);

      if (this.confirmResult) {
        this.store.dispatch(new TutorialActions.RemoveTutorial(tutorial));
      }
    });
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var result = fruits.splice(1);

    console.log(result);
    console.log("original", fruits);
  }
}

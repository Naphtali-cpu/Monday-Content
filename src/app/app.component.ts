import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals'
}

export class AppComponent {
  title = 'My Goals'
}

var arr = [3,5,7,11,13];
for(var i in arr){
  console.log(i);
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<h2>h2 h2 h2</h2>
  <h3 [class.h3-class] = "h3Class == 'red'">h3 h3 h3</h3>
  <h3 [style.color] = "h3Style?'yellow':'blue'">h3 h3 h3</h3>
  <button (click) = "bindingData(binding.value)" >bind</button>
  <input #binding type="text" />
  <br />
  <br />
  <span >Value is: {{valuebinding}} </span>
  <h3>Two way binding</h3>
  <input [(ngModel)] = "fname" />
  <input [(ngModel)] = "lname" />
  <br />
  <span>Fullname: {{fname}} {{lname}}</span>
  `,
  styles: [`.h3-class {
    color: red;
  }
  `]
//   styleUrls: ['./app.component.css']
})
export class App2Component {
  public h3Class = 'red';
  public h3Style = true;
  public valuebinding = '';
  bindingData(value) {
    this.valuebinding = value;
  }

}

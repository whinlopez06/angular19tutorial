import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Erwin");  // no datatype

  lastName = signal<string>("Lopez"); // strongly datatype

  courseName: string = "Angular";

  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      this.courseName = "React JS";
      this.firstName.set("Chase");
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update(value => value + 1)
  }

}

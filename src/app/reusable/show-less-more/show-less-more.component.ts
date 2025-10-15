import { NgIf, SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-less-more',
  imports: [NgIf, SlicePipe],
  templateUrl: './show-less-more.component.html',
  styleUrl: './show-less-more.component.css'
})
export class ShowLessMoreComponent {

  @Input() text: string = "";
  @Input() minCharToShow: number = 0;

  isShowMore: boolean = false;

}

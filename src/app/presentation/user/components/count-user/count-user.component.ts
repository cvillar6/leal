import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-user',
  templateUrl: './count-user.component.html',
  styleUrls: ['./count-user.component.sass'],
})
export class CountUserComponent {
  @Input() title!: string;
  @Input() data!: number;
  @Input() percentage!: number;
  @Input() icon!: string;
  @Input() color!: string;
  @Input() textColor!: string;
}

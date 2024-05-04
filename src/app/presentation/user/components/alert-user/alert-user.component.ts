import { Component, Inject, inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-user',
  templateUrl: './alert-user.component.html',
  styleUrls: ['./alert-user.component.sass'],
})
export class AlertUserComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public alertData: { title: string },
  ) {}
}

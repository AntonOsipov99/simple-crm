import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatHint,
    MatLabel,
    FormsModule,
    MatProgressBarModule,
    MatIcon,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user:any = User;
  loading:any = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

  }

  saveUser() {

  }

}

import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatHint,
    MatDatepickerModule,
    MatIconModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}

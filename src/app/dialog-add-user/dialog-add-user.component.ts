import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatHint,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
    MatCardModule
    ],
    providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }


  loading = false;
  user = new User();
  birthDate: Date | any;
  

  ngOnInit(): void {
    
  }


  saveUser() {
    this.user.birthdate = this.birthDate?.getTime();
    console.log('Current user is', this.user);
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users');
    return addDoc(usersCollection, this.user.toJSON())
    .then(result => {
      this.loading = false;
      console.log('Added user', result);
      this.dialogRef.close();
    });
  }
}
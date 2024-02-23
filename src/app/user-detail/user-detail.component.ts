import { Component, ChangeDetectorRef } from '@angular/core';
import { docData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc, } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore, private ref: ChangeDetectorRef, public dialog: MatDialog) { }

  private userSubscription!: Subscription;

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

  getUser() {
    const userRef = doc(collection(this.firestore, 'users'), this.userId);
    docData(userRef).subscribe(user => {
      this.user = new User(user);
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) { 
      this.userSubscription.unsubscribe();
    }
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }

  editUserDetail() {
    const dialogEdit = this.dialog.open(DialogEditUserComponent);
    dialogEdit.componentInstance.user = new User(this.user.toJSON());
  }

}

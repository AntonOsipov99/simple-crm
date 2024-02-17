import { Component, ChangeDetectorRef } from '@angular/core';
import { docData } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc,  } from '@angular/fire/firestore';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: any = '';
  user: any = {};

  constructor(private route: ActivatedRoute, private firestore: Firestore, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    const userRef = doc(collection(this.firestore, 'users'), this.userId);

    docData(userRef).subscribe(user => {
      this.user = user;
      console.log('Retrieved user' , this.user);  
    });
}
}

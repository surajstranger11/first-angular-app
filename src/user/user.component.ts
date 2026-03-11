import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = signal(DUMMY_USERS[randomIndex]);
  fileterd_user = DUMMY_USERS.findIndex;
  //user = DUMMY_USERS[randomIndex];

  get imagePath() {
    return './users/' + this.user().avatar;
  }
  onSelectUser() {
    this.user.set(DUMMY_USERS[randomIndex + 1]);
  }
}

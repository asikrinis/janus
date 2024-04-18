import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  standalone: false,
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(200)
      ]),
    ]),
  ]
})

export class UserDetailsComponent { }

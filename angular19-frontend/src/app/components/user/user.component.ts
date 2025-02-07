import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // ✅ Correct import path

@Component({
  selector: 'app-user',
  standalone: true, // ✅ Standalone component
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule] // ✅ Import CommonModule for basic directives
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}

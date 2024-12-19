import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UserListComponent, UserItemComponent],
  exports: [UserListComponent],
})
export class UserListModule {}

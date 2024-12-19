import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat.component';
import {
  AccountModule,
  ChannelListModule,
  DialogModule,
  UserListModule,
} from './components';

const routes: Routes = [{ path: '', component: ChatComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccountModule,
    ChannelListModule,
    UserListModule,
    DialogModule,
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent],
})
export class ChatModule {}

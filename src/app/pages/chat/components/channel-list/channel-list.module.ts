import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChannelListComponent } from './channel-list.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ChannelListComponent, ChannelItemComponent],
  exports: [ChannelListComponent],
})
export class ChannelListModule {}

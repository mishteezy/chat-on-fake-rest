import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogComponent } from './dialog.component';
import { MessageItemComponent } from './components/message-item/message-item.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DialogComponent, MessageItemComponent],
  exports: [DialogComponent],
})
export class DialogModule {}

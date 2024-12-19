import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DialogService } from 'src/app/pages/chat/components/dialog/services/dialog.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {}

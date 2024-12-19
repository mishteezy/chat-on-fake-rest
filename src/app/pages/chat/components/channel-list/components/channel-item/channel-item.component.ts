import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Channel } from 'src/app/models/chat.model';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelItemComponent {
  @Input() channel!: Channel;
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { getUsername } from 'src/app/_state/auth-store/store/auth.selectors';
import { Message } from 'src/app/models/chat.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageItemComponent {
  @Input() message!: Message;

  private readonly store$ = inject(Store);

  readonly username$ = this.store$.select(getUsername);
}

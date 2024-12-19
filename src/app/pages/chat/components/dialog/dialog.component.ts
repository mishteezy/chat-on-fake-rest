import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { getChannel } from 'src/app/_state/channel-store/store/channel.selectors';
import { DialogService } from './services/dialog.service';

@UntilDestroy()
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  private store$ = inject(Store);
  private dialogService = inject(DialogService);

  inputControl = new FormControl('', {
    validators: Validators.required,
    nonNullable: true,
  });

  channel$ = this.store$.select(getChannel);

  send() {
    if (this.inputControl.invalid) return;

    this.dialogService
      .sendMessage(this.inputControl.value)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.inputControl.reset());
  }
}

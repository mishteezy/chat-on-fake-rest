import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RestService } from 'src/app/_services/rest.service';
import { DialogService } from 'src/app/pages/chat/components/dialog/services/dialog.service';

@UntilDestroy()
@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelListComponent {
  @ViewChild('modal') modal?: ElementRef;

  private rest = inject(RestService);
  private dialogService = inject(DialogService);

  channels$ = this.rest.getChannelList();

  name = new FormControl('', {
    validators: Validators.required,
    nonNullable: true,
  });

  showModal() {
    this.modal?.nativeElement.showModal();
  }

  closeModal() {
    this.modal?.nativeElement.close();
    this.name.reset();
  }

  createChannel() {
    if (this.name)
      this.rest
        .createChannel(this.name.value)
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.channels$ = this.rest.getChannelList();
          this.closeModal();
        });
  }

  selectChannel(id: string) {
    this.dialogService.selectChannel(id).pipe(untilDestroyed(this)).subscribe();
  }
}

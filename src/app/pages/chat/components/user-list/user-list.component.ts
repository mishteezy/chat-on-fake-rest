import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RestService } from 'src/app/_services/rest.service';
import { LoginData } from 'src/app/models/chat.model';

@UntilDestroy()
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  private rest = inject(RestService);
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  users$ = this.rest.getUserList();

  @ViewChild('modal') modal?: ElementRef;

  showModal() {
    this.modal?.nativeElement.showModal();
  }

  closeModal() {
    this.modal?.nativeElement.close();
    this.form.reset();
  }

  createUser() {
    if (this.form.valid)
      this.rest
        .createUser(this.form.value as LoginData)
        .pipe(untilDestroyed(this))
        .subscribe(() => this.closeModal());
  }
}

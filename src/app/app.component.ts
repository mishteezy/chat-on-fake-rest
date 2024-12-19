import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { LSSyncService } from './_services/ls-sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private lsSyncService = inject(LSSyncService);

  ngOnInit(): void {
    this.lsSyncService.init()?.subscribe();
  }
}

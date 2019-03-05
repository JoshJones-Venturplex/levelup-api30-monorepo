import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
  NbInputModule,
  NbListModule,
  NbSelectModule
} from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbButtonModule, NbSpinnerModule, NbInputModule, NbListModule, NbSelectModule],
  exports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbButtonModule, NbSpinnerModule, NbInputModule, NbListModule, NbSelectModule],
  providers: [NbSidebarService],
})
export class NebularModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  declarations: [ListDetailComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }

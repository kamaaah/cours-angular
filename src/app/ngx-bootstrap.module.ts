import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

const modules: any[] = [
  CommonModule,
  BsDropdownModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot(),
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class NgxBootstrapModule {}

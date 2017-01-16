import { NgModule, ViewContainerRef } from '@angular/core';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

let options: ToastOptions = new ToastOptions({
  animate: 'flyRight',
  positionClass: 'toast-bottom-right',
});

@NgModule({
  imports: [ ToastModule.forRoot(options) ],
  exports: [ ToastModule ]
})

export class ToastrModule {}
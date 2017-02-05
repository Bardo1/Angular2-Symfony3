import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
})

export class AppRootComponent {
    // Breaking change solution for Angular v2.2.x - See https://github.com/PointInside/ng2-toastr/
    constructor(private toastrManager: ToastsManager, private vRef: ViewContainerRef) {
        this.toastrManager.setRootViewContainerRef(vRef);
    }
}

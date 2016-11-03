import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {Md2Toast} from 'md2/toast/toast';
import { Md2ToastComponent } from 'md2/toast';

export const MD2_TOAST_DIRECTIVES: any[] = [Md2ToastComponent];

@NgModule({
    imports: [CommonModule, Md2ToastComponent],
    declarations: [AboutComponent],
    exports: [AboutComponent, MD2_TOAST_DIRECTIVES]
})

export class AboutModule {


}

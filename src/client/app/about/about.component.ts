import { Component } from '@angular/core';
import {Md2Toast} from 'md2/toast/toast';
/**
 * This class represents the lazy loaded AboutComponent.
 */

@Component({
  moduleId: String(module.id),
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor(private toast: Md2Toast) { }
    toastMe() {
      this.toast.show('Toast message...');
 }
 }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
const HTML_TEMPLATE = `
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Teste ola npm ionic marcello
    </ion-title>
  </ion-navbar>
</ion-header>
 
<ion-content padding>
 
<div class="special-text">Fala povo bonito</div>
  <button ion-button full icon-left (click)="leavePage()">
    <ion-icon name="close"></ion-icon>
  Close the Page</button>
</ion-content>
`;
 
const CSS_STYLE = `
.special-text {
    font-weight: 800;
    font-size: 15pt;
    text-align: center;
    color: #0000FF;
}
`;
 
@Component({
  selector: 'ola_component',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class OlaComponent {
  constructor(private navCtrl: NavController) {}
 
  leavePage() {
      this.navCtrl.pop();
  }
}

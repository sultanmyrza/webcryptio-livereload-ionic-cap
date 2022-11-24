import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly sampleCode = `
  async digestTimestamp() {
    const timestamp = Date.now().toString();
    const encoder = new TextEncoder();
    const data = encoder.encode(timestamp);
    const hash = await crypto.subtle.digest('SHA-256', data);
    console.log(hash); // should print hash
  }
  `;

  constructor() {}

  async digestTimestamp() {
    const timestamp = Date.now().toString();
    const encoder = new TextEncoder();
    const data = encoder.encode(timestamp);
    const hash = await crypto.subtle.digest('SHA-256', data);
    console.log(hash); // should print hash
  }
}

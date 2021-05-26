import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <p>
      new-component works!
    </p>
  `,
  styles: [
  ]
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

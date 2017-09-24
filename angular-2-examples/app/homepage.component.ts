import { Component } from '@angular/core';

@Component({
    selector: 'homepage-text',
    template: '<h3>This text is coming from a new component</h3>'
    styles: [`
     h3 {
         color: red
     }
    `]
})

export class Homepage{}
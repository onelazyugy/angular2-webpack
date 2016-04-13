import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'password',
  template: require('./password.html'),
  styles: [require('./password.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Password implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Password');
  }

}

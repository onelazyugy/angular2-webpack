import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap';
import {Alert} from 'ng2-bootstrap';
@Component({
  selector: 'password',
  template: require('./password.html'),
  styles: [require('./password.scss')],
  providers: [],
  directives: [Alert, BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: []
})
export class Password implements OnInit {

  constructor() {
    // Do stuff
  }

  public alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }

  ngOnInit() {
    console.log('Hello Password');
  }

}

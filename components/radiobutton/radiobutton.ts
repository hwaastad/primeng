/// <reference path="../../typedefinition/primeui.d.ts" />

import {Component, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChange, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'p-radio',
    template: `<div></div>`
  /*  template: `
        <div class="pui-radiobutton ui-widget">
            <div class="ui-helper-hidden-accessible">
                <input #rb type="radio" name="{{name}}" value="{{value}}" [checked]="model == value"/>
            </div>
            <div class="pui-radiobutton-box ui-widget pui-radiobutton-relative ui-state-default" (click)="onclick(rb)"
                        (mouseover)="hover = true" (mouseout)="hover = false" [ngClass]="{'ui-state-hover':hover,'ui-state-active':rb.checked,'ui-state-disabled':disabled}">
                <span class="pui-radiobutton-icon pui-icon" [ngClass]="{'fa fa-fw fa-circle':rb.checked}"></span>
            </div>
        </div>
    `*/
})
export class RadioButton {

    @Input() value: any;

    @Input() name: string;

    @Input() disabled: boolean;

    @Input() model: any;

    @Output() click: EventEmitter<any> = new EventEmitter();

    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    hover: boolean;

    constructor(private el: ElementRef) {
        //this.initialized = false;
    }

    ngAfterViewInit() {
     jQuery(this.el.nativeElement.children[0]).puiradiobutton({
        change: function(event,checked) {
          alert('change has happen: ' checked);
      });
    }

    onclick(input) {
        input.checked = true;
        this.click.next(null);
        this.modelChange.next(input.value);
    }
}

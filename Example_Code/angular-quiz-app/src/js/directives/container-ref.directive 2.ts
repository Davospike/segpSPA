import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[container-ref]',
})
export class ContainerRefDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export default ContainerRefDirective;

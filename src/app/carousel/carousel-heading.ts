import { CdkPortal } from "@angular/cdk/portal";
import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    /* eslint-disable @angular-eslint/directive-selector */
    selector: "[carousel-heading], [carouselHeading]",
    standalone: false
})
/* eslint-disable @angular-eslint/directive-class-suffix */
export class CarouselHeading extends CdkPortal {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

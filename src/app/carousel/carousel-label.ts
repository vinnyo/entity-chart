import { CdkPortal } from "@angular/cdk/portal";
import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    /* eslint-disable @angular-eslint/directive-selector*/
    selector: "[carousel-label], [carouselLabel]",
    standalone: false
})
/* eslint-disable @angular-eslint/directive-class-suffix*/
export class CarouselLabel extends CdkPortal {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

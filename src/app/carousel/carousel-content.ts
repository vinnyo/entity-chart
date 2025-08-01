import { Directive, TemplateRef } from "@angular/core";

@Directive({
    /* eslint-disable @angular-eslint/directive-selector*/
    selector: "[carouselContent]",
    standalone: false
})
/* eslint-disable @angular-eslint/directive-class-suffix*/
export class CarouselContent {
    constructor(public template: TemplateRef<any>) {}
}

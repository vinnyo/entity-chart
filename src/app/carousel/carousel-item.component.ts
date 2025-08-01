import { Attribute, Component, ContentChild, ElementRef, InjectionToken, Input, Optional } from "@angular/core";
import { CarouselHeading } from "./carousel-heading";
import { CarouselLabel } from "./carousel-label";

@Component({
    selector: "padua-carousel-item",
    template: ` <ng-template><ng-content></ng-content></ng-template> `,
    exportAs: "carouselItem",
    standalone: false
})
export class CarouselItemComponent {
    //Label for this item. Used when there is no template label
    @Input() label = "";

    //Determines if the item is initially selected
    @Input() selected = false;

    //Additional class to append to the item
    @Input() itemClass: string = "";

    /** Custom label section */
    private _templateLabel: CarouselLabel;
    @ContentChild(CarouselLabel)
    set templateLabel(value: CarouselLabel) {
        this._templateLabel = value;
    }
    get templateLabel(): CarouselLabel {
        return this._templateLabel;
    }

    /** Custom heading section */
    private _templateHeading: CarouselHeading;
    @ContentChild(CarouselHeading)
    set templateHeading(value: CarouselHeading) {
        this._templateHeading = value;
    }
    get templateHeading(): CarouselHeading {
        return this._templateHeading;
    }

    constructor(
        public elementRef: ElementRef,
        @Optional() @Attribute("active") active: string
    ) {
        if (active != undefined) this.selected = true;
    }
}

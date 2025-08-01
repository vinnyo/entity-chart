import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from "@angular/core";
import { ChartNode } from "../org-chart.models";

@Component({
    selector: "padua-chart-connector",
    templateUrl: "./chart-connector.component.html",
    styleUrls: ["./chart-connector.component.scss"],
    standalone: false
})
export class ChartConnectorComponent {
    @Input()
    node: ChartNode | null = null;

    @Input()
    hasParent = false;

    @Input() parent: ChartNode;

    @Input() nodeTemplate: TemplateRef<unknown>;

    @Input()
    direction: "vertical" | "horizontal" = "vertical";

    @Output() itemClick = new EventEmitter<ChartNode>();

    @HostBinding("style.flex-direction")
    get hostClass() {
        return this.direction === "vertical" ? "column" : "";
    }
}

import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { ChartNode } from "./org-chart.models";

@Component({
    selector: "padua-org-chart",
    templateUrl: "./org-chart.component.html",
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
    standalone: false
})
export class OrgChartComponent {
    @ContentChild("nodeTemplate", { static: true }) nodeTemplate: TemplateRef<unknown>;

    @Input()
    nodes: ChartNode[] = [];

    @Input()
    hasParent = false;

    @Input()
    direction: "vertical" | "horizontal" = "vertical";

    @Output() itemClick = new EventEmitter<ChartNode>();
}

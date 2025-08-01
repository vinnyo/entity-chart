import { Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { ChartNode } from "../org-chart.models";

@Component({
    selector: "padua-chart-node",
    templateUrl: "./chart-node.component.html",
    styleUrls: ["./chart-node.component.scss"],
    standalone: false
})
export class ChartNodeComponent {
    @Input()
    node: ChartNode;

    @Input()
    hasParent = false;

    @Input()
    parent: ChartNode;

    @Input()
    nodeTemplate: TemplateRef<unknown>;

    @Input()
    direction: "vertical" | "horizontal" = "vertical";

    @Output() itemClick = new EventEmitter<ChartNode>();
}

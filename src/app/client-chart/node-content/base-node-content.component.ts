import { Component, Input } from "@angular/core";
import { ClientChartNode, NodeType } from "../client-chart.models";

@Component({
    selector: "padua-base-node-content",
    template: ``,
    standalone: false
})
export class BaseNodeContentComponent<T extends ClientChartNode> {
    @Input() node: T;
    @Input() parent: ClientChartNode;
    @Input()
    direction: "vertical" | "horizontal" = "vertical";
    @Input() viewMode: boolean = false;

    protected addNode(type: NodeType, name: string, childs?: ClientChartNode[]) {
        const node: ClientChartNode = {
            name,
            type,
            childs: childs || [],
        };
        const children = this.node?.childs || [];
        children.push(node);
        this.node.childs = children;
        return node;
    }
}

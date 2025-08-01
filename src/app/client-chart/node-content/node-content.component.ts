import { Component, HostListener } from "@angular/core";
import { BaseNodeContentComponent } from "./base-node-content.component";
import { ClientTypes, EntityTypes, GroupTypes, ClientChartNode, EntityGroupTypes } from "../client-chart.models";
import { ClientChartService } from "../client-chart.service";

@Component({
    selector: "padua-node-content",
    styles: [
        `
            :host {
                position: relative;
                min-width: 150px;
                cursor: pointer;
            }
        `,
    ],
    template: `
        @switch (node?.type) {
            @case (clientTypes.includes(node?.type) ? node.type : "") {
                <padua-client-node-content
                    [node]="node"
                    [direction]="direction"
                    [parent]="parent"
                    [viewMode]="viewMode"
                ></padua-client-node-content>
            }
            @case (entityTypes.includes(node?.type) ? node.type : "") {
                <padua-entity-node-content
                    [node]="node"
                    [direction]="direction"
                    [parent]="parent"
                    [viewMode]="viewMode"
                ></padua-entity-node-content>
            }
            @case (groupTypes.includes(node?.type) ? node.type : "") {
                <padua-group-node-content
                    [node]="node"
                    [direction]="direction"
                    [parent]="parent"
                    [viewMode]="viewMode"
                ></padua-group-node-content>
            }
            @default {
                <div class="ngx-org-box ngx-org-border bg-white">
                    <div>
                        <div class="font-semibold">{{ node?.name }}</div>
                        <div class="text-xs italic">{{ node?.type }}</div>
                    </div>
                </div>
            }
        }
    `,
    standalone: false
})
export class NodeContentComponent extends BaseNodeContentComponent<ClientChartNode> {
    public readonly clientTypes = Object.values(ClientTypes);
    public readonly entityTypes = Object.values(EntityTypes);
    public readonly groupTypes = Object.values({ ...GroupTypes, ...EntityGroupTypes });

    constructor(private service: ClientChartService) {
        super();
    }

    @HostListener("click")
    setFocusNode() {
        this.node.parent = this.parent;
        this.service.setFocusNode(this.node);
    }
}

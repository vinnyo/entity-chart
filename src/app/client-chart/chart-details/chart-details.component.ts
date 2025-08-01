import { Component } from "@angular/core";
import { ClientChartService } from "../client-chart.service";
import { ClientTypes, EntityTypes } from "../client-chart.models";

@Component({
    selector: "padua-chart-details",
    templateUrl: "./chart-details.component.html",
    styles: [``],
    standalone: false
})
export class ChartDetailsComponent {
    focusNode$ = this.service.focusNode$;
    constructor(private service: ClientChartService) {}

    public enableDocumentsList = Object.values({ ...ClientTypes, ...EntityTypes });

    handleDelete() {
        const node = this.service.getFocusNode();
        const nodeName = node.name;
        console.log("hanlde delete", node);
        if (node.parent) {
            const idx = node.parent.childs.findIndex((e) => e.name === nodeName);
            if (idx > -1) node.parent.childs.splice(idx, 1);
        }
        this.service.setFocusNode(null);
    }

    handleClose() {
        this.service.setFocusNode(null);
    }
}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChartConnectorComponent } from "./chart-connector/chart-connector.component";
import { ChartNodeComponent } from "./chart-node/chart-node.component";
import { OrgChartComponent } from "./org-chart.component";

@NgModule({
    declarations: [OrgChartComponent, ChartNodeComponent, ChartConnectorComponent],
    imports: [CommonModule],
    exports: [OrgChartComponent],
})
export class OrgChartModule {}

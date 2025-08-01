import { NgModule } from "@angular/core";
import { OrgChartModule } from "../org-chart";
import { ClientNodeContentComponent } from "./node-content/client-node-content.component";
import { BaseNodeContentComponent } from "./node-content/base-node-content.component";
import { EntityNodeContentComponent } from "./node-content/entity-node-content.component";
import { GroupNodeContentComponent } from "./node-content/group-node-content.component";
import { NodeContentComponent } from "./node-content/node-content.component";
import { ClientChartComponent } from "./client-chart.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule } from "@angular/forms";
import { ChartDetailsComponent } from "./chart-details/chart-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { CarouselModule } from "../carousel";

@NgModule({
    declarations: [
        ClientChartComponent,
        ChartDetailsComponent,
        ClientNodeContentComponent,
        BaseNodeContentComponent,
        EntityNodeContentComponent,
        GroupNodeContentComponent,
        NodeContentComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonToggleModule,
        OrgChartModule,
        CarouselModule,
    ],
    exports: [ClientChartComponent],
})
export class ClientChartModule {}

import { Component, OnInit } from '@angular/core';
import {
  ClientChartNode,
  EntityTypes,
  GroupTypes,
  NodeType,
} from '../client-chart';
import { ClientChartService } from './client-chart.service';
import { NotificationsService } from '../shared/notifications';
import { CarouselSelectedEvent } from '../carousel';

@Component({
  selector: 'padua-client-chart',
  templateUrl: './client-chart.component.html',
  styles: [
    `
      .transition-on {
        transition: all ease-in-out 250ms;
      }
    `,
  ],
  providers: [ClientChartService],
  standalone: false,
})
export class ClientChartComponent implements OnInit {
  orientation: 'vertical' | 'horizontal' = 'vertical';

  public focusNode$ = this.service.focusNode$;
  public selectedRoot: ClientChartNode;
  public associateEntitiesOptions = Object.values({ ...EntityTypes });
  public readonly familyType = GroupTypes.Family;

  constructor(
    private service: ClientChartService,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {
    this.selectedRoot = this.nodes?.length ? this.nodes[0] : undefined;
  }

  nodes: any = [
    {
      name: 'Sundar Family',
      type: NodeType.Family,
      childs: [
        {
          name: 'Thomas Sundar',
          type: NodeType.Client1,
          childs: [],
        },
        {
          name: 'Thomas and Jenny',
          type: NodeType.Joint,
          childs: [
            {
              name: 'Dependants',
              type: NodeType.Dependants,
              childs: [
                {
                  name: 'Kamila Sundar',
                  type: NodeType.Dependant,
                },
                {
                  name: 'Sonia Sundar',
                  type: NodeType.Dependant,
                },
              ],
            },
          ],
        },
        {
          name: 'Jenny Dean',
          type: NodeType.Client2,
          childs: [],
        },
      ],
    },
    {
      name: 'Jenny Saloon',
      type: NodeType.Company,
      childs: [
        {
          name: 'Stake Holders',
          type: NodeType.Stakeholders,
          childs: [
            {
              name: 'Thomas Sundar',
              type: NodeType.Stakeholder,
            },
            {
              name: 'Leah Lagetti',
              type: NodeType.Stakeholder,
            },
          ],
        },
      ],
    },
    {
      name: 'Sundar Sundry',
      type: NodeType.Company,
      childs: [
        {
          name: 'Stake Holders',
          type: NodeType.Stakeholders,
          childs: [
            {
              name: 'Jenny Dean',
              type: NodeType.Stakeholder,
            },
            {
              name: 'Moe Mannor',
              type: NodeType.Stakeholder,
            },
          ],
        },
        {
          name: "Moe's Nails",
          type: NodeType.Company,
        },
      ],
    },
  ];

  clearFocusNode() {
    this.service.setFocusNode(null);
  }

  doAssociateEntity(entityType: EntityTypes) {
    this.notifications.prompt(
      `Associate ${entityType}`,
      `Name of ${entityType}`,
      (value: unknown) => this.addRootNode(entityType, value as string),
      () => null,
      `My ${entityType}`
    );
  }

  onSelectItem(event: CarouselSelectedEvent) {
    this.selectedRoot = this.nodes[event.index];
  }

  private addRootNode(
    type: NodeType,
    name: string,
    childs?: ClientChartNode[]
  ) {
    const node: ClientChartNode = {
      name,
      type,
      childs: childs || [],
    };
    this.nodes.push(node);
  }
}

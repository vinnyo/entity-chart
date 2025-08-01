import { Component, OnInit } from '@angular/core';
import { BaseNodeContentComponent } from './base-node-content.component';
import {
  ClientTypes,
  EntityGroupTypes,
  GroupNode,
  GroupTypes,
  NodeType,
  RelationshipTypes,
} from '../client-chart.models';
import { NotificationsService } from '../../shared/notifications';

@Component({
  selector: 'padua-group-node-content',
  template: ` <div
    class="ngx-org-box {{
      !viewMode ? direction : 'view-mode'
    }} ngx-org-border g-column bg-white"
  >
    <div class="g-column items-center">
      <span class="font-semibold">{{ node?.name }}</span>
      <span class="text-xs">{{ node?.type }}</span>
    </div>
    @if (!viewMode && addOption?.length) {
    <button class="g-button icon sm add-button" (click)="doAdd($event)">
      <i class="pd_icon-add"></i>
    </button>
    }
  </div>`,
  standalone: false,
})
export class GroupNodeContentComponent
  extends BaseNodeContentComponent<GroupNode>
  implements OnInit
{
  public addOption = '';

  constructor(private notification: NotificationsService) {
    super();
  }

  ngOnInit(): void {
    this.setSupportedOptions();
  }

  private setSupportedOptions() {
    switch (this.node?.type) {
      case GroupTypes.Dependants:
        this.addOption = RelationshipTypes.Dependant;
        break;
      case GroupTypes.Parents:
        this.addOption = RelationshipTypes.Parent;
        break;
      case GroupTypes.NonDependents:
        this.addOption = RelationshipTypes.NonDependant;
        break;
      case EntityGroupTypes.Stakeholders:
        this.addOption = RelationshipTypes.Stakeholder;
        break;
      case EntityGroupTypes.Members:
        this.addOption = RelationshipTypes.Member;
        break;
      case GroupTypes.Family:
        this.addOption =
          this.node?.childs?.length === 1 ? ClientTypes.Client2 : '';
        break;
      default:
    }
  }

  doAdd(event: MouseEvent) {
    event.stopImmediatePropagation();
    const type = this.addOption as NodeType;
    this.notification.prompt(
      `Add ${type}`,
      `Name of ${type}`,
      (value: unknown) => this.handleAddNode(type, value as string),
      () => null,
      ''
    );
  }

  private handleAddNode(type: NodeType, name: string) {
    if (type === NodeType.Client2) {
      const jointName = `${this.node.childs[0]?.name || ''} & ${name}`;
      this.addNode(NodeType.Joint, jointName);
    }
    this.addNode(type, name);
    this.setSupportedOptions();
  }
}

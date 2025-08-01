import { Component, OnInit } from '@angular/core';
import {
  ClientNode,
  ClientTypes,
  EntityTypes,
  GroupTypes,
  NodeType,
  ClientChartNode,
} from '../client-chart.models';
import { BaseNodeContentComponent } from './base-node-content.component';
import { NotificationsService } from '../../shared/notifications';

@Component({
  selector: 'padua-client-node-content',
  styles: [``],
  template: `
    <!-- bg-client1-bg bg-client2-bg border-client1-border border-client2-border text-client1-primary text-client2-primary -->
    <div
      class="ngx-org-box {{
        !viewMode ? direction : 'view-mode'
      }} ngx-org-border g-row gap-2 bg-{{ clientType }}-bg border-{{
        clientType
      }}-border"
    >
      <i
        class="pd_icon-{{
          node?.type === clientTypes.Joint ? 'joint' : 'gender-non-binary'
        }} text-{{ clientType }}-primary"
      ></i>
      <div class="g-column">
        <span class="font-semibold text-{{ clientType }}-primary">{{
          node?.name
        }}</span>
        <span class="text-xs italic">{{ node?.type }}</span>
      </div>
      @if (!viewMode) {
      <button
        (click)="$event.stopImmediatePropagation()"
        class="g-button icon sm add-button"
        [matMenuTriggerFor]="menu"
      >
        <i class="pd_icon-add"></i>
      </button>
      }
      <mat-menu #menu="matMenu">
        @for (op of addOptions; track op) {
        <button mat-menu-item (click)="doAdd(op)">
          <span>{{ op }}</span>
        </button>
        }
      </mat-menu>
    </div>
  `,
  standalone: false,
})
export class ClientNodeContentComponent
  extends BaseNodeContentComponent<ClientNode>
  implements OnInit
{
  private supported = { ...GroupTypes };
  public addOptions = [];

  public clientTypes = ClientTypes;

  constructor(private notifications: NotificationsService) {
    super();
  }

  ngOnInit() {
    let notSupported = [GroupTypes.Family.toString()];
    if (this.node?.type === ClientTypes.Joint) {
      notSupported.push(GroupTypes.Parents.toString());
    }
    this.addOptions = Object.values(this.supported).filter(
      (e: EntityTypes | GroupTypes) => !notSupported.includes(e)
    );
  }

  public get clientType() {
    return this.node?.type === ClientTypes.Client1
      ? 'client1'
      : this.node?.type === ClientTypes.Client2
      ? 'client2'
      : this.node?.type === ClientTypes.Joint
      ? 'joint'
      : '';
  }

  doAdd(option: NodeType) {
    const groups: string[] = Object.values({ ...GroupTypes });
    const isGroup = groups.includes(option.toString());

    this.notifications.prompt(
      `Add ${option} ${isGroup ? 'group' : ''} for ${this.node.name}`,
      `Name of ${option} ${isGroup ? 'group' : ''}`,
      (value: string) => this.addNode(option, value),
      () => null,
      `${option}`
    );
  }
}

import { Component } from '@angular/core';
import {
  EntityGroupTypes,
  EntityNode,
  EntityTypes,
  GroupTypes,
  NodeType,
} from '../client-chart.models';
import { BaseNodeContentComponent } from './base-node-content.component';
import { NotificationsService } from '../../shared/notifications';

@Component({
  selector: 'padua-entity-node-content',
  template: `
    <div
      class="ngx-org-box ngx-org-border {{
        !viewMode ? direction : 'view-mode'
      }} border-yellow-500 bg-yellow-100 g-row gap-2"
    >
      <div class="g-column">
        <i class="pd_icon-{{ iconName }}"></i>
      </div>

      <div class="g-column">
        <span class="font-semibold">{{ node?.name }}</span>
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
export class EntityNodeContentComponent extends BaseNodeContentComponent<EntityNode> {
  private supported = { ...EntityTypes, ...EntityGroupTypes };
  public addOptions = Object.values(this.supported);

  constructor(private notifications: NotificationsService) {
    super();
  }

  doAdd(option: NodeType) {
    const groups: string[] = Object.values({ ...EntityGroupTypes });
    const isGroup = groups.includes(option.toString());

    this.notifications.prompt(
      `Add ${option} ${isGroup ? 'group' : ''} for ${this.node.name}`,
      `Name of ${option} ${isGroup ? 'group' : ''}`,
      (value: unknown) => this.handleAddNode(option, value as string),
      () => null,
      `${option}`
    );
  }

  private handleAddNode(type: NodeType, value: string) {
    if (!value) {
      this.notifications.error('Name cannot be empty');
      return;
    }
    return this.addNode(type, value);
  }

  public get iconName() {
    switch (this.node.type) {
      case NodeType.Company:
        return 'company';
      case NodeType.SMSF:
        return 'smsf';
      case NodeType.Trust:
        return 'trust';
      default:
        return 'entities';
    }
  }
}

import { Injectable } from '@angular/core';
import { ClientChartNode } from './client-chart.models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClientChartService {
  private readonly _focusNode = new BehaviorSubject<ClientChartNode | null>(
    null
  );
  public readonly focusNode$ = this._focusNode.asObservable();
  private set focusNode(value: ClientChartNode) {
    this._focusNode.next(value);
  }
  private get focusNode() {
    return this._focusNode.getValue();
  }

  public setFocusNode(node?: ClientChartNode) {
    if (node) this.focusNode = node;
  }

  public getFocusNode() {
    return this.focusNode;
  }
}

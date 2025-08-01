import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { messages } from '../domain/messages.data';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { PromptComponent } from '../prompt/prompt.component';
import { firstValueFrom } from 'rxjs';
import { ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  showError(message: string, error?: Error): void {
    this.snackBar.open(message, 'close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    if (error) {
      console.error(error.message);
    }
  }

  success(message: string, action?: string, className?: string, icon?: string) {
    const _action = action ? action : 'Done';
    const _className = className ? `success ${className}` : 'success';
    const _icon = icon ? icon : 'done';
    this.openSnackBar(message, _action, _className, _icon);
  }

  info(message: string, action?: string, className?: string, icon?: string) {
    const _action = action ? action : 'Done';
    const _className = className ? `warning ${className}` : 'info';
    const _icon = icon ? icon : 'info_outline';
    this.openSnackBar(message, _action, _className, _icon);
  }

  warning(message: string, action?: string, className?: string, icon?: string) {
    const _action = action ? action : 'Done';
    const _className = className ? `warning ${className}` : 'warning';
    const _icon = icon ? icon : 'warning';
    this.openSnackBar(message, _action, _className, _icon);
  }

  error(
    message: string,
    action?: string,
    className?: string,
    icon?: string,
    duration?: number
  ) {
    const _action = action ? action : 'Done';
    const _className = className ? `error ${className}` : 'error';
    const _icon = icon ? icon : 'error';
    const _duration = duration ? duration : 4000;
    this.openSnackBar(message, _action, _className, _icon, _duration);
  }

  confirmation(
    title: string,
    message: string,
    confirmCallback: (result?: undefined) => void,
    cancelCallback: () => any,
    action?: string,
    className?: string,
    width?: number
  ) {
    const dialogRef = this.openConfirmationDialog(
      title,
      message,
      action,
      className,
      width
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result && confirmCallback) {
        confirmCallback();
      }
      if (!result && cancelCallback) {
        cancelCallback();
      }
    });
  }

  async asyncConfirmation(
    title: string,
    message: string,
    action?: string,
    className?: string,
    width?: number
  ): Promise<boolean> {
    return await firstValueFrom(
      this.openConfirmationDialog(
        title,
        message,
        action,
        className,
        width
      ).afterClosed()
    );
  }

  prompt(
    title: string,
    message: string,
    confirmCallback: (result?: unknown) => void,
    cancelCallback: () => any,
    defaultValue?: string,
    action?: string,
    className?: string,
    width?: number
  ) {
    const dialogRef = this.openPromptDialog(
      title,
      message,
      defaultValue,
      action,
      className,
      width
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result && confirmCallback) {
        confirmCallback(result);
      }
      if (!result && cancelCallback) {
        cancelCallback();
      }
    });
  }

  async asyncPrompt(
    title: string,
    message: string,
    defaultValue?: string,
    action?: string,
    className?: string,
    width?: number,
    validators?: ValidatorFn | ValidatorFn[]
  ): Promise<string> {
    return await firstValueFrom(
      this.openPromptDialog(
        title,
        message,
        defaultValue,
        action,
        className,
        width,
        validators
      ).afterClosed()
    );
  }

  openSnackBar(
    message: string,
    action: string,
    className: string,
    icon: string,
    duration?: number,
    verticalPosition?: MatSnackBarVerticalPosition,
    horizontalPosition?: MatSnackBarHorizontalPosition
  ) {
    const _snackType = className !== undefined ? className : 'success';
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: duration || 4000,
      horizontalPosition: horizontalPosition || 'center',
      verticalPosition: verticalPosition || 'bottom',
      panelClass: 'notification',
      data: {
        message: message,
        snackType: _snackType,
        className: className,
        action: action,
        icon: icon,
        snackBar: this.snackBar,
      },
    });
  }

  private openConfirmationDialog(
    title: string,
    message: string,
    action?: string,
    className?: string,
    width?: number
  ) {
    const _action = action || 'Confirm';
    const _className = className || '';
    const _title = title || 'Confirmation';
    const _message = message || 'Are you sure?';

    return this.dialog.open(ConfirmationComponent, {
      width: `${width || 472}px`,
      height: 'auto',
      panelClass: [_className],
      data: {
        title: _title,
        action: _action,
        message: _message,
      },
    });
  }

  private openPromptDialog(
    title: string,
    message: string,
    defaultValue?: string,
    action?: string,
    className?: string,
    width?: number,
    validators?: ValidatorFn | ValidatorFn[]
  ) {
    const _action = action || 'Confirm';
    const _className = className || 'g-home-section';
    const _title = title || 'Prompt';
    const _message = message || 'Please enter your response.';
    const _defaultValue = defaultValue || '';

    return this.dialog.open(PromptComponent, {
      width: `${width || 472}px`,
      panelClass: [_className],
      data: {
        title: _title,
        action: _action,
        message: _message,
        defaultValue: _defaultValue,
        validators,
      },
    });
  }

  /**
   * Show a notification using a known message.
   * @param msgID The identifier.
   * @param customMessage Any custom message/detail that gets injected into the known message.
   * @param actionedItem Any item's title that needs to be included in the message.
   * @param confirmCallback For a yes/no confirmation, the "yes" function to execute
   * @param cancelCallback For a yes/no confirmation, the "no" function to execute.
   * */
  public showByCode(
    msgID: string,
    customMessage = '',
    actionedItem = '',
    confirmCallback: (response: string | unknown) => void,
    cancelCallback: () => null
  ) {
    const detailMsg = messages.find((msg) => msg.ID === msgID);
    if (detailMsg) {
      const msg = detailMsg.Message.replace(
        '${ActionedItem}',
        actionedItem || detailMsg.ActionedItem
      ).replace('${content}', customMessage);

      switch (detailMsg.Result) {
        case 'success':
          this.success(msg);
          break;
        case 'error':
          this.error(msg);
          break;
        case 'warning':
          this.warning(msg);
          break;
        case 'alert':
          this.confirmation(
            detailMsg.ActionPerformed,
            msg,
            confirmCallback,
            cancelCallback
          );
          break;
        case 'prompt':
          this.prompt(
            detailMsg.ActionPerformed,
            msg,
            confirmCallback,
            cancelCallback,
            actionedItem
          );
          break;
        default:
          this.info(msg);
          break;
      }
    } else {
      this.info(msgID);
    }
  }

  public recordPromptDisplayTime(key: string): void {
    localStorage.setItem(key, new Date().toISOString());
  }

  public getMinutesSinceLastPrompt(key: string): number {
    let minutesAgo = 0;
    let lastDate: any = localStorage.getItem(key);
    if (lastDate) {
      lastDate = new Date(lastDate);
      const today: Date = new Date();
      minutesAgo = (today.getTime() - lastDate.getTime()) / (1000 * 60);
    }
    return minutesAgo;
  }

  public hasSufficientTimeElapsedSinceLastPrompt(
    key: string,
    minutes = 5
  ): boolean {
    const lastPromptMinutesAgo = this.getMinutesSinceLastPrompt(key);
    return lastPromptMinutesAgo === 0 || lastPromptMinutesAgo > minutes;
  }
}

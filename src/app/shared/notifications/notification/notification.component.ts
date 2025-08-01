import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef, MatSnackBarModule } from "@angular/material/snack-bar";
import { Notification } from "../domain/notification.model";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "padua-notification",
    imports: [CommonModule, MatIconModule, MatSnackBarModule],
    templateUrl: "./notification.component.html",
    styleUrls: ["./notification.component.scss"],
    host: { id: "7dhdyfg3" }
})
export class NotificationComponent {
    icon = "done";
    action = "done";
    className = "success";
    message = "";

    constructor(
        public csbRef: MatSnackBarRef<NotificationComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: Notification
    ) {
        this.icon = data.icon as string;
        this.action = data.action as string;
        this.className = data.className as string;
        this.message = data.message as string;
    }
}

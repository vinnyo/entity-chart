import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { Confirmation } from "../domain/confirmation.model";
import { MatIconModule } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDividerModule } from "@angular/material/divider";
import { MatRippleModule } from "@angular/material/core";

@Component({
    selector: "padua-confirmation",
    imports: [CommonModule, MatDialogModule, MatIconModule, MatDividerModule, MatRippleModule],
    templateUrl: "./confirmation.component.html",
    styleUrls: ["./confirmation.component.scss"],
    host: { id: "7utyu3df" },
})
export class ConfirmationComponent {
    message = "";
    action = "";
    title = "";
    icon = "";

    constructor(
        private sanitised: DomSanitizer,
        private dialogRef: MatDialogRef<ConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) private data: Confirmation
    ) {
        if (this.data.message !== undefined) {
            this.message = this.sanitised.bypassSecurityTrustHtml(this.data.message) as string;
        }
        this.action = this.data?.action || "";
        this.title = this.data?.title || "";
        this.icon = this.data?.icon || "";
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }
}

import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { PromptModel } from "../domain/prompt.model";
import { DomSanitizer } from "@angular/platform-browser";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatRippleModule } from "@angular/material/core";

@Component({
    selector: "padua-prompt",
    imports: [
        CommonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        ReactiveFormsModule,
    ],
    templateUrl: "./prompt.component.html",
    styleUrls: ["./prompt.component.scss"],
    host: { id: "jjdhs76dt" },
})
export class PromptComponent {
    message = "";
    action = "";
    title = "";
    defaultValue = "";
    formControl: FormControl;
    @ViewChild("elementRef", { static: false }) elementRef: ElementRef;

    constructor(
        private dialogRef: MatDialogRef<PromptComponent>,
        @Inject(MAT_DIALOG_DATA) private data: PromptModel,
        private sanitized: DomSanitizer
    ) {
        if (this.data.message !== undefined) {
            this.message = this.sanitized.bypassSecurityTrustHtml(this.data.message) as string;
        }
        this.action = this.data.action as string;
        this.title = (this.data.title || this.data.action) as string;
        this.defaultValue = this.data.defaultValue as string;

        this.formControl = new FormControl(this.defaultValue, { validators: this.data?.validators || null });
    }

    onConfirm(): void {
        this.dialogRef.close(this.elementRef.nativeElement.value);
    }
}

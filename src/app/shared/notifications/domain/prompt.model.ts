import { ValidatorFn } from "@angular/forms";

export interface PromptModel {
    title?: string;
    icon?: string;
    action?: string;
    message?: string;
    defaultValue?: string;
    validators?: ValidatorFn | ValidatorFn[];
}

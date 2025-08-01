import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientChartModule } from './client-chart';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import {
  MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
  MatButtonToggleDefaultOptions,
} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientChartModule],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-AU',
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { disableTooltipInteractivity: true },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', floatLabel: 'always' },
    },
    {
      provide: MAT_TABS_CONFIG,
      useValue: { stretchTabs: false },
    },
    {
      provide: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
      useValue: {
        hideSingleSelectionIndicator: true,
        hideMultipleSelectionIndicator: true,
      } as MatButtonToggleDefaultOptions,
    },
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('client-chart-app');
}

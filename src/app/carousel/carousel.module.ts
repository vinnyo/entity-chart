import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { CarouselContent } from './carousel-content';
import { CarouselHeading } from './carousel-heading';
import { CarouselItemComponent } from './carousel-item.component';
import { CarouselLabel } from './carousel-label';
import { CarouselComponent } from './carousel.component';
import { ScrollableDirective } from '../shared/scrollable.directive';

const components = [
  CarouselComponent,
  CarouselItemComponent,
  CarouselLabel,
  CarouselHeading,
  CarouselContent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, PortalModule, MatRippleModule, ScrollableDirective],
  exports: [...components],
})
export class CarouselModule {}

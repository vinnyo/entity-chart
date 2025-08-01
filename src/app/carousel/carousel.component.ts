import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';
import { ScrollableDirective } from '../shared/scrollable.directive';

export interface CarouselSelectedEvent {
  item: CarouselItemComponent;
  index: number;
}

@Component({
  selector: 'padua-carousel',
  templateUrl: './carousel.component.html',
  standalone: false,
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  items: QueryList<CarouselItemComponent>;
  @ViewChild(ScrollableDirective, { static: true })
  itemsContainer: ScrollableDirective;
  @ViewChildren('itemRef') itemRefs: QueryList<ElementRef<any>>;

  @Input() headingEnabled = true;
  @Input() dotNavEnabled = true;
  @Input() selectItemOnNavigate = true;
  @Input() scrollSize = 200;
  @Output() itemSelected = new EventEmitter<CarouselSelectedEvent>();

  public selectedIndex = -1;
  public isScrollable = false;
  selectedItem: CarouselItemComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  get totalItems() {
    return this.items?.length || 0;
  }

  ngAfterContentInit(): void {
    this.initSelection();
  }

  onItemClicked(index: number) {
    const item = this.items.get(index);
    this.selectedItem = item;
    this.selectedIndex = index;
    if (this.isScrollable) this.scrollItemRefInView(index);
    this.itemSelected.emit({ item, index });
  }

  scrollItemRefInView(index: number) {
    if (!this.itemRefs) return;
    const target = this.itemRefs.get(index);
    const elem = target.nativeElement;
    const parent = this.itemsContainer.nativeElement;
    const scrollVal =
      elem.offsetLeft -
      parent.offsetLeft -
      (parent.clientWidth - elem.scrollWidth) / 2;
    parent.scrollTo({
      left: scrollVal < 0 ? 0 : scrollVal,
      top: 0,
      behavior: 'smooth',
    });
  }

  onLeftClicked() {
    if (this.selectItemOnNavigate) {
      if (this.selectedIndex === 0) return;
      this.onItemClicked(this.selectedIndex - 1);
    } else {
      this.scroll(-this.scrollSize);
    }
  }
  onRightClicked() {
    if (this.selectItemOnNavigate) {
      const total = this.items.length;
      if (this.selectedIndex === total - 1) return;
      this.onItemClicked(this.selectedIndex + 1);
    } else {
      this.scroll(this.scrollSize);
    }
  }

  onScrollingChanged(isScrollable: boolean) {
    this.isScrollable = isScrollable;
    this.cdr.detectChanges();
  }

  private scroll(value: number) {
    this.itemsContainer.nativeElement.scroll({
      left: value,
      top: 0,
      behavior: 'smooth',
    });
  }

  private initSelection() {
    this.items.find((item, index) => {
      const val = item.selected;
      if (val) {
        this.onItemClicked(index);
      }
      return val;
    });
  }
}

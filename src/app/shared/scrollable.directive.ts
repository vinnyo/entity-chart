import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

export enum ScrollOrientationEnum {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

@Directive({
  selector: '[padua-scrollable], [paduaScrollable]',
  exportAs: 'paduaScrollable',
  standalone: true,
})
export class ScrollableDirective implements AfterViewInit, OnDestroy {
  public isScrollable = false;
  @Input() orientation: ScrollOrientationEnum =
    ScrollOrientationEnum.HORIZONTAL;
  @Output() scrollableStateChange = new EventEmitter<boolean>();

  private observer: ResizeObserver;

  constructor(private elementRef: ElementRef<any>) {
    this.observer = new ResizeObserver((entries) => this.checkIsScrolling());
    this.observer.observe(this.elementRef.nativeElement);
  }

  // @HostListener("window:resize", ["$event"])
  onResize() {
    this.checkIsScrolling();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.checkIsScrolling(), 50);
  }

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  ngOnDestroy(): void {
    this.observer?.unobserve(this.elementRef.nativeElement);
  }

  private checkIsScrolling() {
    const el = this.elementRef.nativeElement;
    if (this.orientation === ScrollOrientationEnum.HORIZONTAL) {
      this.isScrollable = el.scrollWidth > el.clientWidth;
    } else {
      this.isScrollable = el.scrollHeight > el.clientHeight;
    }
    this.scrollableStateChange.emit(this.isScrollable);
  }
}

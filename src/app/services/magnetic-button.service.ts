import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MagneticButtonService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initMagneticButtons(): void {
    const buttons = document.querySelectorAll('.btn.magnetic');
    
    buttons.forEach(button => {
      const buttonElement = button as HTMLElement;
      
      fromEvent<MouseEvent>(buttonElement, 'mousemove')
        .pipe(debounceTime(16))
        .subscribe((event: MouseEvent) => {
          this.handleMouseMove(event, buttonElement);
        });

      fromEvent<MouseEvent>(buttonElement, 'mouseleave')
        .subscribe(() => {
          this.handleMouseLeave(buttonElement);
        });
    });
  }

  private handleMouseMove(event: MouseEvent, element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    
    const moveDistance = 10;
    const moveX = x * 0.2;
    const moveY = y * 0.2;
    
    this.renderer.setStyle(element, 'transform', `translate(${moveX}px, ${moveY}px)`);
  }

  private handleMouseLeave(element: HTMLElement): void {
    this.renderer.setStyle(element, 'transform', 'translate(0, 0)');
  }
}
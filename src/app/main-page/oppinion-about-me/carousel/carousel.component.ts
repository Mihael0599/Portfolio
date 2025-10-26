import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  currentIndex = 2;

  testimonials = [
    {
      author: "M. Salman",
      role: "Team Partner",
      quote: "testimonials.1.quote"
    },
    {
      author: "A. Römmich",
      role: "Team Partner",
      quote: "testimonials.2.quote"
    },
    {
      author: "M. Schweiger",
      role: "Team Partner",
      quote: "testimonials.3.quote"
    },
    {
      author: "Prathab",
      role: "Team Partner",
      quote: "testimonials.4.quote"
    },
    {
      author: "R. Runge",
      role: "Team Partner",
      quote: "testimonials.5.quote"
    },
  ];

  ngAfterViewInit(): void {
    const track = document.getElementById('carousel-track') as HTMLElement;
    const items = track.querySelectorAll('.carousel-item');
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');

    const scrollToIndex = (index: number) => {
      const selected = items[index] as HTMLElement;
      const containerCenter = track.offsetWidth / 2;
      const itemCenter = selected.offsetLeft + selected.offsetWidth / 2;
      const scrollLeft = itemCenter - containerCenter;

      track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
      scrollToIndex(this.currentIndex);
    });

    next?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % items.length;
      scrollToIndex(this.currentIndex);
    });

    scrollToIndex(this.currentIndex);
  }
}

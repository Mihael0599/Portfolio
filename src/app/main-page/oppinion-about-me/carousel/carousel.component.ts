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
  currentIndex = 1;

  testimonials = [
    {
      author: "T. Schulz",
      role: "Frontend Developer",
      quote: "testimonials.1.quote"
    },
    {
      author: "H. Janisch",
      role: "Team Partner",
      quote: "testimonials.2.quote"
    },
    {
      author: "A. Fischer",
      role: "Team Partner",
      quote: "testimonials.3.quote"
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

   handleResize(): void {
    console.log('Fenstergröße geändert:', window.innerWidth, window.innerHeight);
  }
}

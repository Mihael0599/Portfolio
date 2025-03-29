import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-oppinion-about-me',
  standalone: true,
  imports: [NgFor],
  templateUrl: './oppinion-about-me.component.html',
  styleUrl: './oppinion-about-me.component.scss'
})
export class OppinionAboutMeComponent implements AfterViewInit {
  currentIndex = 1;

  testimonials = [
    {
      author: "T. Schulz",
      role: "Frontend Developer",
      quote: "Our project benefited enormously from Simon’s efficient way of working."
    },
    {
      author: "H. Janisch",
      role: "Team Partner",
      quote: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project."
    },
    {
      author: "A. Fischer",
      role: "Team Partner",
      quote: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort..."
    },
    {
      author: "A. Fischer",
      role: "Team Partner",
      quote: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort..."
    },
        {
      author: "A. Fischer",
      role: "Team Partner",
      quote: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort..."
    }
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

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
}

export interface Stat {
  id: number;
  value: number;
  target: number;
  label: string;
  icon: string;
  suffix?: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements implements OnInit, AfterViewInit {
  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Best Fintech Solution 2024',
      description: 'Awarded for innovative banking platform development',
      year: '2024',
      icon: '🏆',
      color: '#FFD700'
    },
    {
      id: 2,
      title: 'Digital Transformation Leader',
      description: 'Recognized for leading digital banking initiatives',
      year: '2024',
      icon: '🚀',
      color: '#00D4FF'
    },
    {
      id: 3,
      title: 'Best AI Integration',
      description: 'Excellence in AI-powered banking solutions',
      year: '2023',
      icon: '🤖',
      color: '#7B2CBF'
    },
    {
      id: 4,
      title: 'Security Excellence Award',
      description: 'Top-rated security implementation in fintech',
      year: '2023',
      icon: '🔒',
      color: '#00FFA3'
    },
    {
      id: 5,
      title: 'Innovation in Blockchain',
      description: 'Pioneer in blockchain banking solutions',
      year: '2023',
      icon: '⛓️',
      color: '#FF006E'
    },
    {
      id: 6,
      title: 'Customer Experience Award',
      description: 'Best user experience in mobile banking',
      year: '2022',
      icon: '⭐',
      color: '#FFB800'
    }
  ];

  stats: Stat[] = [
    { id: 1, value: 0, target: 50, label: 'Banking Partners', icon: '🏦', suffix: '+' },
    { id: 2, value: 0, target: 100, label: 'Million Transactions', icon: '💳', suffix: 'M+' },
    { id: 3, value: 0, target: 99, label: 'Uptime %', icon: '⚡', suffix: '.9%' },
    { id: 4, value: 0, target: 15, label: 'Awards Won', icon: '🏆', suffix: '+' },
    { id: 5, value: 0, target: 500, label: 'Team Members', icon: '👥', suffix: '+' },
    { id: 6, value: 0, target: 10, label: 'Years Experience', icon: '📅', suffix: '+' }
  ];

  hasAnimated = false;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Setup intersection observer for stats animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateStats();
            this.hasAnimated = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  animateStats() {
    this.stats.forEach(stat => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.target / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        stat.value = Math.min(Math.round(increment * currentStep), stat.target);

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }

  getStatColor(statId: number): string {
    const colors = [
      '',
      '#00D4FF',
      '#7B2CBF',
      '#00FFA3',
      '#FF006E',
      '#FFB800',
      '#C77DFF'
    ];
    return colors[statId] || '#00D4FF';
  }
}

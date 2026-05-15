import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  features = [
    {
      icon: '🤖',
      titleKey: 'home.features.title1',
      descKey: 'home.features.desc1',
      color: '#00D4FF'
    },
    {
      icon: '⛓️',
      titleKey: 'home.features.title2',
      descKey: 'home.features.desc2',
      color: '#7B2CBF'
    },
    {
      icon: '⚡',
      titleKey: 'home.features.title3',
      descKey: 'home.features.desc3',
      color: '#FF006E'
    }
  ];

  stats = [
    { value: '50+', label: 'Банковских Партнеров', color: '#00D4FF' },
    { value: '100M+', label: 'Транзакций', color: '#7B2CBF' },
    { value: '99.9%', label: 'Uptime', color: '#FF006E' },
    { value: '15+', label: 'Наград', color: '#00D4FF' }
  ];

  technologies = [
    'Angular', 'Node.js', 'Blockchain', 'AI/ML',
    'Kubernetes', 'PostgreSQL', 'Redis', 'AWS'
  ];

  ngOnInit() {
  }
}


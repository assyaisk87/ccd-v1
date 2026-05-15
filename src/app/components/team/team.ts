import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  positionKey: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  stats?: {
    experience: string;
    projects: string;
  };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team implements OnInit {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Алексей Иванов',
      position: 'CEO & Founder',
      positionKey: 'team.ceo',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: 'Visionary leader with 15+ years in fintech. Former CTO at major Kazakhstani bank. Passionate about digital transformation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alexey@ddc.kz'
      },
      stats: {
        experience: '15+',
        projects: '50+'
      }
    },
    {
      id: 2,
      name: 'Елена Петрова',
      position: 'Chief Technology Officer',
      positionKey: 'team.cto',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Technology expert specializing in blockchain and AI. Led development of award-winning banking platforms.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'elena@ddc.kz'
      },
      stats: {
        experience: '12+',
        projects: '35+'
      }
    },
    {
      id: 3,
      name: 'Дмитрий Смирнов',
      position: 'Chief Financial Officer',
      positionKey: 'team.cfo',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'Financial strategist with deep banking industry knowledge. Expert in fintech investments and growth.',
      social: {
        linkedin: '#',
        email: 'dmitry@ddc.kz'
      },
      stats: {
        experience: '18+',
        projects: '40+'
      }
    },
    {
      id: 4,
      name: 'Мария Козлова',
      position: 'Chief Operating Officer',
      positionKey: 'team.coo',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Operations expert driving efficiency and scalability. Background in enterprise software delivery.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@ddc.kz'
      },
      stats: {
        experience: '10+',
        projects: '25+'
      }
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Bank-grade security in every solution'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships with clients'
    },
    {
      icon: '🚀',
      title: 'Excellence',
      description: 'Delivering world-class software solutions'
    }
  ];

  ngOnInit() {
  }
}

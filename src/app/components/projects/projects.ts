import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
}

export interface ChartOptions {
  series?: any[];
  chart?: {
    type?: string;
    height?: number;
    fontFamily?: string;
    toolbar?: { show?: boolean };
  };
  colors?: string[];
  dataLabels?: {
    enabled?: boolean;
  };
  stroke?: {
    curve?: string;
    width?: number;
  };
  xaxis?: {
    categories?: string[];
  };
  yaxis?: {
    labels?: {
      style?: {
        colors?: string;
      };
    };
  };
  grid?: {
    borderColor?: string;
    strokeDashArray?: number;
  };
  theme?: {
    mode?: string;
  };
  labels?: string[];
  responsive?: any[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      name: 'Kaspi Pay Integration',
      description: 'Seamless payment gateway solution with real-time transaction processing',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Redis'],
      link: '#',
      category: 'Payments'
    },
    {
      id: 2,
      name: 'Halyk Digital Bank',
      description: 'Complete mobile banking platform with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['React Native', 'Kubernetes', 'MongoDB', 'AI/ML'],
      link: '#',
      category: 'Mobile Banking'
    },
    {
      id: 3,
      name: 'Jusan AI Analytics',
      description: 'Intelligent customer insights and risk assessment system',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'AWS'],
      link: '#',
      category: 'Analytics'
    },
    {
      id: 4,
      name: 'Freedom Finance Blockchain',
      description: 'Secure asset management with blockchain integration',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      technologies: ['Solidity', 'Ethereum', 'React', 'Node.js'],
      link: '#',
      category: 'Blockchain'
    },
    {
      id: 5,
      name: 'Baiterek Investment Platform',
      description: 'Digital investment management and portfolio tracking',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
      link: '#',
      category: 'Investment'
    },
    {
      id: 6,
      name: 'Kaspi.kz E-commerce',
      description: 'High-performance e-commerce platform with millions of users',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Elasticsearch'],
      link: '#',
      category: 'E-commerce'
    }
  ];

  categories = ['All', 'Payments', 'Mobile Banking', 'Analytics', 'Blockchain', 'Investment', 'E-commerce'];
  selectedCategory: string = 'All';

  ngOnInit() {
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }

  getFilteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Payments': '#00D4FF',
      'Mobile Banking': '#7B2CBF',
      'Analytics': '#FF006E',
      'Blockchain': '#00FFA3',
      'Investment': '#FFB800',
      'E-commerce': '#FF6B9D'
    };
    return colors[category] || '#00D4FF';
  }
}


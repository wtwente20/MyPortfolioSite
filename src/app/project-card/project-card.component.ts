import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: {
    name: string,
    icon: string,
    description: string,
    githubUrl: string,
    liveUrl?: string // optional if not all projects have live demos
  };
}

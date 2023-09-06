import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-art',
  templateUrl: './digital-art.component.html',
  styleUrls: ['./digital-art.component.css']
})
export class DigitalArtComponent implements OnInit {
  artworks = [
    {
      image: 'assets/artwork/artwork1.png',
      description: 'Angel',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork2.png',
      description: 'Belle',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork3.png',
      description: 'Belle',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork4.png',
      description: 'Oliver',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork5.jpg',
      description: 'Sephiroth',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork6.jpg',
      description: 'Goblin Slayer',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork7.jpg',
      description: 'Oliver',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork8.jpg',
      description: 'Oliver and Belle',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork9.jpg',
      description: 'Oliver',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork10.jpg',
      description: 'Belle',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork11.jpg',
      description: 'Oliver',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork12.png',
      description: 'Naruto',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork13.jpg',
      description: 'Oliver',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork14.png',
      description: 'Alexander',
      category: 'Project Oliver'
    },
    {
      image: 'assets/artwork/artwork15.jpg',
      description: 'Unnamed Doodle',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork16.jpg',
      description: 'Noctis',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork17.jpg',
      description: 'Unnamed Doodle',
      category: 'Other'
    },
    {
      image: 'assets/artwork/artwork18.png',
      description: 'Gabriel',
      category: 'Project Oliver'
    },
    // ... more artworks
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

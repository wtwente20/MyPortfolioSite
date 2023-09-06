// software.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  projects = [
    {
      name: 'Portfolio Website',
      icon: 'assets/images/w20studios.png',
      description: 'I designed this website that you are currently browsing!',
      githubUrl: 'https://github.com/Apr-23-LC-LiftOff-STL/Liftoff-Eswari-'
    },
    {
      name: 'SavePoint',
      icon: 'assets/images/SavepointLogo1.png',
      description: 'Designed a mobile app utilizing Flutter and Firebase to hold user submitted data. Allows users to keep notes on Video Games, Books, and Tabletop RPGs to make it easy to get back into them, keeping all relevant notes in one place.',
      githubUrl: 'https://github.com/wtwente20/SavePoint',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.wtwentedev.savepoint_app'
    },
    {
      name: 'Along The Way',
      icon: 'assets/images/atw-logo.png',
      description: 'Designed an app utilizing Google Maps API and OpenWeather API to plan routes and check weather for destinations. Created a gas calculator to help plan fuel economy for trips. Set up routing for the various pages and handled multiple branch merges.',
      githubUrl: 'https://github.com/Apr-23-LC-LiftOff-STL/Liftoff-Eswari-'
    },
    // Add more projects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

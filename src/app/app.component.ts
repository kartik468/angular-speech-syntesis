import { Component, OnInit } from '@angular/core';
import { IntroJs } from 'intro.js';

declare const introJs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'text-to-speech-proj';

  ngOnInit() {
    this.startTour();
  }

  startTour() {
    const intro: IntroJs = introJs();
    intro.setOptions({
      steps: [
        {
          title: 'Welcome',
          intro: 'Hello World! 👋',
        },
        {
          title: 'Twitter',
          element: document.querySelector('.twitter-link') as Element,
          intro: 'Follow us on Twitter',
        },
        {
          title: 'YouTube',
          element: document.querySelector('.youtube-link') as Element,
          intro: 'Checkout our YouTube channel!',
        },
        {
          title: 'Resources',
          element: document.querySelector('.resources-body') as Element,
          intro: 'Here are some links to help you get started:',
        },
        {
          title: 'Next Steps',
          element: document.querySelector('.next-steps-body') as Element,
          intro: 'What do you want to do next with your app?',
        },
        {
          title: 'Farewell!',
          intro: 'And this is our final step!',
        },
      ],
    });
    intro.start();
  }
}

import { Component, OnInit } from '@angular/core';
import { IntroJs, Step } from 'intro.js';

declare const introJs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'text-to-speech-proj';

  synth = speechSynthesis;

  ngOnInit() {
    this.startTour();
    // this.speak('kartik');
  }

  startTour() {
    const intro: IntroJs = introJs();
    const steps = [
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
    ];

    intro.setOptions({
      steps: steps,
    });

    intro.start();
    this.speakStep(steps[0]);

    intro.onchange((targetEl: HTMLElement) => {
      // console.log('new step..');
      console.log(intro.currentStep());
      console.log(targetEl);
      const currentStepIndex = intro.currentStep();
      if (currentStepIndex) {
        const currentStep = steps[currentStepIndex];
        console.log(currentStep);
        this.speakStep(currentStep);
      }
    });
  }

  speakStep(currentStep: Step) {
    const utterance = `${currentStep.title} ! ${currentStep.intro}`;
    this.speak(utterance);
  }

  setUpSpeechSynthesis() {}

  onResourcesClick() {}

  speak(text: string) {
    if (this.synth.speaking) {
      console.log('already speaking.. cancelling current utterance');
      this.synth.cancel();
      // return;
    }

    const speakText = new SpeechSynthesisUtterance(text);
    this.synth.speak(speakText);
  }
}

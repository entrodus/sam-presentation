import { sandboxOf } from 'angular-playground';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';

const SAVED_HERO = {
  id: 47,
  name: 'a name'
}

export default sandboxOf(HeroDetailComponent, {
  imports: [
    FormsModule
  ]
})
  .add('default', {
    template: `<app-hero-detail [hero]="hero"></app-hero-detail>`,
    context: {
      hero: SAVED_HERO
    }
  })
  .add('New entity', {
    template: `<app-hero-detail [hero]="hero"></app-hero-detail>`,
    context: {
      hero: {}
    }
  })
  .add('capture output events (go back)', {
    template: `<app-hero-detail [hero]="hero" (goBack)="goBack()"></app-hero-detail>`,
    context: {
      hero: SAVED_HERO,
      goBack: () => alert('you clicked go back')
    }
  })
  .add('update context', {
    template: `
    <app-hero-detail [hero]="hero" (goBack)="logAction(actions, 'go back clicked')"></app-hero-detail>
    <span>actions: {{actions.join(',')}}</span>
    `,
    context: {
      hero: SAVED_HERO,
      logAction: (actions: string[], actionDescription: string) => {
        actions.push(actionDescription);
      },
      actions: []
    }
  });

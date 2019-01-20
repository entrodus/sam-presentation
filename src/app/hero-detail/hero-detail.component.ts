import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() save = new EventEmitter<Hero>();
  @Output() goBack = new EventEmitter<any>();

  get displayName(): string {
    return this.hero.name || '[anonymous hero]';
  }

  constructor() { }

  emitGoBack(): void {
    this.goBack.emit();
  }

  emitSave(): void {
    this.save.emit(this.hero);
  }
}

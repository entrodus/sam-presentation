import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-hero-detail-container',
  templateUrl: './hero-detail-container.component.html'
})
export class HeroDetailContainerComponent implements OnInit {
  @Input() hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero)
      .subscribe(() => this.goBack());
  }
}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  //selectedHero?: Hero;
  //heroes: Hero[] = [];

  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private heroService: HeroService, 
    private route: ActivatedRoute
    //private messageService: MessageService
    ) { }

  ngOnInit(): void {
    //this.getHeroes();
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10)
        return this.heroService.getHeroes();
      })
    )
  }

  onSelect(hero: Hero): void {
    //this.selectedId = hero;
    //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
}

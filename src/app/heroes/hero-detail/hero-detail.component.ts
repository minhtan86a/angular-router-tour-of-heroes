import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input() hero: Hero | undefined;
  hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit(): void {
    //paramMap gets the id parameter
    //route: ActivatedRoute service to retrieve the parameters for the route
    //paramMap gets the id parameter from the changed parameters. 
    //switchMap  If the user re-navigates to this route with a new id, discards that old request and returns the hero for the new id.
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        //params.get('id') Returns the parameter name value (a string)
        //return the result of the HeroService
        this.service.getHero(params.get('id')!)) 
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}

import { Crisis } from '../crisis';
import { CrisesService } from '../crises.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  //@Input() hero: Hero | undefined;
  crisis$!: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisesService
  ) { }

  ngOnInit(): void {
    //paramMap gets the id parameter
    //route: ActivatedRoute service to retrieve the parameters for the route
    //paramMap gets the id parameter from the changed parameters. 
    //switchMap  If the user re-navigates to this route with a new id, discards that old request and returns the crisis for the new id.
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        //params.get('id') Returns the parameter name value (a string)
        //return the result of the crisisService
        this.service.getCrisis(params.get('id')!)) 
    );
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);

    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}

import { Crisis } from '../crisis';
import { Component, OnInit } from '@angular/core';

import { CrisesService } from '../crises.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  //selectedHero?: Hero;
  //heroes: Hero[] = [];

  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private crisisService: CrisesService, 
    private route: ActivatedRoute
    //private messageService: MessageService
    ) { }

  ngOnInit(): void {
    //this.getcrises();
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10)
        return this.crisisService.getCrises();
      })
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RocketService, RocketInterface } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocketlist',
  templateUrl: './rocketlist.component.html',
  styleUrls: ['./rocketlist.component.css']
})
export class RocketlistComponent implements OnInit {
  rockets: Array<RocketInterface>;

  constructor(private service: RocketService, public router: Router) {
    this.rockets = [];
  }

  ngOnInit(): void {
    this.service.load().subscribe(rockets => this.rockets = rockets);
  }
}

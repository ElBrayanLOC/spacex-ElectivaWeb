import { Component, Input, OnInit } from '@angular/core';
import { RocketService, RocketInterface } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @Input()
  rocket: any;
  constructor(private service: RocketService) {
  }

  ngOnInit(): void {
  }

  isPositive() {
    return (this.rocket && this.rocket.height > 50);
  }

  isNegative() {
    return (this.rocket && this.rocket.height < 50);
  }

  delete(id: any) {
    this.service.remove(id);
    window.location.reload();
  }

  edit(rocket: RocketInterface){
    this.service.edit(rocket);
    window.location.reload();
  }
}

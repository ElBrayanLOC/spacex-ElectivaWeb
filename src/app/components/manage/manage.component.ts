import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RocketInterface, RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent implements OnInit {
  rocket: RocketInterface;
  accionButton: String = "Guardar";

  constructor(private service: RocketService, public router: Router) {
    this.rocket = {
      id: 0,
      name: '',
      description: '',
      height: 0,
      country: '',
      flickr_images: []
    };
  }

  ngOnInit(): void {
    if (this.router.url.split("/")[1] == 'edit') {
      this.accionButton = "Editar";
      this.rocket.id = Number(this.router.url.split("/")[2]);
    } else {
      this.accionButton = "Guardar";
    }
  }

  accionRocket() {
    if ((this.rocket.country || this.rocket.description || this.rocket.flickr_images || this.rocket.height
      || this.rocket.name || this.rocket.id) == "") {
      window.alert("Ingrese todos los campos antes " + this.accionButton);
    } else {
      if (this.accionButton == "Guardar") {
        this.save();
      } else if (this.accionButton == "Editar") {
        this.edit();
      }
    }
    this.service.load();
  }

  save() {
    this.service.add(this.rocket);
    setTimeout(() => {
      this.index();
    }, 1000);
}

edit() {
  this.rocket.id = Number(this.router.url.split("/")[2]);
  this.service.edit(this.rocket);
  setTimeout(() => {
    this.index();
  }, 1000);
}

index() {
  this.router.navigateByUrl('/')
}

}

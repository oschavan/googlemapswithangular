import { Component, OnInit } from '@angular/core';
import { GeoService } from "../shared/geo.service";
import { AgmCoreModule } from '@agm/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})


export class GoogleMapsComponent implements OnInit {

  lat: number ;
  lng: number ;
  //markers: any;
  subscription: any;

  markers: marker[] = [
	  {
		  lat: 18.514717,
		  lng: 73.930780,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 18.454842,
		  lng: 73.857941,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 18.500425,
		  lng: 73.858480,
		  label: 'C',
		  draggable: true
	  }
  ]

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor() { }

  ngOnInit() {
     this.getUserLocation();
     this.markers.push({
      lat: this.lat,
      lng: this.lng,
      label:"Current",
      draggable: true
    });
    // this.subscription = this.geo.hits
    // .subscribe(hits => this.markers = hits)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

     //   this.geo.getLocations(100, [this.lat, this.lng])
      });
    }
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

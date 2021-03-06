import { Component, OnInit,NgZone, ViewChild,ElementRef } from '@angular/core';
import { GeoService } from "../shared/geo.service";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MouseEvent } from '@agm/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import {  } from '@agm/core/services/google-maps-types';
//import { google } from '@google/maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})


export class GoogleMapsComponent implements OnInit {

  collection:string[]=[''];
  lat: number ;
  lng: number ;
  inputLocation: string='Katraj';
  inputDestination:string='Kharadi';
  //mapsAPILoader: MapsAPILoader;
  ngZone: NgZone;
  //infowindow:InfoWindow;
  pune:any;
  map:any;

  add(){
    this.collection.push("");
  }    

  constructor() { 
    // var pune = new google.maps.LatLng(18.500636,73.858705);
    // var infowindow = new google.maps.InfoWindow();
    // var ele = document.getElementById('map');
    //  this.map = new google.maps.Map(ele, {center: pune, zoom: 15});

  }

  searchLocation(){
    var pune = new google.maps.LatLng(18.500636,73.858705);
    var infowindow = new google.maps.InfoWindow();
    var ele = document.getElementById('map');
    let map = new google.maps.Map(ele, {center: pune, zoom: 15});

      var request = {
        query: this.inputLocation,
        fields: ['name', 'geometry'],
      };
    var service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          new google.maps.Marker({
            map: map,
            position: results[i].geometry.location
          });
      
          // google.maps.event.addListener(marker, 'click', function() {
          //   this.infowindow.setContent(results[i].name);
          //   this.infowindow.open(map, this);
          // });
          //this.createMarker(results[i],map);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  }

  public createMarker(place,map) {
    // var marker = new google.maps.Marker({
    //   map: map,
    //   position: place.geometry.location
    // });

    // google.maps.event.addListener(marker, 'click', function() {
    //   this.infowindow.setContent(place.name);
    //   this.infowindow.open(map, this);
    // });
  }

  //markers: any;
  subscription: any;

  markers: marker[] = [
	  // {
		//   lat: 18.514717,
		//   lng: 73.930780,
		//   label: 'A',
		//   draggable: true
	  // },
	  // {
		//   lat: 18.454842,
		//   lng: 73.857941,
		//   label: 'B',
		//   draggable: false
	  // },
	  // {
		//   lat: 18.500425,
		//   lng: 73.858480,
		//   label: 'C',
		//   draggable: true
	  // }
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

  
  ngOnInit() {
   
  }

  ngOnDestroy() {
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}


// getDirections(){
    // var pune = new google.maps.LatLng(18.500636,73.858705);    
    // var  ele = document.getElementById('map');
    // let map = new google.maps.Map(ele, {center: pune, zoom: 15});
  
    // var directionsService = new google.maps.DirectionsService;
    // var directionsDisplay = new google.maps.DirectionsRenderer;
    // directionsDisplay.setMap(map);
    // directionsService.route({
    //   origin: this.inputLocation,
    //   destination: this.inputDestination,
    //   travelMode: 'DRIVING'      
    // }, function(response, status) {
    //   if (status === 'OK') {
    //     directionsDisplay.setDirections(response);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });
  //}

  //private getUserLocation() {
    /// locate the user
    // if (navigator.geolocation) {
    //    navigator.geolocation.getCurrentPosition(position => {
    //     this.markers.push({
    //       lat:  position.coords.latitude, // 18.550378
    //       lng: position.coords.longitude,// 73.950017
    //       label:"Current",
    //       draggable: true
    //     });
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;

    //  //   this.geo.getLocations(100, [this.lat, this.lng])
    //   });
    // }
  //}
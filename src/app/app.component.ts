import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userCity: string | null = null;

  ngOnInit() {
    this.detectLocation();
  }

  detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          this.reverseGeocode(latitude, longitude);
        },
        error => {
          console.error('Geolocation error:', error);
          this.userCity = 'Location permission denied';
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      this.userCity = 'Geolocation not supported';
    }
  }

  reverseGeocode(latitude: number, longitude: number) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    fetch(nominatimUrl, {
      headers: {
        'User-Agent': 'YourAppName/1.0 (your@email.com)' // Replace with your app's name and contact email
      }
    })
      .then(response => response.json())
      .then(data => {
        this.userCity = data.address.city || data.address.town || data.address.village || 'Location not found';
      })
      .catch(error => {
        console.error('Reverse geocoding error:', error);
        this.userCity = 'Error retrieving location';
      });
  }
}

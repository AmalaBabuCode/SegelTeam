import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homepageBg: SafeStyle | undefined;
  bgColor1 = '#E5EAEE';
  bgColor2 = '#181818';
  bgColor3 = '#FFFFFF';
  textColor1 = '#FFFFFF';
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.homepageBg = this._sanitizer.bypassSecurityTrustUrl(
      'https://images.pexels.com/photos/2420412/pexels-photo-2420412.jpeg?cs=srgb&dl=pexels-flo-dahm-2420412.jpg&fm=jpg'
    );
  }
}

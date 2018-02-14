import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techtak',
  templateUrl: './techtak.component.html',
  styleUrls: ['./techtak.component.css']
})
export class TechtakComponent implements OnInit {

  tech:any[]=[
    {
      time:'02:25 PM ',
      date:'29th December 2017',
      videoSrc:'https://smedia2.intoday.in/mobiletv/201712/thumbnail_1514554350_430x241.jpeg',
      videoTitile:'Best Smartphones of 2017',
      videoDetails:'Google s has tied up with the chinese smartphone maker Xiaomi, and the result is Xiaomi Mi A1. Xiaomi'
    },
    {
       time:'01:20 PM',
       date:'27st December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/raajjonesthumbnail_1514463982_430x241.jpeg',
       videoTitile:'Little Techie: RAAJ JONES on BEST Budget Smartphone of 2017 ',
       videoDetails:'He tells you all about this smartphone-specs, performance, price and why you should be buying it...'
     },
     {
       time:'03:00 PM',
       date:' 17th December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/raajjonesinterview_thumbnail_1513829666_430x241.jpeg',
       videoTitile:'Delhi Ka Sabse Filmy Launda: Raaj Jones Talks Tech',
       videoDetails:'Delhi ka Sabse Filmy Launda -Raaj Jones had a candid talk with our tech producer Shivan....'
     }

] 
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifetak',
  templateUrl: './lifetak.component.html',
  styleUrls: ['./lifetak.component.css']
})
export class LifetakComponent implements OnInit {

  life:any[]=[
    {
      time:'01:25 PM ',
      date:'30th December 17',
      videoSrc:'https://smedia2.intoday.in/mobiletv/201712/desiauntyatwedding_thumbnail_1514548441_430x241.jpeg',
      videoTitile:'Desi Aunty At Weddings',
      videoDetails:'In this wedding season, you are definitely going to meet some aunty like this.'
    },
    {
       time:'01:20 PM',
       date:'31st December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/newyearrant_1514548218_430x241.jpeg',
       videoTitile:'Every Couple On New Year Resolutions | Relationship Ke Side Effects',
       videoDetails:'It s that time of the year, when you will be bored listening...'
     },
     {
       time:'02:00 PM',
       date:' 15 th December',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/peopleyoumeetinasharedcab_1514466305_430x241.jpeg',
       videoTitile:'People You Meet In A Shared Cab',
       videoDetails:'If you share cab rides often...'
     }

]  

  constructor() { }

  ngOnInit() {
  }

}

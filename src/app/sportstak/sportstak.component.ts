import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportstak',
  templateUrl: './sportstak.component.html',
  styleUrls: ['./sportstak.component.css']
})
export class SportstakComponent implements OnInit {

  sport:any[]=[
    {
      time:'12:25 PM ',
      date:'28th December 2017',
      videoSrc:'https://smedia2.intoday.in/mobiletv/201712/mojopvsindhunumber1_1514473116_430x241.jpeg',
      videoTitile:'2018 में सिंधु का लक्ष्य : नंबर 1 रैंकिंग',
      videoDetails:'ओलिंपिक रजत पदक विजेता पी. वी. सिंधू की नजरें अगले सत्र में दुनिया की नंबर 1 खिलाड़ी के स्थान पर टिकी हैं।...'
    },
    {
       time:'01:20 PM',
       date:'16st December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/pvsindhuonnewservicelawgrab_1514395137_430x241.jpeg',
       videoTitile:'पीवी सिंधू ने सर्विस नियम में बदलाव पर सवाल उठाए',
       videoDetails:'ओलंपिक और विश्व चैम्पियनशिप में मेडल जीतने वाली पीवी सिंधू ने हाल ही में प्रयोग के तौर पर किए गए सर्विस नियम में बदलाव के समय पर सवाल उठाए हैं...'
     },
     {
       time:'01:00 AM',
       date:' 10th December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/marionbartoligrab_1513782834_430x241.jpeg',
       videoTitile:'4 साल बाद ये खिलाड़ी करेंगी वापसी',
       videoDetails:'वीडियों देखिए और जानिए कौन है वो खिलाड़ी जो लंबे समय और संन्यास लेने के बाद टेनिस में फिर से एक बार वापसी कर रही है...'
     }

] 

  constructor() { }

  ngOnInit() {
  }

}

import {Component} from '@angular/core'

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{
 home:any[]=[
     {
       time:'03:25 PM ',
       date:'31st December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/cutepanda_1514713419_430x241.jpeg',
       videoTitile:'चीन के इस पांडा की क्यूट हरकत आपको गुदगुदा देगी',
       videoDetails:'मस्ती के मामले में इन क्यूट पांडा का कोई जवाब नहीं... कुछ ऐसी है इनकी ...'
     },
     {
        time:'01:20 PM',
        date:'31st December 2017',
        videoSrc:'https://smedia2.intoday.in/mobiletv/201712/celebritiesnye_1514706467_430x241.jpeg',
        videoTitile:'नए साल पर बॉलीवुड स्टार कहां और कैसे मना रहे हैं जश्न?',
        videoDetails:'नए साल शुरू होने वाला है ऐसे में आप जानना चाहेंगे कि नए साल पर बॉलीवुड...'
      },
      {
        time:'03:00 PM',
        date:' 30 th December',
        videoSrc:'https://smedia2.intoday.in/mobiletv/201712/mumunseenpkg_1514630746_430x241.jpeg',
        videoTitile:'मुंबई में हुए भयानक हादसे के अनदेखे VIDEO',
        videoDetails:'मुंबई में हुए भयानक हादसे के अनदेखे VIDEO...'
      }

 ]   
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodtak',
  templateUrl: './foodtak.component.html',
  styleUrls: ['./foodtak.component.css']
})
export class FoodtakComponent implements OnInit {

  food:any[]=[
    {
      time:'03:25 PM ',
      date:'31st December 2017',
      videoSrc:'https://smedia2.intoday.in/mobiletv/201712/chickentikka6_1514471539_430x241.jpeg',
      videoTitile:'chicken Pineapple Seekh',
      videoDetails:'नए साल की पार्टी में परोसें चिकन पाइनएप्पल सीख सामग्री -बोनलेस चिकन चंक्स फ्रेश पाइनएप्पल पीली, लाल और हरी शिमला मिर्च तुरईप्याज़काली मिर्च मिक्स्ड जड़ी बूटीलाल शिमला मिर्चनमक तेल बारबेक्यू के लिए - पाइनएप्पल सॉस पाइनएप्पल'
    },
    {
       time:'01:20 PM',
       date:'25st December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/crispyfriedchillichicken_thumbnail_1513134917_430x241.jpeg',
       videoTitile:'Crispy Fried Chilli Chicken',
       videoDetails:'Here s some Crispy Fried Chilli Chicken to Tickle your taste buds this winter. Restaurant Courtesy- Café Delhi Heights, New Delhi Ingredients: • 4 large chicken breats• 2 tbsp red chilli paste• Juice of 2 limes• Salt to taste• Freshly ground ...'
     },
     {
       time:'03:00 PM',
       date:'20th December 2017',
       videoSrc:'https://smedia2.intoday.in/mobiletv/201712/crispyrockshrimpswithchillimayo_1512459555_430x241.jpeg',
       videoTitile:'Crispy Rock Shrimps',
       videoDetails:'Crispy Rock Shrimps is a super quick and easy to make recipe which is a perfect dish for an evening snack.Ingredients:• ½ Cup Mayonnaise• 1 ½ Tablespoon Asian Chilli Sauce• 1 Teaspoon Honey• Salt to Taste• 2 Large Eggs...       '
     }

]

  constructor() { }

  ngOnInit() {
  }

}

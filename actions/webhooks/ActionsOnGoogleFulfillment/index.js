const { conversation, CollectionBrowse, Simple, Suggestion} = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation();

const cards = [
  {
  	id: 1,
    name: "Wspólne gotowanie z dziewczyną",
    spent: 1500.59,
    limit: 2000.00,
    img: "https://paymate.pl/cards/groceries-card.png"
  },
  {  	
    id: 2,
    name: "Opłaty za wynajem mieszkania",
    spent: 2500.00,
    limit: 2500.00,
    img: "https://paymate.pl/cards/services-card.png"
  },
  {
    id: 3,
  	name: "Zakupy dla babci",
    spent: 11.69,
    limit: 250.00,
    img: "https://paymate.pl/cards/general-card.png"
  }
];

app.handle('showCardsHandle', conv => { 
    conv.add(new Suggestion({
    	title: "Powtórz" 
    }));
  
    conv.add(new Suggestion({
    	title: "Wyświetl szczegóły ..." 
    }));
  
  conv.add(new Simple({
    speech: "<speak><p><s>Twoje konta to </s><break time=\"200ms\"/> " +
    cards.map(
      function(card) {
    		return "<s>"+card.name+".</s><s>Zostało " +card.spent +"zł z "+card.limit + "zł</s><break time=\"200ms\"/> ";
		}) +
   "</p></speak>",
    text: " "
  }));
           
  conv.add(new CollectionBrowse({
    'imageFill': 'WHITE',
    'items': cards.map(
      function(card) {
    		return {
          'title': card.name,
          'description': 'Zostało: '+card.spent.toFixed(2) +" zł",
          'footer': '  　   z '+card.limit.toFixed(2)+' zł',
          'image': {
            'url': card.img
          },
          'openUriAction': {
            'url': 'https://paymate.pl/accounts/details/'+card.id
          }
        };
		})
  }));
});


app.handle('accNameDetailsHandle', conv => { 
      conv.add(new Suggestion({
    	title: "Powtórz" 
    }));
  
  conv.add(new Simple({
    speech: "<speak><p><s>Szczegóły którego konta chcesz zobaczyć? Dostępne to: </s><break time=\"100ms\"/> " +
    cards.map(
      function(card) {
    		return card.name+"<break time=\"100ms\"/>";
		}) +
   "</p></speak>",
    text: "Szczegóły którego konta chcesz zobaczyć? Dostępne to: " + cards.map(
      function(card) {
    		return card.name;
		}).join(', ') + "."
  }));
          
});


exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);

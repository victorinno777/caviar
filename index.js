const osmosis = require('osmosis');
osmosis
    .get('www.google.com')
    .set({'Title': 'title'})   // ������������: `.find('title').set('Title')`
    .data(console.log)  // ������� {'Title': 'Google'}
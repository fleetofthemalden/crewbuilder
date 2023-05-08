const $ = require('jquery');

let scrapeyScrape = () => {
  let clubs = [];
  const rows = [...$('tbody:first tr > td')];
  rows.forEach(row => {
    let name = '';
    let clubLocation = '';
    let imgUrl = '';
    let websiteUrl = '';
    const els = [...row.children];
    els.forEach(el => {
      switch(el.tagName) {
        case 'A':
          websiteUrl = el.href;
          name = el.lastChild.innerHTML;
          // if (el.children.length > 1) {
          //   // handle alt image
          // }
          break;
        case 'B':
          name = el.innerHTML;
          break;
        case 'I':
          clubLocation = el.innerHTML;
          break;
        case 'IMG':
          imgUrl = el.src;
        default:
          break;
      }
    });
    const cityStateArr = clubLocation.split(',');
    const clubData = {
      name,
      city: cityStateArr[0].replace('-', '').trim(),
      state: cityStateArr[1] && cityStateArr[1].trim(),
      imgUrl,
      websiteUrl,
    };
    clubs.push(clubData);
  });
  return clubs;
};
scrapeyScrape();
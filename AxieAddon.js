function createUrl(queries) {
  let url = 'https://marketplace.axieinfinity.com/axie?';
  queries.forEach((q) => {
    url += q;
  });
  return url;
}

function getClass() {
  const c =
    'class=' + document.querySelector('div.mr-28 .ml-4.capitalize').innerText;
  return c;
}

function getParts() {
  const partsEle = document.querySelectorAll('h5.font-medium.truncate');
  let parts = [];
  let i = 0;
  partsEle.forEach((part) => {
    let query = '&part=';
    switch (i) {
      case 0:
        query += 'eyes-';
        break;
      case 1:
        query += 'ears-';
        break;
      case 2:
        query += 'back-';
        break;
      case 3:
        query += 'mouth-';
        break;
      case 4:
        query += 'horn-';
        break;
      case 5:
        query += 'tail-';
        break;

      default:
        break;
    }
    const name = part.innerText.toLowerCase().replace(' ', '-');
    parts.push(query + name);
    i++;
  });
  return parts;
}

function getQuery(type, selector) {
  const t = document.querySelectorAll(
    'text-gray-1 font-bold leading-14 text-10 tracking-1 uppercase',
  );

  return document.querySelector(selector);
}

var queries = [getClass(), ...getParts()];
var url = createUrl(queries);
url;

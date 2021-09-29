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
    let query = '';

    if (i === 0) {
      // query += '&part=eyes-';
    } else if (i === 1) {
      // query += '&part=ears-';
    } else if (i === 2) {
      query += '&part=back-';
    } else if (i === 3) {
      query += '&part=mouth-';
    } else if (i === 4) {
      query += '&part=horn-';
    } else if (i === 5) {
      query += '&part=tail-';
    }

    if (query) {
      const name = part.innerText.toLowerCase().replace(' ', '-');
      parts.push(query + name);
    }
    i++;
  });
  return parts;
}

var queries = [getClass(), ...getParts()];
var url = createUrl(queries);
url;

const http = require('http');

function httpReq(url) {
  return new Promise(
    function (resolve, reject) {
      http.get(url, res => {
        res.setEncoding('utf8');
        resolve(res);
      });
    }
  );
}

const onData = res => res.on('data', data => console.log(data));
const onError = data => data.on('error', err => console.log.bind(console));

httpReq(process.argv[2])
  .then(onData)
  .catch(onError);

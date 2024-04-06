const http = require('http');
const https = require('https');

const url = 'https://time.com';
function makeRequest(url, callback) {
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      callback(null, data);
    //   console.log(data)
    });
  }).on('error', (error) => {
    callback(error, null);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/getTimeStories') {
    try {
      makeRequest(url, (error, html) => {
        if (error) {
          console.error(`Failed to retrieve the webpage: ${error.message}`);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        const stories = [];
        console.log(html)
        
        let str=`<li class="latest-stories__item">
        <a href="/6962474/heart-disease-research-women/">
          <h3 class="latest-stories__item-headline">Why Heart Disease Research Favors Men</h3>
        </a>
          <div class="time-to-read">11 MIN READ</div>
        <time class="latest-stories__item-timestamp">
          April 5, 2024 • 11:03 AM EDT
        </time>
      </li>`
       
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(stories));
      });
    } catch (error) {
      console.error(`Failed to retrieve the webpage: ${error.message}`);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
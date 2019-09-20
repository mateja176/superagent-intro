import * as https from 'https';

let data: Buffer = Buffer.from('');

https.get(
  {
    hostname: 'api.github.com',
    path: '/users',
    headers: { 'user-agent': 'mateja176' },
  },
  res => {
    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(data.toString());
    });
  },
);

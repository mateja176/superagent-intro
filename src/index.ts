import * as sa from 'superagent';

sa.get('https://api.github.com/users')
  .set({ 'user-agent': 'mateja176' })
  .then(res => res.text)
  .then(console.log)
  .catch(console.error);

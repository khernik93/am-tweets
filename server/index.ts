import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import Config from './config';
import TransferHttp from './transfer-http';

const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));

app.get('/api/tweets/:hashtag', (req, res) => {
  const hashtag = req.query.hashtag;
  new TransferHttp().get(Config.api, `/hashtags/${hashtag}`)
    .pipe(
      catchError((err: any) => {
        console.error(err);
        return of(err);
      })
    )
    .subscribe((result: any) => {
      res.status(200).send(result);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

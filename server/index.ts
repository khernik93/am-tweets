import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import Config from './config';
import TransferHttp from './transfer-http';
import { Tweet } from './models/tweet.model';

const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));

app.get('/api/hashtags/:hashtag', (req, res) => {
  const hashtag = req.params.hashtag;
  new TransferHttp().get(Config.api, `/hashtags/${hashtag}`)
    .pipe(
      catchError((response: any) => {
        console.error(response.data);
        throw 'Internal server error';
      })
    )
    .subscribe(
      (tweets: Tweet[]) => res.status(200).send(tweets),
      (error: string) => res.status(500).send(error)
    );
});

app.get('/api/users/:user', (req, res) => {
  const user = req.params.user;
  new TransferHttp().get(Config.api, `/users/${user}`)
    .pipe(
      catchError((response: any) => {
        console.error(response.data);
        throw 'Internal server error';
      })
    )
    .subscribe(
      (tweets: Tweet[]) => res.status(200).send(tweets),
      (error: string) => res.status(500).send(error)
    );
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

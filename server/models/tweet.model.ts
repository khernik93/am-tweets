import { Account } from './account.model';

export type Tweet = {
  account: Account,
  date: string,
  hashtags: string[],
  likes: number,
  replies: number,
  retweets: number,
  text: string
};

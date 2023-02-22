import { Account } from './account.model';

export type Cooperated = {
  document: string;
  name: string;
  status: string;
  accounts: Account[];
};

import { Account } from './account.model';

export type DocumentStatus = 'REGULAR' | 'IRREGULAR';

export type Cooperated = {
  document: string;
  name: string;
  status: DocumentStatus;
  accounts: Account[];
};

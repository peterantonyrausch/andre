export type AccountType = 'APPLICATION' | 'CURRENT';

export type Account = {
  accountType: AccountType;
  cooperativeName: string;
  accountNumber: string;
};

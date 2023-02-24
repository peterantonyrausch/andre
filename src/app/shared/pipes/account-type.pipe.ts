import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from '../../core/models/account.model';

@Pipe({
  name: 'accountType',
})
export class AccountTypePipe implements PipeTransform {
  transform(value: AccountType): string {
    const handler: { [key in AccountType]: string } = {
      APPLICATION: 'Conta aplicação',
      CURRENT: 'Conta corrente',
    };

    return handler[value];
  }
}

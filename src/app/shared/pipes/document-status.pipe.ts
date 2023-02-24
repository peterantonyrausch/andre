import { Pipe, PipeTransform } from '@angular/core';

import { DocumentStatus } from '../../core/models/cooperated.model';

@Pipe({
  name: 'documentStatus',
})
export class DocumentStatusPipe implements PipeTransform {
  transform(value: DocumentStatus): string {
    const string = value.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

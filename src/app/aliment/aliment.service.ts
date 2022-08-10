import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  public aliments: string[] = [];

  constructor(private logService: LogService) {}

  public addOne(aliment: string): void {
    this.aliments.push(aliment);
    this.logService.log('Aliment added successfully.');
  }

  public removeOne(index: number): void {
    this.aliments.splice(index, 1);
    this.logService.log('Aliment removed successfully.');
  }
}

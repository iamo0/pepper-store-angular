import { Component, inject } from '@angular/core';
import { Checkbox } from '../../components/checkbox/checkbox';
import { CatalogData } from '../../services/catalog-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [Checkbox, CurrencyPipe],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  catalog = inject(CatalogData);
}

import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  events1: any[];

  constructor() {
    this.events1 = [
      {company: 'CAPGEMINI BRAZIL',jobPosition: 'IT Senior Developer',period: '2022 - '},
      {company: 'F1RST | SANTANDER',jobPosition: 'Full Stack | IT Analyst+',period: '2021 - 2022'},
      {company: 'GTM HOLDING',jobPosition: 'IT Intern',period: '2020 - 2021'},
      {company: 'ITAÚ UNIBANCO',jobPosition: 'Agente Comercial II',period: '2013 - 2019'}
  ];
  }
}

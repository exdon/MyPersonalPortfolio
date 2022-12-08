import { ChangeLanguageService } from './../../services/change-language.service';
import { Teste } from './../../../shared/models/titles.interface';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public readonly Teste = Teste;

  constructor(private changeLanguageService: ChangeLanguageService ) {}

  changeLanguage(language: Event) {
    const valueAttribute = (language?.target as HTMLInputElement).value;
    this.changeLanguageService.changeLanguage(valueAttribute);
  }
}

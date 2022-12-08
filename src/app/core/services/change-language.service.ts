import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Titles } from '../../shared/models/titles.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {

  constructor(private translate: TranslateService) {}

  public changeLanguage(language: string) {
    localStorage.setItem("lang", language)
    this.translate.use(language)
  }
}

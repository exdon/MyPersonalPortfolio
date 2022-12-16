import { ChangeLanguageService } from './../../services/change-language.service';
import { Teste } from './../../../shared/models/titles.interface';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnInit {
  items: MenuItem[];

  currentLanguage = localStorage.getItem('lang') || 'pt-BR';

  checked1: boolean = false;


  public openMenuToggle: boolean = false;

  menuSection = document.querySelector(".menu-section");
  menuToggle = document.querySelector(".menu-toggle");



  constructor(
    private changeLanguageService: ChangeLanguageService,
    private elementRef: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute
    )
    {
      this.items = [
        {
            label: 'File',
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
        }
      ];
  }

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.toggleChanges();
      }
    });

    console.log(this.router.url)
    console.log(this.activatedRoute.snapshot.url)
  }


  ngAfterViewInit(): void {
      this.elementRef.nativeElement.querySelector(".menu-toggle").addEventListener('click', () => {
        document.body.style.overflow = this.openMenuToggle ? "initial" : "hidden";
        this.openMenuToggle = !this.openMenuToggle;
      });
  }

  toggleChanges() {
    this.openMenuToggle = false;
    document.body.style.overflow = "initial";
  }

  changeLanguage(language: string) {
    console.log(language)
    // const valueAttribute = (language?.target as HTMLInputElement).value;
    console.log(language)
    this.changeLanguageService.changeLanguage(language);
  }

  getCurrentLanguage() {
    return localStorage.getItem('lang');
  }
}

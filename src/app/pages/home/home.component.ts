import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dowloadMyCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/cv.pdf');
    link.setAttribute('download', `Developer,Erik Xavier do Nascimento.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    console.log("dowloading....")
  }

  goTocontactPage() {
    console.log("chamou")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}
  cvUrl = 'CV Moneret Tom 2025 .pdf';

  DownloadCV() {
    // Remplacez par l'URL de votre CV

    const link = document.createElement('a');
    link.href = this.cvUrl;
    link.download = 'mon_cv.pdf'; // Nom du fichier lors du téléchargement
    link.click();
  }
}

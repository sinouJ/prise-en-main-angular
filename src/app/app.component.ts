import { Component, VERSION } from '@angular/core';
import { DessinMystere } from './shared/dessin'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ajouterVersion('Ma première application Angular');
  
  public dessine(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext("2d");
    ctx!.strokeStyle = "grey";
    ctx!.lineWidth = 4;
    ctx!.strokeRect(0, 0, canvas.width, canvas.height);
    
    const couleur = {
      rouge: 55,
      vert: 189,
      bleu: 255
    }
    
    const dessine = new DessinMystere(ctx!, couleur, 20)
    
    const aleatoire = (min: number, max: number) => Math.floor(Math.random() * (max-min)) + min
    setTimeout(() => dessine.changeCouleur(aleatoire) ,500)
  }

}

const version = VERSION.full
const ajouterVersion = (texte: string = 'Mon application'): string => `${texte} (basée sur Angular ${version})`
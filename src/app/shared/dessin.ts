interface CouleurRVB {
  rouge: number,
  vert: number,
  bleu: number
}

class Dessin {
  
  constructor(protected ctx: CanvasRenderingContext2D, private couleur: CouleurRVB) {
    this.couleur = couleur
  }
  
  affiche(): void {
    const couleurCSS = `rgb(${this.couleur.rouge}, ${this.couleur.vert}, ${this.couleur.bleu})`
    this.ctx.fillStyle = couleurCSS
  }
  
  changeCouleur(change: Function) {
    this.couleur.rouge = change(100, 255);
    this.couleur.vert = change(100, 255);
    this.couleur.bleu = change(100, 255);
    this.affiche();
  }
}

export class DessinMystere extends Dessin {
  
  constructor(
    ctx: CanvasRenderingContext2D,
    couleur: CouleurRVB,
    private angle: number
  ) {
    super(ctx, couleur);
  }

  override affiche(): void {
    super.affiche();

    let x = 230, y = 200, a;
    const coins =
      [{x: 230, y: 10}, {x: 10, y: 390}, {x: 450, y: 390 - this.angle}];
    for (let i = 0; i < 50000; i++) {
      this.ctx.fillRect(x, y, 1, 1);
      a = Math.floor(Math.random() * 3);
      x = (x + coins[a].x) / 2;
      y = (y + coins[a].y) / 2;
    }
  }
}
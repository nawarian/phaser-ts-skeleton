import PhaserImg from '@objects/PhaserImg';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {}

  create(): void {
    const phaser = PhaserImg.create(this, 400, 100);

    const particles = this.add.particles();
    particles.setConfig({
      texture: 'particle',
      scale: { start: 1, end: 0 },
      speed: 100,
      blendMode: 'ADD',
    });

    particles.startFollow(phaser);
  }

  preload(): void {}

  update(): void {}
}

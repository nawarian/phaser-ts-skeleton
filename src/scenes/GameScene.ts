import PhaserImg from '@objects/PhaserImg';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {}

  create(): void {
    const particles = this.add.particles('particle');

    const phaser = PhaserImg.create(this, 400, 100);

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    emitter.startFollow(phaser);
  }

  preload(): void {}

  update(): void {}
}

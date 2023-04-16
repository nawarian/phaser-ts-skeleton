export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {}

  create(): void {
    const particles = this.add.particles('particle');

    const phaser = this.physics.add.image(400, 100, 'phaser');
    phaser.setScale(0.4, 0.4);
    phaser.setVelocity(100, 200);
    phaser.setBounce(1, 1);
    phaser.setCollideWorldBounds(true);

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

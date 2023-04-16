export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image('phaser', 'assets/phaser.png');
    this.load.image('particle', 'assets/particle.png');
  }

  update(): void {
    this.scene.start('GameScene');
  }
}

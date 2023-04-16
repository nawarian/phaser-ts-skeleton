import phaserImg from '../../assets/phaser.png';
import particleImg from '../../assets/particle.png';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image('phaser', phaserImg);
    this.load.image('particle', particleImg);
  }

  update(): void {
    this.scene.start('GameScene');
  }
}

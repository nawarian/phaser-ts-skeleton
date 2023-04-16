import phaserImg from '@assets/phaser.png';
import particleImg from '@assets/particle.png';
import { TEXTURE_KEY as PHASER_TEXTURE_KEY } from '@objects/PhaserImg';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image(PHASER_TEXTURE_KEY, phaserImg);
    this.load.image('particle', particleImg);
  }

  update(): void {
    this.scene.start('GameScene');
  }
}

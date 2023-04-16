export const TEXTURE_KEY = 'phaser';

export default class PhaserImg extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, TEXTURE_KEY);
  }

  static create(scene: Phaser.Scene, x: number, y: number) {
    const phaser = new PhaserImg(scene, x, y);

    scene.add.existing(phaser);
    scene.physics.add.existing(phaser);

    phaser
      .setScale(0.4, 0.4)
      .setVelocity(100, 200)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);

    return phaser;
  }
}

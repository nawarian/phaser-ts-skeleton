export class BootScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BootScene' });
	}

	preload(): void {}

	update(): void {
		this.scene.start('GameScene');
	}
}

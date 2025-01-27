class Paladin {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./redamong.png"), 0, 0, 118, 102, 8, 0.25, 6.7, false, true);
		this.x = 0;
		this.y = 0;
		this.speed = 100;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 1024) this.x = 0;

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}
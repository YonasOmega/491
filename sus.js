class Sus {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./suspect.PNG"), 0, 0, 236, 200, 4, 0.12, 6.3, false, true);
		this.background = ASSET_MANAGER.getAsset("./background.jpg");
		this.x = -400;
		this.y = 450;
		this.speed = 300;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 1024) this.x = -400;

	};

	draw(ctx) {
		ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}
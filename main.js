const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/ChiefSprites.png");
ASSET_MANAGER.queueDownload("./sprites/Guns.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	gameEngine.addEntity(new MasterChief(gameEngine));

	ctx.imageSmoothingEnabled = false;
	
	gameEngine.init(ctx);

	gameEngine.start();
});

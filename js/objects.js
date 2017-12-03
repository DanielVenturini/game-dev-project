
class Hole extends Phaser.Sprite {
    constructor(game, x, y, asset) {
        super(game, x, y, 84, 84, asset)
        this.game.physics.arcade.enable(this)
        this.body.syncBounds = true
        this.body.immovable = true
        this.tag = 'hole'
        this.autoCull = true        //desabilita o objeto quando sair do limite da tela
    }

    update() {
        // logica do npc
    }
}

class Block extends Phaser.TileSprite {
    constructor(game, x, y, asset) {
        super(game, x, y, 32, 32, asset)
        this.game.physics.arcade.enable(this)
        this.body.syncBounds = true
        this.body.immovable = true
        this.tag = 'wall'
        this.autoCull = true
    }
}

class Star extends Phaser.TileSprite {
    constructor(game, x, y, asset) {
        super(game, x, y, 32, 32, asset)
        this.game.physics.arcade.enable(this)
        this.body.syncBounds = true
        this.body.immovable = true
        this.tag = 'star'
        this.autoCull = true

        this.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 10, true)
        this.animations.play('rotate')
    }

    update(){
        //this.game.physics.arcade.overlap(this, this.gamememe.ball, this.getPoints)
    }
}

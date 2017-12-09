
class Hole extends Phaser.Sprite {
    constructor(game, x, y, asset) {
        super(game, x, y, asset)
        this.game.physics.arcade.enable(this)
        this.body.immovable = true
        this.body.syncBounds = true
        this.tag = 'hole'
        this.autoCull = true        //desabilita o objeto quando sair do limite da tela

        this.game = game
    }

    canKill(hole, ball){

        var distX = (ball.body.x - hole.body.x)
        var distY = (ball.body.y - hole.body.y)

        if(distX < 0)   distX *= (-1)
        if(distY < 0)   distY *= (-1)

        if(distX < 35 && distY < 35){
            ball.kill()
        } else {
            return
        }

        if(hole.key == "nHole"){
            ball.text.text = "Parabens !!!"
            ball.musicEnd.play()
            return
        }

        ball.musicHole.play()
    }

    update() {
        this.game.physics.arcade.overlap(this, this.game.ball, this.canKill)
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
        this.score = 0

        this.game = game
        this.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 10, true)
        this.animations.play('rotate')
    }

    next(star, ball){
        star.kill()
        star.music.play()
        console.log("jah tocou")
    }

    update(){
        this.game.physics.arcade.collide(this, this.game.ball, this.next)

        if(this.key == "nHole"){
            this.angle += 5
        }
    }
}


class PlayState extends GameState {

    preload() {
        this.game.load.image('fullscreen-button', 'assets/fullscreen-button.png')
        this.game.load.spritesheet('star', 'assets/star.png', 62, 62)
        this.game.load.image('background', 'assets/background1.png')
        this.game.load.image('ball', 'assets/ball_orange.png')
        this.game.load.image('black', 'assets/black.png')
        this.game.load.image('hole', 'assets/hole.png')
        this.game.load.image('wall', 'assets/wall.png')
        
        this.game.load.tilemap('mapa', 'assets/mapa1.json', null, Phaser.Tilemap.TILED_JSON)
    }
    
    create() {

        this.map = null
        this.stars = null
        this.balls = null
        this.ball = null
        this.speed = 9
        this.angular = this.speed

        this.game.renderer.roundPixels = true
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        
        this.game.add.tileSprite(0, 0, 1980, 1044, 'background')
        this.game.world.setBounds(0, 0, 1980, 1044)
        
        // mapa com paredes
        this.mapTmx
        this.createMap(this.mapTmx)
        
        //bola
        this.keys
        this.getKey()
        this.createPlayer()
        this.game.add.existing(this.ball)
        this.game.camera.follow(this.ball)

        window.addEventListener("deviceorientation",  this.handleOrientation.bind(this), true)
        this.game.map = this.map
        this.game.stars = this.stars
        
        super.initFullScreenButtons()
    }

    handleOrientation(evnt) {
        var z = evnt.alpha
        var y = evnt.beta
        var x = evnt.gamma

        this.ball.body.velocity.x += x
        this.ball.body.velocity.y += y
    }

    getKey(){
        this.keys = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
        }
    }

    createPlayer() {

        this.ball = this.game.add.sprite(110, 110, 'ball')
        this.ball.anchor.setTo(0.5, 0.5)
        //this.ball.scale.setTo(0.02, 0.02)
        this.game.physics.enable(this.ball)//, Phaser.Physics.ARCADE)
        //this.ball.body.setCircle(this.width/2);
        this.ball.body.drag.set(100)

        //this.ball.body.collideWorldBounds = true
        //this.ball.body.bounce.set(0.3, 0.3)
        this.ball.body.maxVelocity = (this.speed*this.speed*3.5)
        this.ball.body.drag.set(100)
    }

    createMap(mapTmx) {
        this.mapTmx = this.game.add.tilemap('mapa')
        this.game.world.setBounds(0, 0, this.mapTmx.widthInPixels, this.mapTmx.heightInPixels)

        this.map = this.game.add.group()
        this.stars = this.game.add.group()
        this.balls = this.game.add.group()

        //this.ball = new Ball(this.game, 110, 110, 'ball')

        this.mapTmx.createFromObjects('mapa1', 3, 'star', 0, true, false, this.stars, Star)
        //this.mapTmx.createFromObjects('mapa1', 6, 'ball', 0, true, false, this.balls, Ball)
        this.mapTmx.createFromObjects('mapa1', 1, 'wall', 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 2, 'black', 0, true, false, this.map, Block)
    }

    killStar(ball, star){
        star.kill()
    }

    update() {
        //this.movePC()
        this.game.physics.arcade.collide(this.ball, this.map)
        this.game.physics.arcade.collide(this.ball, this.stars, this.killStar)
    }

    movePC() {
        this.click = false

        if(this.keys.left.isDown) {
            this.click = true
            this.ball.body.velocity.x -= this.speed
            this.ball.body.angularVelocity -= this.angular
        }
        else if(this.keys.right.isDown) {
            this.click = true
            this.ball.body.velocity.x += this.speed
            this.ball.body.angularVelocity += this.angular
        }

        if(this.keys.up.isDown) {
            this.click = true
            this.ball.body.velocity.y -= this.speed
            this.ball.body.angularVelocity -= this.angular
        }
        else if(this.keys.down.isDown) {
            this.click = true
            this.ball.body.velocity.y += this.speed
            this.ball.body.angularVelocity += this.angular
        }

        if(this.click == false){
            this.ball.body.angularVelocity += this.ball.body.angularVelocity*(-0.05)
        }
    }

    updateHud() {
        this.text1.text = 'PLAYER A: ' + this.ball.health
        this.text2.text = 'PLAYER B: ' + this.player2.health
    }

    render() {
    //    game.debug.body(npc)
    //    game.debug.body(ball)
    //    game.debug.body(player2)
    }

    createMap2() {
        let mapData = [ "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                        "X                              X                             X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X          XXXXXXXXXXX         X",
                        "X          X         X         X",
                        "X                               ",
                        "X                               ",
                        "X                               ",
                        "X                              X",
                        "X          X         X         X",
                        "X          XXXXXXXXXXX         X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "X                              X",
                        "XXX   XXXXXXXXXXXXXXXXXXXXXXXXXX"]

        this.map = this.game.add.group()
        for (let row = 0; row < mapData.length; row++) {
            for (let col = 0; col < mapData[0].length; col++) {
                if (mapData[row][col] == 'X') {
                    let block = this.map.create(col*32, row*32, 'wall')
                    block.scale.setTo(0.5, 0.5)
                    this.game.physics.arcade.enable(block)
                    block.body.immovable = true
                    block.tag = 'wall'
                    //block.inputEnabled = true
                    //block.input.enableDrag(false, true)
                }
            }
        }
    }
}

window.onload = function() {
    // funciona como singleton
    const GAME = new Game()
}

class PlayState extends GameState {

    preload() {
        this.game.load.image('fullscreen-button', 'assets/fullscreen-button.png')
        this.game.load.spritesheet('star', 'assets/star.png', 62, 62)
        this.game.load.image('background', 'assets/background1.png')
        this.game.load.image('ball', 'assets/ball_main.png')
        this.game.load.image('nHole', 'assets/nextHole.png')
        this.game.load.image('click', 'assets/click.png')
        this.game.load.image('black', 'assets/black.png')
        this.game.load.image('pause', 'assets/pause.png')
        this.game.load.image('menu', 'assets/menu.png')
        this.game.load.image('hole', 'assets/hole.png')
        this.game.load.image('wall', 'assets/wall.png')

        this.game.load.tilemap('mapa', 'assets/mapa1.json', null, Phaser.Tilemap.TILED_JSON)

        this.game.load.audio('end', ['audio/end.mp3', 'audio/end.ogg'])
        this.game.load.audio('hole', ['audio/hole.mp3', 'audio/hole.ogg'])
        this.game.load.audio('star', ['audio/star.mp3', 'audio/star.ogg'])
    }

    create() {

        //groups
        this.map = null
        this.stars = null
        this.holes = null

        this.speed = 9
        this.ball = null
        this.angular = this.speed
        this.level = 1
        this.pause
        this.menu

        this.game.renderer.roundPixels = true
        this.game.world.setBounds(0, 0, 1980, 1044)
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.add.tileSprite(0, 0, 1980, 1044, 'background')

        //map
        this.mapTmx
        this.createMap(this.mapTmx)

        //anothers config
        this.keys
        this.getKey()
        this.createPlayer()
        this.game.add.existing(this.ball)
        this.game.camera.follow(this.ball)

        //add in game
        window.addEventListener("deviceorientation",  this.handleOrientation.bind(this), true)
        this.game.map = this.map
        this.game.ball = this.ball
        this.game.stars = this.stars

        //score
        this.ball.score = 2
        
        //sound
        this.ball.musicStar = this.game.add.audio('star')
        this.ball.musicHole = this.game.add.audio('hole')
        this.ball.musicEnd = this.game.add.audio('end')

        this.createMenu()

        super.initFullScreenButtons()
    }

    handleOrientation(evnt) {
        var z = evnt.alpha
        var y = evnt.beta
        var x = evnt.gamma

        this.ball.body.velocity.x += x
        this.ball.body.velocity.y += y
    }

    createHealthText(x, y, string) {
        let style = {font: 'bold 56px Arial', fill: 'white'}
        let text = this.game.add.text(x, y, string, style)
        text.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2)
        text.anchor.setTo(0.5, 0.5)
        return text
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
        this.game.physics.enable(this.ball)
    
        this.ball.body.maxVelocity = (this.speed*this.speed*3.5)
        this.ball.body.collideWorldBounds = true
        this.ball.anchor.setTo(0.5, 0.5)
        this.ball.body.drag.set(100)
        this.ball.body.drag.set(100)
    }

    createMap(mapTmx) {
        this.mapTmx = this.game.add.tilemap('mapa')
        this.game.world.setBounds(0, 0, this.mapTmx.widthInPixels, this.mapTmx.heightInPixels)

        this.map = this.game.add.group()
        this.stars = this.game.add.group()
        this.holes = this.game.add.group()

        this.mapTmx.createFromObjects('mapa1', 3, 'star', 0, true, false, this.stars, Star)
        this.mapTmx.createFromObjects('mapa1', 1, 'wall', 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 2, 'black', 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 7, 'hole', 0, true, false, this.holes, Hole)
        this.mapTmx.createFromObjects('mapa1', 8, 'nHole', 0, true, false, this.holes, Hole)
    }

    killStar(ball, star){
        star.kill()
        ball.score += 1
        ball.text.text = 'ESTRELAS: ' + ball.score
        ball.musicStar.play()
    }

    moveText(){
        this.ball.text.x = this.game.camera.x+240
        this.ball.text.y = this.camera.y+30

        this.pause.x = this.game.camera.x+10
        this.pause.y = this.game.camera.y+5
    }

    update() {
        this.movePC()
        this.moveText()
        this.game.physics.arcade.collide(this.ball, this.map)
        this.game.physics.arcade.collide(this.ball, this.stars, this.killStar)
        //this.game.physics.arcade.overlap(this.ball, this.holes, this.createMenu)
        if(!this.ball.alive){
            this.createMenu()
        }
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

    destroySprite(sprite){

        if(sprite.id != null){
            this.game.paused = (this.game.paused?false:true)
        } else {
            this.menu.visible = false
            this.ball.text.text = "ESTRELAS: 0"
        }
    }

    createMenu(){
        this.menu = this.game.add.tileSprite(0, 0, 480, 800, 'menu')
        this.pause = this.game.add.tileSprite(0, 0, 40, 40, 'pause')
        this.ball.text = this.createHealthText(this.game.camera.x+240, this.camera.y+30, 'Clique pra jogar')

        this.menu.inputEnabled = true
        this.menu.input.useHandCursor = true
        this.menu.events.onInputDown.add(this.destroySprite, this)

        this.pause.inputEnabled = true
        this.pause.input.useHandCursor = true
        this.pause.events.onInputDown.add(this.destroySprite, this)
        this.pause.id = 'pause'
    }

    changeLevel(){

    }

}

window.onload = function() {
    // funciona como singleton
    const GAME = new Game()
}
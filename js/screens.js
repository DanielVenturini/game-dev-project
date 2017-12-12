class PlayState extends GameState {

    preload() {
        this.game.load.image('fullscreen-button', 'assets/fullscreen-button.png')
        this.game.load.spritesheet('star', 'assets/star.png', 62, 62)
        this.game.load.image('diminutive', 'assets/diminutive.png')
        this.game.load.image('block4-1', 'assets/block4-1.png')
        this.game.load.image('allkill', 'assets/allkill.png')
        this.game.load.image('nHole', 'assets/nextHole.png')
        this.game.load.image('block1', 'assets/block1.png')
        this.game.load.image('block2', 'assets/block2.png')
        this.game.load.image('block3', 'assets/block3.png')
        this.game.load.image('block4', 'assets/block4.png')
        this.game.load.image('ball1', 'assets/ball1.png')
        this.game.load.image('ball2', 'assets/ball2.png')
        this.game.load.image('ball3', 'assets/ball3.png')
        this.game.load.image('ball4', 'assets/ball4.png')
        this.game.load.image('back1', 'assets/back1.png')
        this.game.load.image('back2', 'assets/back2.png')
        this.game.load.image('back3', 'assets/back3.png')
        this.game.load.image('back4', 'assets/back4.png')
        this.game.load.image('black', 'assets/black.png')
        this.game.load.image('pause', 'assets/pause.png')
        this.game.load.image('menu', 'assets/menu.png')
        this.game.load.image('hole', 'assets/hole.png')
        
        this.game.load.tilemap('mapA', 'assets/mapa1.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.tilemap('mapB', 'assets/mapa2.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.tilemap('mapC', 'assets/mapa3.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.tilemap('mapD', 'assets/mapa4.json', null, Phaser.Tilemap.TILED_JSON)

        this.game.load.audio('end', ['audio/end.mp3', 'audio/end.ogg'])
        this.game.load.audio('hole', ['audio/hole.mp3', 'audio/hole.ogg'])
        this.game.load.audio('star', ['audio/star.mp3', 'audio/star.ogg'])
        this.game.load.audio('music1', ['audio/music1.mp3', 'audio/music1.ogg'])
        this.game.load.audio('music2', ['audio/music2.mp3', 'audio/music2.ogg'])
        this.game.load.audio('music3', ['audio/music3.mp3', 'audio/music3.ogg'])
        this.game.load.audio('music4', ['audio/music4.mp3', 'audio/music4.ogg'])
        this.game.load.audio('allkill', ['audio/allkill.mp3', 'audio/allkill.ogg'])
    }

    create() {

        //groups
        this.map = null
        this.lava = null
        this.stars = null
        this.holes = null
        this.water = null
        this.street = null
        this.diminutive = null

        this.menu = null
        this.ball = null
        this.pause = null

        this.background = this.game.add.tileSprite(0, 0, 1980, 1044, 'back1')

        this.game.renderer.roundPixels = true
        this.game.world.setBounds(0, 0, 1980, 1044)
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        //map
        this.mapTmx
        this.createMap(this.mapTmx, 'mapA', 'block1', 'back1')
        //this.createMap(this.mapTmx, 'mapD', 'block4', 'back4')

        //anothers config
        this.keys
        this.getKey()
        this.createPlayer('ball1', 110, 110)
        //this.createPlayer('ball4', 110, 110)
        this.game.add.existing(this.ball)
        this.game.camera.follow(this.ball)

        this.game.die = 0
        this.ball.level = 1
        this.ball.speed = 8
        this.game.points = 0
        this.ball.angular = 8
        this.game.actualLevel = 1
        this.game.text1 = this.createHealthText(this.game.camera.x+240, this.game.camera.y+360, '')
        this.game.text2 = this.createHealthText(this.game.camera.x+240, this.game.camera.y+420, '')

        //add in game
        window.addEventListener("deviceorientation",  this.handleOrientation.bind(this), true)
        this.game.map = this.map
        this.game.ball = this.ball
        this.game.stars = this.stars
        this.game.holes = this.holes

        this.ball.music = this.game.add.audio('music1')
        this.ball.music.onStop.add(this.restartMusic, this.ball.music)

        this.createMenu()
        super.initFullScreenButtons()
    }

    restartMusic(music){
        music.play()
    }

    handleOrientation(evnt) {

        if(this.menu.alive){
            return
        }

        var y = evnt.beta
        var z = evnt.alpha
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

    createPlayer(key, x, y) {
        this.ball = this.game.add.sprite(x, y, key)
        this.game.physics.enable(this.ball)

        this.ball.body.drag.set(100)
        this.ball.body.drag.set(100)
        this.ball.anchor.setTo(0.5, 0.5)
        this.ball.body.maxVelocity = (8*6)
        this.ball.body.collideWorldBounds = true

        this.ball.score = 0

        this.ball.musicEnd = this.game.add.audio('end')
        this.ball.musicHole = this.game.add.audio('hole')
        this.ball.musicStar = this.game.add.audio('star')
        this.ball.allkill = this.game.add.audio('allkill')
    }

    createMap(mapTmx, mapNB, object, background) {
        this.background.loadTexture(background, 0)
        this.mapTmx = this.game.add.tilemap(mapNB)
        this.game.world.setBounds(0, 0, this.mapTmx.widthInPixels, this.mapTmx.heightInPixels)

        this.map = this.game.add.group()
        this.lava = this.game.add.group()
        this.stars = this.game.add.group()
        this.holes = this.game.add.group()
        this.water = this.game.add.group()
        this.diminutive = this.game.add.group()

        this.mapTmx.createFromObjects('mapa1', 1, object, 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 2, 'black', 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 7, 'hole', 0, true, false, this.holes, Hole)
        this.mapTmx.createFromObjects('mapa1', 3, 'star', 0, true, false, this.stars, Star)
        this.mapTmx.createFromObjects('mapa1', 8, 'nHole', 0, true, false, this.holes, Hole)
        this.mapTmx.createFromObjects('mapa1', 9, 'block4', 0, true, false, this.water, Block)
        this.mapTmx.createFromObjects('mapa1', 10, 'block4-1', 0, true, false, this.lava, Block)
        this.mapTmx.createFromObjects('mapa1', 5, 'diminutive', 0, true, false, this.diminutive, Diminutive)
        this.mapTmx.createFromObjects('mapa1', 6, 'allkill', 0, true, false, this.diminutive, AllKill)
    }

    killStar(ball, star){
        star.kill()
        ball.score += 1
        ball.musicStar.play()
        ball.text.text = 'ESTRELAS: ' + ball.score
    }

    moveText(){
        this.ball.text.y = this.camera.y+30
        this.ball.text.x = this.game.camera.x+240

        this.pause.y = this.game.camera.y+5
        this.pause.x = this.game.camera.x+10
    }

    changeBall(sprite, x, y){
        this.ball.body.x = x
        this.ball.body.y = y

        this.ball.score = 0
        this.ball.text.text = ''
        this.ball.visible = true
        this.ball.scale.setTo(1, 1)
        this.ball.loadTexture(sprite, 0)
    }

    killAll(){
        this.map.killAll()
        this.stars.killAll()
        this.holes.killAll()
        this.water.killAll()
        this.diminutive.killAll()

        this.map = null
        this.stars = null
        this.holes = null
        this.water = null
        this.mapTmx = null
    }

    updaterMusics(){
        if(! (this.ball.level == this.game.actualLevel) ){
            this.ball.musicEnd.play()
            this.game.actualLevel += 1
            this.game.points += this.ball.score
        } else {
            this.game.die += 1
        }

        this.ball.music.destroy()
    }

    rebuild(){
        this.updaterMusics()
        var level = this.ball.level
        this.killAll()

        switch(level){
            case 1:
                this.ball.music = this.game.add.audio('music1')
                this.createMap(this.mapTmx, 'mapA', 'block1', 'back1')
                this.changeBall('ball1', 110, 110)
            break

            case 2:
                this.ball.music = this.game.add.audio('music2')
                this.createMap(this.mapTmx, 'mapB', 'block2', 'back2')
                this.changeBall('ball2', 110, 110)
            break

            case 3:
                this.ball.music = this.game.add.audio('music3')
                this.createMap(this.mapTmx, 'mapC', 'block3', 'back3')
                this.changeBall('ball3', 80, 80)
            break

            case 4:
                this.ball.music = this.game.add.audio('music4')
                this.createMap(this.mapTmx, 'mapD', 'block4', 'back4')
                this.changeBall('ball4', 40, 20)
            break

            case 5:
                this.ball.level = 1
                this.ball.music = this.game.add.audio()
                this.createMap(this.mapTmx, 'mapA', 'block1', 'back1')
                this.changeBall('ball1', 110, 110)
            break
        }

        this.ball.music.onStop.add(this.restartMusic, this.ball.music)
        this.game.add.existing(this.ball)
        this.game.camera.follow(this.ball)
        this.createMenu()
    }

    destroySprite(sprite){
        if(sprite.id != null){
            this.game.paused = (this.game.paused?false:true)
        } else {
            this.menu.destroy()
            this.game.paused = false
            this.ball.text.text = "ESTRELAS: 0"
            this.ball.music.play()
            this.game.text1.text = ''
            this.game.text2.text = ''
        }
    }

    createMenu(){
        this.ball.body.paused = true
        this.menu = this.game.add.tileSprite(0, 0, 480, 800, 'menu')
        this.pause = this.game.add.tileSprite(0, 0, 40, 40, 'pause')
        this.ball.text = this.createHealthText(this.game.camera.x+240, this.camera.y+30, 'Clique pra jogar')

        this.menu.inputEnabled = true
        this.menu.input.useHandCursor = true
        this.menu.events.onInputDown.add(this.destroySprite, this)

        this.pause.id = 'pause'
        this.pause.inputEnabled = true
        this.pause.input.useHandCursor = true
        this.pause.events.onInputDown.add(this.destroySprite, this)

        console.log('level: ' + this.game.actualLevel)
        if(this.game.actualLevel == 5){
            this.game.text1.text = 'PARABENS!'
            this.game.text2.text = 'PONTOS: ' + (this.game.score/this.game.die)
            this.game.actualLevel = 1
        }
    }

    canDie(ball, lava){

        var distX = (ball.body.x - lava.body.x)
        var distY = (ball.body.y - lava.body.y)

        if(distX < 0)   distX *= (-1)
        if(distY < 0)   distY *= (-1)

        if(distX < 10 || distY < 10){
            ball.visible = false
            ball.musicHole.play()
        }    
    }

    update() {

        this.movePC()
        this.moveText()
        this.game.physics.arcade.collide(this.ball, this.map)
        this.game.physics.arcade.collide(this.ball, this.water)
        this.game.physics.arcade.overlap(this.ball, this.stars, this.killStar)
        this.game.physics.arcade.overlap(this.ball, this.lava, this.canDie)

        if(!this.ball.visible){
            this.ball.body.velocity.x = 0
            this.ball.body.velocity.y = 0

            this.menu.kill()
            this.pause.kill()
            this.rebuild()
        }
    }

    movePC() {
        if(this.menu.alive){
            return
        }

        this.click = false

        if(this.keys.left.isDown) {
            this.click = true
            this.ball.body.velocity.x -= this.ball.speed
            this.ball.body.angularVelocity -= this.ball.angular
        }
        else if(this.keys.right.isDown) {
            this.click = true
            this.ball.body.velocity.x += this.ball.speed
            this.ball.body.angularVelocity += this.ball.angular
        }

        if(this.keys.up.isDown) {
            this.click = true
            this.ball.body.velocity.y -= this.ball.speed
            this.ball.body.angularVelocity -= this.ball.angular
        }
        else if(this.keys.down.isDown) {
            this.click = true
            this.ball.body.velocity.y += this.ball.speed
            this.ball.body.angularVelocity += this.ball.angular
        }

        if(this.click == false){
            this.ball.body.angularVelocity += this.ball.body.angularVelocity*(-0.05)
        }
    }

}

window.onload = function() {
    // funciona como singleton
    const GAME = new Game()
}

class PlayState extends GameState {

    preload() {
        this.game.load.image('fullscreen-button', 'assets/fullscreen-button.png')
        this.game.load.spritesheet('star', 'assets/star.png', 62, 62)
        this.game.load.image('background', 'assets/background1.png')
        this.game.load.image('ball', 'assets/ball_orange.png')
        this.game.load.image('black', 'assets/black.png')
        this.game.load.image('hole', 'assets/hole.png')
        this.game.load.image('wall', 'assets/wall.png')

        this.game.load.tilemap('mapa1', 'assets/mapa1.json', null, Phaser.Tilemap.TILED_JSON)
    }

    create() {

        this.map = null
        this.stars = null
        this.balls = null
        this.game.speed = 3

        this.game.renderer.roundPixels = true
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        //let background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background')
        this.game.add.tileSprite(0, 0, 1980, 1044, 'background')
        this.game.world.setBounds(0, 0, 1980, 1044)
        //background.autoScroll(-30, 0)

        // mapa com paredes
        this.mapTmx
        this.createMap(this.mapTmx)

        //this.text = this.createHealthText(this.game.width*1/9, 50, 'PONTOS: 0       ESTRELAS: 0')
        //this.game = this.text
        this.game.map = this.map
        this.game.stars = this.stars
        //this.ball = new Ball(this.game, this.posx, this.posy, 'ball')
        //this.game.add.existing(this.ball)

        // HUD

        // adicionar controles de full screen a tela
        super.initFullScreenButtons()
    }

    createHealthText(x, y, string) {
        let style = {font: 'bold 16px Arial', fill: 'white'}
        let text = this.game.add.text(x, y, string, style)
        text.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2)
        text.anchor.setTo(0.5, 0.5)
        return text
    }

    createMap(mapTmx) {
        this.mapTmx = this.game.add.tilemap('mapa1')
        this.game.world.setBounds(0, 0, this.mapTmx.widthInPixels, this.mapTmx.heightInPixels)

        this.map = this.game.add.group()
        this.stars = this.game.add.group()
        this.balls = this.game.add.group()

        this.mapTmx.createFromObjects('mapa1', 3, 'star', 0, true, false, this.stars, Star)
        this.mapTmx.createFromObjects('mapa1', 6, 'ball', 0, true, false, this.balls, Ball)
        this.mapTmx.createFromObjects('mapa1', 1, 'wall', 0, true, false, this.map, Block)
        this.mapTmx.createFromObjects('mapa1', 2, 'black', 0, true, false, this.map, Block)
    }

    update() {
        //TODO all--logical code
    }

    updateHud() {
        this.text1.text = 'PLAYER A: ' + this.player1.health
        this.text2.text = 'PLAYER B: ' + this.player2.health
    }

    render() {
    //    game.debug.body(npc)
    //    game.debug.body(player1)
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
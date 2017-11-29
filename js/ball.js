class Ball extends Phaser.Sprite {
    
        constructor(game, x, y, asset) {
            super(game, x, y, asset)
            this.immovable = true
            this.inputEnabled = true
            this.input.enableDrag(false, true)
            this.game.physics.arcade.enable(this)
            this.anchor.setTo(0.5, 0.5)
            this.game = game
    
            this.speed = 7
            this.speedx = 0
            this.speedy = 0
            this.angular = 0
    
            this.keys = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
                down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
                left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
                right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
            }
        }

        create(){

            var setGameAlphaOffset = function (evt){
                if (evt.alpha < 5 || evt.alpha > 355) {
                    window.alert("North!");
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x-10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                    this.body.x = this.body.x+10
                } else if (evt.alpha < 180) {
                    window.alert("Turn Left");
                } else {
                    window.alert("Turn Right");
                }
            }

            window.addEventListener('deviceorientation', setGameAlphaOffset, true)
        }
    
        update() {
    
            this.game.camera.follow(this)
            //this.movePC()
            //this.moveCel()
            this.game.physics.arcade.collide(this, this.game.map)
            //this.move2()
        }

        moveCel(event){
            this.speedx = 0
            this.speedy = 0
    
            if (event.gamma < this.body.y) {   //foi para cima
                this.angular = -200
                this.speedy = this.speed*(-1)
            } else
            if (event.gamma > this.body.y){
                this.angular = 200
                this.speedy = this.speed
            }
    
            if (event.beta < this.body.x) {
                this.angular = -200
                this.speedx = this.speed*(-1)
            } else
            if (event.beta > this.body.x) {
                this.angular = 200
                this.speedx = this.speed
            }
    
            this.body.x += this.speedx
            this.body.y += this.speedy
            this.body.angularVelocity = this.angular
            this.angular = 0
            
            this.game.world.wrap(this, 0, true)
        }
    
        movePC() {
            this.speedx = 0
            this.speedy = 0
    
            if (this.keys.up.isDown) {
                this.angular = -200
                this.speedy = this.speed*(-1)
            } else
            if (this.keys.down.isDown){
                this.angular = 200
                this.speedy = this.speed
            }
    
            if (this.keys.left.isDown) {
                this.angular = -200
                this.speedx = this.speed*(-1)
            } else
            if (this.keys.right.isDown) {
                this.angular = 200
                this.speedx = this.speed
            }
    
            this.body.x += this.speedx
            this.body.y += this.speedy
            this.body.angularVelocity = this.angular
            this.angular = 0
    
            this.game.world.wrap(this, 0, true);
        }
    
        /*
        move2(){
            
                    if (this.keys.up.isDown) {
                        this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.body.acceleration)
                    } else {
                        this.body.acceleration.set(0)
                    }
            
                    if (this.keys.left.isDown) {
                        this.body.angularVelocity = -200
                    } else
                    if (this.keys.right.isDown) {
                        this.body.angularVelocity = 200
                    } else {
                        this.body.angularVelocity = 0
                    }
            
                    this.game.world.wrap(this, 0, true);
                }
        */
    }

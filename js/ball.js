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
            this.max = 50
            this.speedx = this.body.x
            this.speedy = this.body.y
            this.angular = 0

            this.keys = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
                down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
                left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
                right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
            }
        }

        create(){
            window.addEventListener("deviceorientation",  this.handleOrientation.bind(this), true);
        }

        handleOrientation(evnt) {
            var z = evnt.alpha;
            var y = evnt.beta;
            var x = evnt.gamma;
            this.body.acceleration.x += x;
            this.body.acceleration.y += y;
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

        move(){

            if(this.speedx != this.body.x){
                if(this.speedx > this.max)          this.speedx = this.max
                if(this.speedx < (-1)*this.max)     this.speedx = (-1)*this.max
            }

            if(this.speedy != this.body.y){
                if(this.speedy > this.max)          this.speedy = this.max
                if(this.speedy > (-1)*this.max)     this.speedy = (-1)*this.max
            }

            this.body.acceleration.x = this.speedx
            this.body.acceleration.y = this.speedy
//            this.body.x += this.speedx
  //          this.body.y += this.speedy
            this.body.angularVelocity = this.angular
            this.angular = 0

        }
    
        movePC() {

            if (this.keys.up.isDown) {
                this.angular = -this.speed
                this.speedy += this.speed*(-1)
            } else
            if (this.keys.down.isDown){
                this.angular = 200
                this.speedy += this.speed
            }

            if (this.keys.left.isDown) {
                this.angular = -200
                this.speedx += this.speed*(-1)
            } else
            if (this.keys.right.isDown) {
                this.angular = 200
                this.speedx += this.speed
            }

            this.move()
    
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

class Ball extends Phaser.Sprite {

        constructor(game, x, y, asset) {
            super(game, x, y, asset)
            this.game.physics.arcade.enable(this)
            this.immovable = true
            this.inputEnabled = true
            this.input.enableDrag(false, true)
            this.anchor.setTo(0.5, 0.5)
            this.game = game

            this.angular = 0
            this.speed = 9
            this.angular = this.speed
            this.body.maxVelocity.set(this.speed*this.speed*3.5)

            this.keys = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
                down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
                left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
                right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
            }
        }

        create(){
            window.addEventListener("deviceorientation",  this.handleOrientation.bind(this), true)
        }

        handleOrientation(evnt) {
            this.body.velocity.x += evnt.gamma
            this.body.velocity.y += evnt.beta
        }

        tocou(ball, star){
            star.kill()
        }

        update() {
            this.game.camera.follow(this)
            //this.movePC()
            //this.moveCel()
            this.movePC()
            this.game.physics.arcade.collide(this, this.game.map)
            this.game.physics.arcade.collide(this, this.game.stars, this.tocou)
        }

        movePC() {
            this.click = false

            if(this.keys.left.isDown) {
                this.click = true
                this.body.velocity.x -= this.speed
                this.body.angularVelocity -= this.angular
            }
            else if(this.keys.right.isDown) {
                this.click = true
                this.body.velocity.x += this.speed
                this.body.angularVelocity += this.angular
            }

            if(this.keys.up.isDown) {
                this.click = true
                this.body.velocity.y -= this.speed
                this.body.angularVelocity -= this.angular
            }
            else if(this.keys.down.isDown) {
                this.click = true
                this.body.velocity.y += this.speed
                this.body.angularVelocity += this.angular
            }

            if(this.click == false){
                this.body.angularVelocity += this.body.angularVelocity*(-0.05)
            }
        }

        /*move(){

            switch(this.opc){

                case "UP":
                    this.body.acceleration.y -= this.speed
                    this.angular -= this.speed*0.3
                    //console.log('clicou para cima')
                break

                case 'DOWN':
                    this.body.acceleration.y += this.speed
                    this.angular += this.speed*0.3
                    //console.log('clicou para baixo')
                break

                case 'LEFT':
                    this.body.acceleration.x -= this.speed
                    this.angular -= this.speed*0.3
                    //console.log('clicou para esquerda')
                break

                case 'RIGHT':
                    this.body.acceleration.x += this.speed
                    this.angular += this.speed*0.3
                    //console.log('clicou para direita')
                break

                default:
                    console.log('vish sei lah')
                break
            }

            if(this.angular > this.body.maxVelocity)
                this.angular = this.body.maxVelocity

            this.body.angularVelocity = this.angular
        }

        movePC() {

            if (this.keys.up.isDown) {
                this.opc = 'UP'
                this.move()
                this.butonDown = true
            } else
            if (this.keys.down.isDown){
                this.opc = 'DOWN'
                this.move()
                this.butonDown = true
            }

            if (this.keys.left.isDown) {
                this.opc = 'LEFT'
                this.move()
                this.butonDown = true
            } else
            if (this.keys.right.isDown) {
                this.opc = 'RIGHT'
                this.move()
                this.butonDown = true
            }

            if(this.butonDown == false){
                this.body.acceleration.set(0)

                if(this.body.angularVelocity > 0){
                    this.body.angularVelocity -= this.speed
                } else if(this.body.angularVelocity < 0){
                    this.body.angularVelocity += this.speed
                }

            } else {
                this.butonDown = false
            }


            this.game.world.wrap(this, 0, true);
        }*/
}
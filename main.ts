namespace SpriteKind {
    export const ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    ball.setVelocity(ball.vx * -1, ball.vy * -1)
})
let ball: Sprite = null
let player_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    1 1 1 . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    1 1 1 . . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_1, 0, 100)
player_1.x = 0
player_1.setStayInScreen(true)
info.setScore(0)
let player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 1 1 1 . 
    . . . . . . . . . . . . . 1 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . 1 1 1 
    . . . . . . . . . . . . 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(player2, 0, 100)
player2.x = scene.screenWidth()
player2.setStayInScreen(true)
info.player2.setScore(0)
info.changeLifeBy(-1)
ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 1 7 7 7 . . . . 
    . . . 7 7 7 7 1 1 7 7 7 7 . . . 
    . . 7 7 7 7 1 1 7 7 7 7 7 7 . . 
    . 7 7 7 7 1 1 7 7 7 7 7 7 7 7 . 
    . 7 7 7 1 1 7 7 7 7 7 7 7 7 7 . 
    . 7 7 1 1 7 7 7 7 7 7 7 7 7 7 . 
    . 7 1 1 7 7 7 7 7 7 7 7 7 1 1 . 
    . 1 1 7 7 7 7 7 7 7 7 7 1 1 7 . 
    . 7 7 7 7 7 7 7 7 7 7 1 1 7 7 . 
    . 7 7 7 7 7 7 7 7 7 1 1 7 7 7 . 
    . 7 7 7 7 7 7 7 7 1 1 7 7 7 7 . 
    . . 7 7 7 7 7 7 1 1 7 7 7 7 . . 
    . . . 7 7 7 7 1 1 7 7 7 7 . . . 
    . . . . 7 7 7 1 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.ball)
ball.setVelocity(randint(30, 70), randint(30, 70))
ball.setStayInScreen(true)
ball.setBounceOnWall(true)

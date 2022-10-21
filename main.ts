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
controller.moveSprite(player_1)
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

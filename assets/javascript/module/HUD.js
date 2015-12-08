/**
 * Created by stryker on 2014.03.05..
 */
define(function(){
    //Private variables
    var _game = null,
        _health = null,
        _healthText = null,
        _lives = null,
        _livesText = null,
        _score = null,
        _scoreText = null,
        _button = null,
        _stateText = null;

    return{
        init: function(game){
            _game = game;
        },
        preload: function(){
            _game.load.spritesheet('button', 'assets/img/button_sprite_sheet.png', 193, 71);
        },
        createStat: function(score,health,lives){
            _score = score;
            _scoreText = _game.add.text(10, 10, "Score: " + score, { fontSize: '34px', fill: '#fff' });
            _health = health;
            _healthText = _game.add.text(10, 50, "Health: " + health, { fontSize: '34px', fill: '#fff' });
            _lives = lives;
            _livesText = _game.add.text(10, 90, "Lives: " + lives, { fontSize: '34px', fill: '#fff' });

            //_stateText.visible = false;
        },
        createButton: function(){
            _button = _game.add.button(_game.world.centerX - 97, _game.world.centerY, 'button', function() {
              window.location.href = "http://www.google.com/doodles/alan-turings-100th-birthday";
            }, this, 2, 1, 0);
            _stateText = _game.add.text(_game.world.centerX,_game.world.centerY - 150,
                                            'You beated GDB',{font: '84px Arial',fill: '#fff'})
            _stateText.anchor.setTo(0.5,0.5);
        },
        updateHealthText: function(health){
            _healthText.text = "Health: "+health;
        },
        updateLivesText: function(lives){
            _livesText.text = "Lives: "+lives;
        },
        updateScoreText: function(score){
            _scoreText.text = "Score: "+(_score+=score);
        },
        createTitle: function(title){
            _stateText = _game.add.text(_game.world.centerX,_game.world.centerY,
                                            title,{font: '84px Arial',fill: '#fff'})
            _stateText.anchor.setTo(0.5,0.5);
        }
    }
});
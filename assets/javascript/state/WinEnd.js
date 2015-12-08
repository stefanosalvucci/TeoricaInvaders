/**
 * Created by stryker on 2014.03.22..
 */
define(['module/HUD'],function(HUD){
    var _game = null,
        _nextState = null;

    var _WinEnd = {
        create: function(){
            HUD.createButton();
            //Starting the Play state after the spacebar is down
            _game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(function(){
                _game.state.start(_nextState);
            });
        }
    }

    return{
        init: function(game,nextState){
            _game = game;
            _nextState = nextState;
        },
        getWinEndState: function(){
            return (_WinEnd);
        }
    }
})
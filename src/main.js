// Exercise 01: Normalized Movement
// Name: Zoe Feller
// Date: 10/20/22

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    width: 800,
    height: 800,
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
let playerDirection = "down"
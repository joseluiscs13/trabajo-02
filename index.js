const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);

let firstCard = null;

function preload() {
  this.load.image('card1', 'Cards/1.png');
  this.load.image('card2', 'Cards/2.webp');
  this.load.image('card3', 'Cards/3.png');
  this.load.image('card4', 'Cards/4.png');
  this.load.image('card5', 'Cards/5.jpg');
  this.load.image('card6', 'Cards/6.jpeg');
  this.load.image('card7', 'Cards/7.webp');
  this.load.image('card8', 'Cards/8.png');
}

function create() {
  const cards = this.physics.add.group();
  const cardData = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4'];

  const cardPositions = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 500, y: 100 },
    { x: 700, y: 100 },
    { x: 100, y: 300 },
    { x: 300, y: 300 },
    { x: 500, y: 300 },
    { x: 700, y: 300 },
  ];

  Phaser.Utils.Array.Shuffle(cardData);
  Phaser.Utils.Array.Shuffle(cardPositions);

  cardPositions.forEach((pos, index) => {
    const card = cards.create(pos.x, pos.y, cardData[index]).setInteractive();
    card.on('pointerdown', () => cardClicked(card));
  });
}

function cardClicked(card) {
  if (!firstCard) {
    firstCard = card;
  } else {
    if (firstCard.texture.key === card.texture.key) {
      console.log('¡Coincidencia!');
    } else {
      game.time.delayedCall(1000, () => {
        firstCard.setAlpha(0);
        card.setAlpha(0);
      });
    }

    firstCard = null;
  }
}

  

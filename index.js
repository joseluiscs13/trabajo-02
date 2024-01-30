class Game extends Phaser.Scene {
    constructor() {
      super({ key: 'Game' });
    }
  
    preload() {
      this.load.image('card1', 'Cards/1.png');
      this.load.image('card2', 'Cards/2.webp');
      this.load.image('card3', 'Cards/3.png');
      this.load.image('card4', 'Cards/4.png');
      this.load.image('card5', 'Cards/5.jpg');
      this.load.image('card6', 'Cards/6.jpeg');
      this.load.image('card7', 'Cards/7.webp');
      this.load.image('card8', 'Cards/8.png');
    }
  
    create() {
      const cardData = [
        { name: 'card1' },
        { name: 'card2' },
        { name: 'card3' },
        { name: 'card4' },
        { name: 'card5' },
        { name: 'card6' },
        { name: 'card7' },
        { name: 'card8' },
      ];
        
      cardData.forEach((data, index) => {
        const card = this.add.image(index * 100 + 100, 100, data.name).setInteractive();
        console.log(`Creating card at: ${card.x} ${card.y}`);
      });
    }
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Game,
  };
  
  const game = new Phaser.Game(config);

import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'


class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 属性存储
    direction: string = "";
    isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }

    init() {
        // 绑定键盘按下事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
        }

        this.checkEat(x, y);

        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e) {
            alert(`${e.message}; Game Over`);
            this.isLive = false;
        }
        this.isLive && setTimeout(
            this.run.bind(this),
            300 - (this.scorePanel.level - 1) * 30
        )
    }

    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl
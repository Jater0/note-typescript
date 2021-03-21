class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector("#snake > div")!
        this.bodies = this.element.getElementsByTagName("div")!
    }

    // 获取蛇头X坐标
    get X(): number {
        return this.head.offsetLeft;
    }

    // 获取蛇头Y坐标
    get Y(): number {
        return this.head.offsetTop;
    }

    // 设置蛇头X坐标
    set X(value: number) {
        if (this.X === value) return;
        if (value < 0 || value > 290) {
            throw new Error("Snake is Die");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadTouchBody();
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) {
            throw new Error("Snake is Die");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadTouchBody();
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + "px";
            (this.bodies[i] as HTMLElement).style.top = y + "px";
        }
    }

    checkHeadTouchBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement;
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error("Snake is Die");
            }
        }
    }
}

export default Snake;
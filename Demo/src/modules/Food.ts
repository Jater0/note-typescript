class Food {
    element: HTMLElement;
    constructor() {
        // 获取html's food
        this.element = document.getElementById("food")!;
    }

    // 获取Food X轴坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取Food Y轴坐标
    get Y() {
        return this.element.offsetTop;
    }

    // 修改Food坐标
    change() {
        // Random
        // top, left: [0, 290] & %10=0
        var left = Math.round(Math.random() * 29) * 10
        var top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;
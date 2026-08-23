export interface Movable {
    move(): void;
}

export class MovableCar implements Movable {
    move(): void {
        console.log("Xe hơi cahyj brmm brmm");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot đang đi");
    }
}

const movableCar = new MovableCar();
movableCar.move();

const robot = new Robot();
robot.move();
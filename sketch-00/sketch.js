function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(240);
    strokeWeight(2);
    for(let i=0; i<100; i++) {
        let x = random(width);
        let y = random(height);
        point(x, y);
    }
}

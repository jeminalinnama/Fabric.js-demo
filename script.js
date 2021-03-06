var canvas = new fabric.Canvas('canvas');

canvas.selectionColor = 'rgba(0,255,0,0.3)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 5;

function createCircle1(color) {
    var circle1 = new fabric.Path('M46.2,0c3.9,0.3,7.4,1.1,10.5,2.4c2.4,1,4.7,1.6,6.7,2.9c2.1,1.3,3.8,3,5.7,4.4c4.3,3.2,7.6,7.1,11.1,11.1 \
	c2.1,2.4,4.3,5.1,5.9,8c1.7,3.3,2.6,7,4,10.7c0.6,1.5,1,3.4,1.5,5c0.2,0.9,0.1,1.6,0.4,2.5c0.4,1.5,1.4,4.4,0.9,6.6 \
	c-0.2,1.7-0.5,3.4-0.7,5.1c-0.7,3-1.2,6.3-2.2,9.2c-0.3,1-0.2,1.7-0.5,2.6c-0.8,2.2-1.5,4.7-2.4,6.7c-0.4,0.9-0.5,1.7-0.9,2.6 \
	c-0.4,0.7-1.4,1.4-2,1.8c-0.3,0.3-0.6,0.7-0.9,1c-1.2,0.9-2.1,1.9-3.3,2.7c-0.7,0.5-1.2,1.2-1.8,1.7c-6.5,4.8-12.3,10.4-21.3,12.7 \
	c-1.3,0.3-5.4,0.2-6.7,0c-0.7-0.1-2.3,0.2-3.3,0c-2.4-0.5-4.7-0.8-6.9-1.6c-4.5-1.7-7.9-4.7-11.5-7.4c-3-2.2-5.8-4.8-8.5-7.4 \
	c-1.1-1.1-2.7-2.1-3.6-3.4c-0.8-1.1-2.1-2.6-2.6-3.7c-0.4-0.8-0.5-1.5-0.9-2.2c-0.8-1.4-1.8-2.8-2.6-4.2c-1.3-2.1-1.9-4.6-2.7-7.1 \
	c-0.5-1.4-0.8-3.2-1.2-4.8c-0.1-1-0.2-2.1-0.3-3.1c-0.3-1.2-0.3-3.5-0.2-4.4c0.2-1.1-0.1-2.5,0.1-3.6c0-0.5,0-1,0-1.5 \
	c0.3-2.1,0.5-4.1,0.8-6.2c1.3-5,2.1-9.9,3.8-14.4C13,18.5,17.3,14.2,21.7,10c1.6-1.6,3.3-3,5.1-4.4c0.4-0.3,0.7-0.7,1.1-1 \
	c0.6-0.4,1.3-0.4,2-0.6c1.2-0.5,2.4-1.2,3.6-1.6c2.6-1.1,5.6-1.5,8.6-2.2c0.8-0.1,1.7-0.2,2.6-0.3C45,0.1,45.8,0.2,46.2,0z');
    circle1.set({
        fill: color
    });
    canvas.add(circle1);
}

function createCircle2(color) {
    var circle2 = new fabric.Path('M49.8,24.4c12.4-0.2,18.3,7.4,22.2,16.2c0.6,1.5,1.3,3.2,1.8,4.8c0.2,1,0.3,1.9,0.5,2.9c0.2,0.8,0.8,3,0.6,4.1 \
	c-0.7,2.9-2,5.4-2.9,7.9c-0.7,1.9-1,3.3-2.1,4.7c-1.5,2.2-3.8,3.9-5.7,5.6c-1.1,1-2.2,1.9-3.3,2.8c-0.4,0.3-0.8,1-1.4,1.1 \
	c-0.2,0.1-0.5-0.1-0.6-0.1c-0.3,0-1.1,0.1-1.5,0.2c-1.4,0.4-2.9,0.8-4.6,1c-0.3,0-0.7-0.1-1-0.1c-2.7,0-4.3-0.6-6.2-1.4 \
	c-0.7-0.3-1.3-0.2-2-0.6c-0.6-0.3-1.3-0.9-1.8-1.3c-1.4-0.8-2.7-1.5-3.9-2.4c-2.3-1.7-3.9-4.4-5.6-6.8c-1-1.5-2.5-2.9-3.2-4.7 \
	c-0.7-1.9-0.3-4.3-0.8-6.4c-0.8-3.7-0.5-8.5,0.7-11.5c0.7-1.8,2-3.3,3.1-4.8c2.4-3.4,4.2-5.6,7.7-7.9c0.8-0.5,1.5-1.2,2.4-1.6 \
	c1.5-0.6,3-1.2,4.6-1.6C47.4,24.4,49,24.9,49.8,24.4z');
    circle2.set({
        fill: color
    });
    canvas.add(circle2);
}

function createCircle3(color) {
    var circle3 = new fabric.Path('M53.4,34.7c0.4,0.1,1.9-0.2,2.3,0.1c0.6,0.2,1.6,1.6,2.2,2.1c1.1,0.8,2.2,1.3,3,2.3c1,1.3,1.5,4.1,2.2,5.8 \
	c0.6,1.7,1.6,3.6,0.9,6c-0.2,0.6-0.5,1.1-0.7,1.6c-0.4,0.9-0.5,1.6-0.8,2.4c-1.2,2.8-3.3,5.1-5.7,6.8c-1.8,1.3-5.5,4.3-9.2,3.3 \
	c-3.7-1-5.9-2.7-7.9-5.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-1.2-1.7-2.1-2.3-3.6c-0.4-1-1.4-3.3-0.9-5c0.2-0.6,0.5-1.2,0.7-1.8 \
	c0.1-0.6,0.2-1.1,0.4-1.7c0.9-2.1,2-3.9,3.3-5.6c0.5-0.7,1.4-1.2,2.2-1.8c1-0.8,2.1-1.7,3.2-2.4c1.3-0.8,2.9-1.4,4.3-2 \
	c0.8-0.3,1.7-0.4,2.5-0.6C52.7,34.7,53.2,34.9,53.4,34.7z');
    circle3.set({
        fill: color
    });
    canvas.add(circle3);
}

function createEar1(color) {
    var ear1 = new fabric.Path('M35.1,72.8c0-0.9-0.2-1.9-0.3-2.7c-0.2-0.8-0.1-1.6-0.3-2.4c0-0.2,0-0.3,0-0.5c-0.3-1.1-0.2-2.4-0.5-3.5 \
	c0-0.4,0-0.8,0-1.3c-0.2-0.7-0.1-1.7-0.2-2.4c0-0.2,0-0.5,0-0.7c-0.2-0.8,0-1.8-0.2-2.6c-0.1-0.6-0.1-1.3-0.2-2 \
	c-0.4-1.8-0.4-3.7-0.8-5.5c-0.1-0.5,0.2-1.3,0.3-1.7c0.4-1.5,0.4-3,0.8-4.4c0.3-1.1,0.2-2.3,0.5-3.4c0.9-2.8,2.6-5.4,4.2-7.5 \
	c0.4-0.6,1.3-0.9,1.9-1.4c1.5-1.1,3-2.2,4.9-3c1-0.4,2.3-0.4,3.4-0.6c0.7-0.1,2.4,0.3,2.9,0.5c1.2,0.3,2.3,0.4,3.5,0.7 \
	c1.2,0.4,2.2,1,3.2,1.6c0.7,0.5,1.5,0.8,2.2,1.3c0.2,0.2,0.5,0.5,0.7,0.7c0.2,0.2,0.5,0.4,0.7,0.6c0.7,1,1.2,2.1,1.8,3.2 \
	c0.3,0.4,0.6,0.9,0.8,1.4c0.3,0.6,0.3,1.2,0.5,1.9c0.5,1.4,0.8,3,1.2,4.5c0,0.5,0.1,1.1,0.1,1.6c0.3,1.6,0.1,3.4,0.5,4.9 \
	c0,0.6,0.1,1.2,0.1,1.8c0.3,1.5,0.1,3.2,0.4,4.7c0,0.5,0,1,0.1,1.5c0.2,0.9,0,2,0.2,3c0.1,0.6,0.1,1.3,0.2,1.9c0,0.3,0,0.6,0,0.9 \
	c0.1,0.4,0.1,1,0.1,1.4c0,0.3,0,0.6,0,1c0.1,0.4,0.1,1,0,1.4c0,1.2,0,2.4,0,3.6c-0.9,0-1.7,0-2.6,0c-0.7,0-1.6,0-2.1,0 \
	c-1,0.2-2.3-0.1-3,0.1c-1,0.2-1.9-0.1-2.8,0.1c-0.3,0-0.6,0-0.8,0c-1.2,0.3-2.6,0-3.8,0.2c-0.6,0-1.2,0-1.8,0.1 \
	c-1.3,0.3-3.1,0-4.6,0.3c-0.3,0-0.6,0-1,0c-1.1,0.2-2.4,0-3.4,0.2c-0.3,0-0.7,0-1,0c-0.5,0.1-1.1,0-1.7,0.1c-0.5,0.1-1.2,0-1.8,0.1 \
	C36.6,72.8,35.9,72.8,35.1,72.8z');
    ear1.set({
        fill: color
    });
    canvas.add(ear1);
}
'use strict';

let video = document.querySelector('video');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let options = {video:true, audio:'false'};
navigator.webkitGetUserMedia(options , (stream) => {
    video.src = window.URL.createObjectURL(stream);
},(err) => {    comsole.log(err);});

function animate(timestamp) {
    requestAnimationFrame(animate);
    ctx.drawImage(video, 0, 0);

    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let d = pixels.data;

    for(let x = 0; x < d.length; x += 4) {
        let r = d[x];
        let g = d[x + 1];
        let b = d[x + 2];

        let grayscale = 0.2126+r + 0.7152+g + 0.0722+b;
        let thres = grayscale > 128 ? 255 : 0;
        d[x] = d[x + 1] = d[x + 2] = thres;
    }

    ctx.putImageData(pixels, 0, 0);

}
requestAnimationFrame(animate);


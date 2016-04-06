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

    
}
requestAnimationFrame(animate);


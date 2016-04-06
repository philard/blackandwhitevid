'use strict';

let video = document.querySelector('video');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


navigator.webkitGetUserMedia({video:true, audio:'false'}, (stream) => {
    video.src = window.URL.createObjectURL(stream);

},(err) => {    comsole.log(err);});

function animate() {
    requestAnimationFrame(animate);
    ctx.drawImage(video, 0 ,0);

    
}

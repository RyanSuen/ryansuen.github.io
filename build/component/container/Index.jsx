import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/container/Index'

class Index extends Component {

    constructor() {
        super();
        this.state = {
            width:  document.documentElement.clientWidth || 1024,
            height: document.documentElement.clientHeight || 768
        };
    }

    renderBall(  ) {

        let getPixelRatio = function(context) {
            let backingStore = context.backingStorePixelRatio ||
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        };

        //调用
        let canvas = this.myCanvas,
            ratio = getPixelRatio(canvas);
        if( !canvas ) {
            return null;
        }
        let ctx = canvas.getContext('2d');
        var ball = {
            x: 50 + Math.floor( 50 * Math.random()),
            y: 50 + Math.floor( 50 * Math.random()),
            vx: 50 + Math.floor( 50 * Math.random()),
            vy: 25 + Math.floor( 25 * Math.random()),
            gvx: function() {
                return Math.floor( 5*Math.random() );
            },
            gvy: function() {
                return Math.floor( 5*Math.random() );
            },
            radius: 10 + Math.floor(25 * Math.random()),
            color: '#fff',
            draw: function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        };

        let update = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ball.draw();
            ball.x += ball.vx;
            ball.y += ball.vy;
            if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                ball.vy = -ball.vy;
            }
            if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                ball.vx = -ball.vx;
            }
            window.requestAnimationFrame(update);
        }


        ball.draw();
        update();



    }

    componentDidMount() {
        this.renderBall();
    }

    render() {

        let width = document.documentElement.clientWidth || 1024,
            height = document.documentElement.clientHeight || 768,
            canvasStyle = {
                width: width + 'px',
                height: height + 'px'
            };

        return (
            <canvas width={width} height={height} style={canvasStyle} ref={ (ref) => {
                this.myCanvas = ref;
            }}>

            </canvas>
        );

    }

}

render(
    <Index />,
    document.getElementById('page-index')
);
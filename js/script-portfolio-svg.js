//-----CASE HOVER SVG -----------------------------------------------------------
var caseHovered = () => {

    const initial = {
        sx: 1.8,
        sy: 1.2,
        tx: 0,
        ty: 0
    };
    const ranges = [{
        sx: [0.385, 1.53],
        sy: [0.9, 0.9],
        tx: [-30.72, 26.64],
        ty: [-5, 0]
    },
    {
        sx: [0.67, 1.238],
        sy: [0.9, 0.9],
        tx: [-63.76, 61.68],
        ty: [-5, 0]
    },
    {
        sx: [0.96, 0.96],
        sy: [0.9, 0.9],
        tx: [-74.22, 74.22],
        ty: [-5, 0]
    },
    {
        sx: [1.238, 0.67],
        sy: [0.9, 0.9],
        tx: [-61.68, 63.76],
        ty: [-5, 0]
    },
    {
        sx: [1.53, 0.385],
        sy: [0.9, 0.9],
        tx: [-26.64, 30.72],
        ty: [-5, 0]
    },
    ];
    const fadeDuration = 8;
    var mPos = [0, 0];
    var h = {};
    var hovered = {
        el: null,
        id: null
    };

    document.addEventListener('mousemove', function (e) {
        mPos = [e.clientX || mPos[0], e.clientY || mPos[1]];

        if (!hovered.el) {
            // Hovering nothing. Set actual to default for all
            for (const m in h) {
                h[m].actual = getInitialValues();
            }
        } else {
            // Element is hovered
            // We need to reset actuals for hovered el only with current mouse position
            // Set actuals depending on the range

            let easing = function (pos) {
                if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 4);
                return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            }

            let box = hovered.el.getBoundingClientRect();
            let x = easing(Math.abs((mPos[0] - box.left) / hovered.el.offsetWidth));
            let y = Math.abs((mPos[1] - box.top) / hovered.el.offsetHeight);

            // Get actual from the range and set it
            for (const m in h) {
                if (m != hovered.id) {
                    h[m].actual = getInitialValues();
                } else {
                    let mask = h[hovered.id]
                    for (let i = 0; i < mask.actual.length; i++) {
                        let a = mask.actual[i]; // this is object of params we need to change
                        let range = ranges[i];
                        a.sx = range.sx[0] + (range.sx[1] - range.sx[0]) * x;
                        a.sy = range.sy[0];
                        a.tx = range.tx[0] + (range.tx[1] - range.tx[0]) * x;
                        a.ty = range.ty[0];
                    }
                }
            }
        }
    });

    document.addEventListener('mouseover', function (e) {
        if (e.target.closest('.dots') == null) {
            hovered.el = hovered.id = null;
        } else {
            hovered.el = e.target.closest('.dots');
            hovered.id = hovered.el.getElementsByTagName('svg')[0].id;
        }
        document.dispatchEvent(new Event('mousemove'));
    });

    addSvg(document.getElementsByClassName('dots'));
    if (!isTouchDevice()) animate();

    function animate() {
        for (const m in h) {
            for (let i = 0; i < h[m].faded.length; i++) {
                let a = h[m].actual[i];
                let f = h[m].faded[i];

                if (Math.abs(a.sx - f.sx) < 0.001) {
                    f.sx = a.sx;
                } else {
                    f.sx += (a.sx - f.sx) / fadeDuration;
                }

                if (Math.abs(a.sy - f.sy) < 0.001) {
                    f.sy = a.sy;
                } else {
                    f.sy += (a.sy - f.sy) / fadeDuration;
                }

                if (Math.abs(a.tx - f.tx) < 0.01) {
                    f.tx = a.tx;
                } else {
                    f.tx += (a.tx - f.tx) / fadeDuration
                }

                if (Math.abs(a.ty - f.ty) < 0.01) {
                    f.ty = a.ty;
                } else {
                    f.ty += (a.ty - f.ty) / fadeDuration;
                }

                if (f.sx != a.sx || f.sy != a.sy || f.tx != a.tx || f.ty != a.ty) {
                    h[m].svg.children[i + 1].style =
                        `transform: translate(${f.tx}%, ${f.ty}%) scale(${f.sx}, ${f.sy})`;
                    `-ms-transform: translate(${f.tx}%, ${f.ty}%) scale(${f.sx}, ${f.sy})`;
                    `-webkit-transform: translate(${f.tx}%, ${f.ty}%) scale(${f.sx}, ${f.sy})`;
                }
            }
        }
        window.requestAnimationFrame(animate);
    }

    function addSvg(arr, svg) {
        for (let i = 0; i < arr.length; i++) {
            let name = 'mask' + i;
            let svg = createSvg(name);
            arr[i].appendChild(svg);
            h[name] = {};
            h[name].container = arr[i];
            h[name].svg = svg;
            h[name].actual = getInitialValues();
            h[name].faded = getInitialValues();
        }
    }

    function getInitialValues() {
        let a = [];
        for (let i = 0; i < 5; i++) {
            a.push({
                sx: initial.sx,
                sy: initial.sy,
                tx: initial.tx,
                ty: initial.ty
            });
        }
        return a;
    }

    function createSvg(id) {
        let svg = getNode('svg', {
            viewBox: '0 0 100 100',
            preserveAspectRatio: 'none',
            id: id,
            class: 'mask'
        });
        svg.appendChild(getNode('rect', {
            width: '100',
            height: '88',
            fill: '#1a1a1b'
        }));

        let e1 = getNode('ellipse', {
            cx: '12.5',
            cy: '49',
            rx: '12.5',
            ry: '49',
            fill: 'black'
        });
        let e2 = getNode('ellipse', {
            cx: '31.25',
            cy: '49',
            rx: '12.5',
            ry: '49',
            fill: 'black'
        });
        let e3 = getNode('ellipse', {
            cx: '50',
            cy: '49',
            rx: '12.5',
            ry: '49',
            fill: 'black'
        });
        let e4 = getNode('ellipse', {
            cx: '68.75',
            cy: '49',
            rx: '12.5',
            ry: '49',
            fill: 'black'
        });
        let e5 = getNode('ellipse', {
            cx: '87.5',
            cy: '49',
            rx: '12.5',
            ry: '49',
            fill: 'black'
        });
        e1.style = e2.style = e3.style = e4.style = e5.style =
            `transform: translate(${initial.tx}%, ${initial.ty}%) scale(${initial.sx}, ${initial.sy})`;
        `-webkit-transform: translate(${initial.tx}%, ${initial.ty}%) scale(${initial.sx}, ${initial.sy})`;
        `-ms-transform: translate(${initial.tx}%, ${initial.ty}%) scale(${initial.sx}, ${initial.sy})`;
        svg.append(e1, e2, e3, e4, e5);

        return svg
    }

    function getNode(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v)
            n.setAttributeNS(null, p, v[p]);
        return n
    }

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }
}

caseHovered()
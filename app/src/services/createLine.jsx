/**
 * Creates line element on given position, with given length and angle.
 */
 function createLineElement(x, y, length, angle) {
    const styles = {
        border: '1px solid black',
        width: length,
        height: 0,
        top: y,
        left: x,
        position: 'absolute',
        transform: `rotate(${angle}rad)`,
        zIndex: 4
    }
    const line = <div style={{...styles}}></div>
    return line
}

/**
 * Creates element which represents line from point [x1, y1] to [x2, y2].
 * It is html div element with minimal height and width corresponding to line length.
 * It's position and rotation is calculated below.
 */
export function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
}
export default (d, rx, ry, h, ir) => {
  const startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
  const endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);
  const sx = ir * rx * Math.cos(startAngle);
  const sy = ir * ry * Math.sin(startAngle);
  const ex = ir * rx * Math.cos(endAngle);
  const ey = ir * ry * Math.sin(endAngle);
  const ret = [];

  ret.push('M', sx, sy, 'A', ir * rx, ir * ry, '0 0 1', ex, ey);
  ret.push('L', ex, h + ey, 'A', ir * rx, ir * ry, '0 0 0', sx, h + sy, 'z');
  return ret.join(' ');
}

// GetElementFunction
function getElement(id) {
  const text = document.getElementById(id);
  const textValue = text.value;
  const value = parseFloat(textValue);
  return value;
}

// SetElementFunction
function setElement(id, area, name) {
  const text = document.getElementById(id);
  // text.innerText = `of Triangle = ${area}`;
  text.innerHTML = `of ${name} = ${area} cm<sup>2</sup>`;
}

// clear
function clear(id1, id2) {
  document.getElementById(id1).value = "";
  document.getElementById(id2).value = "";
}

// Triangle
function claculateTriangle() {
  const getBaseInput = getElement("base");
  const getHeightInput = getElement("height");
  const area = 0.5 * getBaseInput * getHeightInput;
  setElement("output", area, "Triangle");
  clear("base", "height");
}

// Rectangle
function claculateRectangle() {
  const getWidthInput = getElement("rectangleWidth");
  const getLenghtInput = getElement("rectangleLength");
  const area = getWidthInput * getLenghtInput;
  setElement("output", area, "Rectangle");
  clear("rectangleWidth", "rectangleLength");
}

// Parallelogram
function claculateParallelogram() {
  const getBaseInput = getElement("parrBase");
  const getHeightInput = getElement("parrHeight");
  const area = getBaseInput * getHeightInput;
  setElement("output", area, "Parallelogram");
  clear("parrBase", "parrHeight");
}

// Rhombus
function claculateRhombus() {
  const getDiagonal1 = getElement("RhombusD1");
  const getDiagonal2 = getElement("RhombusD2");
  const area = 0.5 * getDiagonal1 * getDiagonal2;
  setElement("output", area, "Rhombus");
  clear("RhombusD1", "RhombusD2");
}

// Pentagon
function claculatePentagon() {
  const getPerimeter = getElement("PentaPeri");
  const getApothem = getElement("pentaApo");
  const area = 0.5 * getPerimeter * getApothem;
  setElement("output", area, "Pentagon");
  clear("PentaPeri", "pentaApo");
}

// Ellipse
function claculateEllipse() {
  const getA = getElement("EllipseA");
  const getB = getElement("EllipseB");
  const area = Math.PI * getA * getB;
  const mainArea = area.toFixed(2);
  setElement("output", mainArea, "Ellipse");
  clear("EllipseA", "EllipseB");
}

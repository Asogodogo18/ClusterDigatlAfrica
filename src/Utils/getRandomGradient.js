function getRandomGradient(name) {
  var gradientArray = [];
  const firstAlphabet = name.charAt(0).toLowerCase();
  const asciiCode = firstAlphabet.charCodeAt(0);
  const colorNum =
    asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = (num >> 16) & 255;
  var g = (num >> 8) & 255;
  var b = num & 255;
  //character: firstAlphabet.toUpperCase(),
  gradientArray.push("rgba(" + r + "," + g + "," + b + ",0.5)");
  gradientArray.push("rgba(" + r + "," + g + "," + b + ",0.8)");
  gradientArray.push("rgba(" + r + "," + g + "," + b + ",0.95)");
  return gradientArray;
}

export default getRandomGradient;

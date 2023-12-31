let serial = 0;
document.getElementById("triangle-btn").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("triangle-input-one");
  const circleInputTwo = getInputValueOne("triangle-input-two");

  const newValue = calcAreaThreeInput(0.5, circleInputOne, circleInputTwo);
  const productName = pName("triangle");
  
  // serial update check
  if(newValue == false){
    return false;
  }
  // display data
  displayDataDinamic(productName, newValue.toFixed(2));
});

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleInputOne = getInputValueOne("rectangle-input-one");
  const rectangleInputTwo = getInputValueOne("rectangle-input-two");

  const newValue = calcAreaTwoInput(rectangleInputOne, rectangleInputTwo);
  const productName = pName("rectangle");

  // serial update check
  if(newValue == false){
    return false;
  }
  // display data
  displayDataDinamic(productName, newValue.toFixed(2));
});

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramInputOne = getInputValueOne("parallelogram-input-one");
    const parallelogramInputTwo = getInputValueOne("parallelogram-input-two");

    const newValue = calcAreaTwoInput(
      parallelogramInputOne,
      parallelogramInputTwo
      );
      const productName = pName("parallelogram");
      
      
      // serial update check
  if(newValue == false){
    return false;
  }
    // display data
    displayDataDinamic(productName, newValue.toFixed(2));
  });

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusInputOne = getInputValueOne("rhombus-input-one");
  const rhombusInputTwo = getInputValueOne("rhombus-input-two");

  const newValue = calcAreaThreeInput(0.5, rhombusInputOne, rhombusInputTwo);
  const productName = pName("rhombus");
  
  // serial update check
  if(newValue == false){
    return false;
  }
  // display data
  displayDataDinamic(productName, newValue.toFixed(2));
});

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonInputOne = getInputValueOne("pentagon-input-one");
  const pentagonInputTwo = getInputValueOne("pentagon-input-two");

  const newValue = calcAreaThreeInput(0.5, pentagonInputOne, pentagonInputTwo);
  const productName = pName("pentagon");
  
  // serial update check
  if(newValue == false){
    return false;
  }
  // display data
  displayDataDinamic(productName, newValue.toFixed(2));
});

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseInputOne = getInputValueOne("ellipse-input-one");
  const ellipseInputTwo = getInputValueOne("ellipse-input-two");

  const newValue = calcAreaThreeInput(3.14, ellipseInputOne, ellipseInputTwo);
  const productName = pName("ellipse");
  
  // serial update check
  if(newValue == false){
    return false;
  }
  // display data
  displayDataDinamic(productName, newValue.toFixed(2));
});

// redirect blog page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// call random function
generateRandomColor("card1");
generateRandomColor("card2");
generateRandomColor("card3");
generateRandomColor("card4");
generateRandomColor("card5");
generateRandomColor("card6");

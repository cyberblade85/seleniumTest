const { Builder, By, Key, until } = require("selenium-webdriver");

async function example(driver, i) {
  console.log("Getting page ", i);
  for (i = 1; i < 5; i++) {
    try {
      // console.log("index in function", i);
      // await driver.get(
      //   `https://ra.co/events/nl/amsterdam?week=2022-10-09&page=${i}`
      // );

      const gridEls = await driver.findElement(
        By.className("Grid__GridStyled-sc-1l00ugd-0 buUMLF grid")
      );
      // .findElements(
      //   By.className("Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW")
      // );
      console.log(gridEls);
      // .then(function (elements) {
      //   elements.forEach(function (element) {
      //     element.getText().then(function (text) {
      //       console.log(text);
      //     });
      //   });
      // });
    } catch (error) {
      console.log(error);
    }
  }
}
const exampleFunc = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  var proceed = true;
  var i = 1;

  while (proceed) {
    console.log("index", i);
    await driver.get(
      `https://ra.co/events/nl/amsterdam?week=2022-10-09&page=${i}`
    );
    await driver.manage().setTimeouts({ implicit: 5000 });

    var isExists = await driver.findElements(
      By.className("Text-sc-1t0gn2o-0 hqwJEU")
    );

    if (isExists.length === 0) {
      const gridEls = await driver.findElement(
        By.className("Grid__GridStyled-sc-1l00ugd-0 buUMLF grid")
      );
      const rowEls = await gridEls.findElements(
        By.className("Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW")
      );

      const rowPromises = rowEls.map(async (el) =>
        console.log(await el.getText())
      );
      await Promise.all(rowPromises);

      i++;
    } else {
      proceed = false;
      console.log("got here", proceed);
    }
  }
};

// const test = async () => {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get(
//     `https://ra.co/events/nl/amsterdam?week=2022-10-09&page=${3}`
//   );

//   await driver
//     .findElement(By.className("Text-sc-1t0gn2o-0 hqwJEU"))
//     .getText()
//     .then(function (text) {
//       console.log(text);
//     });
// };

exampleFunc();

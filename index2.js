const { Builder, By, Key, until } = require("selenium-webdriver");

const exampleFunc = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  var proceed = true;
  var i = 1;

  // while (proceed) {
  console.log("index", i);
  await driver.get(
    `https://ra.co/events/nl/amsterdam?week=2022-10-09&page=${i}`
  );
  await driver.manage().setTimeouts({ implicit: 15000 });

  var isExists = await driver.findElements(
    By.className("Text-sc-1t0gn2o-0 hqwJEU")
  );

  if (isExists.length === 0) {
    const gridEls = await driver.findElement(
      By.className("Grid__GridStyled-sc-1l00ugd-0 buUMLF grid")
    );
    const firstRow = await gridEls.findElement(
      By.className("Box-omzyfs-0 fYkcJU")
    );

    const otherRows = await gridEls.findElements(
      By.className("Box-omzyfs-0 bEpoyR")
    );

    const allRows = [firstRow, ...otherRows];

    //   const allData = allRows.map(async (row) => {
    //     //  const date = await row.findElement(By.css("h3>span")).getText();
    //     // const items = await row.findElements(
    //     //   By.className("Box-omzyfs-0 gExFDv")
    //     // );
    //     //   .then((boxes) => {
    //     //     return boxes.map(async (box) => {
    //     //       const picture = await box
    //     //         .findElement(
    //     //           By.className("ResponsiveImage__InnerImage-zufkvd-1 lgUZqN")
    //     //         )
    //     //         .getAttribute("src");
    //     //       const title = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW"
    //     //           )
    //     //         )
    //     //         .getText();
    //     //       const eventSrc = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW"
    //     //           )
    //     //         )
    //     //         .getAttribute("href");
    //     //       const artist = await box
    //     //         .findElement(By.className("Text-sc-1t0gn2o-0 bYvpkM"))
    //     //         .getText();
    //     //       const location = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dxNiKF"
    //     //           )
    //     //         )
    //     //         .getText();
    //     //       const allItems = Promise.all([
    //     //         picture,
    //     //         title,
    //     //         eventSrc,
    //     //         artist,
    //     //         location,
    //     //       ]).then((datas) => {
    //     //         return {
    //     //           picture: datas[0],
    //     //           title: datas[1],
    //     //           eventSrc: datas[2],
    //     //           artist: datas[3],
    //     //           location: datas[4],
    //     //         };
    //     //       });
    //     //       return allItems;
    //     //     });
    //     //   });
    //     //     const items = await row
    //     //   .findElements(By, className("Box-omzyfs-0 gExFDv"))
    //     //   .then((boxes) => {
    //     //     return boxes.map(async (box) => {
    //     //       const picture = await box
    //     //         .findElement(
    //     //           By.className("ResponsiveImage__InnerImage-zufkvd-1 lgUZqN")
    //     //         )
    //     //         .getAttribute("src");
    //     //       const title = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW"
    //     //           )
    //     //         )
    //     //         .getText();
    //     //       const eventSrc = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW"
    //     //           )
    //     //         )
    //     //         .getAttribute("href");
    //     //       const artist = await box
    //     //         .findElement(By.className("Text-sc-1t0gn2o-0 bYvpkM"))
    //     //         .getText();
    //     //       const location = await box
    //     //         .findElement(
    //     //           By.className(
    //     //             "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dxNiKF"
    //     //           )
    //     //         )
    //     //         .getText();
    //     //       const allItems = Promise.all([
    //     //         picture,
    //     //         title,
    //     //         eventSrc,
    //     //         artist,
    //     //         location,
    //     //       ]).then((datas) => {
    //     //         return {
    //     //           picture: datas[0],
    //     //           title: datas[1],
    //     //           eventSrc: datas[2],
    //     //           artist: datas[3],
    //     //           location: datas[4],
    //     //         };
    //     //       });
    //     //       return allItems;
    //     //     });
    //     //   });
    //     // console.log(items);
    //     // const artistData = await findElements(
    //     //   By.className("Column-sc-18hsrnn-0 kHUYAc")
    //     // );
    //     // const waited = Promise.all(artistData);
    //     // console.log(waited);
    //     // const artists
    //     // const artistNames = await row.findElements(
    //     //   By.className("Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dXQVFW")
    //     // );
    //     // const eventNames = await row.findElements(
    //     //   By.className("Text-sc-1t0gn2o-0 bYvpkM")
    //     // );
    //     // const promisedArtistNames = await Promise.all(artistNames);
    //     // const rowPromises = promisedArtistNames.map(async (el) => {
    //     //   return el.getText();
    //     // });
    //     // const p = await Promise.all(rowPromises);
    //     // console.log(p);
    //     // return { date, rowPromises };
    //   });

    //   const allDatesP = allRows.map((row) =>
    //     row.findElement(By.css("h3>span"))
    //   );
    const allBoxes = allRows.map(async (row) => {
      const promisedBoxes = await Promise.all([
        row.findElement(By.css("h3>span")).getText(),
        row.findElements(By.className("Box-omzyfs-0 gExFDv")).then((boxes) => {
          return boxes.map(async (box) => {
            const test = await Promise.all([
              box
                .findElement(By.className("Column-sc-18hsrnn-0 kHUYAc"))
                .then(async (item) => {
                  const text = item.findElement(
                    By.className(
                      "Text-sc-1t0gn2o-0 Link__StyledLink-k7o46r-0 dxNiKF"
                    )
                  );

                  console.log(await text.getText());
                }),
            ]);
            console.log(test);
          });
        }),
      ]);

      return promisedBoxes;
    });

    //   const promisedAllBoxes = await Promise.all(allBoxes);
    //   const allPictures = promisedAllBoxes.map((picture) => {
    //     return picture.findElement(
    //       By.className("ResponsiveImage__InnerImage-zufkvd-1 lgUZqN")
    //     );
    //   });

    //   const allEventsP = allRows.map((row) =>
    //     row.findElement(By.css("h3>span")).getText()
    //   );

    const deneme = await Promise.all(allBoxes);
    console.log(deneme);
    await driver.manage().setTimeouts({ implicit: 15000 });

    // i++;
  } else {
    proceed = false;
    console.log("got here", proceed);
  }
};
//};

exampleFunc();

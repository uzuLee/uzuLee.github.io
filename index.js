const express = require("express");
const app = express();

app.get("/kakao-bridge/:params", (req, res) => {
  const message = JSON.parse(decodeURIComponent(req.params.params));
  let result = {};

  switch (message.type) {
    case "text":
      if (message.text == "!테스토스테론") {
        result = {
          message: {
            text: "테스트 성공! kakao-bridge 정상 동작!",
          },
          room: {
            name: message.room.name,
          },
        };
      }
  }

  return res.json(result);
});

app.listen(3000, () => {
  console.log("kakao-bridge가 작동중이에요.");
});

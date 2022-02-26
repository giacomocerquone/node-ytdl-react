const ytdl = require("ytdl-core");

const main = async () => {
  let info = await ytdl.getBasicInfo(
    "https://www.youtube.com/watch?v=OqgTf9_YneQ"
  );
  // console.log("info", info);
};

main();

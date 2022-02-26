import "./App.css";
import { useEffect, useState } from "react";
import ytdl from "ytdl-core";
import { Player } from "video-react";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    (async () => {
      let info = await ytdl.getBasicInfo(
        "https://www.youtube.com/watch?v=OqgTf9_YneQ"
      );

      setUrl(info?.formats?.[0]?.url);
      console.log("info", info);
    })();
  }, []);

  return (
    <div className="App">
      {url && <Player playsInline poster="/assets/poster.png" src={url} />}
    </div>
  );
}

export default App;

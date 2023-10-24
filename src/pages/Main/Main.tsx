import { MainYoutubeUrl } from "../../constants/mainYoutubeUrl";
import "./main.scss";

function Main() {
  return (
    <div className="main">
      <a href="/">
        <iframe 
          width="560" height="315" 
          src={MainYoutubeUrl} title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </a>
    </div>
  )
}

export default Main;
import { MainYoutubeUrl } from "../../constants/mainYoutubeUrl";
import "./main.scss";

function Main() {
	return (
		<div className="main">
			<iframe
				width="560"
				height="315"
				src={MainYoutubeUrl.left}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			<iframe
				width="560"
				height="315"
				src={MainYoutubeUrl.right}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default Main;

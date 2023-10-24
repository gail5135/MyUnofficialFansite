import { Link } from "react-router-dom";

interface AlbumArtProps {
	imgSrc: string;
	albumName: string;
}

function AlbumArt(props: AlbumArtProps) {
	const { imgSrc, albumName } = props;
	return (
		<Link className="album-art" to={albumName}>
			<img src={imgSrc} />
		</Link>
	);
}

export default AlbumArt;

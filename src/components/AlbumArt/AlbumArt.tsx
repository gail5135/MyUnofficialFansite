import "./album-art.scss";
import { Link } from "react-router-dom";

interface AlbumArtProps {
	imgSrc: string;
	albumType: string;
}

function AlbumArt(props: AlbumArtProps) {
	const { imgSrc, albumType } = props;

	const tempName: string | undefined = imgSrc.split("/").pop()?.split(".")[0];
	const albumName: string = typeof tempName === "string" ? tempName : "";

	// const select = useSelector((state: object) => state.selectedAlbum.name);
	// const dispatch = useDispatch();

	return (
		<Link className="album-art" to={`detail/${albumType}/${albumName}`}>
			<img src={imgSrc} alt={albumName} />
		</Link>
	);
}

export default AlbumArt;

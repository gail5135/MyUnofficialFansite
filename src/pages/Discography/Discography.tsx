import "./discography.scss";
import DiscographyCategory from "./DiscographyCategory";
import TagAlbum from "../../assets/images/tag_album.png";
import TagSingle from "../../assets/images/tag_single.png";

export const AlbumType = {
	ALBUM: "album",
	SINGLE: "single",
	BLU_RAY: "blu-ray",
	DVD: "dvd",
	LIMITED: "limited",
};

function getTagImgSrc(type: string): string {
	switch (type) {
		case AlbumType.ALBUM:
			return TagAlbum;

		case AlbumType.SINGLE:
			return TagSingle;

		default:
			return "";
	}
}

function Discography() {
	return (
		<section className="discography">
			<DiscographyCategory tagImgSrc={getTagImgSrc(AlbumType.ALBUM)} albumType={AlbumType.ALBUM} />
			<DiscographyCategory tagImgSrc={getTagImgSrc(AlbumType.SINGLE)} albumType={AlbumType.SINGLE} />
		</section>
	);
}

export default Discography;

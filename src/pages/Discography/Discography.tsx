import AlbumArt from "../../components/AlbumArt/AlbumArt";

const AlbumType = {
	ALBUM: "album",
	SINGLE: "single",
	BLU_RAY: "blu-ray",
	DVD: "dvd",
	LIMITED: "limited",
};

function Discography() {
	return (
		<>
			<section className="discography">
				<div className={`discography-category ${AlbumType.ALBUM}`}>
					<AlbumArt imgSrc="../../assets/images/album_arts/gzca-5319_5320.jpg" albumName="temp" />
				</div>
				<div className={`discography-category ${AlbumType.SINGLE}`}>{AlbumType.SINGLE}</div>
				<div className={`discography-category ${AlbumType.DVD} ${AlbumType.BLU_RAY}`}>{AlbumType.ALBUM}</div>
				<div className={`discography-category ${AlbumType.LIMITED}`}>{}</div>
			</section>
		</>
	);
}

export default Discography;

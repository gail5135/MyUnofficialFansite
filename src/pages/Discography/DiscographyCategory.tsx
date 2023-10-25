import { AlbumArts } from "../../constants/albumArts";
import AlbumArt from "../../components/AlbumArt/AlbumArt";

interface DiscographyCategoryPropsType {
	tagImgSrc: string;
	albumType: string;
}

function DiscographyCategory(props: DiscographyCategoryPropsType) {
	const { tagImgSrc, albumType } = props;

	return (
		<div className={`discography-category ${albumType}`}>
			<img className="discography-category-tag" src={tagImgSrc} alt={albumType} />
			<div className="discography-category-album_arts">
				{AlbumArts[albumType].map((albumArt) => {
					return <AlbumArt imgSrc={albumArt} key={albumArt} />;
				})}
			</div>
			<div className="discography-album_arts">
				{/* <AlbumArt imgSrc="../../assets/images/albumArts/gzca-4140.jpg" albumName="temp" /> */}
			</div>
		</div>
	);
}

export default DiscographyCategory;

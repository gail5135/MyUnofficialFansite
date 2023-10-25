import { AlbumCodes } from "../../constants/albumCodes";
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
				{AlbumCodes[albumType].map((AlbumCode) => {
					return <AlbumArt imgSrc={AlbumCode} albumType={albumType} key={AlbumCode} />;
				})}
			</div>
			<div className="discography-album_arts">
				{/* <AlbumArt imgSrc="../../assets/images/albumArts/gzca-4140.jpg" albumName="temp" /> */}
			</div>
		</div>
	);
}

export default DiscographyCategory;

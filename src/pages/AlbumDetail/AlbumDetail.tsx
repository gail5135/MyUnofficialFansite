import "./album-detail.scss";
import { useParams } from "react-router-dom";
import { getImgSrcByAlbumCode } from "../../constants/albumCodes";
import { AlbumInfoType, getAlbumInfo } from "../../constants/albumInfos";
import { ReactElement, useCallback } from "react";

function Album() {
	const params = useParams();

	const albumType: string = String(params.albumType);
	const albumCode: string = String(params.albumCode);

	const albumArtImgSrc = getImgSrcByAlbumCode(albumType, albumCode);
	const albumInfo: AlbumInfoType | null = getAlbumInfo(albumCode);

	const renderInfos = useCallback((albumInfo: AlbumInfoType | null): ReactElement => {
		if (albumInfo === null) {
			return <></>;
		}

		return (
			<div className="album-detail-right infos">
				<div className="division">{albumInfo.division}</div>
				{albumInfo.discNum === 1 ? (
					<div className="title">{albumInfo.title}</div>
				) : (
					albumInfo.discTitle?.map((title) => {
						return <div className="title">{title}</div>;
					})
				)}

				<ol>
					{albumInfo.trackList.map((track) => {
						return <li className="track">{track}</li>;
					})}
				</ol>
			</div>
		);
	}, []);

	return (
		<section className={`album-detail ${albumType}`}>
			<div className="album-detail-left">
				<img src={albumArtImgSrc} alt="albumArtImgSrc" />
			</div>
			<div className="album-detail-right">{renderInfos(albumInfo)}</div>
		</section>
	);
}

export default Album;

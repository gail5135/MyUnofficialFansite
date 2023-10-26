import "./album-detail.scss";
import { useParams } from "react-router-dom";
import { getImgSrcByAlbumCode } from "../../constants/albumCodes";
import { AlbumInfoType, getAlbumInfo } from "../../constants/albumInfos";
import { ReactElement, useState } from "react";
import classNames from "classnames";

function Album() {
	const params = useParams();

	const albumType: string = String(params.albumType);
	const albumCode: string = String(params.albumCode);

	const albumArtImgSrc = getImgSrcByAlbumCode(albumType, albumCode);
	const albumInfo: AlbumInfoType | null = getAlbumInfo(albumCode);

	const [viewLyrics, setViewLyrics] = useState(false);

	const onViewLyrics = (event) => {
		setViewLyrics(event.target.innerText);
	};

	const offViewLyrics = () => {
		setViewLyrics(false);
	};

	const renderInfos = (albumInfo: AlbumInfoType | null): ReactElement => {
		if (albumInfo === null) {
			return <></>;
		}

		return (
			<div className={classNames("infos", { "off-view-lyrics": Boolean(viewLyrics) })}>
				<div className="division">{albumInfo.division}</div>
				{albumInfo.discNum === 1 ? (
					<>
						<div className="title">{albumInfo.title}</div>
						<ol className="tracklist">
							{albumInfo.trackList.map((track) => {
								const trackStr: string = track as string;

								return (
									<li className="track">
										<span onClick={onViewLyrics} key={trackStr}>
											{track}
										</span>
									</li>
								);
							})}
						</ol>
					</>
				) : (
					albumInfo.discTitle?.map((title, idx) => {
						const trackList: string[] = albumInfo.trackList[idx] as string[];

						return (
							<>
								<div className="title" key={title}>
									{`${idx + 1}. ${title}`}
								</div>
								<ol className="tracklist">
									{trackList.map((track) => {
										return (
											<li className="track">
												<span onClick={onViewLyrics} key={track}>
													{track}
												</span>
											</li>
										);
									})}
								</ol>
							</>
						);
					})
				)}
			</div>
		);
	};

	return (
		<section className={`album-detail ${albumType}`}>
			<div className="album-detail-left">
				<img src={albumArtImgSrc} alt="albumArtImgSrc" />
			</div>
			<div className="album-detail-right">
				{renderInfos(albumInfo)}
				<div className={classNames("lyrics", { "on-view-lyrics": viewLyrics })}>
					<p>Making Lyrics Component...</p>
					<button type="button" onClick={offViewLyrics}>
						back
					</button>
				</div>
			</div>
		</section>
	);
}

export default Album;

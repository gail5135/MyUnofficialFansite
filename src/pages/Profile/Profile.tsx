import "./profile.scss";
import PROFILE_PHOTO from "../../assets/images/profile-photo.webp";
import { ProfileInformationTitle, ProfileInformationData } from "../../constants/profileIntormation";
import ProfileInformationItem, { ProfileInfoItemType } from "./ProfileInformationItem";

function Profile() {
	return (
		<section className="profile">
			<section className="profile-photo">
				<img className="profile-photo__img" src={PROFILE_PHOTO} alt="profile-photo" />
			</section>
			<section className="profile-introductions">
				<ProfileInformationItem type={ProfileInfoItemType.TITLE} value={ProfileInformationTitle.NAME} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.NAME.HANJA} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.NAME.HIRAGANA} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.NAME.KOREAN} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.NAME.ENGLISH} />
				<ProfileInformationItem type={ProfileInfoItemType.TITLE} value={ProfileInformationTitle.BIRTH} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.BIRTH} />
				<ProfileInformationItem type={ProfileInfoItemType.TITLE} value={ProfileInformationTitle.HOBBY} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.HOBBY} />
				<ProfileInformationItem type={ProfileInfoItemType.TITLE} value={ProfileInformationTitle.MOVIE} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.MOVIE} />
				<ProfileInformationItem type={ProfileInfoItemType.TITLE} value={ProfileInformationTitle.COMMENT} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.COMMENT[0]} />
				<ProfileInformationItem type={ProfileInfoItemType.VALUE} value={ProfileInformationData.COMMENT[1]} />
			</section>
		</section>
	);
}

export default Profile;

import React from "react";
import "./profile.scss";
import PROFILE_PHOTO from "../../assets/images/profile-photo.webp";
import { ProfileInformationTitle, ProfileInformationData } from "../../constants/profileIntormation";

interface ProfileInfoItem {
  key: String,
  data: String
}

const ItemType = {
  TITLE: "title",
  VALUE: "value"
}

function Profile() {

  function renderItems():ProfileInfoItem {
    let renderedItems:Array<object> = [];

    for(const key in ProfileInformationTitle) {
      renderedItems.push({
        "key": key,
        // "data":String: ProfileInformationTitle[key]
      })
    }

    return renderedItems;
  }

  
  return (
    <section className="profile">
      <section className="profile-photo">
        <img className="profile-photo__img" src={PROFILE_PHOTO} alt="profile-photo" />
      </section>
      <section className="profile-introductions">
        {renderItems().map((item: object) => {
          return <React.Fragment key={item.key} >{item.data}</React.Fragment>
        })}
        {/* <ProfileIntroductionItem /> */}
        <span className="profile-introduction-title">{ProfileeIntroductionsTitle.NAME}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HANJA}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.KOREAN}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HIRAGANA}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.ENGLISH}</span>
        <span className="profile-introduction-title">{ProfileeIntroductionsTitle.NAME}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HANJA}</span>
        <span className="profile-introduction-title">{ProfileeIntroductionsTitle.NAME}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HANJA}</span>
        <span className="profile-introduction-title">{ProfileeIntroductionsTitle.NAME}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HANJA}</span>
        <span className="profile-introduction-title">{ProfileeIntroductionsTitle.NAME}</span>
        <span className="profile-introduction-value">{ProfileIntroductions.NAME.HANJA}</span>
      </section>
    </section>
  );
}

export default Profile;

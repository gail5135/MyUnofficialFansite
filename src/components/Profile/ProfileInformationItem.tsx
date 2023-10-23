import React from "react";

interface ProfileInformationItemPropsType {
  type: string;
  data: string
}

function ProfileInformationItem(props: ProfileInformationItemPropsType): React.ReactElement {
  const { type, data } = props;

  return (
    <span className={`profile-introduction-${type}`}>{data}</span>
  )
}

export default ProfileInformationItem;
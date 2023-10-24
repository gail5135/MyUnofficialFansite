import React from "react";

export const ProfileInfoItemType = {
	TITLE: "title",
	VALUE: "value",
};

interface ProfileInformationItemPropsType {
	type: string;
	value: string;
}

function ProfileInformationItem(props: ProfileInformationItemPropsType): React.ReactElement {
	const { type, value } = props;

	return (
		<span className={`profile-introduction-${type}`}>
			{type === ProfileInfoItemType.TITLE ? <strong>{value}</strong> : value}
		</span>
	);
}

export default ProfileInformationItem;

import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../auth/fireBase";
import style from "../styles/avatar.module.css";
import noAvatarPicture from "../assets/images/avatars/noAvatar.png";

function AvatarPicture() {
  const [avatarURL, setAvatarURL] = useState(null);
  const user = useSelector((state) => state.isLoggedIn);

  async function _getAvatarURL(user) {
    if (user) {
      try {
        const id = user.uid;
        const avataRaf = ref(storage, `user-data/${id}/avatar`);
        const url = await getDownloadURL(avataRaf);
        return url;
      } catch (error) {
        console.log("Unable to fetch profile picture: ");
      }
    }
  }

  useEffect(() => {
    (async () => {
      const url = await _getAvatarURL(user);
      setAvatarURL(url);
    })();
  }, [user]);

  return (
    <img
      className={style.avatar}
      src={avatarURL ? avatarURL : noAvatarPicture.src}
      alt="Profil picture"
    />
  );
}

export default AvatarPicture;

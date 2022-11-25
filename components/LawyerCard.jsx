import React from "react";
import style from "../styles/lawyerCard.module.css";
import avatarMale from "../assets/images/avatars/avatar-male.png";
import avatarFemale from "../assets/images/avatars/avatar-fem.png";
import { capitalizaFirstCahr } from "../lib/capitalizer";

function LawyerCard({ lawyer }) {
  const { firstName, lastName, phone, gender, email, speciality } =
    lawyer && lawyer;

  return (
    <article className={style.lawyer_container}>
      <div className={style.lawyer_info_container}>
        <div
          className={style.lawyer_profile_picture}
          style={{
            backgroundImage:
              gender === "male"
                ? `url("${avatarMale.src}")`
                : `url("${avatarFemale.src}")`,
          }}
        />

        <div className={style.lawyer_info}>
          <h1>
            {firstName} {lastName}
          </h1>
          <p>
            <span className="bold">Specialist in :</span>{" "}
            {capitalizaFirstCahr(speciality)}
          </p>
        </div>
      </div>
      <div className={style.lawyer_contact_container}>
        <a href={`tel:${phone}`}>Phone: {phone} </a>
        <a href={`mailto:${email}`}>Mail: {email} </a>
      </div>
    </article>
  );
}

export default LawyerCard;

import React from "react";
import style from "../styles/lawyerCard.module.css";
import avatarMale from "../assets/images/avatars/avatar-male.png";
import avatarFemale from "../assets/images/avatars/avatar-fem.png";

function LawyerCard({
  dataBaseItem = {
    firstName: "Max",
    lastName: "Musterman",
    imageLink: "../assets/images/avatars/avatar-male.png",
    speciality: ["insurance", "It industry"],
    phone: "+49987363837",
    email: "test@test.de",
    gender: "male",
  },
}) {
  const { firstName, lastName, imageLink, speciality, phone, gender, email } =
    dataBaseItem;

  function capitalizaFirstCahr(array) {
    return array
      .map((entry) => entry.charAt(0).toUpperCase() + entry.slice(1))
      .toString()
      .replace(",", ", ");
  }

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
          <p>Specialist in : {capitalizaFirstCahr(speciality)}</p>
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

import React from "react";
import style from "../styles/unionCard.module.css";
import { capitalizaFirstCahr } from "../lib/capitalizer";

function UnionsCrad({ union }) {
  if (!union) return "loading...";

  const { buisnesss, companyName, email, location, description, phone } = union;

  return (
    <article className={style.union_container}>
      <div className={style.union_info_container}>
        <div
          className={style.union_profile_picture}
          style={{
            backgroundImage: 'url("/logos/logo-1.png")',
          }}
        />

        <div className={style.union_info}>
          <h1>{companyName && companyName}</h1>
          <p className={style.description}>{description}</p>
          <p>
            <span className="bold">Specialist in: </span>
            {capitalizaFirstCahr(buisnesss)}
          </p>
          <p className={style.location}>
            <span className="bold">Location:</span>
            <span> {location}</span>
          </p>
        </div>
      </div>
      <div className={style.union_contact_container}>
        <a href={`tel:${phone}`}>Phone: {phone} </a>
        <a href={`mailto:${email}`}>Mail: {email} </a>
      </div>
    </article>
  );
}

export default UnionsCrad;

import React from "react";
import styles from "../../styles/search.module.css";
import UnionsCrad from "../../components/UnionsCrad";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Search() {
  const unionList = useSelector((state) => state.companyData.unions);
  const user = useSelector((state) => state.isLoggedIn);
  const router = useRouter();
  if (!user) return redirectUser();

  function redirectUser() {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    return <h1>You must be logged in!</h1>;
  }

  return (
    <div className={styles.container}>
      <h1>search</h1>
      {unionList.map((union) => (
        <UnionsCrad union={union} key={union.companyName} />
      ))}
    </div>
  );
}

export default Search;

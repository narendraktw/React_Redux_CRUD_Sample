import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listDevelopers, deleteDeveloper } from "../../Redux/FeaturedDevelopers/actions.js";
import styles from "./Home.module.scss";
import Card from "../../Components/Cards/Card";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.featureDevelopers.users?.developers
  );
  useEffect(() => {
    dispatch(listDevelopers());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.heading}>
        <h1>Featured Developers</h1>
        <h2>Prominent developers in Banglore</h2>
        </div>
        <div className={styles.addButton}>
            <button type="button">
              <Link to={`/Form`}>+ Add New Developers</Link>
            </button>
        </div>
        
      </div>

      <div className={styles.cards}>
        
        {(data?.length) ?
          data.map((item) => (
            <Card key={item.id} data={item} deleteDeveloper={() => dispatch(deleteDeveloper(item.id))} />
          )) : <div><mark>No featured developer available</mark></div>}
      </div>
    </section>
  );
};


export default Home;
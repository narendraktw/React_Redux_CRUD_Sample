import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Card = ({ data, deleteDeveloper }) => {
  
  return (
    <article className={styles.cards}>
      <div className={styles.header}>
        <img height="80px" width="80px" alt={data.imgTitle} src={data.logo} />
        <div className={styles.summary}>
          <h3 title={data.title}>{data.title} </h3>
          <div className={styles.miniSummary}>
            <p>
              <span>{data.totalExp}</span>
              <span>Years Exp.</span>
            </p>
            <p>
              <span>{data.totalProjects}</span>
              <span>Projects</span>
            </p>
          </div>
        </div>
      </div>
      <p className={styles.overflow} title={data.desc}>
        {data.desc}
      </p>
      <p className={styles.specialText}>{data.imgTitle}</p>
      <figure>
        <figcaption>
          <h4>{data.imgTitle}</h4>
          <div>{data.location}</div>
        </figcaption>
        <img height="140px" width="250px" alt="img" src={data.imgURL} />
      </figure>
      <div className={styles.overlay}>
        <button onClick={(e) => e.preventDefault()}>
          <Link to={`/Form/${data.id}`}>Edit</Link>
        </button>
        <button onClick={(e) => { e.preventDefault(); if (window.confirm('Are you sure to delete this item?')) deleteDeveloper(data.id) } }>Delete</button>
      </div>
    </article>
  );
};

export default Card;

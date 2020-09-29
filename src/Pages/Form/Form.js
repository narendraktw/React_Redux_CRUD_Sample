import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
  editDeveloper,
  addDeveloper,
} from "../../Redux/FeaturedDevelopers/actions";
import styles from "./Form.module.scss";

function Form({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    imgURL: "",
    logo: "",
    totalExp: "",
    totalProjects: "",
    desc: "",
    imgTitle: "",
    location: "",
    title: "",
  });
  const [apiData, setApiData] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const id = match?.params?.id;
  let data;

  data = useSelector((state) => state.featureDevelopers.users?.current) || {};

  const handleOnChange = (e) => {
    const value = e.target.value || "";
    const name = e.target.name;

    setInputs((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = (data) => {
    // returns a promise
    dispatch(addDeveloper(data, id)).then((res) => {
      if (res) {
        history.push("/");
      }
    });
  };

  useEffect(() => {
    if (!Object.keys(data || {}).length && !!id) {
      dispatch(editDeveloper(id));
    } else if (Object.keys(data || {}).length && !apiData.title) {
      //populate data local state
      setApiData({
        ...data,
      });
      setInputs({
        ...data,
      });
    }
  }, [dispatch, id, data, apiData.title]);

  return (
    <section className={styles.formContainer}>
      <h1>Featured Developers</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Delveloper Logo Image URL</label>
        <input
          name="logo"
          ref={register({ required: true, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g })}
          onChange={handleOnChange}
          value={inputs.logo}
        />
        {errors.logo && <p>Logo image url is required or url passed it not in valid format.</p>}
        
        <label>Delveloper Name</label>
        <input
          name="title"
          ref={register({ required: true })}
          onChange={handleOnChange}
          value={inputs.title}
        />
        {errors.title && <p>Title is required</p>}
        <label>Year of Experience</label>
        <input
          name="totalExp"
          type="number"
          ref={register({ required: true, min: 5, max: 35 })}
          onChange={handleOnChange}
          value={inputs.totalExp}
        />
        {errors.totalExp && <p>Total projects is required</p> &&
          errors.totalExp && (
            <p>You Must be total exp greater then 5 and less then 35</p>
          )}
        <label>Project Count</label>
        <input
          name="totalProjects"
          type="number"
          ref={register({ required: true, min: 1, max: 300 })}
          onChange={handleOnChange}
          value={inputs.totalProjects}
        />
        {errors.totalProjects && <p>Total projects is required</p> &&
          errors.totalProjects && (
            <p>Your total Projects greater then 1 and less then 300</p>
          )}
        <label>Description</label>
        <textarea
          name="desc"
          ref={register({ required: true })}
          onChange={handleOnChange}
          value={inputs.desc}
        />
        {errors.desc && <p>Description is required</p>}
        <label>Project Name</label>
        <input
          name="imgTitle"
          ref={register({ required: true })}
          onChange={handleOnChange}
          value={inputs.imgTitle}
        />
        {errors.imgTitle && <p>Location is required</p>}
        <label>Project Location</label>
        <input
          name="location"
          ref={register({ required: true })}
          onChange={handleOnChange}
          value={inputs.location}
        />
        {errors.location && <p>Project location is required</p>}
        <label>Project Image URL</label>
        <input
          name="imgURL"
          ref={register({ required: true, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g })}
          onChange={handleOnChange}
          value={inputs.imgURL}
        />
        {errors.imgURL && <p>Project image url is required or image url is not in valid format</p>}
        <button type="submit" className="btnSubmit">
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Form;

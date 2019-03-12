import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Formik } from "formik";

export default class index extends Component {
  static propTypes = {};

  render() {
    const {
      location: {
        state: { authors }
      }
    } = this.props;
    return (
      <Formik
        initialValues={{
          title: "",
          watchHref: "",
          authorId: "",
          length: "",
          category: ""
        }}
        validate={values => {
          let error = {};
          if (!values.title) {
            error.title = "required";
          }
          if (!values.watchHref) {
            error.watchHref = "required";
          }
          if (!values.length) {
            error.length = "required";
          }
          if (!values.category) {
            error.category = "required";
          }
          if (!values.authorId) {
            error.authorId = "required";
          }
          return error;
        }}
        onSubmit={async (values, { setSubmitting, setError }) => {
          try {
            const res = await fetch("http://localhost:3004/courses", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            });
            setSubmitting(false);
            const {
              history: { push }
            } = this.props;
            push({
              pathname: "/"
            });
          } catch (error) {
            setError({ general: "Submit Fail" });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>{errors.general && errors.general}</span>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <span>{errors.title && touched.title && errors.title}</span>
            </div>
            <div>
              <label htmlFor="watchHref">Link</label>
              <input
                type="text"
                name="watchHref"
                placeholder="Link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.watchHref}
              />
              <span>
                {errors.watchHref && touched.watchHref && errors.watchHref}
              </span>
            </div>
            <div>
              <label htmlFor="length">Length</label>
              <input
                type="text"
                name="length"
                placeholder="Length"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.length}
              />
              <span>{errors.length && touched.length && errors.length}</span>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <span>
                {errors.category && touched.category && errors.category}
              </span>
            </div>
            <div>
              <label htmlFor="authorId">Author</label>
              <select
                name="authorId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.authorId}
              >
                <option value="">Select Author</option>
                {authors &&
                  authors.map(author => (
                    <option key={author.id} value={author.id}>{`${
                      author.firstName
                    } ${author.lastName}`}</option>
                  ))}
              </select>
            </div>
            <input type="submit" disabled={isSubmitting} value="Submit" />
          </form>
        )}
      </Formik>
    );
  }
}

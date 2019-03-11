import React, { Component } from "react";
// import PropTypes from 'prop-types';

class index extends Component {
  state = {
    courses: [],
    authors: [],
    error: false
  };

  componentDidMount() {
    this.getData();

    // this.getCourses();
    // this.getAuthors();
  }

  getData = async () => {
    try {
      const coursesAPI = await fetch("http://localhost:3004/courses");
      const authorsAPI = await fetch("http://localhost:3004/authors");
      const res = await Promise.all([coursesAPI, authorsAPI]);
      const courses = await res[0].json();
      const authors = await res[1].json();
      this.setState({ courses, authors });
    } catch (error) {
      this.setState({ error });
    }
  };

  // getCourses = async () => {
  //   const res = await fetch("http://localhost:3004/courses");
  //   const courses = await res.json();
  //   this.setState({ courses });
  // };

  // getAuthors = async () => {
  //   const res = await fetch("http://localhost:3004/authors");
  //   const authors = await res.json();
  //   this.setState({ authors });
  // };

  displayAuthor = authorId => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === authorId);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return "";
  };

  render() {
    const { courses, error } = this.state;
    if (error) {
      return <h1>Oops! something went wrong</h1>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>
                <a href={courses.watchHref}>Link</a>
              </td>
              <td>{this.displayAuthor(course.authorId)}</td>
              <td>{course.length}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

index.propTypes = {};

export default index;

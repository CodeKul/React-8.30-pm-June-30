import React,{useState} from "react";
function CourseDetails() {
  //const[course,setCourse]=useState({})
  
  let course = {
    courseName: "HTML",
    rating: 4,
    takeAways: [
      " Have a fundamental understanding of the Python programming language.",
      "Have the skills and understanding of Python to confidently apply for Python programming jobs.",
      "Acquire the pre-requisite Python skills to move into specific branches - Machine Learning, Data Science, etc..",
      "Add the Python Object-Oriented Programming (OOP) skills to your résumé.",
      "Understand how to create your own Python programs.",
    ],
    noOfHours: "6 hours",
    subCourses: [],
    courseContent: [
      {
        topicName: "Getting Started",
        subTopics: ["Lists", "Immutable Objects"],
      },
      {
        topicName: "Functions-An Introduction",
        subTopics: ["Lists", "Immutable Objects"],
      },
      {
        topicName: "Dictionaries and Sets",
        subTopics: ["Lists", "Immutable Objects"],
      },
    ],
  };
  return (
    <div>
      <p>{course.courseName}</p>
      <small>{course.rating}</small>
      <p>{course.noOfHours}</p>
      <ul>
        {course.takeAways.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {course.subCourses.length === 0 ? (
        <p>No subcourses</p>
      ) : (
        course.subCourses.map((sub) => <li>{sub}</li>)
      )}

      {/* {course.subCourses.length !== 0 &&
        course.subCourses.map((sub) => <li>{sub}</li>)} */}
    </div>
  );
}

export default CourseDetails;

import React, { useState } from "react";
import SampleInput from "./SampleInput";
import * as zxcvbn from "zxcvbn";

export function minMaxLength(text, minLength, maxLength) {

  let result = !text || text.length < minLength;   //min length validation

  if (maxLength) result = result || text.length < minLength;    //max lenth validation

  return result;
}

export function validEmail(text) {
  const regex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return !regex.test(text);
}

let registeredUsers = [
  "sanketsb.18@gmail.com",
  "mail@myblog.in",
  "contact@lucky.com",
];

export function userExists(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === email) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export function passwordStrength(text) {
  let result = zxcvbn(text);
  return result.score < 3;
}

function validateConfirmPassword(password, confirmpassword, formErrors) {
  formErrors = formErrors || {};
  if (password !== confirmpassword) {
    formErrors.confirmpassword = `Confirm password is not matching with password`;
    return false;
  } else {
    delete formErrors.confirmpassword;
    return true;
  }
}

export default function SignUpForm() {
  const [user, setUser] = useState({});
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    var currentFormErrors = formErrors;

    setFormErrors(currentFormErrors);

    switch (name) {
      case "firstName":
        setUser({ ...user, firstName: value });
        //validation
        if (minMaxLength(value, 3)) {
          currentFormErrors[
            name
          ] = `First name should have minimum 3 characters`;
        } else {
          delete currentFormErrors[name];
        }
        break;

      case "email":
        if (!value || validEmail(value)) {
          currentFormErrors[name] = `Email address is invalid`;
        } else {
          userExists(value).then((result) => {
            if (result) {
              currentFormErrors[
                name
              ] = `The email is already registered. Please use a different email`;
            } else {
              delete currentFormErrors[name];
            }
          });
        }
        break;

      case "lastName":
        setUser({ ...user, lastName: value });
        break;

      case "password":
        setUser({ ...user, password: value });

        if (minMaxLength(value, 6)) {
          currentFormErrors[name] = `Password should have minimum 6 characters`;
        } else if (passwordStrength(value)) {
          currentFormErrors[name] = `Password is not strong enough.
            Include an uppercase letter, a number, a special character to make it strong`;
        } else {
          delete currentFormErrors[name];
        }

        if (user.confirmpassword) {
          validateConfirmPassword(
            value,
            user.confirmpassword,
            currentFormErrors
          );
        }
        break;

      case "confirmpassword":
        let valid = validateConfirmPassword(
          user.password,
          value,
          currentFormErrors
        );

        if (valid) {
          setUser({ ...user, confirmpassword: value });
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="signUpForm">
      <h1>Sign Up Form</h1>

      <ul>
        {Object.entries(formErrors || {}).map(([prop, value]) => {
          return <li key={prop}>{value}</li>;
        })}
      </ul>

      <form noValidate>
        <input
          className={
            formErrors && formErrors.firstName
              ? "form-control error"
              : "form-control"
          }
          name="firstName"
          placeholder="First Name"
          type="text"
          noValidate
          onBlur={handleChange}
        />

        <input placeholder="Last Name" name="lastName" type="text" noValidate />

        <input
         className={
          formErrors && formErrors.firstName
            ? "form-control error"
            : "form-control"
        }
          placeholder="Password"
          name="password"
          type="password"
          noValidate
        />

        <input
          placeholder="Confirm Password"
          name="confirmpassword"
          type="password"
          noValidate
        />

        <button
          disabled={Object.entries(formErrors || {}).length > 0}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

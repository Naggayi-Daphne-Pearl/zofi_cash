import React from "react";

import * as Yup from "yup";

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number")
    .required("Phone number is required"),

  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default validationSchema;

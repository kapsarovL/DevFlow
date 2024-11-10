"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUp;

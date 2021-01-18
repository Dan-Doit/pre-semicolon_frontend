import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const secret = useInput("");
  const lastName = useInput("");
  const email = useInput("kdh@asdasd.com");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const { data: { requestSecret } } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("You dont have an account yet, create one");
            setTimeout(() => setAction("signUp"), 3000);
          } else { 
            toast.success('이메일함에서 시크릿 코드를 확인해주세요!')
            setAction('confirm');
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const { data: { createAccount } } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Woops! 잠시만요! 다시 시도해주세요!");
          } else {
            toast.success("환영해요! 당신만을 기다렸어요!");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field are required");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
import React, { useContext } from "react";
import Container from "../components/Container";
import { Context } from "../context";
import BaseLayout from "../layouts/BaseLayout";

export default function Test() {
  const { state, actions, dispatch } = useContext(Context);

  const { text } = state.auth;
  const { is_loading } = state.common;

  return (
    <BaseLayout>
      <Container>
        <div className="flex flex-row justify-center items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              actions.auth.changeText(e.target.value)(dispatch);
            }}
          />
          <p>{text}</p>
          <button
            className={`${
              is_loading ? "bg-red-600" : "bg-blue-700"
            } text-white p-2`}
            onClick={() => {
              actions.common.setLoading(!is_loading)(dispatch);
            }}
          >
            Toggle test
          </button>
        </div>
      </Container>
    </BaseLayout>
  );
}

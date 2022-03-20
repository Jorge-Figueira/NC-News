import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../User/UserContext";
import * as api from "../../api";

export default function CommentBox({ article_id }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [params, setParams] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {}, [params, sent]);
  return (
    <>
      {user === "" && null}
      {user !== "" && (
        <section className="comment_section">
          {!params && (
            <form
              className="comment_stage"
              onSubmit={(e) => {
                e.preventDefault();
                if (comment !== "") {
                  return setParams({ username: user, body: comment });
                } else {
                  return false;
                }
              }}
            >
              <label> Write a comment</label>

              <textarea
                cols="40"
                rows="5"
                value={comment}
                onChange={(e) => {
                  e.preventDefault();
                  setComment(e.target.value);
                }}
              ></textarea>
              <button type="submit">Preview</button>
              <button
                type="button"
                onClick={() => {
                  setComment("");
                }}
              >
                Delete
              </button>
            </form>
          )}
          {params && sent === false && (
            <section className="comment_stage">
              <h3>Are you sure that you want to submit?</h3>
              <article>{params.body}</article>
              <button
                type="submit"
                onClick={() => {
                  api.postComment(params, article_id);
                  setSent(true);
                }}
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setParams(false);
                }}
              >
                Edit
              </button>
            </section>
          )}
          {sent === true && <p className="comment_stage">Comment Sent</p>}
        </section>
      )}
    </>
  );
}

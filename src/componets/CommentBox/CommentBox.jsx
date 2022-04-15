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
              <label id="write_comment_label"> Write a comment</label>

              <textarea
                className="text_area"
                placeholder="You can write your comment here. Just remember to be polite"
                cols="70"
                rows="5"
                value={comment}
                onChange={(e) => {
                  e.preventDefault();
                  setComment(e.target.value);
                }}
              ></textarea>
              <section className="comments_buttons">
                <button className="Button" type="submit">
                  Preview
                </button>
                <button
                  className="Button"
                  type="button"
                  onClick={() => {
                    setComment("");
                  }}
                >
                  Delete
                </button>
              </section>
            </form>
          )}
          {params && sent === false && (
            <section className="comment_stage">
              <h3>Are you sure that you want to submit?</h3>
              <article id="preview_article">{params.body}</article>
              <section className="comments_buttons">
                <button
                  className="Button"
                  type="submit"
                  onClick={() => {
                    api.postComment(params, article_id);
                    setSent(true);
                  }}
                >
                  Submit
                </button>
                <button
                  className="Button"
                  onClick={() => {
                    setParams(false);
                  }}
                >
                  Edit
                </button>
              </section>
            </section>
          )}
          {sent === true && <p className="comment_stage">Comment Sent</p>}
        </section>
      )}
    </>
  );
}

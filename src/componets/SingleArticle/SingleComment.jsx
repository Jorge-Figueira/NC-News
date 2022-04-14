import { useState, useEffect, useContext } from "react";
import { UserContext } from "../User/UserContext";
import * as api from "../../api";
export default function SingleComment({ comment }) {
  const [beenDeleted, setBeenDeleted] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {}, [beenDeleted]);

  return (
    <section>
      {beenDeleted === false && (
        <article key={comment.comment_id} className="comment__card">
          <p>{comment.body} </p>
          <section className="descriptors">
            <p className="descriptor_item">Author: {comment.author}</p>
            <p className="descriptor_item">Votes: {comment.votes}</p>
            <p className="descriptor_item">
              Date: {comment.created_at.slice(0, 10)}
            </p>
            {user === comment.author && (
              <button
                className="Button"
                onClick={(e) => {
                  e.preventDefault();
                  api.deleteComment(comment.comment_id);
                  setBeenDeleted(true);
                }}
              >
                Delete comment
              </button>
            )}
          </section>
        </article>
      )}
    </section>
  );
}

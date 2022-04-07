import * as api from "../../api";
import { useState, useEffect } from "react";
import like from "../../Icons_and_fonts/like.png";
import likeHover from "../../Icons_and_fonts/like-hover.png";
import unlike from "../../Icons_and_fonts/unlike.png";
import unlikeHover from "../../Icons_and_fonts/unlike-hover.png";

export default function ArticleBody({ article }) {
  const [vote, setVote] = useState(0);
  const [likeTracker, setLikeTracker] = useState([false, false]);
  const [renderVote, setRenderVote] = useState(article.votes);

  useEffect(() => {
    const voteUpdate = { inc_votes: vote };
    setRenderVote((currentVote) => {
      return currentVote + vote;
    });
    api.updateVotes(article.article_id, voteUpdate).then((item) => {});
  }, [likeTracker, article.article_id, vote]);

  return (
    <article className="article_body">
      <h3>{article.title}</h3>
      <p className="article_Body">{article.body}</p>
      <section className="descriptors">
        <p className="descriptor_item">Topic: {article.topic}</p>
        <p className="descriptor_item">Author: {article.author}</p>
        <p className="descriptor_item">Votes: {renderVote}</p>
        <p className="descriptor_item">Comments: {article.comment_count}</p>
        <p className="descriptor_item">
          Date: {article.created_at.slice(0, 10)}
        </p>
        <img
          className="like_icons"
          src={likeTracker[0] === false ? like : likeHover}
          alt="like icon"
          onClick={() => {
            if (likeTracker[0] === false) {
              if (likeTracker[1] === false) {
                setVote(1);
                setLikeTracker([true, false]);
              } else {
                setVote(2);
                setLikeTracker([true, false]);
              }
            } else {
              setVote(-1);
              setLikeTracker([false, false]);
            }
          }}
        />

        <img
          className="like_icons"
          src={likeTracker[1] === false ? unlike : unlikeHover}
          alt="like icon"
          onClick={() => {
            if (likeTracker[1] === false) {
              if (likeTracker[0] === true) {
                setVote(-2);
                setLikeTracker([false, true]);
              } else {
                setVote(-1);
                setLikeTracker([false, true]);
              }
            } else {
              setVote(1);
              setLikeTracker([false, false]);
            }
          }}
        />
      </section>
    </article>
  );
}

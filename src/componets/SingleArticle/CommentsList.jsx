import SingleComment from "./SingleComment";

export default function CommentsList({ comments }) {
  return (
    <section className="comments_list">
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
}

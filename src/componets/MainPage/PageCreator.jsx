import ArticleList from "./ArticleList";
import Selector from "./Selector";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function PageCreator() {
  const [sortby, setSortBy] = useState(undefined);
  const [order, setOrder] = useState("desc");

  const { topic } = useParams();

  return (
    <section className="pageCreator">
      <Selector
        sortby={sortby}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      <ArticleList topic={topic} sortby={sortby} order={order} />
    </section>
  );
}

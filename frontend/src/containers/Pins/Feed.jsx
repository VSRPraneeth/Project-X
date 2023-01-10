import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import Spinner from "../../components/Spinner/Spinner";
import { client } from "../../utils/client";
import { feedQuery, searchQuery } from "../../utils/data";

const Feed = () => {
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!!" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;

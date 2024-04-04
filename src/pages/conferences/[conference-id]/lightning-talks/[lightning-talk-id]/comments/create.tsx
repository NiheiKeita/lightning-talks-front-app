import { CommentCreateView } from "@/views/CommentCreateView";
import React, { useEffect, useState } from "react";

const CommentCreatePage = (() => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return <CommentCreateView />;
});

export default CommentCreatePage;

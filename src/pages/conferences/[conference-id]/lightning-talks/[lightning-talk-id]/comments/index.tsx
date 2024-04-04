import { CommentView } from "@/views/CommentView";
import React, { useEffect, useState } from "react";

const CommentPage = React.memo(() => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return <CommentView />;
});

export default CommentPage;
CommentPage.displayName = "CommentPage";

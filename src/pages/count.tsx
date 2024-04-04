import { CountView } from "@/views/CountView";
import React, { useEffect, useState } from "react";

const CountPage = (() => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return <CountView />;
});

export default CountPage;

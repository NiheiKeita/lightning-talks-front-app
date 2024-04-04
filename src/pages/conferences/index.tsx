import { ConferenceView } from "@/views/ConferenceView";
import React, { useEffect, useState } from "react";

const ConferencePage = React.memo(() => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return <ConferenceView />;
});

export default ConferencePage;
ConferencePage.displayName = "ConferencePage";

import { LightningTalkView } from "@/views/LightningTalkView";
import React, { useEffect, useState } from "react";

const LightningTalkePage = React.memo(() => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return <LightningTalkView />;
});

export default LightningTalkePage;
LightningTalkePage.displayName = "LightningTalkePage";

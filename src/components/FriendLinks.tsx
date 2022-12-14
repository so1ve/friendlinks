import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

import type { FriendData } from "../types";
import { FriendLinkItem } from "./FriendLinkItem";
import { Spinner } from "./Spinner";

export interface FriendLinksProps {
  api: string
}

export const FriendLinks: FunctionalComponent<FriendLinksProps> = ({ api }) => {
  const [data, setData] = useState<FriendData | null>(null);

  useEffect(() => {
    fetch(api).then(r => r.json()).then(setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
      <Spinner />
      <FriendLinkItem name="iasf" />
    </div>
  );
};

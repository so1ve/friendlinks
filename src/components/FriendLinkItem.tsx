import type { FunctionalComponent } from "preact";

import type { FriendDataItem } from "../types";

export const FriendLinkItem: FunctionalComponent<FriendDataItem> = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      asf
    </div>
  );
};

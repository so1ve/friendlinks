import { render } from "preact";

import { FriendLinks as FriendLinksComponent } from "./components/FriendLinks";
import { resolveElement } from "./utils";

export interface FriendLinksOptions {
  container: Element | string
  api: string
}

export class FriendLinks {
  constructor(options: FriendLinksOptions) {
    const container = resolveElement(options.container);

    if (!container) {
      throw new Error("Container element not found");
    }

    render(<FriendLinksComponent api={options.api} />, container);
  }
}

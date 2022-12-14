import { FriendLinks } from ".";

const container = document.querySelector("#friend-links");

if (container) {
  // eslint-disable-next-line no-new
  new FriendLinks({
    container,
    api: "/mock.json",
  });
}

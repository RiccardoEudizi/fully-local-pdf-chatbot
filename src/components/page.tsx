import { ChatWindow } from "./ChatWindow";

export default function Home() {
  return (
    <ChatWindow
      emoji="🏠"
      titleText="Fully Client-Side Chat Over Documents"
      placeholder="Try asking something about the document you just uploaded!"
    ></ChatWindow>
  );
}

import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://endrahx.com" target="_blank">
          endrahx.com
        </a>{" "}
        to learn WordPress Tutorial Beginner.
      </p>
    </main>
  );
}

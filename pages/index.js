import Container from "../components/Container";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Header avatar="./avatar.jpeg" alt="tecknchips" />
      <Container title="tecknchips">
        <Card link="https://tecknchips.com" name="-ˏˋ website ˊˎ-" />
        <Card
          link="https://www.linkedin.com/in/durand18/"
          name="-ˏˋ linkedin ˊˎ-"
        />
        <Card link="https://github.com/Alfacoy" name="-ˏˋ github ˊˎ-" />
        <Card link="https://twitter.com/tecknchips" name="-ˏˋ twitter ˊˎ-" />
      </Container>
    </div>
  );
}

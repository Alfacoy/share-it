import Container from "../components/Container";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Header avatar="./avatar.jpg" alt="profile" />
      <Container title="profile">
        <Card link="#" name="-ˏˋ your link ˊˎ-" />
        <Card link="#" name="-ˏˋ your link ˊˎ-" />
        <Card link="#" name="-ˏˋ your link ˊˎ-" />
        <Card link="#" name="-ˏˋ your link ˊˎ-" />
      </Container>
    </div>
  );
}

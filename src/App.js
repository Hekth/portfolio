import Inicio from "pages/Inicio";
import Header from "components/Header";
import Sobremim from "pages/Sobremim";
import Curriculo from "pages/Curriculo";
import ContainerBase from "components/ContainerBase";
import Projetos from "pages/Projetos";
import Contato from "pages/Contato";
import Footer from "components/Footer";

function App() {
  return (
    <main>
      <Header />
      <ContainerBase>
        <Inicio />
        <Sobremim />
        <Curriculo />
        <Projetos />
        <Contato />
      </ContainerBase>
      <Footer />
    </main>
  );
}

export default App;

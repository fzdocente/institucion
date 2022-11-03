import Banner from './components/Banner'; // Se importa el banner
import Navbar from './components/Navbar';
import Text from './components/Text';
export default function App() {
  return (
    <div className="container">
        {/* A continuación se utiliza el componente Banner */}
        <Banner></Banner>
        <Navbar></Navbar>
        <Text subtitulo="Front-End" titulo="React" mitexto="lorem dflsdjflkjsdkl dfkj sdlkj"></Text>
        <Text titulo="Angular" subtitulo="Lenguaje TypeScript" mitexto="Este es el texto para este titulo" valor1="5" valor2="70"></Text>
    </div>
  );
}

//export default App;

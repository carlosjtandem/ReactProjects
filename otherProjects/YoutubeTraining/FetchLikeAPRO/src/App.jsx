
import { OptionOneWithFetch } from './optionOneWithFetch';
import { Page2 } from './page2';

function App() {
  return (
    <>
      <h1>Fetch like a PRO</h1>
      {/* Opcion Nro1 con Fetch */}
      <OptionOneWithFetch />

      {/* //Opcion Nro2  con suspense */}
      <Page2 />
    </>
  )
}

export default App

// esto && es un sort and que permite acortar un if.. si es verdadero loading entonces ejecuta caso contario no
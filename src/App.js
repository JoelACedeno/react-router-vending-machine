import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route path="/chips">
            <Chips />
          </Route>
          <Route exact path="/candy">
            <Candy />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
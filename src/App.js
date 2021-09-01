import "./scss/app.scss";

import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/header/header";
import SliderComponent from "./components/slider/slider";

import HomeComponent from "./components/home/home";
import ServiceComponent from "./components/service/service";
import ContactComponent from "./components/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact>
          <SliderComponent />
          <HomeComponent />
        </Route>
        <Route path="/service/:slug">
          <ServiceComponent />
        </Route>
        <Route path="/service">
          <ServiceComponent />
        </Route>
      </Switch>
      <ContactComponent />
    </BrowserRouter>
  );
}

export default App;

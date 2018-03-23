import { h, Component } from "preact";
import "./style.scss";

interface AppProps {
  color: string;
}
interface AppState {}

export default class App extends Component<AppProps, AppState> {
  render(props) {
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, Sariha!</h1>
      </div>
    );
  }
}

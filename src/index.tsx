import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18n";

//Now I don't have to add draggable='false' to every img tag
window.ondragstart = () => false;

ReactDOM.render(<App />, document.getElementById('root'));
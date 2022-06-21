import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18next/i18n";

window.ondragstart = () => false; //Now I don't have to add draggable='false' to every img element
document.addEventListener('touchstart', () => {})

ReactDOM.render(<App />, document.getElementById('root'));
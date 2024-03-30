import ReactDOM from 'react-dom/client';
import RenderRoutes from './routes/routes';
import './reset.css';

function App() {
  return (
    <>
      <div>
        <RenderRoutes />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

import './App.css';
import { PurifiedCmp } from './PurifiedCmp';

export function App() {
  return (
    <>
      Test
      <p>The component below has some harmful code, but they are removed so it's not harmful anymore.</p>
      <PurifiedCmp />
    </>
  );
}

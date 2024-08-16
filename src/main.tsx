import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import Application from './Application.tsx'
import './index.css'

import { Provider } from "react-redux";
import store from "./store/index.ts";

const element = document.getElementById('root') as HTMLElement;

const root: Root = createRoot(element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </StrictMode>
);
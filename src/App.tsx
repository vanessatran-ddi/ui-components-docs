import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ComponentsPage from "./routes/components/Components"
import DropdownPage from './routes/components/Dropdown';
import ButtonPage from './routes/components/Button';
import FormStepperPage from './routes/components/FormStepper';
import CheckboxPage from './routes/components/Checkbox';
import AllComponentsPage from './routes/components/AllComponents';
import ComponentNotFoundPage from './routes/components/NotFound';
import Root from './routes/root';
import './index.css'
import DesignTokens from "./routes/design-tokens/DesignTokenLayout.tsx";
import BorderWidthPage from "./routes/design-tokens/border-width/BorderWidth";
import BorderRadiusPage from "./routes/design-tokens/border-radius/BorderRadius";
import ColorPage from "./routes/design-tokens/color/Color";
import IconSizePage from "./routes/design-tokens/icon-size/IconSize";
import OpacityPage from "./routes/design-tokens/opacity/Opacity";
import ShadowPage from "./routes/design-tokens/shadow/Shadow";
import SpacingPage from "./routes/design-tokens/spacing/Spacing";
import TypographyPage from "./routes/design-tokens/typography/Typography";
import AllDesignTokensPage from "./routes/design-tokens/all/all";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="components" element={<ComponentsPage />} errorElement={<ComponentNotFoundPage />} >
        <Route index element={<AllComponentsPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="form-stepper" element={<FormStepperPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="*" element={<ComponentNotFoundPage />} />
      </Route>
      <Route path="design-tokens" element={<DesignTokens/>} errorElement={<ComponentNotFoundPage/>}>
          <Route index element={<AllDesignTokensPage />} />
          <Route path="border-width" element={<BorderWidthPage />} />
          <Route path="border-radius" element={<BorderRadiusPage />} />
          <Route path="color" element={<ColorPage />} />
          <Route path="icon-size" element={<IconSizePage />} />
          <Route path="opacity" element={<OpacityPage />} />
          <Route path="shadow" element={<ShadowPage />} />
          <Route path="spacing" element={<SpacingPage />} />
          <Route path="typography" element={<TypographyPage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

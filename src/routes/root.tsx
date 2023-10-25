import {
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAAppFooterNavSection,
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css";

import { useLocation } from "react-router-dom";
import {base} from "../App";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {
  const [visible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 50);
  });

  return (
    <div className="app" style={{ opacity: visible ? "1" : "0" }}>
      <ScrollToTop />
      <GoAOneColumnLayout>
        <section className="header" slot="header">
          <GoAMicrositeHeader
            type={"alpha"}
            feedbackUrl="https://github.com/GovAlta/ui-components/discussions"
            maxContentWidth="1440px"
          />
          <GoAAppHeader heading="Design system" maxContentWidth="1440px" url={`${base}`}>
            <Link to={`${base}get-started`}>Get started</Link>
            <Link to={`${base}patterns`}>Patterns and templates</Link>
            <Link to={`${base}components`}>Components</Link>
            <Link to={`${base}design-tokens`}>Styles</Link>
            <Link to={`${base}content`}>Content</Link>
            <Link to={`${base}support`}>Support</Link>
            <Link
              to="https://github.com/GovAlta/ui-components/issues/new/choose"
              target="_blank"
            >
              Report a bug
            </Link>
          </GoAAppHeader>
        </section>

        <section className="content">
          <Outlet />
        </section>

        <section slot="footer">
          <GoAAppFooter maxContentWidth="1440px">
            <GoAAppFooterNavSection heading="Resources" maxColumnCount={2}>
              <Link to={`${base}get-started`}>Get started</Link>
              <Link to={`${base}patterns`}>Patterns and templates</Link>
              <Link to={`${base}components`}>Components</Link>
              <Link to={`${base}design-tokens`}>Styles</Link>
              <Link to={`${base}ux-writing`}>UX writing</Link>
              <Link to={`${base}contribute`}>Contribute</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterNavSection heading="Get support">
              <Link to={`${base}submit-an-issue`}>Submit an issue</Link>
              <Link to={`${base}support`}>#design-system-support</Link>
              <Link to={`${base}drop-in-hours`}>Drop in hours</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterMetaSection>
              <Link to={`${base}contribute-design-system`}>
                Contribute to the design system
              </Link>
              <Link to={`${base}leave-feedback`}>Leave feedback</Link>
              <Link to={`${base}release-notes`}>Release notes</Link>
            </GoAAppFooterMetaSection>
          </GoAAppFooter>
        </section>
      </GoAOneColumnLayout>
    </div>
  );
}

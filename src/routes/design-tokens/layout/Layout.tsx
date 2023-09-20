import "./layout.css";
import {
    GoAAppFooter,
    GoAAppHeader, GoAGrid,
    GoAMicrositeHeader,
    GoAOneColumnLayout,
    GoAPageBlock, GoASkeleton,
    GoATab,
    GoATabs, GoAThreeColumnLayout, GoATwoColumnLayout
} from "@abgov/react-components";
import {Sandbox} from "@components/sandbox";
import {CodeSnippet} from "@components/code-snippet/CodeSnippet.tsx";


export default function LayoutPage() {
    return (
        <>
            <h1>Layout</h1>
            <h3>A layout is a structural template that supports consistency across applications by
                defining visual grids, spacing, and sections.</h3>
            <div className="layout">
                <GoATabs>
                    <GoATab heading="Code examples">
                        <h3>1 column layout</h3>
                        <Sandbox>
                            <GoAOneColumnLayout>
                                <section slot="header">
                                    <GoAMicrositeHeader type="alpha" version="UAT"/>
                                    <GoAAppHeader url="/" heading="Design System">
                                        <a href="/login">Sign in</a>
                                    </GoAAppHeader>
                                </section>
                                <GoAPageBlock width="704px">

                                    <GoASkeleton type="header" size={4}/>
                                    <GoASkeleton type="text"/>
                                    <GoASkeleton type="text"/>
                                    <GoASkeleton type="text"/>
                                    <GoASkeleton type="header" size={4}/>
                                    <GoASkeleton type="text"/>
                                    <GoASkeleton type="text"/>
                                    <GoASkeleton type="text"/>
                                    <GoAGrid minChildWidth="10ch">
                                        <GoASkeleton type="card" size={2}/>
                                        <GoASkeleton type="card" size={2}/>
                                    </GoAGrid>
                                </GoAPageBlock>
                                <section slot="footer">
                                    <GoAAppFooter/>
                                </section>
                            </GoAOneColumnLayout>
                        </Sandbox>

                        <h3>2 column layout</h3>
                        <Sandbox>
                            <GoATwoColumnLayout
                                header={
                                    <>
                                        <GoAMicrositeHeader type="alpha" version="UAT"/>
                                        <GoAAppHeader url="/" heading="Design System">
                                            <a href="/login">Sign in</a>
                                        </GoAAppHeader>
                                    </>}
                                footer={<GoAAppFooter/>}
                                nav={<>
                                    <a href="#dashboard">Dashboard</a>
                                    <a href="#accounts">Accounts</a>
                                    <a href="#invoices">Invoices</a>
                                    <a href="#employees">Employees</a>
                                    <a href="#claims">Claims</a>
                                </>}
                            >

                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoAGrid minChildWidth="10ch">
                                    <GoASkeleton type="card" size={2}/>
                                    <GoASkeleton type="card" size={2}/>
                                </GoAGrid>
                            </GoATwoColumnLayout>
                        </Sandbox>

                        <h3>3 column layout</h3>
                        <Sandbox>
                            <GoAThreeColumnLayout header={
                                    <>
                                        <GoAMicrositeHeader type="alpha" version="UAT"/>
                                        <GoAAppHeader url="/" heading="Design System">
                                            <a href="/login">Sign in</a>
                                        </GoAAppHeader>
                                    </>}
                                footer={<GoAAppFooter/>}
                                nav={<>
                                    <a href="#dashboard">Dashboard</a>
                                    <a href="#accounts">Accounts</a>
                                    <a href="#invoices">Invoices</a>
                                    <a href="#employees">Employees</a>
                                    <a href="#claims">Claims</a>
                                </>}
                                side-menu={<>
                                    <h2>Side Menu</h2>
                                    <p>Add in your content here.</p>
                                </>
                                }
                            >
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoAGrid minChildWidth="10ch">
                                    <GoASkeleton type="card" size={2}/>
                                    <GoASkeleton type="card" size={2}/>
                                </GoAGrid>
                            </GoAThreeColumnLayout>

                            <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
          <GoAThreeColumnLayout header={
                                    <>
                                        <GoAMicrositeHeader type="alpha" version="UAT"/>
                                        <GoAAppHeader url="/" heading="Design System">
                                            <a href="/login">Sign in</a>
                                        </GoAAppHeader>
                                    </>}
                                footer={<GoAAppFooter/>}
                                nav={<>
                                    <a href="#dashboard">Dashboard</a>
                                    <a href="#accounts">Accounts</a>
                                    <a href="#invoices">Invoices</a>
                                    <a href="#employees">Employees</a>
                                    <a href="#claims">Claims</a>
                                </>}
                                side-menu={<>
                                    <h2>Side Menu</h2>
                                    <p>Add in your content here.</p>
                                </>
                                }
                            >
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoAGrid minChildWidth="10ch">
                                    <GoASkeleton type="card" size={2}/>
                                    <GoASkeleton type="card" size={2}/>
                                </GoAGrid>
                            </GoAThreeColumnLayout>
        `}/>
                            <CodeSnippet lang="typescript" tags="angular" allowCopy={true} code={`
  <goa-three-column-layout leftcolumnwidth="16ch">
  <section slot="header">
    <goa-microsite-header type="alpha" version="UAT" />
    <goa-app-header url="/" heading="Design System">
      <a href="/login">Sign in</a>
    </goa-app-header>
  </section>
  <section slot="nav">
    <a href="#dashboard">Dashboard</a>
    <a href="#accounts">Accounts</a>
    <a href="#invoices">Invoices</a>
    <a href="#employees">Employees</a>
    <a href="#claims">Claims</a>
  </section>
    <goa-skeleton type="header" size="4" />
    <goa-skeleton type="text" />
    <goa-skeleton type="text" />
    <goa-skeleton type="text" />
    <goa-skeleton type="header" size="4" />
    <goa-skeleton type="text" />
    <goa-skeleton type="text" />
    <goa-skeleton type="text" />
    <goa-grid minchildwidth="10ch">
      <goa-skeleton type="card" size="2" />
      <goa-skeleton type="card" size="2" />
    </goa-grid>
  <section slot="side-menu">
    <h2>Side Menu</h2>
    <p>Add in your content here</p>
  </section>
  <section slot="footer">
    <goa-app-footer></goa-app-footer>
  </section>
</goa-three-column-layout>
        `}/>
                        </Sandbox>
                    </GoATab>
                </GoATabs>
            </div>
        </>
    )
}

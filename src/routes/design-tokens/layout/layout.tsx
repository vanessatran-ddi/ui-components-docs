import "./layout.css";
import {
    GoAAppFooter,
    GoAAppHeader, GoAGrid,
    GoAMicrositeHeader,
    GoAOneColumnLayout, GoAPageBlock, GoASkeleton,
    GoATab,
    GoATabs
} from "@abgov/react-components";
import {CodeSnippet} from "@components/code-snippet/CodeSnippet.tsx";


export default function LayoutPage() {
    return (
        <>
            <h1>Layout</h1>
            <h3>A layout is a structural template that supports consistency across applications by
                defining visual grids, spacing, and sections.</h3>

            <GoATabs>
                <GoATab heading="Code examples">

                    <h3>1 column layout</h3>
                    <GoAOneColumnLayout>
                        <section slot="header">
                            <GoAMicrositeHeader type="alpha" version="UAT"/>
                            <GoAAppHeader url="/" heading="Design System">
                                <a href="/login">Sign in</a>
                            </GoAAppHeader>
                        </section>
                        <GoAPageBlock width="704px">
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <GoAGrid minChildWidth="30ch">
                                <GoASkeleton type="card" size={2}/>
                                <GoASkeleton type="card" size={2}/>
                            </GoAGrid>
                        </GoAPageBlock>
                        <section slot="footer">
                            <GoAAppFooter/>
                        </section>
                    </GoAOneColumnLayout>

                    <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
<GoAOneColumnLayout>
  <section slot="header">
    <GoAMicrositeHeader type="alpha" version="UAT" />
    <GoAAppHeader url="/" heading="Design System">
      <a href="/login">Sign in</a>
    </GoAAppHeader>
  </section>
  <GoAPageBlock width="704px">
    <!-- Insert custom content here -->
  </GoAPageBlock>
  <section slot="footer">
    <GoAAppFooter />
  </section>
</GoAOneColumnLayout>
        `}>
                    </CodeSnippet>

                    <h3>2 column layout</h3>
                    <GoAOneColumnLayout>
                        <section slot="header">
                            <GoAMicrositeHeader type="alpha" version="UAT"/>
                            <GoAAppHeader url="/" heading="Design System">
                                <a href="/login">Sign in</a>
                            </GoAAppHeader>
                        </section>
                        <GoAPageBlock width="704px">
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <GoAGrid minChildWidth="30ch">
                                <GoASkeleton type="card" size={2}/>
                                <GoASkeleton type="card" size={2}/>
                            </GoAGrid>
                        </GoAPageBlock>
                        <section slot="footer">
                            <GoAAppFooter/>
                        </section>
                    </GoAOneColumnLayout>
                    <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
<GoATwoColumnLayout
  header={<GoAAppHeader />}
  footer={<GoAAppFooter />}
  nav={<>
    <a href="#dashboard">Dashboard</a>
    <a href="#accounts">Accounts</a>
    <a href="#invoices">Invoices</a>
    <a href="#employees">Employees</a>
    <a href="#claims">Claims</a>
  </>}
>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
  </p>
</GoATwoColumnLayout>
        `}>
                    </CodeSnippet>

                    <h3>3 column layout</h3>
                    <GoAOneColumnLayout>
                        <section slot="header">
                            <GoAMicrositeHeader type="alpha" version="UAT"/>
                            <GoAAppHeader url="/" heading="Design System">
                                <a href="/login">Sign in</a>
                            </GoAAppHeader>
                        </section>
                        <GoAPageBlock width="704px">
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <p>
                                <GoASkeleton type="header" size={4}/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                                <GoASkeleton type="text"/>
                            </p>
                            <GoAGrid minChildWidth="30ch">
                                <GoASkeleton type="card" size={2}/>
                                <GoASkeleton type="card" size={2}/>
                            </GoAGrid>
                        </GoAPageBlock>
                        <section slot="footer">
                            <GoAAppFooter/>
                        </section>
                    </GoAOneColumnLayout>
                    <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
<GoAThreeColumnLayout
  header={
   <>
    <GoAMicrositeHeader type="alpha" version="UAT" />
    <GoAAppHeader url="/" heading="Design System">
      <a href="/login">Sign in</a>
    </GoAAppHeader>
  </>}
  footer={<GoAAppFooter />}
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
  <h1>Heading</h1>
  <p>
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
  </p>
</GoAThreeColumnLayout>
        `}>
                    </CodeSnippet>

                </GoATab>
            </GoATabs>
        </>
    )
}

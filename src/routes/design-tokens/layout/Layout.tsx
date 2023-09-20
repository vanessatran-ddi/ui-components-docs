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
                            <GoAThreeColumnLayout
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
                        </Sandbox>
                    </GoATab>
                </GoATabs>
            </div>
        </>
    )
}

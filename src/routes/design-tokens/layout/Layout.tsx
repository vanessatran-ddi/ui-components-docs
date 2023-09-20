import "./layout.css";
import {
    GoAAppFooter,
    GoAAppHeader,
    GoAMicrositeHeader,
    GoAOneColumnLayout,
    GoAPageBlock,
    GoATab,
    GoATabs
} from "@abgov/react-components";
import {Sandbox} from "@components/sandbox";


export default function LayoutPage() {
    return (
        <>
            <h1>Layout</h1>
            <h3>A layout is a structural template that supports consistency across applications by
                defining visual grids, spacing, and sections.</h3>

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
                            </GoAPageBlock>
                            <section slot="footer">
                                <GoAAppFooter/>
                            </section>
                        </GoAOneColumnLayout>
                    </Sandbox>
                </GoATab>
            </GoATabs>
        </>
    )
}

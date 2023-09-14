import {GoAGrid, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./Spacing.css";
import SPACING_TOKENS from "./spacing.json";
import {getTokenGroups} from "../getTokenGroups";

interface Token {
    tokenName: string; //
    rem: string;
    px: string;
    figmaUsage: string;
}

export default function SpacingPage() {

    const tokens: Token[] = SPACING_TOKENS;

    return (
        <>
            <h1>Spacing</h1>

            <section className="desktop">
                <GoATable variant="normal">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Token name</th>
                        <th>REM</th>
                        <th>PX</th>
                        <th>Figma usage</th>
                    </tr>
                    </thead>
                    <tbody>

                    {tokens.map((token, index) => (
                        <tr key={index}>
                            <td>
                                <div className="container">
                                    <div className="grey-circle"></div>
                                    {token.tokenName !== "goa-space-none" && (
                                        <div className={token.tokenName}></div>
                                    )}
                                    <div className="grey-circle"></div>
                                </div>
                            </td>
                            <td>
                                <TokenSnippet code={`--${token.tokenName}`}/>
                            </td>
                            <td>{token.rem}</td>
                            <td>{token.px}</td>
                            <td>{token.figmaUsage}</td>
                        </tr>
                    ))}
                    </tbody>
                </GoATable>
            </section>


            <section className="tablet">
                <section>
                    <GoAGrid minChildWidth="300px">
                        {getTokenGroups(tokens).map((group) =>
                            group.map((token: Token, idx: number) => (
                                <div className="box-container" key={idx}>
                                    <ul>
                                        <li>
                                            <div className="container">
                                                <div className="grey-circle"></div>
                                                {token.tokenName !== "goa-space-none" && (
                                                    <div className={token.tokenName}></div>
                                                )}
                                                <div className="grey-circle"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <TokenSnippet code={`--${token.tokenName}`}/>
                                        </li>
                                        <li><strong>REM</strong></li>
                                        <li><p>{token.rem}</p></li>
                                        <li><strong>PX</strong></li>
                                        <li><p>{token.px}</p></li>
                                        <li><strong>Figma usage</strong></li>
                                        <li><p>{token.figmaUsage}</p></li>
                                    </ul>
                                </div>
                            ))
                        )}
                    </GoAGrid>
                </section>
            </section>
        </>
    )
}

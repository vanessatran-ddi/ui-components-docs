import {GoAGrid, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./BorderWidth.css";
import BORDER_WIDTH_TOKENS from "./borderWidth.json";
import {Token} from "../token";
import {getTokenGroups} from "../getTokenGroups";


export default function BorderWidthPage() {
    const tokens: Token[] = BORDER_WIDTH_TOKENS;
    return (
        <>
            <h1>Border Width</h1>

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
                            <hr className={token.tokenName}/>
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
                    <GoAGrid minChildWidth="22rem" gap="xl">
                        {getTokenGroups(tokens).map((group) =>
                            group.map((token, idx) => (
                                <div className="box-container" key={idx}>
                                    <ul>
                                        <li>
                                            <hr className={token.tokenName} />

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

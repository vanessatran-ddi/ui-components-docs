import {GoAGrid, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./Typography.css";
import TYPO_TOKENS from "./typography.json";
import {getTokenGroups} from "../getTokenGroups";
import {Token} from "../token";


interface TypographyToken extends Token {
    figmaTypeStyle: string;
    typeFamily: string;
    weight: string;
    fontSize: string;
    lineHeight: string;
}

export default function TypographyPage() {

    const tokens: TypographyToken[] = TYPO_TOKENS;
    return (
        <>
            <div className="typography">
                <h1>Typography</h1>
                <section className="desktop">
                    <GoATable variant="normal">
                        <thead>
                        <tr>
                            <th>Figma type style</th>
                            <th>Design token</th>
                            <th>Type family</th>
                            <th>Weight</th>
                            <th>Font size</th>
                            <th>Line height</th>
                        </tr>
                        </thead>
                        <tbody>

                        {tokens.map((token, index) => (
                            <tr key={index}>
                                <td className={token.tokenName}>{token.figmaTypeStyle}</td>
                                <td>
                                    <TokenSnippet code={`--${token.tokenName}`}/>
                                </td>
                                <td>{token.typeFamily}</td>
                                <td>
                                    {token.weight === "Bold" ? (<strong>{token.weight}</strong>) : token.weight}
                                </td>
                                <td>{token.fontSize}</td>
                                <td>{token.lineHeight}</td>

                            </tr>
                        ))}
                        </tbody>
                    </GoATable>
                </section>

                <section className="tablet">
                    <section>
                        <GoAGrid minChildWidth="22rem" gap="xl">
                            {getTokenGroups(tokens as Token[]).map((group) =>
                                group.map((token: TypographyToken, idx: number) => (
                                    <div className="box-container" key={idx}>
                                        <ul>
                                            <li>
                                                <p className={token.tokenName}>{token.figmaTypeStyle}</p>
                                            </li>
                                            <li>
                                                <TokenSnippet code={`--${token.tokenName}`}/>
                                            </li>
                                            <li><strong>Type family</strong></li>
                                            <li><p>{token.typeFamily}</p></li>
                                            <li><strong>Weight</strong></li>
                                            <li><p>{token.weight}</p></li>
                                            <li><strong>Font size</strong></li>
                                            <li><p>{token.fontSize}</p></li>
                                            <li><strong>Line height</strong></li>
                                            <li><p>{token.lineHeight}</p></li>
                                        </ul>
                                    </div>
                                ))
                            )}
                        </GoAGrid>
                    </section>
                </section>

            </div>
        </>
    )
}

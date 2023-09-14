import {GoAGrid, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./Shadow.css";
import SHADOW_TOKENS from "./shadow.json";
import {getTokenGroups} from "../getTokenGroups";


interface Token {
    tokenName: string;
    value: string;
    figmaUsage: string;
}

export default function ShadowPage() {

    const tokens: Token[] = SHADOW_TOKENS;

    return (
        <>
            <h1>Shadow</h1>

            <section className="desktop">
                <GoATable variant="normal">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Token name</th>
                        <th>Value</th>
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
                            <td>{token.value}</td>
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
                                            <hr className={token.tokenName}/>
                                        </li>
                                        <li>
                                            <TokenSnippet code={`--${token.tokenName}`}/>
                                        </li>
                                        <li><strong>Value</strong></li>
                                        <li><p>{token.value}</p></li>
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

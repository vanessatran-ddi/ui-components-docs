import {GoAGrid, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./Opacity.css";
import OPACITY_TOKENS from "./opacity.json";
import {getTokenGroups} from "../getTokenGroups";


interface Token {
    tokenName: string; //
    percentage: string;
    figmaUsage: string;
}

export default function OpacityPage() {
    const tokens: Token[] = OPACITY_TOKENS;
    return (
        <>
            <h1>Opacity</h1>
            <section className="desktop">
                <GoATable variant="normal">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Token name</th>
                        <th>%</th>
                        <th>Figma usage</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tokens.map((token, index) => (
                        <tr key={index}>
                            <td>
                                <div className="opacity-container">
                                    <div className="blue-box"></div>
                                    <div className={token.tokenName}></div>
                                </div>
                            </td>
                            <td>
                                <TokenSnippet code={`--${token.tokenName}`}/>
                            </td>
                            <td>{token.percentage}</td>
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
                                            <div className="opacity-container">
                                                <div className="blue-box"></div>
                                                <div className={token.tokenName}></div>
                                            </div>
                                        </li>
                                        <li>
                                            <TokenSnippet code={`--${token.tokenName}`}/>
                                        </li>
                                        <li><strong>%</strong></li>
                                        <li><p>{token.percentage}</p></li>
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

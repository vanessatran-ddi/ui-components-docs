import {GoAGrid, GoAIcon, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./IconSize.css";
import ICON_SIZE_TOKENS from "./iconSize.json";
import {getTokenGroups} from "../getTokenGroups";
import {IconSize} from "@abgov/react-components/lib/icon/icon";
import {Token} from "../token";


interface IconSizeToken extends Token {
    size: IconSize | string;
}

export default function IconSizePage() {

    const tokens: IconSizeToken[] = ICON_SIZE_TOKENS;

    return (
        <>
            <h1>Icon size</h1>

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
                                <div className={token.tokenName}>
                                    <GoAIcon type="add" size={token.size as IconSize}></GoAIcon>
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
                    <GoAGrid minChildWidth="22rem" gap="xl">
                        {getTokenGroups(tokens).map((group) =>
                            group.map((token: IconSizeToken, idx: number) => (
                                <div className="box-container" key={idx}>
                                    <ul>
                                        <li>
                                            <div className={token.tokenName}>
                                                <GoAIcon type="add" size={token.size as IconSize}></GoAIcon>
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

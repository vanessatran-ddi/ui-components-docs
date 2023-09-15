import {GoAGrid, GoASpacer, GoATable} from "@abgov/react-components"
import {TokenSnippet} from "@components/token-snippet/TokenSnippet";
import "./Color.css";
import COLORS from "./colors.json";
import React from 'react'


interface Token {
    code: string;
    value: string;
    figmaColorStyle: string;
    description: string;
}

interface Color {
    name: string;
    tokens: Token[];
}

export default function ColorPage() {
    const colors: Color[] = COLORS;
        return (
        <>
            <h1>Color</h1>
            <h3>Our design system has a wide range of color design tokens to ensure brand consistency. Tokens
                are semantically named to make it easier for easy application by both developers and designers.</h3>
            <section className="desktop">
                <GoATable variant="normal">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th></th>
                        <th>Token</th>
                        <th>Hex value</th>
                        <th>Figma colour style</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {colors.map((color, index) => (
                        <React.Fragment key={index}>
                            {color.tokens.map((token, tokenIndex) => (
                                <tr key={tokenIndex}>
                                    {tokenIndex === 0 && (
                                        <td rowSpan={color.tokens.length}>{color.name}</td>
                                    )}
                                    <td >
                                        <hr className={token.code}/>
                                    </td>
                                    <td>
                                        <TokenSnippet code={`--${token.code}`}/>
                                    </td>
                                    <td>{token.value}</td>
                                    <td>{token.figmaColorStyle}</td>
                                    <td>{token.description}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </GoATable>
            </section>
            <section className="tablet">
                <div className="design-token__anchors">
                    {colors.map((color, index) => (
                        <a key={index} href={`#${color.name.toLowerCase()}`}>{color.name}</a>
                    ))}
                    <GoASpacer vSpacing="xl"></GoASpacer>
                </div>
                <section>
                    {colors.map((color, index) => (
                        <React.Fragment key={index}>
                            {index !== 0 && (<GoASpacer vSpacing="m"></GoASpacer>)}
                            <span className="design-token__heading-card" id={color.name.toLowerCase()}>{color.name}</span>
                            <GoASpacer vSpacing="m"></GoASpacer>
                            <GoAGrid minChildWidth="22rem" gap="xl">
                                {color.tokens.map((token, tokenIndex) => (
                                    <div className="box-container" key={tokenIndex}>
                                        <ul>
                                            <li>
                                                <hr className={token.code} />
                                            </li>
                                            <li>
                                                <TokenSnippet code={`--${token.code}`} />
                                            </li>
                                            <li><strong>Hex value</strong></li>
                                            <li><p>{token.value}</p></li>
                                            <li><strong>Figma colour style</strong></li>
                                            <li><p>{token.figmaColorStyle}</p></li>
                                            <li><strong>Description</strong></li>
                                            <li><p>{token.description}</p></li>
                                        </ul>
                                    </div>
                                ))}
                            </GoAGrid>
                        </React.Fragment>
                    ))}
                </section>
            </section>
        </>
    )
}

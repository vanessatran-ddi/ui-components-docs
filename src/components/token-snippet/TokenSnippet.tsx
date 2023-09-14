import {FC, useState} from "react";

import "./TokenSnippet.css";
import {GoAIcon} from "@abgov/react-components";

interface Props {
    code: string;
}

export const TokenSnippet: FC<Props> = ({code}) => {
    const [isCopied, setIsCopied] = useState(false);

    function copyCode() {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        });
    }

    return (
        <div className="goa-token-snippet">
            <pre>
                <a onClick={copyCode} className={`highlight-css ${isCopied ? "copied" : ""}`}
            title={isCopied ? "Copied!" : undefined}>
                    <u>{code}</u>
                    <span className="copy-icon-logo">
                        <GoAIcon type="copy"/>
                    </span>
                </a>
            </pre>
            <span className="goa-token-snippet__copy-feedback"
            style={isCopied ? {visibility: "visible"} : {visibility: "hidden"}}>Copied</span>
        </div>
    );
};

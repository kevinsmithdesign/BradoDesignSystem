import React, { useState } from "react";
import { Stack, Typography, IconButton, Tooltip } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  atomDark,
  darcula,
  vscDarkPlus, // nice
  xonokai,
  coy, // gross
  funky, // gross
  hopscotch, // na
  pojoaque, //na
  solarizedlight, //gross
  tomorrow, //na
  twilight, // na
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CodeSnippet = ({ language, code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"} arrow>
        <IconButton
          onClick={handleCopy}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            zIndex: 1,
            color: "#fff",
          }}
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Typography component="div" className="code-snippet">
        <Stack
          sx={{
            background: "#1E1E1E",
            padding: "10px 20px",
            borderRadius: "16px",
          }}
        >
          <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
        </Stack>
      </Typography>
    </div>
  );
};

export default CodeSnippet;

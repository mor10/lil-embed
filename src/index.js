const { __, _x } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const {
  Button,
  PanelBody,
  Placeholder,
  ToggleControl,
  TextareaControl,
} = wp.components;
const { withState } = wp.compose;
import Iframe from "react-iframe";

import { ReactComponent as Logo } from "./logo.svg";

const Embed = ({ embedData, className, showLinks }) => {
  if (embedData) {
    return (
      <>
        <div className={`lil-embed ${className}`}>
          <Iframe
            width="640"
            height="360"
            src={embedData.iframeURI}
            allowFullScreen="true"
            frameBorder="0"
            style="position:absolute;width:100%;height:100%;left:0"
          />
        </div>
        {showLinks && (
          <div className="lil-embed__meta">
            <span className="lil-embed__meta-title">
              <a href={embedData.movieURI}>
                <strong>{embedData.movieTitle}</strong>
              </a>
            </span>{" "}
            {__("From the course", "lilembed")}{" "}
            <a href={embedData.courseURI}>
              <strong>{embedData.courseTitle}</strong>
            </a>{" "}
            {__("by", "lilembed")}{" "}
            <a href={embedData.instURI}>
              <strong>{embedData.instName}.</strong>
            </a>
          </div>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

// registerBlockType = this.registerBlockType.bind(this);

registerBlockType("lilembed/embed", {
  title: __("LinkedIn Learning", "lilembed"),
  icon: { src: Logo },
  category: "embed",
  attributes: {
    rawEmbedCode: {
      type: "string",
    },
    embedData: {
      type: "object",
    },
    showLinks: {
      type: "boolean",
      default: true,
    },
  },
  supports: {
    align: true,
    align: ["wide", "full"],
  },

  edit: (props) => {
    // Lift info from props and populate various constants.
    const {
      attributes: { rawEmbedCode, embedData, showLinks },
      className,
      setAttributes,
    } = props;

    const setEmbedData = (embedDOM) => {
      if (embedDOM.querySelector("iframe").getAttribute("src")) {
        setAttributes({
          embedData: {
            iframeURI: embedDOM.querySelector("iframe").getAttribute("src"),
            movieTitle: embedDOM.querySelectorAll("a")[0].innerHTML,
            movieURI: embedDOM.querySelectorAll("a")[0].getAttribute("href"),
            courseTitle: embedDOM.querySelectorAll("a")[1].innerHTML,
            courseURI: embedDOM.querySelectorAll("a")[1].getAttribute("href"),
            instName: embedDOM.querySelectorAll("a")[2].innerHTML,
            instURI: embedDOM.querySelectorAll("a")[2].getAttribute("href"),
          },
        });
      } else {
        setAttributes({ embedData: null });
      }
    };

    // Grab newRawEmbedCode, set the value of rawEmbedCode to newRawEmbedCode.
    const onChangeRawEmbedCode = (event) => {
      event.preventDefault();
      let [formSubmit] = event.target.children;
      console.log(formSubmit.value);
      let parser = new DOMParser();
      let embedDOM = parser.parseFromString(formSubmit.value, "text/html");
      setEmbedData(embedDOM);
      setAttributes({ rawEmbedCode: formSubmit.value });
    };

    const onChangeShowLinks = (newShowLinks) => {
      setAttributes({ showLinks: newShowLinks });
    };

    const EmbedForm = withState({
      rawEmbedCode: "",
    })(({ rawEmbedCode, setState }) => (
      <Placeholder
        label={__("LinkedIn Learning Embed", "lilembed")}
        className="lil-embed"
        instructions={__(
          "Paste full embed code for LinkedIn Learning video",
          "lilembed"
        )}
      >
        <form onSubmit={onChangeRawEmbedCode}>
          <input
            type="text"
            value={rawEmbedCode || ""}
            className="components-placeholder__input"
            aria-label={__("LinkedIn Learning Embed", "lilembed")}
            placeholder={__("Enter embed code here…")}
            onChange={(event) => setState({ rawEmbedCode: event.target.value })}
          />
          <Button isPrimary type="submit">
            {_x("Embed", "button label")}
          </Button>
        </form>
      </Placeholder>
    ));

    return [
      <InspectorControls>
        <PanelBody title={__("LinkedIn Learning Video", "lilembed")}>
          <div className="components-base-control">
            <div className="components-base-control__field">
              <TextareaControl
                label={__("Embed code", "lilembed")}
                value={rawEmbedCode}
                onChange={onChangeRawEmbedCode}
              />
            </div>
            <div className="components-base-control__field">
              <label className="components-base-control__label">
                {__("Show links", "lilembed")}
              </label>
              <ToggleControl
                label="Fixed Background"
                help={
                  showLinks ? "Has fixed background." : "No fixed background."
                }
                checked={showLinks}
                onChange={(value) => {
                  setAttributes({ showLinks: value });
                }}
              />
            </div>
          </div>
        </PanelBody>
      </InspectorControls>,
      <div className={`${className} lil-embed-wrapper`}>
        <Embed
          embedData={embedData}
          className={className}
          showLinks={showLinks}
        />
        {embedData === undefined && <EmbedForm />}
      </div>,
    ];
  },
  save: (props) => {
    const {
      attributes: { embedData, showLinks },
      className,
    } = props;
    return (
      <Embed
        embedData={embedData}
        className={className}
        showLinks={showLinks}
      />
    );
  },
});

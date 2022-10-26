import React from "react";
import ViewSDKClient from "../../utils/ViewSDKClient";
const RenderMenu = ({ url }) => {
  const loadPDF = () => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        "pdf-div",
        {
          defaultViewMode: "FIT_WIDTH",
          showAnnotationTools: true,
          showLeftHandPanel: true,
          showPageControls: true,
          showDownloadPDF: true,
          showPrintPDF: true,
        },
        url
      );
    });
  };
  return (
    <div className="document-display">
      <div className="document-display__wrapper container"
        style = {{height:"100vh"}}
        id="pdf-div"
        onClick={loadPDF()}
      ></div>
    </div>
  );
};
export default RenderMenu;

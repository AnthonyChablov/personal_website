import React from "react";
import ViewSDKClient from "../../utils/ViewSDKClient";
import { motion } from "framer-motion";
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
      <motion.div className="document-display__wrapper container"
        initial={{
          opacity:0,  
        }}
        whileInView={{opacity:1}}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        style = {{height:"100vh"}}
        id="pdf-div"
        onClick={loadPDF()}
      ></motion.div>
    </div>
  );
};
export default RenderMenu;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
const FullscreenLoader = () => {
  const loader = useSelector((state) => state.loader.loader);
  return (
    <Fragment>
      <div className={"LoadingOverlay " + loader}>
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default FullscreenLoader;

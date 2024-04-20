import React from "react";
import WrapperNotScroll from "../layout/wrapperNotScroll";
import H5 from "../components/Titles/H5";

export function DoneCreateCampaign({ navigation }) {
  return (
    <>
      <WrapperNotScroll>
        <H5 Title={"Done!"} className={""} />
      </WrapperNotScroll>
    </>
  );
}

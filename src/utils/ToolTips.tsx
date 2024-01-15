import React from 'react'
import { Tooltip } from 'react-tooltip';

const ToolTips = () => {
  const TOOLTIPS = ["settings", "search", "voiceSearch"];

  return <>{TOOLTIPS.map((id, index)=> <Tooltip style={{zIndex: "1000"}} id={id} key={index} noArrow/> )}</>;
}

export default ToolTips
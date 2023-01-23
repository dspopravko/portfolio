import React from "react";

export const ContentContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={'body_container'}>
      {children}
    </div>
  );
};
import React, { FC, ReactElement } from "react";
import DocumentProcessTitle from "../atoms/DocumentProcessTitle";

const DocumentProcessHeader: FC = (): ReactElement => {
  return (
    <section className="py-6 px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
      <DocumentProcessTitle />
    </section>
  );
};

export default DocumentProcessHeader;

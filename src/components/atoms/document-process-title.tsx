import { FC, Fragment, ReactElement } from "react";

const DocumentProcessTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-2xl text-neutral-900 font-bold">Proses Dokumen</h1>
      <p className="text-neutral-800 text-sm text-center">
        Isikan informasi yang dibutuhkan untuk mengajukan dokumen
      </p>
    </Fragment>
  );
};

export default DocumentProcessTitle;

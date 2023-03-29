import { FC, Fragment, ReactElement } from "react";

const DocumentStatusTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-2xl text-neutral-900 font-bold">Cek Status Dokumen</h1>
      <p className="text-neutral-800 text-sm text-center">Cek status pengajuan dokumen Anda</p>
    </Fragment>
  );
};

export default DocumentStatusTitle;

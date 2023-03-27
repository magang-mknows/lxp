import React, { FC, ReactElement } from "react";

const ConstultingQuestionsHeader: FC = (): ReactElement => {
  return (
    <section className="px-8 md:px-14 lg:px-16 mb-14">
      <h1 className="text-2xl font-bold mb-2">Pertanyaan yang sering ditanyakan</h1>
      <p className="text-sm">
        Berikut list pertanyaan-pertanyaan yang sering ditanyakan kepada kami{" "}
      </p>
    </section>
  );
};

export default ConstultingQuestionsHeader;

import { FC, ReactElement } from "react";
import { AiFillFlag } from "react-icons/ai";
import Button from "./Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  reportDetailTitle,
  reportSuccess,
  selectedOption,
  selectedPostId,
} from "@/modules/discussion-room/store";

const PostSpamModal: FC = (): ReactElement => {
  const getReportDetail = useRecoilValue(reportDetailTitle);
  const setReportSuccess = useSetRecoilState(reportSuccess);
  const setSeletedOption = useSetRecoilState(selectedOption);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 rounded-full bg-secondary-blue-100 flex items-center justify-center">
        <AiFillFlag className="text-blue-600 text-xl" />
      </div>
      <h1 className="text-base font-bold tracking-wide">Ini Adalah {getReportDetail}</h1>
      <div className="w-full flex flex-col items-end gap-4">
        <textarea
          name="spam-report"
          id="spam-report"
          cols={50}
          rows={5}
          placeholder="Ceritakan leibh detail disini!"
          className="border-[2px] px-2 py-1 text-sm w-full  outline-none text-neutral-600 border-neutral-300 rounded-md resize-none"
        />
        <Button
          type="primary"
          text="Lapor"
          size="medium"
          onClick={() => {
            setSeletedOption("reportSuccess");
            setReportSuccess(true);
          }}
        />
      </div>
    </section>
  );
};

export default PostSpamModal;

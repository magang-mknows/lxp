import { FC, Fragment, ReactElement } from "react";
import DiscussionAddComment from "../atoms/DiscussionAddComment";
import DiscussionCard from "../atoms/DisscucionCard";
import DiscussionPostOption from "../atoms/DiscussionPostOption";

const DiscussionComment: FC = (): ReactElement => {
  const dummyComments = [
    {
      hasImage: false,
      text: "Dalam dunia bisnis, manajemen keuangan adalah kegiatan perencanaan, pengaturan, pengarahan, dan pengendalian keuangan suatu perusahaan. Dengan adanya pengelolaan keuangan secara profesional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.",
      userName: "Bambang S",
      time: "10 detik",
      countLikes: 10,
      type: "comment",
    },
    {
      hasImage: true,
      imgSource: "/assets/dashboard/dummyCourse.png",
      text: "pengendalian keuangan suatu perusahaan.esional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.",
      userName: "Surti B",
      time: "10 detik",
      countLikes: 3,
      type: "comment",
    },
  ];

  return (
    <Fragment>
      <DiscussionAddComment />
      <section>
        <h1 className="mb-6 md:mb-8 lg:mb-10 text-version2-400 dark:text-[#17A2B8] font-bold text-sm">
          {dummyComments.length} balasan
        </h1>
        <section>
          {dummyComments.map((comment, index) => {
            return (
              <section key={index} className="mb-10 pl-6 md:pl-8 lg:pl-14">
                <DiscussionCard
                  hasImage={comment.hasImage}
                  countLikes={comment.countLikes}
                  time={comment.time}
                  type="comment"
                  userName={comment.userName}
                  text={comment.text}
                  imgSource={comment.imgSource as unknown as string}
                  title={""}
                  option={
                    <DiscussionPostOption id={`test id ${(index + 1) as unknown as string}`} />
                  }
                >
                  <DiscussionComment />
                </DiscussionCard>
              </section>
            );
          })}
        </section>
      </section>
    </Fragment>
  );
};

export default DiscussionComment;

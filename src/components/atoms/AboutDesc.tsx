import { FC, ReactElement } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const AboutDesc: FC = (): ReactElement => {
  return (
    <div className="bg-version2-400  lg:pt-16 relative top-14 lg:top-[36%] py-14 px-5 md:px-6 lg:px-8 text-sm font-medium text-neutral-100 text-left lg:text-justify h-fit  leading-4 md:text-sm ">
      <RiDoubleQuotesR className="text-8xl text-version3-500 absolute left-2 -top-10 rotate-180 font-bold" />
      <RiDoubleQuotesR className="text-8xl text-version3-500 absolute right-2 -bottom-10 rotate-180 font-bold" />
      <p className="mb-1 ">
        &nbsp; &nbsp; M-Knows Consulting berdiri sejak tahun 2003, melalui cabang Jakarta &
        Surabaya, M-Knows Consulting telah sukses melayani beragam perusahaan dengan kualitas kerja
        yang memuaskan, sesuai keahliannya dan pendekatan konsultasi yang didasarkan pada :
      </p>
      <ul className="list-disc px-5 mb-4">
        <li>Applicative</li>
        <li>Contemporary</li>
        <li>High Impact </li>
        <li>Fun & Motivational</li>
      </ul>
      <p className="mb-4">
        &nbsp; &nbsp;Dalam kaitannya dengan education & learning Services, M-Knows Consulting
        berpengalaman dalam mengelola program public training & in house training, yang sering kali
        merupakan bagian dari konsultasi.
      </p>
      <p>
        &nbsp; &nbsp;Kami percaya model pelatihan kontemporer lebih baik dibandingkan pendekatan
        yang klasik dan konservatif.
      </p>
    </div>
  );
};

export default AboutDesc;

import Image from "next/image";
import React, { FC } from "react";

const RelatedEvent: FC = () => {
  return (
    <section className=" w-full col-span-3 xl:col-span-1">
      <div className="flex justify-between mb-4 w-full">
        <h1 className="text-lg font-bold mb-2">Acara Serupa</h1>
        <p className="text-sm font-bold text-version3-500">Lihat Semua</p>
      </div>
      <section className="bg-neutral-50 rounded-md shadow-sm p-6">
        <Image
          src={"/assets/event/event.svg"}
          className="w-[720px] mb-2"
          height={100}
          width={100}
          alt="event-view"
        />
        <div className="flex flex-col pt-4 text-neutral-800 ">
          <p className="mb-2 text-lg">Webinar Cyber Security</p>
          <h1 className="text-[18px] text-version3-500 mb-2 font-bold">GRATIS</h1>
          <p className="text-[14px] text-neutral-500">Tuesday, 28 February 2023 19:00 WIB</p>
        </div>
      </section>
    </section>
  );
};

export default RelatedEvent;

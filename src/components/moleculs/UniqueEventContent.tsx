"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

const UniqueEventContent: FC = (): ReactElement => {
  return (
    <section className="grid gap-10 grid-cols-1 md:grid-cols-2">
      <Link href={"acara-unik/detail/Webinar-Cyber-Security"} className="overflow-hidden ">
        <div className="w-full bg-neutral-50 px-4 py-4 overflow-hidden">
          <Image
            src={"/assets/event/event.svg"}
            className="w-full mb-2"
            height={100}
            width={100}
            alt="event-view"
          />
          <h1 className="text-base font-bold text-neutral-800">Webinar Cyber Security</h1>
          <p className="text-version3-500 font-bold text-lg mb-3">GRATIS</p>
          <p className="text-xs  text-neutral-400">Tuesday, 28 February 2023 19:00 WIB</p>
        </div>
      </Link>
    </section>
  );
};

export default UniqueEventContent;

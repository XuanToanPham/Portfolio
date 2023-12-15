import Image from "next/image";
import React from "react";
import UIUXIcon from "../../asset/images/common/service-UIUX.png";
export default function Service() {
  return (
    <section className=" mt-36 ">
      <h2 className="text-[42px] font-normal items-center flex justify-center mb-5">
        Service
      </h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-12 flex-1">
          <div className="flex gap-8 justify-start items-center">
            <Image src={UIUXIcon} alt="icon-uiux" />
            <div className="flex flex-col gap-2">
              <span className="text-[20px] ">UI/UX Design</span>
              <span className="text-text_secondary text-[18px]">
                Design a website or app with Figma
              </span>
            </div>
          </div>

          <div className="flex gap-8 justify-start items-center">
            <Image src={UIUXIcon} alt="icon-uiux" />
            <div className="flex flex-col gap-2">
              <span className="text-[20px] ">Front-End Develop</span>
              <span className="text-text_secondary text-[18px]">
                Coding front-end with ReactJs, NextJs
              </span>
            </div>
          </div>

          <div className="flex gap-8 justify-start items-center">
            <Image src={UIUXIcon} alt="icon-uiux" />
            <div className="flex flex-col gap-2">
              <span className="text-[20px] ">Back-End Develop</span>
              <span className="text-text_secondary text-[18px]">
                Coding backend with PHP
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-[42px] mb-8">My Awesome Service</h2>

          <div>
            <p className="text-[18px] text-text_secondary mb-4">
              Bring your digital vision to life through a seamless fusion of
              creativity and functionality. As a dedicated UI designer and web
              developer,
            </p>
            <p className="text-[18px] text-text_secondary">
              I offer a range of services that elevate your online presence.
            </p>
          </div>

          <div className="flex justify-start gap-10 mt-[62px]">
            <div className="flex flex-col gap-4">
                <span className="text-[36px]">
                    15+
                </span>
                <span className="text-[18px]">
                    Project complete
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-[36px]">
                    1+
                </span>
                <span className="text-[18px]">
                    Year experience
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

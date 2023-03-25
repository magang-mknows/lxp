import LandingLoading from "@/modules/landing/LandingLoading";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <svg
        width="52"
        height="52"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" animate-spin"
      >
        <path
          d="M75 0C116.421 0 150 33.5786 150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0ZM75 130.101C105.431 130.101 130.101 105.431 130.101 75C130.101 44.5687 105.431 19.8993 75 19.8993C44.5687 19.8993 19.8993 44.5687 19.8993 75C19.8993 105.431 44.5687 130.101 75 130.101Z"
          fill="#F5F5F5"
        />
        <path
          d="M75 0C60.1664 0 45.6659 4.39867 33.3322 12.6398C20.9985 20.8809 11.3856 32.5943 5.70903 46.2987C0.0324625 60.0032 -1.45279 75.0832 1.4411 89.6318C4.335 104.18 11.4781 117.544 21.967 128.033C32.4559 138.522 45.8197 145.665 60.3682 148.559C74.9168 151.453 89.9968 149.968 103.701 144.291C117.406 138.614 129.119 129.001 137.36 116.668C145.601 104.334 150 89.8336 150 75L130.101 75C130.101 85.8979 126.869 96.551 120.815 105.612C114.76 114.674 106.154 121.736 96.0861 125.906C86.0178 130.077 74.9389 131.168 64.2504 129.042C53.5619 126.916 43.7439 121.668 36.0379 113.962C28.332 106.256 23.0841 96.4381 20.9581 85.7496C18.832 75.0611 19.9232 63.9822 24.0936 53.9139C28.2641 43.8456 35.3265 35.24 44.3877 29.1855C53.449 23.1309 64.1021 19.8993 75 19.8993V0Z"
          fill="url(#paint0_angular_2558_18493)"
        />
        <circle cx="140" cy="75" r="10" transform="rotate(-90 140 75)" fill="#106FA4" />
        <defs>
          <radialGradient
            id="paint0_angular_2558_18493"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(75 75) rotate(-60.0184) scale(75.0417)"
          >
            <stop offset="0.169556" stop-color="#106FA4" />
            <stop offset="0.919762" stop-color="#106FA4" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;

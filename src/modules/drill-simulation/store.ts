import { atom } from "recoil";
import { TDrillSimulationType } from "../../modules/drill-simulation/type";

export const queryScheduleSimulation = atom({
  key: "query-schedule-simulation",
  default: "",
});
export const selectedDateSimulation = atom({
  key: "selected-date-simulation",
  default: {
    date: "",
    time: "",
  },
});

export const dummySceduleSimulation = atom<Array<TDrillSimulationType>>({
  key: "scedule-simulation-state",
  default: [
    {
      lecture: "Pak Nato",
      schedule: [
        {
          date: "Senin, 17 Januari 2023",
          time: [
            {
              title: "siang",
              value: ["14.40", "15.10"],
            },
            {
              title: "malam",
              value: ["18.40", "20.10"],
            },
          ],
        },
      ],
      title: "Sejarah Jepun",
      ImgSrc: "/assets/drill/dummyImg.svg",
      category: "Simulasi",
      location: "G Meeting",
    },
    {
      lecture: "Pak Sumanto",
      schedule: [
        {
          date: "Senin, 17 Januari 2023",
          time: [
            {
              title: "siang",
              value: ["14.40", "15.10"],
            },
            {
              title: "malam",
              value: ["18.40", "20.10"],
            },
          ],
        },
      ],
      title: "Sejarah Malay",
      ImgSrc: "/assets/drill/dummyImg.svg",
      category: "Simulasi",
      location: "G Meeting",
    },
    {
      lecture: "Pak Rungkad",
      schedule: [
        {
          date: "Senin, 17 Januari 2023",
          time: [
            {
              title: "siang",
              value: ["14.40", "15.10"],
            },
            {
              title: "malam",
              value: ["18.40", "20.10"],
            },
          ],
        },
        {
          date: "Selasa, 18 Januari 2023",
          time: [
            {
              title: "sore",
              value: ["16.10", "16.15"],
            },
            {
              title: "malam",
              value: ["22.40", "22.10"],
            },
          ],
        },
      ],
      title: "Sejarah Indonesia",
      ImgSrc: "/assets/drill/dummyImg.svg",
      category: "Drill",
      location: "Zoom Meeting",
    },
  ],
});
export const dummyRegisteredSimulation = atom<Array<TDrillSimulationType>>({
  key: "registered-simulation-state",
  default: [
    {
      lecture: "Dr. Yanto Purba",
      schedule: [
        {
          date: "Senin, 28 April 1998",
          time: [
            {
              title: "28 April 1998",
              value: ["10.30"],
            },
          ],
        },
      ],
      title: "Kemerdekaan Indonesia",
      ImgSrc: "/assets/drill/dummyImg.svg",
      category: "Drill",
      location: "Gedung PDIP",
      status: "finished",
    },
  ],
});

export const successPopupState = atom({
  key: "show-suceess-popup",
  default: false,
});
export const finishPopupState = atom({
  key: "show-finish-popup",
  default: false,
});

export const DrillSimulationPageType = atom({
  key: "drill-simulation-page-type",
  default: "request",
});

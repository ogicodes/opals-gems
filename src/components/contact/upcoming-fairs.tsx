"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const fairsList = [
  {
    date: "Stay",
    location: "",
    url: "",
  },
  {
    date: "Tuned",
    location: "",
    url: "",
  },
  {
    date: "For",
    location: "",
    url: "",
  },
  {
    date: "2025",
    location: "",
    url: "",
  },
  {
    date: "Upcoming",
    location: "",
    url: "",
  },
  {
    date: "Fairs",
    location: "",
    url: "",
  },
];

const UpcomingFairs = () => {
  return (
    <div className="flex flex-col items-start lg:w-[70%]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-6xl md:text-9xl  font-extrabold bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow">
              Where You Can <br />
              <span className="text-6xl  md:text-8xl font-bold mt-1 leading-none bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow">
                Find Us
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col gap-8">
          {fairsList.map((fair, index) => (
            <a
              key={index}
              href={fair.url}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-mono font-regular text-black dark:text-white">
                  {fair.date}
                </p>
                <p className="text-lg font-mono font-regular text-black dark:text-white">
                  {fair.location}
                </p>
              </div>
            </a>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
};

export { UpcomingFairs };

import "./Projects.css";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import * as React from "react";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Projects() {
  let trial: string[] = [
    "/eanda.png",
    "/r.png",
    "/c.png",
    "/cv.png",
    "/cv2.png",
    "/cv3.png",
    "/rh.png",
    "/talk.png",
  ];
  return (
    <>
      <div className="popovers">
        <Popover>
          <PopoverTrigger className="border-solid border-2 border-black hover:border-dotted p-2 m-5">
            Our Learnings
          </PopoverTrigger>
          <PopoverContent className="h-45 w-45">
            <div className="carouselDiv">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full h-fit"
              >
                <CarouselContent>
                  {trial.map((element, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/1 lg:basis-1/1"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center align-top p-6">
                            <span className="text-3xl font-semibold ">
                              <img src={element} className="workImages" />
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

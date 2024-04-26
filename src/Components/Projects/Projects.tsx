import "./Projects.css";
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
    "/photos.png",
    "may",
    "/me.png",
    "/vite.svg",
  ];
  return (
    <>
      <h1>Our Work</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-100 h-100 m-14"
      >
        <CarouselContent>
          {trial.map((element, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      <img src={element} />
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
    </>
  );
}

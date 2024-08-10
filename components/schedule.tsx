"use client";

import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PassingPoint } from "./passing-point";
import { Input } from "./ui/input";

import { trainScheduleData } from "@/data";

export type TrainScheduleDataType = (typeof trainScheduleData)[0];

export function Schedule() {
  const [selectedService, setSelectedService] =
    useState<TrainScheduleDataType | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [searchText, setSearchText] = useState("");

  const handleServiceClick = (service: TrainScheduleDataType) => {
    setSelectedService(service);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      if (selectedService) handleServiceClick(selectedService);
    });
  }, [api, selectedService]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredTrainServices = trainScheduleData.filter((service) => {
    const searchValue = searchText.toLowerCase();
    return (
      service.headCode.toLowerCase().includes(searchValue) ||
      service.from.toLowerCase().includes(searchValue) ||
      service.to.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 text-pumpkin-900">
      <div className="relative flex-1 mb-6">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by location or headcode"
          className="pl-8"
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Train Schedule</h1>
        <Carousel
          className="w-full max-w-lg xl:max-w-5xl"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {filteredTrainServices.map((service, index) => (
              <CarouselItem key={index} className="xl:basis-1/2 px-8">
                <Card
                  className="cursor-pointer hover:bg-pumpkin-50 dark:hover:bg-pumpkin-900 text-pumpkin-900"
                  onClick={() => handleServiceClick(service)}
                >
                  <CardContent className="grid gap-4">
                    <div className="flex items-center justify-between py-4">
                      <div className="font-medium">{service.headCode}</div>
                      <div className="text-sm bg-pumpkin-500 px-1 py-0.5 rounded-md">
                        {service.message}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-pumpkin-600">Origin</div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-medium">
                            {service.from}
                          </div>
                        </div>
                        <div>{service.depart}</div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-pumpkin-600">
                          Destination
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-medium">
                            {service.to}
                          </div>
                        </div>
                        <div>{service.arrive}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {selectedService && (
          <PassingPoint passingPoints={selectedService.passingPoints} />
        )}
      </div>
    </div>
  );
}

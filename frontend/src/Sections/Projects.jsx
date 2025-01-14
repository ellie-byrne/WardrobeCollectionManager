import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";

// Component to display outfit of the day using a carousel.
const Projects = () => {
  // Store the JSON data fetched from the API.
  const [wardrobejson, setWardrobejson] = useState([]);

  // useEffect hook to fetch data from the API.
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/items") // API endpoint for where to fetch items from.
      .then((response) => {
        const links = response.data.map((item) => item.storePhoto);
        setWardrobejson(links); 
        console.log("data", response.data); // Logging the response data for debugging.
      })
      .catch((error) => {
        console.log(error); // Logging any errors that occur during the API call for debugging.
      });
  }, []); // Empty dependency array ensures this effect runs only once.

  return (
    <>
      {/* First Carousel. */}
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {/* Mapping through the wardrobejson state to create carousel items. */}
            {wardrobejson.map((link, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={link} alt="item" /> {/* Displaying the image. */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious /> {/* Previous button for the carousel. */}
          <CarouselNext /> {/* Next button for the carousel. */}
        </Carousel>
      </div>

      {/* Second Carousel. */}
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {/* Mapping through the wardrobejson state to create carousel items again.*/}
            {wardrobejson.map((link, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={link} alt="item" /> {/* Displaying the image. */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious /> {/* Previous button for the carousel. */}
          <CarouselNext /> {/* Next button for the carousel. */}
        </Carousel>
      </div>
    </>
  );
};

export default Projects;

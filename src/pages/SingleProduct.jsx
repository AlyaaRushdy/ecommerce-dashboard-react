import Header from "@/components/shared/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  return (
    <main>
      {/* header section */}
      <div className="p-5">
        <Header
          currentPage={id}
          prevPage={"Products"}
          prevPageLink={"/products"}
        />

        {/* images section */}
        <section className="grid grid-cols-1 sm:grid-cols-8 pt-4">
          <div className="py-4 grid sm:col-span-6 justify-center">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
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
          <div className="grid grid-cols-4 sm:grid-cols-1 gap-4 col-span-2">
            <Card className="grid justify-center content-center">1</Card>
            <Card className="grid justify-center content-center">2</Card>
            <Card className="grid justify-center content-center">3</Card>
            <Card className="grid justify-center content-center">4</Card>
          </div>
        </section>
        {/* product data section */}
        <section className="py-4">
          <Card className="p-10">
            <CardHeader>
              <CardTitle>Product Title</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-xl">Price : </span>
              <span>100$</span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Description : </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ipsam incidunt labore quia voluptas magnam, dolores
                libero unde accusamus aspernatur porro, nihil voluptatem eius
                deleniti aperiam asperiores, quam animi voluptatum.
              </span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Quentity : </span>
              <span>100</span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Category : </span>
              <span>hear car</span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Created At : </span>
              <span>{new Date().toISOString()}</span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Updated At : </span>
              <span>{new Date().toISOString()}</span>
            </CardContent>
            <CardContent>
              <span className="font-bold text-xl">Rating : </span>
              <span>5</span>
            </CardContent>
            <section className="m-5 flex justify-end">
              <div className="px-5 py-2 mx-2 bg-sky-600 rounded-sm text-white">
                <Link>Edit</Link>
              </div>
              <div className="px-5 py-2 mx-2 bg-red-600 rounded-sm text-white">
                <Link>Delete</Link>
              </div>
            </section>
          </Card>
        </section>
        {/* actions */}
      </div>
    </main>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Plans() {
  return (
    <div className="container relative pt-[6rem]" id="pricing">
      <h1 className="mx-auto max-w-[68rem] text-[2.5rem] text-center font-medium">
          Check out our plans.
      </h1>
      
      <div className="flex mx-auto pt-8 max-w-[68rem]">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="ultimate">Ultimate</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="flex py-4 justify-center">
            <Card className="w-[500px]">
              <CardHeader className="items-center">
                <CardTitle>
                  <h1 className="flex flex-col items-center">
                    Basic Detail Package <span className="pt-4">$90</span>
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col ">
                <p>
                  Includes:
                </p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Exterior hand wash and wax</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Interior vacuuming and dusting</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Window cleaning (inside and out)</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Tire and rim cleaning</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Air freshener application</p>
                <div className="flex items-center justify-center m-8">
                  <Button asChild className="p-6">
                    <Link href="/">Book an Appointment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="premium" className="flex -top-2.5 justify-center">
            <Card className="w-[500px]">
              <CardHeader className="items-center">
                <CardTitle>
                  <h1 className="flex flex-col items-center">
                    Premium Detail Package <span className="pt-4">$199</span>
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col ">
                <p>
                  Includes:
                </p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Exterior hand wash and wax</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Interior deep cleaning (shampoo and upholstery treatment)</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Dashboard and console conditioning</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Engine bay cleaning</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Headlight restoration</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Leather or fabric protection</p>
                <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Window tint inspection and cleaning</p>
                <div className="flex items-center justify-center m-8">
                  <Button asChild className="p-6">
                    <Link href="/">Book an Appointment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ultimate" className="flex justify-center">
            <Card className="w-[500px]">
                <CardHeader className="items-center">
                  <CardTitle>
                    <h1 className="flex flex-col items-center">
                      Ultimate Detail Package <span className="pt-4">$359</span>
                    </h1>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col ">
                  <p className="pb-2">
                    Includes:
                  </p>
                  <p className="flex items-center text-[1.2rem] font-medium pb-2"><span className="text-[2rem] pr-2">•</span> Full exterior wash, clay bar treatment, ceramic coating application</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Complete interior deep cleaning (shampoo, leather conditioning, and stain removal)</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Engine bay detail and dressing</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Headlight and taillight restoration</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Underbody wash and protection</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Wheel and tire detailing with high-end sealant</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Customized air freshener and odor elimination</p>
                  <p className="flex items-center text-[1.2rem] font-medium"><span className="text-[2rem] pr-2">•</span> Paint correction for a flawless finish</p>
                  <div className="flex items-center justify-center m-8">
                    <Button asChild className="p-6">
                      <Link href="/">Book an Appointment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

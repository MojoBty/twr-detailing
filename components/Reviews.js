import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Reviews() {
  return (
    <div className="container relative pt-[6rem] ">
      <div className="relative">
        <h1 className="mx-auto max-w-[68rem] text-[2.5rem] text-center font-medium">
          Proven results.
        </h1>
        <div className="flex flex-wrap md:flex-nowrap mx-auto pt-8 max-w-[68rem] justify-center gap-8">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-yellow-500">★★★★★</CardTitle>
              <CardDescription>Evan Mercer</CardDescription>
            </CardHeader>
            <CardContent>
              <p>I couldn't be happier with the car detailing service I received; my car looks and feels brand new, inside and out. The attention to detail and level of care put into every inch of my vehicle exceeded all my expectations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-yellow-500">★★★★★</CardTitle>
              <CardDescription>Isla Thornton</CardDescription>
            </CardHeader>
            <CardContent>
              <p>The car detailing service was absolutely phenomenal—every inch of my car was meticulously cleaned and polished to perfection. It's like driving a brand-new vehicle, and I’m beyond thrilled with the results!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-yellow-500">★★★★★</CardTitle>
              <CardDescription>Cameron Sterling</CardDescription>
            </CardHeader>
            <CardContent>
              <p>I’m extremely satisfied with the detailing job; my car’s interior and exterior are spotless and shine like never before. The service was top-notch, and the results were worth every penny!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

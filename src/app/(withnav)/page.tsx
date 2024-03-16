import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Lamp } from "./_Lamp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 flex flex-col items-center justify-center text-center">
        <section>
          <div className="grid max-w-screen-xl p-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-left">
                Making Ideas Real Together
              </h1>
              <p className="max-w-2xl mb-6 mt-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
                Unleash Your Potential with MentorHub&apos;s <br />
                Data-Driven mentor matching
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <Link
                    href="/register?as=mentor"
                    className="items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 justify-self-start block w-fit"
                  >
                    I&apos;m a Mentor
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href="/register"
                    className="items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 justify-self-start block w-fit"
                  >
                    I&apos;m an Entrepreneur
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-md overflow-hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                width={5260}
                height={3510}
                src="/hero-image.jpg"
                alt="mockup"
              />
            </div>
          </div>
        </section>

        <section id="faqs">
          <h2 className="text-4xl font-bold mt-12">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-left">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent className="text-left">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent className="text-left">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </MaxWidthWrapper>

      <Lamp />
    </>
  );
}

import Button from "@/components/launch/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-1 top-0 left-0">
        <div className="flex w-screen justify-between">
          <div className="relative">
            <Image
              src="/elements/left-paper-corner.png"
              alt=""
              height={500}
              width={500}
              className="h-[35vh] w-auto"
            />
            <Image
              src="/elements/small-vine-1.png"
              alt=""
              height={500}
              width={500}
              className="absolute top-0 h-[25vh] w-auto"
            />
          </div>
          <div className="relative">
            <Image
              src="/elements/top-paper.png"
              alt=""
              height={500}
              width={500}
              className="h-[25vw] w-auto"
            />
            <Image
              className="absolute top-0 w-auto right-8 h-[35vh]"
              src="/elements/small-vine-2.png"
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      <main className="">
        <div className="h-screen w-screen flex flex-col items-center justify-center relative">
          <div className="bg-[url('/elements/s-vine.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center p-6 md:p-16 md:w-[55vw] w-4/5">
            <Image
              src="/logo.png"
              alt=""
              height={764}
              width={1080}
              className="w-full h-auto md:mx-10 -translate-y-5 translate-x-5"
            />
          </div>
          <div className="text-center p-8 md:text-3xl -translate-y-20 mt-4 text-outline text-[#DBC491]">
            <div>the world&apos;s largest all-girls high school hackathon</div>
            <div>
              november 14-16, 2025 &middot; new york city &middot; 200 teen
              hackers
            </div>
          </div>
          <div className="absolute bottom-20 uppercase text-outline text-[#DBC491]">
            scroll to continue
          </div>
        </div>
        <div className="min-h-[300vh] w-screen relative bg-center">
          <div className="sticky top-0 -z-1 h-screen w-screen overflow-hidden flex items-center justify-center">
            <Image
              src="/athens.png"
              alt=""
              width={1600}
              height={1000}
              className="max-w-none min-h-screen opacity-60"
            />
          </div>
          <div className="absolute top-0 min-h-[300vh] w-screen md:pt-10 ">
            <div className="my-32 top-0 text-[#DBC491] md:mx-20 bg-[#3B5435]/90 p-3 relative backdrop-blur-sm">
              <div className="absolute inset-0 -z-1 bg-[url('/noise.svg')] mix-blend-multiply"></div>
              <div className="border border-[#DBC491]/50 flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center p-6">
                  <Image
                    src="/elements/liberty-orpheus.png"
                    alt=""
                    width={250}
                    height={250}
                    className="w-3/5 md:w-full aspect-square"
                  />
                </div>
                <div className="p-8 md:p-14 w-full md:text-right">
                  <div className="text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                    What is Parthenon?
                  </div>
                  <div className="text-2xl mt-2 text-[#F8E5D6] font-normal">
                    Parthenon is a 36-hour hackathon in New York City bringing
                    together 200 high school students who identify as girls or
                    gender minorities. It&apos;s the capstone of Hack
                    Club&apos;s{" "}
                    <a
                      href="#athena-award"
                      className="underline underline-offset-2 decoration-wavy hover:text-white transition"
                    >
                      Athena Award
                    </a>
                    , celebrating months of coding and building!
                  </div>
                </div>
              </div>
            </div>

            <div className="my-32 top-0 text-[#DBC491] md:mx-20 bg-[#3B5435]/90 p-3 relative backdrop-blur-sm">
              <div className="absolute inset-0 -z-1 bg-[url('/noise.svg')] mix-blend-multiply"></div>
              <div className="border border-[#DBC491]/50 flex flex-col md:flex-row gap-6">
                <div className="p-8 md:p-14 w-full">
                  <div className="text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                    What am I doing there?
                  </div>
                  <div className="text-2xl mt-2 text-[#F8E5D6] font-normal">
                    At Parthenon, you'll spend the weekend collaborating with
                    other top high school builders from around the world to
                    brainstorm, code, and ship a projects. You'll take part in
                    hands-on workshops, team activities, and a final showcase
                    where they present what they’ve built. Beyond coding, it’s a
                    chance to make lifelong friends, grow confidence, and be
                    inspired by leaders in technology.
                  </div>
                  <div className="flex justify-end gap-4 mt-4">
                    <Button href="/guide">Check out the guide!</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-32 justify-end md:flex-row gap-6 top-0 md:px-20 p-6 text-[#DBC491] md:py-10 w-full">
              <div className="p-8 md:p-14 bg-[#3B5435]/90 relative backdrop-blur-md w-full">
                <div className="absolute inset-0 -z-1 bg-[url('/noise.svg')] mix-blend-multiply"></div>
                <div className="text-xl uppercase font-serif">
                  Brought to you by
                </div>
                <div className="text-5xl uppercase drop-shadow-md font-serif">
                  Hack Club Athena
                </div>
                <div className="text-2xl mt-2 text-[#F8E5D6] font-normal">
                  Hack Club is a 501(c)(3) nonprofit and global network of 30k+
                  teen makers. <br />
                  <br />
                  Athena&apos;s mission is to give teenage girls and gender
                  minorities a space to create ambitious projects, connect with
                  peers worldwide, and see themselves thriving in technology.
                  Parthenon is where the work of the athena award comes together
                  in one unforgettable weekend.
                </div>
              </div>
            </div>
            <div
              id="athena-award"
              className="md:px-24 p-6 text-[#DBC491] bg-red-950/80 relative py-32 w-full"
            >
              <div className="absolute inset-0 -z-1 bg-[url('/noise.svg')] mix-blend-multiply backdrop-blur-sm"></div>
              <div className="flex flex-col md:flex-row">
                <div className="grow">
                  <div className="text-2xl">
                    To receive an invite to Parthenon, complete the
                  </div>
                  <div className="text-6xl font-serif uppercase">
                    Athena Award
                  </div>
                  <div className="text-xl mb-4">
                    🔗{" "}
                    <a
                      href="http://award.athena.hackclub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif underline text-white underline-offset-4"
                    >
                      award.athena.hackclub.com
                    </a>
                  </div>
                  <div className="text-lg mb-4">
                    TLDR: <br />
                    💻 Build projects. Get prizes. <br />
                    🗽 Upon qualifying, fly to New York City for the largest
                    all-girls high school hackathon.
                  </div>
                  <iframe
                    src="https://www.youtube.com/embed/WlJ5gsY9xSc"
                    title="This is the Athena Award"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="aspect-video w-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex h-full items-center">
                  <Image
                    src="/elements/athena-orpheus.png"
                    alt=""
                    width={500}
                    height={500}
                    className="md:w-full aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen p-6 pt-14 md:px-24 text-[#F4E3C1] mt-40 text-xl">
          <div className="text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
            Eligibility
          </div>
          <div className="bg-[#222] p-2 mt-6">
            <div className="border border-[#DBC491]/50 p-4">
              <div>
                To participate in Athena Award and Parthenon, you have to check
                these boxes:
              </div>
              <ul className="list-disc list-inside">
                <li>You must be 18 or younger</li>
                <li>in high school at the time of the event</li>
                <li>
                  and identify as a girl or gender minority (non-binary,
                  gender-diverse, etc.)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-5xl uppercase drop-shadow-md font-serif text-[#DBC491] text-center">
              Want more information?
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button href="/guide">Check out the guide!</Button>
          </div>

          <div className="flex uppercase font-serif items-center gap-2 text-sm mt-4">
            <h2> </h2>
          </div>
          <div className="mt-6">
            <div className="text-lg text-[#DBC491] font-serif"></div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}

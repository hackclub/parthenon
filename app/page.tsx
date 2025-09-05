import Button from "@/components/launch/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Content wrapper */}
        <div className="flex-1">
          {/* Decorative corner elements */}
          <div className="absolute z-1 top-0 left-0">
            <div className="flex w-screen justify-between">
              <div className="relative">
                <Image
                  src="/elements/left-paper-corner.png"
                  alt=""
                  height={500}
                  width={500}
                  className="h-[25vh] md:h-[35vh] w-auto"
                />
                <Image
                  src="/elements/small-vine-1.png"
                  alt=""
                  height={500}
                  width={500}
                  className="absolute top-0 h-[18vh] md:h-[25vh] w-auto"
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
                  className="absolute top-0 w-auto right-8 h-[25vh] md:h-[35vh]"
                  src="/elements/small-vine-2.png"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>

          <main>
            {/* Hero Section */}
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
              <div className="text-center p-4 md:p-8 text-lg sm:text-xl md:text-3xl -translate-y-12 md:-translate-y-20 mt-4 text-outline text-[#DBC491]">
                <div>
                  the world&apos;s largest all-girls high school hackathon
                </div>
                <div>
                  november 14-16, 2025 &middot; new york city &middot; 200 teen
                  hackers
                </div>
              </div>
              <div className="absolute bottom-20 uppercase text-outline text-[#DBC491]">
                scroll to continue
              </div>
              <Image
                className="
              absolute 
              left-1/2 
              transform 
              -translate-x-1/2 
              translate-y-30  /* mobile positioning */
              scale-50          /* mobile size */
              rotate-180
              md:translate-y-55 /* desktop override */
              md:scale-25"
                src="/elements/gold-vine.png"
                alt="gold vine decoration"
                height={1000}
                width={1000}
              />
            </div>

            {/* Scrolling content section */}
            <div className="relative w-screen bg-center h-[300vh]">
              {/* Sticky background image */}
              <div className="sticky top-0 -z-10 h-screen w-screen overflow-hidden flex items-center justify-center">
                <Image
                  src="/athens.png"
                  alt=""
                  width={1600}
                  height={1000}
                  className="max-w-none min-h-screen opacity-60"
                />
              </div>

              {/* Flowing content */}
              <div className="absolute top-0 md:pt-10 px-4 md:px-0">
                {/* Cards container */}
                <div className="cards-container relative -mx-4 md:mx-0 bg-center bg-cover bg-no-repeat bg-blend-multiply py-8 md:py-16 min-h-screen md:min-h-[60vh]">
                  {/* Card 1 */}
                  <div className="relative mx-4 md:mx-20 text-[#DBC491] bg-[#3B5435]/90 p-3 backdrop-blur-sm">
                    <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] mix-blend-multiply"></div>
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
                      <div className="p-6 md:p-14 w-full md:text-right">
                        <div className="text-3xl md:text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                          What is Parthenon?
                        </div>
                        <div className="text-lg md:text-2xl mt-2 text-[#F8E5D6] font-normal">
                          Parthenon is a 36-hour hackathon in New York City
                          bringing together 200 high school students who
                          identify as girls or gender minorities. It&apos;s the
                          capstone of Hack Club&apos;s{" "}
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

                  {/* Card 2 */}
                  <div className="my-24 md:my-24 text-[#DBC491] mx-4 md:mx-20 bg-[#3B5435]/90 p-3 relative backdrop-blur-sm">
                    <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] mix-blend-multiply"></div>
                    <div className="border border-[#DBC491]/50 flex flex-col md:flex-row gap-6">
                      <div className="p-6 md:p-14 w-full">
                        <div className="text-3xl md:text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                          What am I doing there?
                        </div>
                        <div className="text-lg md:text-2xl mt-2 text-[#F8E5D6] font-normal">
                          At Parthenon, you&apos;ll spend the weekend
                          collaborating with other top high school builders from
                          around the world to brainstorm, code, and ship
                          projects. You&apos;ll take part in hands-on workshops,
                          team activities, and a final showcase. Beyond coding,
                          it&apos;s a chance to make lifelong friends, grow
                          confidence, and be inspired by leaders in technology.
                        </div>
                        <div className="flex justify-end gap-4 mt-4">
                          <Button href="/guide">Check out the guide!</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="my-16 top-0 text-[#DBC491] mx-4 md:mx-20 bg-[#3B5435]/90 p-3 relative backdrop-blur-sm">
                    <div className="absolute inset-0 -z-1 bg-[url('/noise.svg')] mix-blend-multiply"></div>
                    <div className="border border-[#DBC491]/50 flex flex-col md:flex-row gap-6">
                      <div className="p-8 md:p-14 w-full">
                        <div className="text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                          Brought to you by Hack Club Athena
                        </div>
                        <div className="text-2xl mt-2 text-[#F8E5D6] font-normal">
                          Hack Club is a 501(c)(3) nonprofit and global network
                          of thousands of teen makers. <br />
                          <br />
                          Athena&apos;s mission is to give teenage girls and
                          gender minorities a space to create ambitious
                          projects, connect with peers worldwide, and see
                          themselves thriving in technology. Parthenon is where
                          the work of the Athena Award comes together in one
                          unforgettable weekend.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Athena Award Section */}
                  <section
                    id="athena-award"
                    className="relative py-16 px-4 md:px-24 text-[#DBC491] md:bg-red-950/80 bg-red-950"
                  >
                    <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] mix-blend-multiply backdrop-blur-sm"></div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="flex-1">
                        <div className="text-lg md:text-2xl">
                          To receive an invite to Parthenon, complete the
                        </div>
                        <div className="text-4xl md:text-6xl font-serif uppercase">
                          Athena Award
                        </div>
                        <div className="text-base md:text-xl mb-4">
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
                        <div className="text-sm md:text-lg mb-4">
                          TLDR: <br />
                          💻 Build projects. Get prizes. <br />
                          🗽 Upon qualifying, fly to New York City for the
                          largest all-girls high school hackathon.
                        </div>
                        <div className="w-full">
                          <iframe
                            src="https://www.youtube.com/embed/WlJ5gsY9xSc"
                            title="This is the Athena Award"
                            className="w-full aspect-video rounded"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end w-full md:w-1/3">
                        <Image
                          src="/elements/athena-orpheus.png"
                          alt="Athena graphic"
                          width={400}
                          height={400}
                          className="w-2/3 md:w-full max-w-sm"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Eligibility Section */}
                  <section className="py-16 px-4 md:px-24 text-[#F4E3C1] bg-[#3B5435]">
                    <h2 className="text-3xl md:text-5xl uppercase drop-shadow-md font-serif text-[#DBC491]">
                      Eligibility
                    </h2>
                    <div className="bg-[#222] p-4 mt-6">
                      <div className="border border-[#DBC491]/50 p-4 text-sm md:text-lg">
                        <p>
                          To participate in Athena Award and Parthenon, you have
                          to check these boxes:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                          <li>You must be 18 or younger</li>
                          <li>In high school at the time of the event</li>
                          <li>
                            Identify as a girl or gender minority (non-binary,
                            gender-diverse, etc.)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center mt-16">
                      <div className="text-3xl md:text-5xl uppercase drop-shadow-md font-serif text-[#DBC491] text-center">
                        Want more information?
                      </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                      <Button href="/guide">Check out the guide!</Button>
                    </div>
                  </section>
                </div>
                  <footer className="-mx-4 md:mx-0 bg-[#203826] text-sm text-[#F4E3C1] py-6 shadow-xl">
                    <div className="mx-auto px-4 text-center">
                      Made with <span aria-hidden>💖</span> by&nbsp;
                      <a
                        href="https://athena.hackclub.com/team"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 decoration-wavy text-[#DBC491] font-semibold hover:text-white transition-colors"
                      >
                        Athena Team
                      </a>
                    </div>
                  </footer>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

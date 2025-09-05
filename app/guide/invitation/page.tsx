export default function AthenaAward() {
  return (
    <div className="text-[#7F534B] font-sans space-y-3 px-4 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-bold mb-4 text-[#3B5435]">
        Invitation Process FAQ
      </h1>

      <section>
        <h2 className="text-xl sm:text-2xl mb-2 font-bold">
          Who can receive an invitation to Parthenon?
        </h2>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>High school students, ages 18 and under</li>
          <li>
            Students who identify as a girl or gender minority (non-binary
            person)
          </li>
          <li>
            Must have completed the Athena Award (3 projects + 30 hours of
            coding)
          </li>
        </ul>
        <h2 className="font-bold text-2xl mt-4">
          Invitations will begin to go out in mid-September!
        </h2>
        <span className="italic block text-center bg-red-600/20 p-3 mt-3 text-xs sm:text-sm">
          *Note that the event is invitation only; invites are only awarded to
          the first 200 participants to receive the Athena Award.
        </span>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl mb-2 font-bold">
          What is the Athena Award?
        </h2>
        <div className="space-y-2 text-sm sm:text-base md:text-lg">
          <p>
            The Athena Award is a six-month long program at Hack Club designed
            to encourage girls and gender minorities to code and
            &quot;ship;&quot; technical projects. The program itself, as part of
            the Athena Initiative, is aimed at and for high school students
            worldwide.
          </p>
          <p>
            We aim for students who have completed the Athena Award to be
            technically proficient and confident members of their communities.
            Following their completion of the Awards, students should be at the
            stage where they work on personal projects outside of school, lead
            Hack Clubs/coding clubs, run hackathons and events in their areas,
            and overall, are more involved in STEM fields.
          </p>
          <p>The requirements:</p>
          <ul className="list-disc list-inside">
            <li>
              Complete three technical projects (Hack Club&apos;s YSWS programs,
              personal projects)
            </li>
            <li>
              Complete 30 verified hours of coding (time tracking or participate
              in summer programs)
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl mb-2 font-bold">
          What is Parthenon?
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Parthenon is the capstone hackathon of the Athena Award, Hack
          Club&apos;s most ambitious initiative to get girls technical. This
          hackathon weekend is the culmination of the Athena Award—empowering
          thousands of girls to build ambitious projects and code all year long.
          After coding for 30 hours and creating 3 technical projects, the top
          200 girls internationally earn a spot at Parthenon in New York City to
          celebrate their hard work over the past few months.
        </p>
      </section>
    </div>
  );
}

export default function TravelGuide() {
  return (
    <div className="text-[#7F534B] font-sans space-y-6">
      <h1 className="text-4xl uppercase font-bold mb-4 text-[#3B5435]">
        Parthenon Travel Guide
      </h1>

      {/* Receiving an Invitation */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Receiving an Invitation</h2>
        <p>To receive an invitation to Parthenon you must:</p>
        <ul className="list-disc list-inside">
          <li>
            Complete three technical projects (YSWS programs, personal projects)
          </li>
          <li>Complete 30 verified hours of coding</li>
          <li>
            Be 18 or younger, a high school student at the time of the event,
            and identify as a girl or gender minority (non-binary person)
          </li>
        </ul>
        <p className="mt-2">
          You must meet the requirements stated above by{" "}
          <span className="font-bold">October 20th</span> in order to receive an
          invitation. Invites will be sent on a rolling basis until{" "}
          <span className="font-bold">October 31st, 2025</span>. The earlier you
          meet these requirements the earlier you can receive an invitation. You
          must confirm your spot by October 31st, 2025 (this includes having the
          waiver signed).
        </p>
        <p className="mt-2 italic">
          Please submit as soon as possible—if you are not one of the first 200
          confirmed attendees, you will not be able to attend!
        </p>
        <p className="mt-2">
          The shop will remain open until October 31st to purchase items and
          travel stipends (note that orders placed in the last few days will
          take longer to fulfill).
        </p>
        <p className="mt-2">
          You can book a flight before receiving the invitation at your own
          risk. If you attend without an invite or a signed waiver, we are
          unable to let you into the hackathon. We are unable to reimburse any
          travel or refund artifacts if you purchase a ticket and have not
          received an invitation, or are unable to travel to Parthenon (i.e.
          denied visa/ESTA).
        </p>
      </section>

      {/* Getting to the Venue */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Getting to the Venue</h2>
        <p>
          Attendees are expected to arrive at the venue on their own. A
          transportation guide will later be shared with attendees with details
          on how to get to the venue.
        </p>
        <p className="mt-2">
          No one except attendees and HQ Adult Staff will be allowed to enter
          Parthenon.
        </p>
      </section>

      {/* Booking Travel */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Booking Travel</h2>
        <p>
          All participants are expected to book their own travel to Parthenon.
          Limited travel stipends are available. If a participant qualifies for
          a travel stipend they must{" "}
          <span className="font-bold">
            ship a project at Parthenon (working demo link and public GitHub
            repository)
          </span>{" "}
          to receive reimbursements, which will be done through HCB. All
          reimbursements will be processed no later than December 31st, 2025.
        </p>
        <p className="mt-2">
          If a participant is unable to book their travel due to financial
          hardship, the Athena team can work with the participant on a
          case-by-case basis to book their travel once they have completed the
          requirements of the Athena Award.
        </p>
        <p className="mt-2 italic">
          You will not be allowed into the venue without being one of the 200
          confirmed participants. This means having both an invitation and a
          signed waiver.
        </p>
        <p className="mt-2">
          <span className="font-bold">Note if you’re flying:</span> We highly
          recommend that you travel out of JFK or LaGuardia Airports (not
          Newark) due to more accessible public transportation.
        </p>
      </section>

      {/* Arrival/Departure Times */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Arrival/Departure Times</h2>
        <p>
          Please book your travel to arrive in New York between{" "}
          <span className="font-bold">
            3:00pm EST and 8:00pm EST on November 14th, 2025
          </span>
          . If you need to arrive later, please let us know via{" "}
          <a
            href="mailto:athena@hackclub.com"
            className="text-blue-700 underline"
          >
            athena@hackclub.com
          </a>
          .
        </p>
        <p className="mt-2">
          International attendees arriving on{" "}
          <span className="font-bold">November 13th</span> or leaving after{" "}
          <span className="font-bold">November 16th</span> should contact an
          organizer before booking. Early arrivals before 3pm on the 14th cannot
          be accommodated without prior approval.
        </p>
      </section>

      {/* Travel Stipends */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Travel Stipends</h2>
        <p>
          Travel stipends are an important resource reserved for teenagers whose
          families otherwise wouldn&apos;t have the means to pay for a flight to
          the hackathon.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            You may not apply for a travel stipend if you live within 250 miles
            of NYC.
          </li>
          <li>Stipends may only go towards you (the attendee).</li>
        </ul>

        <h3 className="text-xl mt-3 font-semibold">How they work</h3>
        <ul className="list-disc list-inside mt-1">
          <li>Apply with short questions about your background and needs.</li>
          <li>Applications are reviewed on a rolling basis.</li>
          <li>
            If approved, purchase your travel in advance. After Parthenon,
            you&apos;ll receive a flight reimbursement form.
          </li>
          <li>
            You must ship a project at Parthenon to receive reimbursement.
          </li>
        </ul>
        <p className="mt-2 italic">
          Please only apply if you truly need a travel stipend!
        </p>

        <p className="mt-2">
          <span className="font-bold">Base amounts:</span>
        </p>
        <ul className="list-disc list-inside">
          <li>$300 USD for North America</li>
          <li>$600 USD internationally</li>
        </ul>
        <p className="mt-2">
          More artifacts, more stipends! 10 artifacts = $30 extra. You can
          purchase as many as you have artifacts for.
        </p>
      </section>

      {/* Travelling Internationally */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Travelling Internationally</h2>
        <p>
          If you are a citizen of a country other than the U.S., you may need to
          apply for an ESTA (Visa Waiver Program) or B1/B2 visa depending on
          your country of origin.
        </p>

        <h3 className="text-xl mt-3 font-semibold">Applying for a Visa/ESTA</h3>
        <p>
          Apply as early as possible—wait times can extend months or years. Book
          the earliest interview and consider requesting an expedited
          appointment if your date is too late.
        </p>
        <p className="mt-2 italic">
          Aside from providing a letter of invitation, Hack Club cannot assist
          with expediting visas.
        </p>

        <h3 className="text-xl mt-3 font-semibold">Letter of Invitation</h3>
        <p>
          Hack Club can provide you an invitation letter. Send the following to{" "}
          <a
            href="mailto:louisa@hackclub.com"
            className="text-blue-700 underline"
          >
            louisa@hackclub.com
          </a>{" "}
          after reaching 50% progress on the Athena Award:
        </p>
        <ul className="list-disc list-inside mt-1">
          <li>Full name (as on passport)</li>
          <li>Country of citizenship</li>
          <li>Date and place of birth</li>
          <li>Phone number</li>
          <li>Permanent address</li>
          <li>Your Slack ID</li>
        </ul>
        <p className="mt-2 italic">
          Travel stipends do not cover visa-related costs.
        </p>

        <h3 className="text-xl mt-3 font-semibold">
          What to put on your Visa/ESTA Application
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Date of Arrival: November 14th, 2025 (or Nov 13th if necessary)
          </li>
          <li>Arrival City: New York City</li>
          <li>
            Date of Departure: November 16th, 2025 (or Nov 17th if necessary)
          </li>
          <li>Departure City: New York City</li>
          <li>Locations: New York City</li>
          <li>Address: 124 E 14th St, New York, NY 10003, USA</li>
          <li>Contact Person: Christina Asquith</li>
          <li>Organization: The Hack Foundation (d.b.a. Hack Club)</li>
          <li>
            U.S. Address: 8605 Santa Monica Blvd #86294, West Hollywood, CA
            90069
          </li>
          <li>Phone: (855) 625-4225</li>
          <li>Email: team@hackclub.com</li>
        </ul>

        <h3 className="text-xl mt-3 font-semibold">
          If your visa interviewer is concerned
        </h3>
        <ul className="list-disc list-inside">
          <li>
            The Hack Foundation is the legal entity for Hack Club
            (&quot;d.b.a.&quot; = doing business as).
          </li>
          <li>
            Verification available at{" "}
            <a
              href="https://the.hackfoundation.org"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline"
            >
              the.hackfoundation.org
            </a>
          </li>
          <li>
            IRS EIN: <span className="font-mono">81-2908499</span> (verify on
            IRS site).
          </li>
          <li>
            Concerns about invitation letters can be directed to{" "}
            <a
              href="mailto:team@hackclub.com"
              className="text-blue-700 underline"
            >
              team@hackclub.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

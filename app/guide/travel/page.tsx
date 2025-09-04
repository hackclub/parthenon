export default function TravelGuide() {
  return (
    <div className="text-[#7F534B] font-sans space-y-6">
      <h1 className="text-4xl uppercase font-bold mb-6 text-[#3B5435]">
        Parthenon Travel Guide
      </h1>

      {/* Receiving an invitation */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Receiving an invitation</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>
            Complete three technical projects (YSWS programs, personal projects)
          </li>
          <li>Complete 30 verified hours of coding</li>
          <li>
            You must be 18 or younger, a high school student, and identify as a
            girl or gender minority (non-binary person).
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          Requirements must be met by{" "}
          <span className="font-semibold">October 20th, 2025</span> in order to
          receive an invitation. Invites will be sent on a rolling basis until{" "}
          <span className="font-semibold">October 31st, 2025</span>. Confirm
          your spot within five days of your invitation or by October 31st
          (including signed waiver).
        </p>
        <p className="text-lg leading-relaxed">
          Only the first 200 confirmed attendees will be able to attend. The
          shop remains open until October 31st to purchase items and travel
          grants.
        </p>
        <p className="text-lg leading-relaxed italic">
          Booking a flight before receiving an invitation is at your own risk.
          If you do not have an invitation or a signed waiver, you cannot attend
          and Hack Club cannot reimburse your travel.
        </p>
      </section>

      {/* Getting to the Venue */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Getting to the Venue</h2>
        <p className="text-lg leading-relaxed">
          Attendees are expected to arrive at the venue on their own. A
          transportation guide will be shared with attendees with details on how
          to get there. Only attendees and HQ staff will be allowed inside
          Parthenon.
        </p>
      </section>

      {/* Booking Travel */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Booking Travel</h2>
        <p className="text-lg leading-relaxed">
          Participants are expected to book their own travel. Limited travel
          grants are available. If you qualify, you must ship a project (demo
          link + GitHub repo) at Parthenon to receive reimbursement.
          Reimbursements will be processed no later than{" "}
          <span className="font-semibold">December 31st, 2025</span>.
        </p>
        <p className="text-lg leading-relaxed">
          If you cannot book due to financial hardship, the Athena team can
          assist once you&apos;ve completed the Athena Award and received your
          invitation.
        </p>
        <p className="text-lg leading-relaxed italic">
          You must be one of the 200 confirmed participants (invitation + signed
          waiver) to enter the venue.
        </p>
        <p className="text-lg leading-relaxed">
          If flying, we recommend using JFK or LaGuardia airports (not Newark)
          for better public transportation.
        </p>
      </section>

      {/* Arrival & Departure */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Arrival & Departure Times</h2>
        <p className="text-lg leading-relaxed">
          Book travel to arrive in New York between{" "}
          <span className="font-semibold">3:00pm and 8:00pm EST</span> on{" "}
          <span className="font-semibold">November 14th, 2025</span>. If
          arriving later, notify organizers at athena@hackclub.com.
        </p>
        <p className="text-lg leading-relaxed">
          International attendees may arrive November 13th or depart November
          17th with prior approval. Early arrivals before 3pm without approval
          cannot be accommodated.
        </p>
      </section>

      {/* Travel Grants */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Travel Grants</h2>
        <p className="text-lg leading-relaxed">
          Travel grants are for teens whose families cannot otherwise afford
          flights. You cannot apply if you live within 250 miles of NYC. Grants
          only cover the attendee.
        </p>
        <h3 className="text-xl font-semibold mt-3">How they work</h3>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Anyone with an invitation may apply.</li>
          <li>Applications reviewed on a rolling basis.</li>
          <li>
            If approved, purchase travel in advance. Reimbursement is processed
            after Parthenon via HCB.
          </li>
          <li>
            You must ship a project during Parthenon to receive reimbursement.
          </li>
          <li>Apply only if you truly need it.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Maximum grant amounts: <span className="font-semibold">$300</span>{" "}
          (North America), <span className="font-semibold">$600</span>{" "}
          (International).
        </p>
        <p className="text-lg leading-relaxed">
          Extra funds can be purchased with artifacts: 10 artifacts = $30
          additional flight grant.
        </p>
      </section>

      {/* Travelling Internationally */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Travelling Internationally</h2>
        <p className="text-lg leading-relaxed">
          Non-US citizens may need to apply for an ESTA or B1/B2 visa depending
          on origin country.
        </p>
        <h3 className="text-xl font-semibold mt-3">Applying for a Visa/ESTA</h3>
        <p className="text-lg leading-relaxed">
          Apply early as wait times can be months. Expedite requests must go
          through your local US consulate. Hack Club provides invitation letters
          but cannot expedite visas.
        </p>
        <h3 className="text-xl font-semibold mt-3">Letter of Invitation</h3>
        <p className="text-lg leading-relaxed">
          To request, email{" "}
          <span className="font-semibold">louisa@hackclub.com</span> securely
          with:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Full name (as on passport)</li>
          <li>Citizenship</li>
          <li>Date & place of birth</li>
          <li>Phone number</li>
          <li>Permanent address</li>
          <li>Your Slack ID</li>
        </ul>
        <p className="text-lg leading-relaxed italic">
          You may only request after reaching 50% progress towards the Athena
          Award.
        </p>
      </section>

      {/* Visa/ESTA Application Info */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">Visa/ESTA Application Info</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Date of Arrival: November 14th, 2025 (or 13th if necessary)</li>
          <li>Arrival City: New York City</li>
          <li>Date of Departure: November 16th, 2025 (or 17th if necessary)</li>
          <li>Departure City: New York City</li>
          <li>Planned Location: New York City</li>
          <li>Address: 124 E 14th St, New York, NY 10003</li>
          <li>Contact Person: Christina Asquith</li>
          <li>Organization: The Hack Foundation (d.b.a. Hack Club)</li>
          <li>
            US Address: 8605 Santa Monica Blvd #86294, West Hollywood, CA, 90069
          </li>
          <li>Phone: (855) 625-4225</li>
          <li>Email: team@hackclub.com</li>
        </ul>
      </section>

      {/* If interviewer is concerned */}
      <section>
        <h2 className="text-2xl mb-2 font-bold">
          If your visa interviewer is concerned
        </h2>
        <p className="text-lg leading-relaxed">
          If your interviewer is confused about Hack Club, clarify that The Hack
          Foundation (EIN 81-2908499) is the legal entity &quot;doing business
          as&quot; Hack Club. This is noted on your invitation letter.
        </p>
        <p className="text-lg leading-relaxed">
          More information is at{" "}
          <a href="https://the.hackfoundation.org" className="underline">
            the.hackfoundation.org
          </a>
          , which links to hackclub.com. IRS records also confirm The Hack
          Foundation&apos;s nonprofit status.
        </p>
        <p className="text-lg leading-relaxed">
          If needed, bring Hack Club&apos;s most recent tax filing to your
          interview.
        </p>
      </section>
    </div>
  );
}

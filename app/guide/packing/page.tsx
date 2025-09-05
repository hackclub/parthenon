export default function PackingList() {
  return (
    <div className="text-[#7F534B] font-sans space-y-3">
      <h1 className="text-4xl uppercase font-bold mb-4 text-[#3B5435]">
        Parthenon Packing List
      </h1>

      <section>
        <p className="text-lg">
          Please see our Suggested Packing List for an idea of what to bring.
          Remember that we will be in NYC in November and will be subject to the
          elements. Make sure to check the weather forecast leading up to the
          event!
        </p>
        <p className="text-lg mt-2">
          We would advise bringing one suitcase carry on and one backpack for
          carry on. Travel stipends do not cover any form of luggage fees you
          may incur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">Carry On</h2>
        <ul className="list-disc list-inside">
          <li>Sleeping bag + pillow</li>
          <li>Toiletries</li>
          <li>
            Deodorant{" "}
            <span className="italic">
              (there&apos;s no shower at the venue - please bring!)
            </span>
          </li>
          <li>Toothbrush and toothpaste</li>
          <li>Skincare</li>
          <li>
            Contacts <span className="italic">(if needed)</span>
          </li>
          <li>Pajamas (1–2x)</li>
          <li>Bottoms (3x pants)</li>
          <li>Tops (3x shirts)</li>
          <li>
            Sweatshirt/hoodie/outerwear{" "}
            <span className="italic">
              (New York can get very cold in November!)
            </span>
          </li>
          <li>Undergarments (5 days worth)</li>
          <li>Socks (3 pairs)</li>
          <li>Space for merch!</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-2 font-bold">Backpack</h2>
        <h3 className="text-xl mb-1 font-semibold">Tech:</h3>
        <ul className="list-disc list-inside">
          <li>Laptop</li>
          <li>Laptop Charger</li>
          <li>Phone Charger</li>
          <li>Phone</li>
          <li>Headphones</li>
          <li>Wallet</li>
          <li>Water bottle</li>
          <li>
            Form of ID <span className="italic">(for check in)</span>
          </li>
          <li>Any medicine</li>
        </ul>
      </section>
    </div>
  );
}

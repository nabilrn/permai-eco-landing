const OrganizationStructure = () => {
  const director = {
    position: "Direktur",
    name: "Athila Laboer",
    initials: "AL",
  };

  const secondTier = [
    {
      position: "Wakil Direktur",
      name: "Juraimah",
      initials: "J",
    },
    {
      position: "Sekretaris",
      name: "Sauqiyati Azkia Darman, Salaabilla Fransisca Oktomadina",
      initials: "SA",
    },
    {
      position: "Bendahara",
      name: "Eva Martha",
      initials: "EM",
    },
  ];

  const thirdTier = [
    {
      position: "Bidang Penerimaan, Pemilahan dan Pencatatan",
      name: "Ismawati Ismail, Guslaini",
      initials: "PP",
    },
    {
      position: "Bidang Pengembangan dan Kerajinan Usaha",
      name: "Roslina Tobing, Yuniasri, Ripos Maradona",
      initials: "PK",
    },
  ];

  const PersonCard = ({
    position,
    name,
    initials,
    featured = false,
  }: {
    position: string;
    name: string;
    initials: string;
    featured?: boolean;
  }) => (
    <div className={`text-center ${featured ? "" : "flex-1 min-w-0"}`}>
      <div
        className={`inline-flex items-center justify-center rounded-full bg-forest-green/10 text-forest-green font-bold mb-3 ${
          featured ? "w-16 h-16 text-xl" : "w-12 h-12 text-sm"
        }`}
      >
        {initials}
      </div>
      <p
        className={`uppercase tracking-wider text-muted-text font-semibold mb-1 ${
          featured ? "text-xs" : "text-[11px]"
        }`}
      >
        {position}
      </p>
      <p
        className={`text-deep-forest ${
          featured
            ? "text-xl font-serif italic"
            : "text-sm font-semibold leading-snug"
        }`}
      >
        {name}
      </p>
    </div>
  );

  return (
    <section id="organization" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="relative max-w-[800px] mx-auto px-6">
        <div className="mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-forest mb-3">
            Struktur Kepengurusan
          </h2>
          <p className="text-muted-text max-w-xl">
            Tim yang berkomitmen memajukan Bank Sampah Pondok Permai.
          </p>
        </div>

        {/* Org chart */}
        <div className="animate-on-scroll">
          {/* Director - featured at top */}
          <PersonCard {...director} featured />

          {/* Connecting line */}
          <div className="w-px h-10 bg-[#D4C9B0] mx-auto my-2" />

          {/* Second tier */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center items-start">
            {secondTier.map((member) => (
              <PersonCard key={member.position} {...member} />
            ))}
          </div>

          {/* Connecting line */}
          <div className="w-px h-10 bg-[#D4C9B0] mx-auto my-2" />

          {/* Third tier */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center items-start">
            {thirdTier.map((member) => (
              <PersonCard key={member.position} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;

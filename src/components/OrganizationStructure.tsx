const OrganizationStructure = () => {
  const director = {
    position: "Direktur",
    name: "Athila Laboer",
    initials: "AL",
  };

  const secondTier = [
    {
      position: "Wakil Direktur",
      names: ["Juraimah"],
      initials: "J",
    },
    {
      position: "Sekretaris",
      names: ["Sauqiyati Azkia Darman", "Salaabilla Fransisca Oktomadina"],
      initials: "SA",
    },
    {
      position: "Bendahara",
      names: ["Eva Martha"],
      initials: "EM",
    },
  ];

  const thirdTier = [
    {
      position: "Bidang Penerimaan, Pemilahan dan Pencatatan",
      names: ["Ismawati Ismail", "Guslaini"],
      initials: "PP",
    },
    {
      position: "Bidang Pengembangan dan Kerajinan Usaha",
      names: ["Roslina Tobing", "Yuniasri", "Ripos Maradona"],
      initials: "PK",
    },
  ];

  const PersonCard = ({
    position,
    names,
    initials,
    featured = false,
  }: {
    position: string;
    names: string[];
    initials: string;
    featured?: boolean;
  }) => (
    <div className={`text-center ${featured ? "" : "w-full"}`}>
      <div
        className={`inline-flex items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] font-bold mb-3 ${
          featured ? "w-16 h-16 text-xl" : "w-12 h-12 text-sm"
        }`}
      >
        {initials}
      </div>
      <p
        className={`uppercase tracking-wider text-[#6B7280] font-semibold mb-2 ${
          featured ? "text-xs" : "text-[11px]"
        }`}
      >
        {position}
      </p>
      {names.length === 1 ? (
        <p
          className={`text-[#1B1B1B] ${
            featured
              ? "text-xl font-serif italic"
              : "text-sm font-semibold leading-snug"
          }`}
        >
          {names[0]}
        </p>
      ) : (
        <ul className="space-y-1">
          {names.map((name, index) => (
            <li
              key={index}
              className={`text-[#1B1B1B] ${
                featured
                  ? "text-xl font-serif italic"
                  : "text-sm font-semibold leading-snug"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section id="organization" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=70')"
        }}
      />
      <div className="absolute inset-0 bg-[#F8F9F6]/95" />
      
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B1B1B] mb-3">
            Struktur Kepengurusan
          </h2>
          <p className="text-[#6B7280] max-w-xl">
            Tim yang berkomitmen memajukan Bank Sampah Pondok Permai.
          </p>
        </div>

        {/* Org chart */}
        <div className="animate-on-scroll">
          {/* Director - featured at top */}
          <div className="mb-6 sm:mb-4">
            <PersonCard
              position={director.position}
              names={[director.name]}
              initials={director.initials}
              featured
            />
          </div>

          {/* Connecting line from director to second tier */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-px h-8 sm:h-10 bg-[#2D6A4F]/30" />
          </div>

          {/* Horizontal line for second tier - desktop only */}
          <div className="relative mb-4 sm:mb-8">
            <div className="hidden sm:block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-[#2D6A4F]/30" />
            </div>
          </div>

          {/* Second tier - vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-start mb-4 sm:mb-8">
            {secondTier.map((member) => (
              <div key={member.position} className="w-full sm:flex-1">
                <PersonCard
                  position={member.position}
                  names={member.names}
                  initials={member.initials}
                />
              </div>
            ))}
          </div>

          {/* Connecting line from second tier to third tier */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-px h-8 sm:h-10 bg-[#2D6A4F]/30" />
          </div>

          {/* Horizontal line for third tier - desktop only */}
          <div className="relative mb-4 sm:mb-8">
            <div className="hidden sm:block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-[#2D6A4F]/30" />
            </div>
          </div>

          {/* Third tier - vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-start">
            {thirdTier.map((member) => (
              <div key={member.position} className="w-full sm:flex-1">
                <PersonCard
                  position={member.position}
                  names={member.names}
                  initials={member.initials}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;

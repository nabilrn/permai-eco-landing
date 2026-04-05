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
    <div className={`text-center ${featured ? "" : "w-full sm:w-auto sm:flex-1"}`}>
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
      <p
        className={`text-[#1B1B1B] ${
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
          <div className="mb-8">
            <PersonCard {...director} featured />
          </div>

          {/* Connecting line */}
          <div className="w-px h-10 bg-[#E5E7EB] mx-auto my-2" />

          {/* Second tier */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-6 justify-center items-center mb-8">
            {secondTier.map((member, index) => (
              <div key={member.position} className="w-full sm:w-auto">
                <PersonCard {...member} />
                {index < secondTier.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-[#E5E7EB] mx-auto my-4" />
                )}
              </div>
            ))}
          </div>

          {/* Connecting line */}
          <div className="w-px h-10 bg-[#E5E7EB] mx-auto my-2" />

          {/* Third tier */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-6 justify-center items-center">
            {thirdTier.map((member, index) => (
              <div key={member.position} className="w-full sm:w-auto">
                <PersonCard {...member} />
                {index < thirdTier.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-[#E5E7EB] mx-auto my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;

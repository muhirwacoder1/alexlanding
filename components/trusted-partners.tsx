"use client"

const partners = [
  {
    name: "University of Rwanda",
    logo: "🏛️",
    description: "Academic Research Partner",
  },
  {
    name: "CHUK Hospital",
    logo: "🏥",
    description: "Clinical Testing Partner",
  },
  {
    name: "ACEIoT",
    logo: "🚀",
    description: "Innovation Grant Provider",
  },
  {
    name: "Rwanda Biomedical Centre",
    logo: "🔬",
    description: "Regulatory Partner",
  },
  {
    name: "Kigali Innovation City",
    logo: "🏙️",
    description: "Technology Hub Partner",
  },
]

export function TrustedPartners() {
  return (
    <div className="relative">
      {/* Main container with glassmorphism effect */}
      <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-20 blur-sm"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={partner.name} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-100">
                  <span className="text-3xl">{partner.logo}</span>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                    <div className="font-semibold">{partner.name}</div>
                    <div className="text-gray-300 text-xs">{partner.description}</div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 font-medium">
              Trusted by leading healthcare institutions and innovation partners
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

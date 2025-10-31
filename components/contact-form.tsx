"use client"

const GetInvolvedSection = () => {
  return (
    <section className="w-full bg-[#0A1C45] text-white py-20 font-[Inter] relative overflow-hidden">
      {/* Subtle background watermark pattern */}
      <div
        className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Abstract_wave_pattern.svg/1200px-Abstract_wave_pattern.svg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "600px",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6 sm:px-10 md:px-12">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get Involved</h2>
          <p className="text-[#DCE2F0] text-base md:text-lg leading-relaxed">
            We welcome collaboration with donors, investors, and institutions that share our vision for sustainable
            development and community empowerment. Contact our team to explore partnership opportunities.
          </p>

          {/* Optional decorative shape or image */}
          <div className="mt-8">
            <img
              src="https://www.transparenttextures.com/patterns/diagonal-noise.png"
              alt="decor"
              className="opacity-30 w-[300px] md:w-[400px]"
            />
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="md:w-1/2 bg-transparent">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name / Phone Number */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Blue Acer Group of Companies"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+971 321 4567543"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>

            {/* Email / Company Name */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Blue Acer Group of Companies"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>

            {/* Address / Company Number */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Company Address (Emirate, City, Address)</label>
              <input
                type="text"
                placeholder="Lorem Ipsum"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Company Number (Optional)</label>
              <input
                type="text"
                placeholder="+971 321 4567543"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>

            {/* Trade License */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-white mb-1">Company Trade License</label>
              <input
                type="text"
                placeholder="Lorem Ipsum"
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all"
              />
            </div>

            {/* Municipality Developer Registration */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-white mb-1">Municipality Developer Registration Details</label>
              <textarea
                rows={4}
                placeholder="Lorem ipsum dolor sit amet consectetur..."
                className="bg-transparent border-2 border-white rounded-none px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#5DA6A8] focus:ring-offset-2 focus:ring-offset-[#0A1C45] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="bg-[#5DA6A8] text-[#0A1C45] font-semibold px-8 py-3 rounded-full hover:bg-[#6BB8B8] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection

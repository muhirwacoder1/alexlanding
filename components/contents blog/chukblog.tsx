import Image from 'next/image'

const ChukBlog = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-12">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
          Real-World Impact: Testing Smart Insoles with Diabetic Patients at CHUK Hospital
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          In the heart of Kigali, Rwanda, the Centre Hospitalier Universitaire de Kigali (CHUK) has long been a cornerstone of specialized healthcare. Recently, CHUK became the site of an important step toward innovation in diabetic care—testing a smart insole designed to prevent one of the most devastating complications of diabetes: foot ulcers and limb amputation.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl h-64 md:h-80">
          <Image 
            src="/images/chuk-patient.jpg" 
            alt="CHUK patient" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          Diabetic foot ulcers are a leading cause of hospital admissions and amputations among people living with diabetes in Rwanda. Many patients only discover these ulcers after they have progressed, often due to nerve damage (neuropathy) that limits pain sensation. For these patients, early detection isn't just helpful—it's life-saving.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          Unfortunately, most existing monitoring technologies are expensive, invasive, or unavailable in the local healthcare system. That's where smart insole innovation enters the story.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">The CHUK Pilot: Putting Technology into Action</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          As part of a pilot study, three diabetic patients at CHUK were selected to test a newly developed smart insole embedded with IoT sensors to track pressure, temperature, and heart rate. These metrics are essential in identifying early warning signs of ulcer formation, even before symptoms become visible.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          One participant, a woman who had already lost a limb to diabetes, shared her experience. Now using a prosthetic leg, she began wearing the smart insole on her remaining foot as a preventive measure. Her feedback was clear and heartfelt: she found the insole helpful and expressed a wish that it be made available to every diabetic patient.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="italic text-gray-700">
            "This could have saved my first leg," she said in her native Kinyarwanda. "Now I wear it to protect the other."
          </p>
        </div>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          A video of her testimony has been shared publicly, giving voice to the many Rwandans silently suffering the consequences of late diagnosis.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Why This Matters</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          While the test group was small, the results were powerful. The smart insole provided patients with a new sense of awareness, control, and confidence. For healthcare providers, it offered a tool to intervene early—before wounds turned into amputations.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          It's also a proof point that locally developed solutions can be both effective and affordable. By building technology rooted in community realities and health priorities, innovations like this can make a lasting difference.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">What's Next?</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          The CHUK pilot marks the beginning of a broader vision: to expand testing to more hospitals, validate the technology on a larger scale, and ensure that smart foot monitoring becomes a standard part of diabetic care in Rwanda and beyond.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          As the pilot phase continues, the lessons learned from CHUK are guiding improvements in design, comfort, and data integration. Most importantly, they're reminding everyone involved—patients, clinicians, and innovators alike—why this work matters.
        </p>
        <p className="font-semibold text-lg text-blue-700">
          Because every limb saved is a life empowered.
        </p>
      </div>
    </div>
  )
}

export default ChukBlog
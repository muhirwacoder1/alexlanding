import Image from 'next/image'

const ChukBlog = () => {
  return (
    <div className="prose prose-lg mb-12">
      <h2>Real-World Impact: Testing Smart Insoles with Diabetic Patients at CHUK Hospital</h2>
      <p>
        In the heart of Kigali, Rwanda, the Centre Hospitalier Universitaire de Kigali (CHUK) has long been a cornerstone of specialized healthcare. Recently, CHUK became the site of an important step toward innovation in diabetic care—testing a smart insole designed to prevent one of the most devastating complications of diabetes: foot ulcers and limb amputation.
      </p>
      <p>
        <Image src="/images/chuk-patient.jpg" alt="CHUK patient" width={400} height={250} />
      </p>
      <p>
        Diabetic foot ulcers are a leading cause of hospital admissions and amputations among people living with diabetes in Rwanda. Many patients only discover these ulcers after they have progressed, often due to nerve damage (neuropathy) that limits pain sensation. For these patients, early detection isn’t just helpful—it’s life-saving.
      </p>
      <p>
        Unfortunately, most existing monitoring technologies are expensive, invasive, or unavailable in the local healthcare system. That’s where smart insole innovation enters the story.
      </p>
      <h3>The CHUK Pilot: Putting Technology into Action</h3>
      <p>
        As part of a pilot study, three diabetic patients at CHUK were selected to test a newly developed smart insole embedded with IoT sensors to track pressure, temperature, and heart rate. These metrics are essential in identifying early warning signs of ulcer formation, even before symptoms become visible.
      </p>
      <p>
        One participant, a woman who had already lost a limb to diabetes, shared her experience. Now using a prosthetic leg, she began wearing the smart insole on her remaining foot as a preventive measure. Her feedback was clear and heartfelt: she found the insole helpful and expressed a wish that it be made available to every diabetic patient.
      </p>
      <blockquote>
        "This could have saved my first leg," she said in her native Kinyarwanda. "Now I wear it to protect the other."
      </blockquote>
      <p>
        A video of her testimony has been shared publicly, giving voice to the many Rwandans silently suffering the consequences of late diagnosis.
      </p>
      <h3>Why This Matters</h3>
      <p>
        While the test group was small, the results were powerful. The smart insole provided patients with a new sense of awareness, control, and confidence. For healthcare providers, it offered a tool to intervene early—before wounds turned into amputations.
      </p>
      <p>
        It’s also a proof point that locally developed solutions can be both effective and affordable. By building technology rooted in community realities and health priorities, innovations like this can make a lasting difference.
      </p>
      <h3>What’s Next?</h3>
      <p>
        The CHUK pilot marks the beginning of a broader vision: to expand testing to more hospitals, validate the technology on a larger scale, and ensure that smart foot monitoring becomes a standard part of diabetic care in Rwanda and beyond.
      </p>
      <p>
        As the pilot phase continues, the lessons learned from CHUK are guiding improvements in design, comfort, and data integration. Most importantly, they’re reminding everyone involved—patients, clinicians, and innovators alike—why this work matters.
      </p>
      <p>
        Because every limb saved is a life empowered.
      </p>
    </div>
  )
}

export default ChukBlog
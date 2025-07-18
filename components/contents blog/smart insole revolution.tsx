import { Box, Container, Heading, Text } from '@/components/ui'

const SmartInsoleContent = () => {
  return (
    <Container className="space-y-12">
      <Box className="space-y-6">
        <Heading level={2}>
          Revolutionary Smart Insoles: The Future of Diabetic Care
        </Heading>
        <Text>
          Diabetes affects millions globally, and one of its most costly complications is the development of foot
          ulcers—often leading to amputation. Smart insoles are emerging as a game‑changing preventive healthcare
          technology. Let’s explore how these innovative devices work, why they matter, and what lies ahead.
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>⚙️ How Smart Insoles Work</Heading>
        <Text>
          Smart insoles are equipped with pressure and temperature sensors—and sometimes heart‑rate or humidity
          sensors—to continuously monitor foot health. They detect early warning signs such as elevated pressure or
          localized inflammation, alerting users before ulcers develop .
        </Text>
        <Text>
          Used daily during routine activities, these insoles wirelessly transmit data to a companion app or clinician
          dashboard, where algorithms trigger real‑time notifications. These alerts activate behavior changes—like
          shifting weight or adjusting footwear—helping prevent damage that can lead to ulcers .
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>Evidence of Effectiveness</Heading>
        <Text>
          Multiple clinical trials support their impact:
          <ul className="list-disc pl-6">
            <li>A randomized study showed a **71% reduction in ulcer recurrence** over 18 months when patients used a pressure-sensing insole paired with alert feedback systems.</li>
            <li>Another trial found up to an **86% decrease** in recurrence for patients with high adherence to alerts and proper use.</li>
          </ul>
        </Text>
        <Text>These results highlight the promise of combining real-time sensing and patient engagement to improve outcomes.</Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>Diverse Innovations, Global Reach</Heading>
        <Text>
          <ul className="list-disc pl-6">
            <li>Orpyx Sensory Insoles monitor pressure, temperature, and activity, providing continuous alerts with simple user experience—no charging required—and backed by multiple publications demonstrating risk reduction of more than 80% .</li>
            <li>Bonbouton’s graphene-based insole, licensed by Stevens Institute, uses flexible sensors to detect temperature and pressure changes before ulcers form, helping patients manage preventive care .</li>
            <li>FootSense (Mexico) extends monitoring to temperature, humidity, and steps, adding AI-powered prevention in a universal insole compatible with regular shoes .</li>
          </ul>
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>Benefits Beyond Prevention</Heading>
        <Text>
          <ul className="list-disc pl-6">
            <li>Improved self‑management: Patients can proactively manage foot health, reducing clinic visits and amputation risk.</li>
            <li>Cost savings: Preventing ulcers lowers long-term healthcare expenses (e.g. surgical costs, rehabilitation).</li>
            <li>Environmental impact: Some solutions—like Path Active—report significantly lower carbon footprints when preventing ulcers versus treating them .</li>
          </ul>
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>Emerging Tech & the Road Ahead</Heading>
        <Text>
          Future trends include:
          <ul className="list-disc pl-6">
            <li>AI‑driven personalized care: Machine learning helps tailor offloading recommendations and predict ulcer risk based on user behavior and risk factors .</li>
            <li>Smart offloading materials: Some prototypes incorporate magnetorheological fluids for dynamic pressure redistribution based on sensor readings.</li>
            <li>Better remote health integration: Insole data connects with telehealth systems to guide clinicians in making timely, personalized interventions.</li>
          </ul>
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level={3}>Conclusion</Heading>
        <Text>
          Smart insoles are redefining preventive care for people with diabetes by shifting the paradigm from reactive
          treatment to proactive prevention. These deceptively simple devices harness real-time sensing, user alerts, and
          AI to prevent ulcers before they occur—reducing amputations, enhancing quality of life, and easing financial
          strain on patients and healthcare systems.
        </Text>
        <Text>
          As the field evolves, broader adoption and technological innovation promise to make diabetic foot care smarter,
          more accessible, and truly transformative.
        </Text>
      </Box>
    </Container>
  )
}

export default SmartInsoleContent


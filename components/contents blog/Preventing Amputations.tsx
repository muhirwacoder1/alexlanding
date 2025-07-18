import { useState } from 'react';

interface SmartInsolesProps {
  title?: string;
}

const SmartInsoles: React.FC<SmartInsolesProps> = ({ title }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => setShowContent(!showContent);

  return (
    <section>
      <h2>{title || 'Revolutionary Smart Insoles: The Future of Diabetic Care'}</h2>
      <button onClick={toggleContent}>Read more</button>
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="content">
              <p>
                Diabetes add animation  affects millions globally, and one of its most costly complications is the development of foot ulcers—often leading to amputation. Smart insoles are emerging as a game‑changing preventive healthcare technology. Let’s explore how these innovative devices work, why they matter, and what lies ahead.
              </p>
              <ul>
                <li>Pressure and temperature sensors</li>
                <li>Real-time monitoring and alerts</li>
                <li>Wireless transmission to companion app or clinician dashboard</li>
                <li>AI-powered prevention</li>
              </ul>
              <p>
                The evidence is clear: smart insoles can help prevent diabetic foot ulcers and reduce amputations.
              </p>
              <p>
                Multiple clinical trials support their impact:

                <ul>
                  <li>A randomized study showed a 71% reduction in ulcer recurrence over 18 months when patients used a pressure-sensing insole paired with alert feedback systems.</li>
                  <li>Another trial found up to an 86% decrease in recurrence for patients with high adherence to alerts and proper use.</li>
                </ul>
              </p>
              <p>
                These results highlight the promise of combining real-time sensing and patient engagement to improve outcomes.
              </p>
              <p>
                There are many smart insole solutions available, including Orpyx Sensory Insoles, Bonbouton’s graphene-based insole, and FootSense (Mexico).
              </p>
              <p>
                The benefits of smart insoles extend beyond prevention, including improved self-management, cost savings, and environmental impact.
              </p>
              <p>
                Future trends include AI-driven personalized care, smart offloading materials, and better remote health integration.
              </p>
              <p>
                As the field evolves, broader adoption and technological innovation promise to make diabetic foot care smarter, more accessible, and truly transformative.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SmartInsoles;

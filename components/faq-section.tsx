import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/faq-section.module.css';
import { Plus } from 'lucide-react';

// FAQ data structure with categories
const faqData = {
  basics: {
    title: "Basic Information",
    questions: [
      {
        question: "What is APPO's smart insole technology?",
        answer: "APPO's smart insole is a custom-made medical device that fits inside your shoes to detect early signs of diabetic foot complications. Using advanced sensors and AI, it continuously monitors foot pressure points and temperature changes to prevent ulcers before they form.",
        tags: ["basic"]
      },
      {
        question: "How effective is the APPO solution?",
        answer: "Our smart insoles have demonstrated a 90% success rate in preventing diabetic foot ulcers. This high efficacy is achieved through real-time monitoring, early detection, and immediate alerts when potential issues are detected.",
        tags: ["basic"]
      }
    ]
  },
  technical: {
    title: "Technical Details",
    questions: [
      {
        question: "How do the smart sensors work?",
        answer: "Our smart sensors use a combination of pressure mapping and temperature monitoring technology. They continuously collect data about your feet's condition, analyze patterns using AI algorithms, and send alerts through our mobile app when they detect concerning changes.",
        tags: ["technical"]
      },
      {
        question: "Is the device water-resistant?",
        answer: "Yes, the APPO smart insole is designed to be water-resistant for daily use. While it can handle normal foot perspiration and light exposure to water, we recommend removing them before activities involving direct water contact.",
        tags: ["technical"]
      }
    ]
  },
  costs: {
    title: "Costs & Coverage",
    questions: [
      {
        question: "Is APPO covered by insurance?",
        answer: "Yes, APPO works with several insurance providers in Rwanda. We also offer flexible payment plans to ensure our solution is accessible to those who need it most. Contact our team for specific details about coverage options.",
        tags: ["cost"]
      },
      {
        question: "What's included in the APPO package?",
        answer: "The APPO package includes custom-fitted smart insoles, access to our mobile monitoring app, regular check-ups, and continuous support from our healthcare team. We also provide replacement insoles as needed.",
        tags: ["cost"]
      }
    ]
  }
};

const FAQItem = ({ question, answer, tags, isOpen, onToggle }) => {
  return (
    <motion.div
      layout
      className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.faqHeader} onClick={onToggle}>
        <h3 className={styles.question}>{question}</h3>
        <div className={styles.icon}>
          <Plus />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.answerContent}>
              <p>{answer}</p>
              <div>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${styles.tag} ${
                      tag === 'basic'
                        ? styles.tagBasic
                        : tag === 'technical'
                        ? styles.tagTechnical
                        : styles.tagCost
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex: string, questionIndex: number) => {
    setOpenItems((prev) => {
      const key = `${categoryIndex}-${questionIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  return (
    <motion.div 
      className={styles.faqContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(faqData).map(([category, { title, questions }], categoryIndex) => (
        <div key={category}>
          <motion.h2 
            className={styles.categoryTitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            {title}
          </motion.h2>
          {questions.map((item, questionIndex) => (
            <FAQItem
              key={questionIndex}
              question={item.question}
              answer={item.answer}
              tags={item.tags}
              isOpen={openItems[`${category}-${questionIndex}`]}
              onToggle={() => toggleItem(category, questionIndex)}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default FAQSection;

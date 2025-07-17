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
        question: "What is NEEM's smart insole technology?",
        answer: "NEEM's smart insole is a custom-made medical device that fits inside your shoes to detect early signs of diabetic foot complications. Using advanced sensors and AI, it continuously monitors foot pressure points and temperature changes to prevent ulcers before they form.",
        tags: ["basic"]
      },
      {
        question: "How effective is the NEEM solution?",
        answer: "Our smart insoles have demonstrated a 90% success rate in preventing diabetic foot ulcers. This high efficacy is achieved through real-time monitoring, early detection, and immediate alerts when potential issues are detected.",
        tags: ["basic"]
      },
      {
        question: "Is it painful to wear or use?",
        answer:
          "Not at all! It's designed for comfort, flexibility, and daily use. The insole is lightweight and fits in most shoes.",
        tags: ["basic"]  
      },
      {
        question: "How does the smart insole work?",
        answer:
          "It uses built-in sensors to monitor foot pressure, temperature, and heart rate. Data is sent to the cloud and alerts you before a problem starts.",
        tags: ["basic"] ,
      },
      {
        question: "How much does it cost?",
        answer:
          "$150 per pair, with flexible payment plans. Monthly monitoring subscription is $15. We also offer insurance coverage options.",
          tags: ["basic"] 
      },
      {question: "Can I use it without a doctor?",
      answer:
        "Yes, but it's even more effective when shared with your healthcare provider. We provide easy sharing tools for medical professionals.",
        tags: ["basic"] 
    },
  
    {
      question: "How long does the battery last?",
      answer:
        "The smart insole battery lasts up to 7 days with normal use. It charges wirelessly and takes only 2 hours for a full charge.",
        tags: ["basic"] 
    },
  
    {
      question: "Is my health data secure?",
      answer:
        "Absolutely. We use bank-level encryption and comply with international healthcare data protection standards. Your data is never shared without permission.",
        tags: ["basic"] 
    },
      
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
        answer: "Yes, the NEEM smart insole is designed to be water-resistant for daily use. While it can handle normal foot perspiration and light exposure to water, we recommend removing them before activities involving direct water contact.",
        tags: ["technical"]
      }
    ]
  },
  costs: {
    title: "Costs & Coverage",
    questions: [
      {
        question: "Is NEEM covered by insurance?",
        answer: "Insurance coverage in Rwanda is coming soon. In the meantime, we offer flexible payment plans to ensure our solution is accessible to those who need it most. Please contact our team for specific details on your payment and coverage options.",
        tags: ["cost"]
      },
      {
        question: "What's included in the NEEM package?",
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

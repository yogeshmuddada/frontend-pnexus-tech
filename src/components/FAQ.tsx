
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this bootcamp suitable for complete beginners?",
      answer: "Absolutely! This bootcamp is designed with beginners in mind. We start from the very basics of HTML and CSS, and gradually build up your skills. No prior programming experience is required."
    },
    {
      question: "What if I miss a live session?",
      answer: "Don't worry! All live sessions are recorded and available for lifetime access. You can catch up anytime. Plus, we have makeup sessions for important topics if needed."
    },
    {
      question: "How much time should I dedicate daily?",
      answer: "We recommend 2-3 hours daily - 1 hours for live sessions (Mon-Sat 8-10 PM) and 1-2 hours for practice and assignments. The more you practice, the better you'll become!"
    },
    {
      question: "Will I get a certificate upon completion?",
      answer: "Yes! You'll receive a verified certificate of completion that you can add to your LinkedIn profile and resume. It demonstrates your commitment to learning frontend development."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 5+ real-world projects including a responsive landing page, interactive to-do app, weather app, calculator, and a complete portfolio website. All projects will be deployed live."
    },
    {
      question: "What if I'm not satisfied with the bootcamp?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, you can get a full refund, no questions asked."
    },
    {
      question: "Do I need any specific software or tools?",
      answer: "You'll need a computer with internet connection. All software we use is free - VS Code editor, Chrome browser, and Git. We'll help you set everything up in the first session."
    },
    {
      question: "How is this different from free online tutorials?",
      answer: "Unlike free tutorials, you get live instruction, personalized feedback, doubt clearing, community support, structured curriculum, and career guidance. It's a complete learning experience, not just watching videos."
    },
    {
      question: "Can I get one-on-one help if I'm stuck?",
      answer: "Yes! You get 1-on-1 mentoring sessions with Durga, plus 24/7 community support where you can ask questions and get help from both mentors and fellow students."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-bootcamp-blue">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Got questions? We've got answers. Here are the most common questions about our bootcamp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border-0 px-4 sm:px-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced Still have questions? */}
        <div className="max-w-2xl mx-auto mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              Can't find the answer you're looking for? Reach out to Durga directly and get all your doubts cleared.
            </p>
            <div className="space-y-2 bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <p className="font-semibold text-sm sm:text-base">📧 durgachikkaladev@gmail.com</p>
              <p className="font-semibold text-sm sm:text-base">📱 WhatsApp: +91 6304566534</p>
              <p className="text-xs sm:text-sm opacity-75 mt-3 sm:mt-4">
                Response time: Within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

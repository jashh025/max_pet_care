import { useState } from "react";
import './css/FAQ.css';


function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">FAQs</h2>
      <p className="faq-sub">Everything you need to know about our services</p>

      <div className="faq-wrapper">

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggle(0)}>
            Is my dog safe during boarding?
            <span>{open === 0 ? "-" : "+"}</span>
          </div>

          {open === 0 && (
            <p className="faq-answer">
              Yes. We provide a safe and comfortable environment with 24/7
              supervision and professional care.
            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggle(1)}>
             Can I visit the facility before booking?
            <span>{open === 1 ? "-" : "+"}</span>
          </div>

          {open === 1 && (
            <p className="faq-answer">
Yes, you are welcome to visit our facility and check the environment before confirming your booking.            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggle(2)}>
            What services do you provide?
            <span>{open === 2 ? "-" : "+"}</span>
          </div>

          {open === 2 && (
            <p className="faq-answer">
              Dog boarding, day care, walking, grooming, and training services.
            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggle(3)}>
            Can I book services online?
            <span>{open === 3 ? "-" : "+"}</span>
          </div>

          {open === 3 && (
            <p className="faq-answer">
              Yes, you can easily book our services online through the website.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
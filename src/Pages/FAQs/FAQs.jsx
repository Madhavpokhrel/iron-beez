import React from "react";
import { useState } from "react";
import "./FAQs.scss";

const data = [
  {
    question: "Question 1",
    answer: "Here is answer",
  },

  {  
  question: "Question 2",
    answer: "Here is answer",
},
  {  question: "Question 3",
    answer: "Here is answer"
  },
];

const FAQs = () => {
    const [selected, setSelected] = useState (null)
        const toggle =(i) => {
            if (selected == i) {
                return setSelected (null)
            }

            setSelected (i)
        }

  return (
    <div className="app__faq-main">
      <div className="app__faq">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h3> { item.question } </h3>
              <span> {selected == i ? '-' : '+'} </span>
            </div>
            <div className={selected == i ? 'content show' : 'content' }> {item.answer} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

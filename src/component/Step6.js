const Step6 = ({ pate, answers, setAnswers, handleInputChange }) => {
  return (
    <>
      <div className="form-group mb-4">
        <label>Question 6: Quel type de pâte souhaiteriez-vous ?</label>
        <div>
            {
                pate?.map((item, index) => (
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      key={item}
                      type="checkbox"
                      value={item}
                      checked={answers.question1.includes(item)}
                      onChange={(e) =>
                        handleInputChange(
                          "question1",
                          e.target.checked
                            ? [...answers.question1, item]
                            : answers.question1.filter((pate) => pate !== item)
                        )
                      }
                    />
                    <label className="form-check-label">{item}</label>
                  </div>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Step6;

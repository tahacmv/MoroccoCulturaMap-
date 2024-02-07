const Step3 = ({ fruitSec, answers, setAnswers, handleInputChange }) => {
    return (
      <>
                <div className="form-group mb-4">
          <label>Question 3: Quels sont vos fruits secs les plus préférés ?</label>
            <div>
              {
                fruitSec?.map((item, index) => (
                  <div className="form-check">
                  <input
                    className="form-check-input"
                    key={item}
                    type="checkbox"
                    value={item}
                    checked={answers.question3.includes(item)}
                    onChange={(e) =>
                      handleInputChange(
                        "question3",
                        e.target.checked
                          ? [...answers.question3, item]
                          : answers.question3.filter((fruitSec) => fruitSec !== item)
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
  
  export default Step3;
const Step1 = ({ viande, answers, setAnswers, handleInputChange }) => {
    if(!answers.question1) {
        return(<>Loading...</>)
    }
  return (
    <div>
      <div className="form-group mb-4">
        <label>
          Question 1: Pour votre repas principal, préférez-vous du poisson, de
          la viande rouge ou de la viande blanche?
        </label>
        <div>
            {
                viande?.map((item, index) => (
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
                            : answers.question1.filter((viande) => viande !== item)
                        )
                      }
                    />
                    <label className="form-check-label">{item}</label>
                  </div>
                ))
            }
          
        </div>
      </div>
    </div>
  );
};

export default Step1;

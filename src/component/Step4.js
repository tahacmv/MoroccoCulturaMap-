const Step4 = ({ answers, setAnswers, handleInputChange }) => {
  return (
    <>
      <div className="form-group mb-4">
        <label>Question 4: Êtes-vous fan de la semoule?</label>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="oui"
              value={true}
              checked={answers.question4 === true}
              onChange={() => handleInputChange("question4", true)}
            />
            <label className="form-check-label" htmlFor="oui">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="non"
              value={false}
              checked={answers.question4 === false}
              onChange={() => handleInputChange("question4", false)}
            />
            <label className="form-check-label" htmlFor="non">
              Non
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;

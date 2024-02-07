const Step5 = ({ epice, answers, setAnswers, handleInputChange, handleRemove }) => {
  return (
    <>
      <div className="form-group mb-4">
        <label>Question 5: Quelles sont vos épices préférées ?</label>
        <select
          className="form-control"
          value=""
          onChange={(e) => {
            const selectedSpice = e.target.value;
            handleInputChange("question5", [
              ...answers.question5,
              selectedSpice,
            ]);
          }}
        >
          <option value="">Choisissez une épice</option>
          {epice?.map((spice, index) => (
            <option key={spice} value={spice}>{spice}</option>
          ))
            }
          {/* Ajoutez d'autres options d'épices ci-dessous */}
        </select>
        <div className="mt-2">
          {answers.question5.map((spice, index) => (
            <div key={index} className="d-inline-block mr-2">
              <span className="mr-2">{spice}</span>
              <span
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => handleRemove("question5", spice)}
              >
                &#10006;
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Step5;

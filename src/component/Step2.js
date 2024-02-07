const Step2 = ({ legumes, answers, setAnswers, handleInputChange, handleRemove }) => {
  return (
    <>
    <div className="form-group mb-4">
  <label>Question 2: Quels sont vos légumes préférés ?</label>
  <select
    className="form-control"
    value=""
    onChange={(e) => {
      const selectedVegetable = e.target.value;
      handleInputChange('question2', [...answers.question2, selectedVegetable]);
    }}
  >
        <option value="">Choisissez un légume</option>
    {
        legumes.map((legume, index) => (
            <option key={legume} value={legume}>{legume}</option>
        ))
    }


    {/* Ajoutez d'autres options de légumes ci-dessous */}
  </select>
  <div className="mt-2">
    {answers.question2.map((vegetable, index) => (
      <div key={index} className="d-inline-block mr-2">
        <span className="mr-2">{vegetable}</span>
        <span
          className="text-danger"
          style={{ cursor: 'pointer' }}
          onClick={() => handleRemove('question2', vegetable)}
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

export default Step2;
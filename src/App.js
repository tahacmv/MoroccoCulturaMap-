import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Questionnaire() {
  const [answers, setAnswers] = useState({
    question1: [],
    question2: [],
    question3: [],
    question4: '', // Ajoutez d'autres questions ici
    question5: [], // Ajoutez d'autres questions ici
  });

  const handleInputChange = (question, value) => {
    setAnswers({
      ...answers,
      [question]: value,
    });
  };

  const handleRemove = (question, value) => {
    const updatedAnswers = answers[question].filter(item => item !== value);
    setAnswers({
      ...answers,
      [question]: updatedAnswers,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
    // Vous pouvez ajouter le traitement des réponses ici
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">Questionnaire Touristique</span>
      </nav>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          {/* Autres questions précédentes */}
          
          {/* Question 1 */}
          <div className="form-group mb-4">
          <label>Question 1: Pour votre repas principal, préférez-vous du poisson, de la viande rouge ou de la viande blanche?</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="poisson"
                  checked={answers.question1.includes('poisson')}
                  onChange={(e) =>
                    handleInputChange(
                      'question1',
                      e.target.checked
                        ? [...answers.question1, 'poisson']
                        : answers.question1.filter((item) => item !== 'poisson')
                    )
                  }
                />
                <label className="form-check-label">Poisson</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="viande rouge"
                  checked={answers.question1.includes('viande rouge')}
                  onChange={(e) =>
                    handleInputChange(
                      'question1',
                      e.target.checked
                        ? [...answers.question1, 'viande rouge']
                        : answers.question1.filter((item) => item !== 'viande rouge')
                    )
                  }
                />
                <label className="form-check-label">Viande rouge</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="viande blanche"
                  checked={answers.question1.includes('viande blanche')}
                  onChange={(e) =>
                    handleInputChange(
                      'question1',
                      e.target.checked
                        ? [...answers.question1, 'viande blanche']
                        : answers.question1.filter((item) => item !== 'viande blanche')
                    )
                  }
                />
                <label className="form-check-label">Viande blanche</label>
              </div>
            </div>
          </div>

          {/* Question 2 */}
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
              <option value="carotte">Carotte</option>
              <option value="brocoli">Brocoli</option>
              <option value="tomate">Tomate</option>
              <option value="navet">Navet</option>
              <option value="onion">Onion</option>
              <option value="pois chiche">Pois Chiche</option>
              <option value="pomme de terre">Pomme De Terre</option>
              {/* Ajoutez d'autres options de légumes ci-dessous */}
            </select>
            <div className="mt-2">
              {answers.question2.map((vegetable, index) => (
                <div key={index} className="d-inline-block mr-2">
                  <span className="mr-2">{vegetable}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove('question2', vegetable)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Autres questions suivantes */}

          {/* Question 3 */}
          <div className="form-group mb-4">
          <label>Question 3: Quels sont vos fruits secs les plus préférés ?</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="amande"
                  checked={answers.question3.includes('amande')}
                  onChange={(e) =>
                    handleInputChange(
                      'question3',
                      e.target.checked
                        ? [...answers.question3, 'amande']
                        : answers.question3.filter((item) => item !== 'amande')
                    )
                  }
                />
                <label className="form-check-label">Amande</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="raisins sec"
                  checked={answers.question3.includes('raisins sec')}
                  onChange={(e) =>
                    handleInputChange(
                      'question3',
                      e.target.checked
                        ? [...answers.question3, 'raisins sec']
                        : answers.question3.filter((item) => item !== 'raisins sec')
                    )
                  }
                />
                <label className="form-check-label">Raisins sec</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="noix de cajou"
                  checked={answers.question3.includes('noix de cajou')}
                  onChange={(e) =>
                    handleInputChange(
                      'question3',
                      e.target.checked
                        ? [...answers.question3, 'noix de cajou']
                        : answers.question3.filter((item) => item !== 'noix de cajou')
                    )
                  }
                />
                <label className="form-check-label">Noix de Cajou</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Pistache"
                  checked={answers.question3.includes('Pistache')}
                  onChange={(e) =>
                    handleInputChange(
                      'question3',
                      e.target.checked
                        ? [...answers.question3, 'Pistache']
                        : answers.question3.filter((item) => item !== 'Pistache')
                    )
                  }
                />
                <label className="form-check-label">Pistache</label>
              </div>
            </div>
            </div>

          {/* Question 4 */}
          <div className="form-group mb-4">
          <label>Question 4: Êtes-vous fan de la semoule?</label>
  <div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id="oui"
        value="oui"
        checked={answers.question4 === 'oui'}
        onChange={() => handleInputChange('question4', 'oui')}
      />
      <label className="form-check-label" htmlFor="oui">Oui</label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id="non"
        value="non"
        checked={answers.question4 === 'non'}
        onChange={() => handleInputChange('question4', 'non')}
      />
      <label className="form-check-label" htmlFor="non">Non</label>
    </div>
  </div>
            </div>
          

          {/* Question 5 */}
          <div className="form-group mb-4">
            <label>Question 5: Quelles sont vos épices préférées ?</label>
            <select
              className="form-control"
              value=""
              onChange={(e) => {
                const selectedSpice = e.target.value;
                handleInputChange('question5', [...answers.question5, selectedSpice]);
              }}
            >
              <option value="">Choisissez une épice</option>
              <option value="cumin">Cumin</option>
              <option value="curcuma">Curcuma</option>
              <option value="Gingembre Moulu">Gingembre Moulu</option>
              <option value="Paprika">Paprika</option>
              <option value="Poivre Moulu">Poivre Moulu</option>
              <option value="Ras El Hanout">Ras El Hanout</option>
              <option value="Sel">Sel</option>
              {/* Ajoutez d'autres options d'épices ci-dessous */}
            </select>
            <div className="mt-2">
              {answers.question5.map((spice, index) => (
                <div key={index} className="d-inline-block mr-2">
                  <span className="mr-2">{spice}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove('question5', spice)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Question 6 */}
          <div className="form-group mb-4">
          <label>Question 6: Quel type de pâte souhaiteriez-vous ?</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Vermicelle"
                  checked={answers.question1.includes('Vermicelle')}
                  onChange={(e) =>
                    handleInputChange(
                      'question6',
                      e.target.checked
                        ? [...answers.question1, 'Vermicelle']
                        : answers.question1.filter((item) => item !== 'Vermicelle')
                    )
                  }
                />
                <label className="form-check-label">Vermicelle</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="pate filo"
                  checked={answers.question1.includes('pate filo')}
                  onChange={(e) =>
                    handleInputChange(
                      'question1',
                      e.target.checked
                        ? [...answers.question1, 'pate filo']
                        : answers.question1.filter((item) => item !== 'pate filo')
                    )
                  }
                />
                <label className="form-check-label">pate filo</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Msmen"
                  checked={answers.question1.includes('Msmen')}
                  onChange={(e) =>
                    handleInputChange(
                      'question1',
                      e.target.checked
                        ? [...answers.question1, 'Msmen']
                        : answers.question1.filter((item) => item !== 'Msmen')
                    )
                  }
                />
                <label className="form-check-label">Msmen</label>
              </div>
            </div>
          </div>
  
          <button type="submit" className="btn btn-primary">
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}

export default Questionnaire;



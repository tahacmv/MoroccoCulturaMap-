import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sparqlRequests from './utils/query';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';
import Step4 from './component/Step4';
import Step5 from './component/Step5';
import Step6 from './component/Step6';
import axios from 'axios';
import ResultPage from './component/Result';

function Questionnaire() {

  const [pageCounter, setpageCounter] = useState(0);
  const totalPages = 6;


  const [answers, setAnswers] = useState({
    question1: [],
    question2: [],
    question3: [],
    question4: false,
    question5: [],
  });

  const [legumes, setlegumes] = useState([]);
  const [Viande, setViande] = useState([]);
  const [fruitSec, setfruitSec] = useState([]);
  const [epice, setepice] = useState([]);
  const [pate, setpate] = useState([]);
  const [result, setresult] = useState([])


  useEffect(() => {
    function fetchLegumes(){
      axios.get("http://localhost:5000/query-legume", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }
      })
      .then(res => {
        console.log(res);
        setlegumes(res.data);
      }).catch(err=>{
        console.log(err);
      });
    }
    fetchLegumes();
  }, [])

  useEffect(() => {
    function fetchViande(){
      axios.get("http://localhost:5000/query-viande", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }
      })
      .then(res => {
        console.log(res);
        setViande(res.data);
      }).catch(err=>{
        console.log(err);
      });
    }
    fetchViande();
  }, [])
  
  useEffect(() => {
    function fetchViande(){
      axios.get("http://localhost:5000/query-fruit-sec", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }
      })
      .then(res => {
        console.log(res);
        setfruitSec(res.data);
      }).catch(err=>{
        console.log(err);
      });
    }
    fetchViande();
  }, [])

  useEffect(() => {
    function fetchEpice(){
      axios.get("http://localhost:5000/query-epice", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }
      })
      .then(res => {
        console.log(res);
        setepice(res.data);
      }).catch(err=>{
        console.log(err);
      });
    }
    fetchEpice();
  }, [])

  useEffect(() => {
    function fetchPate(){
      axios.get("http://localhost:5000/query-pate", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }
      })
      .then(res => {
        console.log(res);
        setpate(res.data);
      }).catch(err=>{
        console.log(err);
      });
    }
    fetchPate();
  }, [])
  const handleNext = () => {
    if (pageCounter < totalPages - 1) {
      setpageCounter(pageCounter + 1);
    }
  };

  const handlePrevious = () => {
    if (pageCounter > 0) {
      setpageCounter(pageCounter - 1);
    }
  };

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
    axios.post("http://localhost:5000/recommend", answers)
      .then(res => {
        console.log(res);
        setresult(res.data);
        setpageCounter(6);
      }).catch(err=>{
        console.log(err);
      });
  };


  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div onClick={()=>{console.log(answers);}}>
click me
        </div>
        <span className="navbar-brand mb-0 h1">Questionnaire Touristique</span>
      </nav>
      <div className="container d-flex flex-column mt-5 w-50 border py-4 px-4" style={{minHeight:'350px'}}>
        <form onSubmit={handleSubmit} style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          {/* Autres questions précédentes */}
          
          {/* Question 1 */}
          {pageCounter === 0 && <Step1 viande={Viande} answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} />}

          {/* Question 2 */}
          {pageCounter === 1 && <Step2 legumes={legumes} answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} handleRemove={handleRemove}/>}

          {/* Question 3 */}
          {pageCounter === 2 && <Step3 fruitSec={fruitSec} answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} />}

          {/* Question 4 */}
          {pageCounter === 3 && <Step4 answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} />}

          {/* Question 5 */}
          {pageCounter === 4 && <Step5 epice={epice} answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} handleRemove={handleRemove}/>}

          {/* Question 6 */}
          {pageCounter === 5 && <Step6 pate={pate} answers={answers} setAnswers={setAnswers} handleInputChange={handleInputChange} />}

          {/* Résultat */}
          {pageCounter === 6 && <ResultPage result={result} />}

          {/* Autres questions suivantes */}
          {/* ... rest of your code ... */}
          <div className='w-auto d-flex justify-content-around'>
          {pageCounter > 0 && (
            <button type="button" className="btn btn-primary" style={{width:'100px'}} onClick={handlePrevious}>
              Previous
            </button>
          )}
          {pageCounter < totalPages - 1 && (
            <button type="button" className="btn btn-primary" style={{width:'100px'}} onClick={handleNext}>
              Next
            </button>
          )}
          {pageCounter === totalPages - 1 && (
            <button type="submit" className="btn btn-primary" style={{width:'100px'}} >
              Submit
            </button>
          )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questionnaire;





const ResultPage = ({result})=>{

    return(
        <div>
            <h1>Resultat:</h1>
            {
                result.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ResultPage;
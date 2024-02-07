const sparqlRequests = {
    getPerson: `
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT
            ?name
            ?age
        WHERE {
            ?person foaf:name ?name ;
                    foaf:age ?age .
        }
    `,
    getPersonByName: `
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT
            ?name
            ?age
        WHERE {
            ?person foaf:name ?name ;
                    foaf:age ?age .
            FILTER(?name = ?name)
        }
    `
};

export default sparqlRequests;

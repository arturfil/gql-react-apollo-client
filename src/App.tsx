import "./App.css";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
    {
        launchesPast(limit: 10) {
            id
            mission_name
        }

    }
`

function App() {
    const {data, loading, error} = useQuery(FILMS_QUERY)


  return (
    <>
      <div>
        <h2>GraphQL and React App</h2>
      </div>
    </>
  );
}

export default App;

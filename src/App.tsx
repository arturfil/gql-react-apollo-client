import "./App.css";
import { useQuery, gql } from "@apollo/client";

// QUERY goes here

function App() {
    const {data, loading, error} = useQuery(FILMS_QUERY);

    // handle error
    //
    // handle loading

    

  return (
    <>
      <div>
        <h2>GraphQL and React App</h2>
        <ul>

        </ul>
      </div>
    </>
  );
}

export default App;

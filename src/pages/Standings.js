import React from 'react'

const Standings = () => {
  return (
    <div>
        <h1>Standings</h1>
    <div>
    <h1 class="div-name">BIG</h1>
    <div class="content-table">
    <table id="table" class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Name</th>
              <th scope='col'>Record</th>
              <th scope="col">FAAB</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Nick V
            </a>
            </td>
              <td>7-0</td>
              <td>$10</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Kelsch
            </a> 
            </td>
            <td>7-0</td>
           <td>$63</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Nick R
            </a>
            </td>
            <td>7-0</td>
              <td>$35</td>
             
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Mike
            </a>
            </td>  
            <td>7-0</td>
              <td>$62</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Jabs
            </a>
            </td>
            <td>7-0</td>
              <td>$34</td>
            </tr>
          </tbody>
      </table>
      </div>
      <h1 class="div-name">smoll</h1>
      <div class="content-table">
    <table id= "tableTwo" class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Name</th>
              <th scope='col'>Record</th>
              <th scope="col">FAAB</th>
            </tr>
          </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>
              <a href="https://sleeper.com/leagues/863903283750825984/league">
              Joe
          </a>
          </td>
          <td>7-0</td>
            <td>$65</td>
          </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Burke and Dylan
           </a>
            </td>
            <td>7-0</td>
              <td>$73</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Frank
            </a>
              </td>
              <td>7-0</td>
              <td>$28</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                Bill and Joey
           </a>
            </td>
            <td>7-0</td>
              <td>$85</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <a href="https://sleeper.com/leagues/863903283750825984/league">
                    Sook and Matt
                </a>
                </td>
                <td>7-0</td>
              <td>$10</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
  )
}

export default Standings
const App = () => {
  return (
    <Template>
      <h1>Conhecimentos</h1>
      <p>Linguagens de Progamação - JavaScript, Node, React, Next.</p>
      <p>Banco de Dados - MongoDB, PostgreSQL, MySQL Workbench</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Postgres_Query.jpg" width="250" height="250" />

    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
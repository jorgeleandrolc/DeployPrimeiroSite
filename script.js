const App = () => {
  return (
    <Template>
      <h1>Jorge Carvalho</h1>
      <h4>Bem-vindo</h4>
      <p>Meu nome é Jorge Leandro, sou estudante do IFMS. Sou tecnico em Informática, campus Nova Andradina.</p>
      <img src="https://enotas.com.br/blog/wp-content/uploads/2021/02/linguagem-de-programa%C3%A7%C3%A3o.jpg" width="250" height="250" />
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
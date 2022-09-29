const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="index.html"></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="conhecimentos.html">Conhecimentos</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="contato.html">Entre em Contato</a>
          </li>
    
        </ul>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <div className="border-top p-2">
      Jorge Carvalho © 2022
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
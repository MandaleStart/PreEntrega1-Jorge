const Categories = () => {
  const categories = [
    'Cosmetica',
    'Cuidado Personal',
    'Medicamentos',
    'Maternidad',
    'Productos Naturales',
    'Perfumeria',
    'Proteccion Solar',
    'Joyeria',
    'Marcas Destacadas'
  ];

  const formatCategory = (category) => {
    return category.replace(/\s+/g, '-');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCat"
          aria-controls="navbarCat" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCat"></div>

        <ul className="navbar-nav">
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={"/category/" + formatCategory(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;

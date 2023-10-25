function PlaneteCard() {
  return (
    <>
      {/* YAVIN CARD */}
      <div className="card-Yavin">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Yavin IV.png" alt="Yavin" />
        </div>
        <div className="Yavin-text">
          <h1>GALAXIE YAVIN IV </h1>
          <p>Population : 1000 </p>
          <p>Terrain : Jungle, forêt</p>
          <p>Climat : Tempéré, tropical </p>

          <button type="submit" className="button-Yavin">
            Y aller
          </button>
        </div>
      </div>

      {/* TATOOIN CARD */}
      <div className="card-Tatooine">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Tatooine.png" alt="Tatooine" />
        </div>
        <div className="Tatooine-text">
          <h1>GALAXY TATOOINE </h1>
          <p>Population : 200000</p>
          <p>Terrain : Désert </p>
          <p>Climat : Aride </p>

          <button type="submit" className="button-Tatooine">
            Y aller
          </button>
        </div>
      </div>

      {/* MUSTAFAR CARD */}
      <div className="card-Mustafar">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Mustafar.png" alt="Mustafar" />
        </div>
        <div className="Mustafar-text">
          <h1>GALAXIE MUSTAFAR </h1>
          <p>Population : 20000</p>
          <p>Terrain : Volcan, rivière de lave, montagne, cave</p>
          <p>Climat : Chaud </p>

          <button type="submit" className="button-Mustafar">
            Y aller
          </button>
        </div>
      </div>

      {/* DAGOBAH CARD */}
      <div className="card-Dagobah">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Dagobah.png" alt="Dagobah" />
        </div>
        <div className="Dagobah-text">
          <h1>GALAXIE DAGOBAH</h1>
          <p>Population : Inconnue</p>
          <p>Terrain : Marais, jungle</p>
          <p>Climat : Humide</p>

          <button type="submit" className="button-Dagobah">
            Y aller
          </button>
        </div>
      </div>

      {/* NABOO CARD */}
      <div className="card-Naboo">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Naboo.png" alt="Naboo" />
        </div>
        <div className="Naboo-text">
          <h1>GALAXIE NABOO</h1>
          <p>Population : 4500000000</p>
          <p>Terrain : Colline verdoyante, marais, forêt, montagne</p>
          <p>Climat : tempéré</p>

          <button type="submit" className="button-Naboo">
            Y aller
          </button>
        </div>
      </div>

      {/* ALDERAAN CARD */}
      <div className="card-Alderaan">
        <div className="planetImageDiv">
          <img src="src/public/images/planets/Alderaan.png" alt="Alderaan" />
        </div>
        <div className="Alderaan-text">
          <h1>GALAXIE ALDERAAN</h1>
          <p>Population : 2000000000</p>
          <p>Terrain : Verdoyant, montagne</p>
          <p>Climat : Tempéré</p>

          <button type="submit" className="button-Alderaan">
            Y aller
          </button>
        </div>
      </div>
    </>
  );
}

export default PlaneteCard;

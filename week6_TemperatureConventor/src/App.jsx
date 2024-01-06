import { useState } from "react";

export default function App() {
  const [degree, setDegree] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(null);
  const [kelvin, setKelvin] = useState(null);

  const handleFahrenheit = () => {
    setKelvin(parseFloat(degree) + 273, 15);
    setFahrenheit(parseFloat(degree) * (9 / 5) + 32);
  };

  return (
    <div>
      <main className="container d-flex justify-content-center my-3">
        <h1 className="text-align-center">Temperature Conventer</h1>
      </main>
      <div className="container d-flex justify-content-center mb-3">
        <div class="input-group input-group-lg ">
          <span class="input-group-text w-25" id="basic-addon1">
            Celsius
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Celsius cinsinden değer giriniz..."
            aria-label="Celsius"
            aria-describedby="basic-addon1"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
      </div>
      <div className="container mb-2 d-flex justify-content-center">
        <button
          class="btn btn-danger"
          type="button"
          id=""
          onClick={() => handleFahrenheit()}
        >
          Çevir
        </button>
      </div>

      <div class="container input-group input-group-lg mb-2">
        <span class="input-group-text w-25 " id="basic-addon1">
          Fahrenheit
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Fahrenheit cinsinden karşılığı"
          aria-label="Fahrenheit"
          aria-describedby="basic-addon1"
          value={fahrenheit}
        />
      </div>
      <div class="container input-group input-group-lg">
        <span class="input-group-text w-25" id="basic-addon1">
          Kelvin
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Kelvin cinsinden karşılığı"
          aria-label="Kelvin"
          aria-describedby="basic-addon1"
          value={kelvin}
        />
      </div>
    </div>
  );
}

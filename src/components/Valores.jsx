import React, { useContext } from "react";
import { ContextoValores } from "../context/Contexto";

const valores = [
  {
    titulo: "Aprenda React intensivamente con una profesora nativa",
    texto: "2 semanas. Una profesora sólo para ti (12h/día)",
    boton1: "Profesora",
    foto: "marta.jpg",
    nombre: "Marta Ríos",
    boton2: "Lugar",
    direccion: "48 St Laurent Boulevard,   Montreal, Canadá",
  },
  {
    titulo: "Learn React intensively with a native teacher",
    texto: "2 weeks. A teacher just for you (12h/day)",
    boton1: "Professor",
    nombre: "Grace Trembley",
    foto: "grace.jpg",
    boton2: "Lotacion",
    direccion: "65 Stonehaven, Ottawa, Canadá",
  },
  {
    titulo: "Apprenez React intensément avec un professeur natif",
    texto: "2 semaines. Un professeur rien que pour vous (12h/jour)",
    boton1: "Professeur",
    nombre: "Aimée Mathieu",
    foto: "aimee.jpg",
    boton2: "Emplacement",
    direccion: "2700 Rue Jean-Perrin #190, Québec, Canadá",
  },
  {
    idioma: 0,
  },
];

const listaValores = valores.map((valores) => <li key={valores.toString()}>{valores}</li>);

const listValores = () => ({ setValores } = useContext(ContextoValores));
return (
  <>
    <div className="valores">
      <div className="lista__valores">
        <button
          type="button"
          onClick={() => {
            setValores(listaValores.idioma[0]);
          }}></button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setValores(listaValores.idioma[1]);
          }}></button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setValores(listaValores.idioma[2]);
          }}></button>
      </div>
    </div>
  </>
);

export default listValores;

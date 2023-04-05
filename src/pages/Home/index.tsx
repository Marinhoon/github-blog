import "./styles.css";

import { ArrowSquareOut } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import effectLeft from "../../assets/effect-left.svg";
import effectRight from "../../assets/effect-right.svg";

export function Home() {
  return (
    <div className="container">
      <header className="header">
        <img className="effect-left" src={effectLeft} />
        <img className="logo" src={Logo} />
        <img className="effect-right" src={effectRight} />
      </header>
      <div className="content">
        <section className="info-profile">
          <img src="https://github.com/rodrigo322.png" alt="User name" />
          <div>
            <h1>Rodrigo Lucas</h1>
            <h2>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </h2>
          </div>
          <a href="#">
            Github
            <ArrowSquareOut size={15} color="#3294f8" weight="bold" />
          </a>
        </section>

        <section className="container-publication">
          <div className="top-header">
            <p>Publicações</p>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
          <div className="card-container">
            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>

            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>

            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>

            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>

            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>

            <div className="card">
              <header>
                <h1>JavaScript data </h1>
                <span>Há 1 dia</span>
              </header>
              <p className="card-content-text">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

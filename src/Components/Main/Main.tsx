import React, { useEffect, useState } from "react";
import { User, user } from "../../api/Users";
import "./MainStyle.css";

const api = new Promise<User>((resolve) => {
  resolve(user);
});

function Main() {
  const [state, setState] = useState<null | User>(null);
  useEffect(() => {
    const promise = async () => {
      const response = await api;
      setState(response);
    };
    promise();
  }, []);

  console.log(state);
  if (!state) {
    return <div>Loading...</div>;
  }
  return (
    <main className="main-container">
      <section className="name-photo">
        <div>
          <div className="photo">
            <img src="/person.png" alt={state.name} />
          </div>
        </div>
        <div>
          <h1 className="name">
            {state.name} {state.lastName} {state.additionalName}
            <span className="short_name">
              {" "}
              ({state.lastNameENG} {state.nameENG})
            </span>
          </h1>
          <a href={`tel:${state.phoneNumber}`} className="phone">
            {state.phoneNumber}
          </a>
        </div>
      </section>
      <section className="container-info">
        <div className="title-left">
          <h4 className="title">Дата народження</h4>
          <time dateTime={state.birthday}>{state.birthday}</time>
        </div>
        <div className="title-right">
          <h4 className="title">Пошта</h4>
          <a href={`mailto:${state.email}`} className="title-info email">
            {state.email}
          </a>
        </div>
      </section>
      <section className="container_info">
        <div>
          <h4 className="title">Категорія особи</h4>
          <p className="title-info person-category-text">{state.description}</p>
        </div>
      </section>
      <section className="container_info work">
        <div>
          <h4 className="title work">Відомості про роботу</h4>
          <p className="title-info">{state.workInfo}</p>
        </div>
      </section>
      <section className="container-info">
        <div className="title-left">
          <h4 className="title">Місце роботи</h4>
          <p className="title-info">{state.workName}</p>
        </div>
        <div className="title-right">
          <h4 className="title">Посада</h4>
          <p className="title-info">{state.position}</p>
        </div>
      </section>
      <section className="container-info">
        <div className="title-left">
          <h4 className="title">Дата початку</h4>
          <p className="title-info">{state.start}</p>
        </div>
        <div className="title-right">
          <h4 className="title">Дата завершення</h4>
          <p className="title-info">{state.end}</p>
        </div>
      </section>
      <section className="container-info">
        <div>
          <h4 className="title">Відомості про роботу</h4>
          <p className="title-info">{state.workInfo}</p>
        </div>
      </section>
      <section className="container-info">
        <div className="title-left">
          <h4 className="title">Місце роботи</h4>
          <p className="title-info">{state.workName}</p>
        </div>
        <div className="title-right">
          <h4 className="title">Посада</h4>
          <p className="title-info">{state.position}</p>
        </div>
      </section>
      <section className="container-info">
        <div className="title-left">
          <h4 className="title">Дата початку</h4>
          <p className="title-info">{state.start}</p>
        </div>
        <div className="title-right">
          <h4 className="title">Дата завершення</h4>
          <p className="title-info">{state.end}</p>
        </div>
      </section>
      <section className="container-info">
        <div>
          <h4 className="title title-relative">Список родичів</h4>
          <p className="title-info parents">{state.family.mother}</p>
          <p className="title-info parents">{state.family.father}</p>
          <p className="title-info parents info_last">{state.family.sister}</p>
        </div>
      </section>
    </main>
  );
}

export default Main;

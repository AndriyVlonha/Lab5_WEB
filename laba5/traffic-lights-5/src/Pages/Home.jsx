import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Лабораторна робота №5</h1>
        
        <section className="task-section">
          <h2>Мета роботи</h2>
          <p>
            Навчитися працювати з маршрутизацією в React за допомогою React Router.
            Реалізувати навігацію між різними сторінками додатку.
          </p>
        </section>

        <section className="task-section">
          <h2>Завдання</h2>
          <ol className="task-list">
            <li>Створити новий React проєкт з назвою <code>traffic-lights-5</code></li>
            <li>Перенести попередню лабораторну роботу</li>
            <li>Створити компоненту <code>Home</code> для відображення інформації про лабораторну</li>
            <li>Створити компоненту <code>ErrorPage</code> для обробки помилок маршрутизації</li>
            <li>Створити компоненту <code>Header</code> з навігаційним меню</li>
            <li>Реалізувати маршрутизацію між сторінками</li>
          </ol>
        </section>

        <section className="task-section">
          <h2>Функціонал</h2>
          <ul className="features-list">
            <li>Навігація між сторінками через меню</li>
            <li>Окремі сторінки для горизонтального та вертикального світлофорів</li>
            <li>Кастомна сторінка помилок</li>
            <li>Збереження стану при навігації</li>
          </ul>
        </section>

        <section className="navigation-hint">
          <p>
            Використовуйте меню вгорі для переходу між сторінками
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
const Main = ({ data }) => {
  return (
    <main>
      <h1>What is Your Horoscope ?</h1>
      <section className="section">
        {data.map((item) => (
          <div className="container" key={item.id}>
            <img className="imgg" src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.date}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;

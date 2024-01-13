const Work = () => {
  const images = [
    "https://fokussprachen.com/wp-content/uploads/2020/06/Workshop.jpg",
    "https://picsum.photos/180/100",
    "https://ciirc.res.in/wp-content/uploads/2022/03/1_MVAwaxXSO17y7vG7xLdGCg.jpeg",
    "https://picsum.photos/180/101",
  ];
  return (
    <section className="work text-center p-2">
      <div className="heading my-3">
        <h2>Our Works</h2>
      </div>
      <div className="d-flex justify-content-evenly">
        {images.map((src) => {
          return <img src={src} alt="" key={src} />;
        })}
      </div>
      <div className="arrows mt-3">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
      </div>
    </section>
  );
};

export default Work;

import { logos } from "../constants/index.jsx";

const Partners = () => {
  return (
    <section id="partners" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
      <div className="container">

        

        <ul className="flex justify-center flex-wrap gap-10 max-lg:gap-8">
          {logos.map(({ id, url, width, height, title }) => (
            <li key={id} className="mx-10 max-lg:mx-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img src={url} width={width} height={height} alt={title} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Partners;
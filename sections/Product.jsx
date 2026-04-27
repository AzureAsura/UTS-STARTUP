'use client'
import { products } from "../constants/index.jsx";

const Product = () => {
  return (
    <section id="products">
      <div className="container py-20">

        <div className="mb-16 max-md:mb-10">
  <p className="caption">PRODUK R-CHECK</p>
  <h2 className="h2 text-p4 max-md:h4">
    One QR, <span className="text-p3">Three Forms</span>
  </h2>
</div>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {products.map(({ id, image, caption, title, tag, accentColor }) => (
            <div key={id} className="flex flex-col items-center gap-5">

              <div className="relative w-full aspect-square rounded-3xl border-2 border-s3 g7 flex items-center justify-center overflow-hidden">
                {tag && (
                  <span className="absolute top-4 left-4 z-10 small-2 uppercase tracking-widest px-3 py-0.5 rounded-full bg-p2 text-p4">
                    {tag}
                  </span>
                )}
                
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="text-center">
                <p className="small-2 uppercase tracking-widest mb-1" style={{ color: accentColor }}>
                  {caption}
                </p>
                <p className="base-bold text-p4">{title}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Product;
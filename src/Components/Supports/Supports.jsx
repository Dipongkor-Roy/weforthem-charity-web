import { useLoaderData } from "react-router-dom";
import Support from "../Support/Support"
const Supports = () => {
  const supports=useLoaderData();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                I Grow by Helping People in Need
              </h1>
              <div className="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              In a world that thrives on kindness, I find my strength in lending
              a helping hand to those in need. For me, growth isn't just a
              personal journey; it is a shared experience of lifting others
              toward a brighter tomorrow.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              {
                supports.map(support=><Support
                key={support.id}
                support={support}>
                </Support>)
              }
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supports;

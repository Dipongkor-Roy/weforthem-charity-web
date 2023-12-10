

const Support = ({support}) => {
  console.log(support)
  const {name,img,description}=support;
    return (
       
            <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={img}
                  alt="content"
                />
                <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                  {name}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {name}
                </h2>
                <p className="leading-relaxed text-base">
                 {description}
                </p>
              </div>
 
    );
};

export default Support;
import { useRef, useState } from "react";
import ServiceCard from "../../../component/ServiceCard";

const SearchService = () => {
  const [data, setData] = useState([]);
  const searchRef = useRef("");
  const handleRef = () => {
    setData([]);
    const search = searchRef.current.value;
    console.log(search);
    if (search) {
      fetch(`http://localhost:5000/services?search=${search}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.slice(0, 3));
          setData(data.slice(0, 3));
        });
    }
  };

  return (
    <div className="hero min-h-fit w-full ">
      <div className="hero-content w-full text-center">
        <div className="w-full">
          {/* <TitleSection title='Hello There' /> */}
          <h2 className="text-4xl text-slate-600 font-bold my-5">One-stop solution for Services</h2>
          <div className="mb-3">
            <div className="relative mb-4 flex w-2/3 mx-auto flex-wrap items-stretch">
              <input
                ref={searchRef}
                type="search"
                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-900 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                placeholder="Search Service"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              <button
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 "
                id="basic-addon2"
                onClick={handleRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {data.map((doc) => (
              <ServiceCard key={doc._id} data={doc}></ServiceCard>
            )) || (
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchService;

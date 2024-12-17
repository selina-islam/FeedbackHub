// import { Slash } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ReuseableComponent/Button";
import SortCard from "../ReuseableComponent/Sorting";
import Card from "../ReuseableComponent/Card";
const AllRestaurant = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [defaultSort, setDefaultSort] = useState([]);
  useEffect(() => {
    fetch("/Json/Restuarant.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSortedProducts(data);
      });
  }, []);
  useEffect(() => {
    fetch("/Json/Restuarant.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDefaultSort(data);
      });
  }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const nextPage = () => {
    return navigate("/BellaItalia");
  };
  const sortByRating = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.star - a.star);
    setSortedProducts(sorted);
  };
  const sortByRatinglowtohigh = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.star - b.star);
    setSortedProducts(sorted);
  };
  const defaultSortByRating = () => {
    setSortedProducts(defaultSort);
  };

  return (
    <section className="w-[95%] mx-auto my-6">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <div>
            
            <div className="relative flex justify-around items-center">
              <h1 className="font-extrabold text-xl md:text-[32px] leading-10  my-2">
                best restaurants in singapore
              </h1>
              <button
                className="border border-[#5E5E5E] text-white px-6 py-2 rounded-full  items-center  bg-gray-900 flex gap-[3px] hover:bg-primary hover:text-EerieBlack"
                onClick={handleOpen}
              >
                <img  src="/sort.png" alt="" />
                sort
              </button>
              <div className=" absolute top-[70%] md:top-[90%] right-4">
                {isOpen ? (
                  <SortCard
                    handleOpen={handleOpen}
                    sortedhightolow={sortByRating}
                    sortByRatinglowtohigh={sortByRatinglowtohigh}
                    defaultSort={defaultSortByRating}
                  />
                ) : null}
              </div>
            </div>
            <div className="my-8 space-y-5 border-b">
              {sortedProducts.map((items) => (
                <Card
                  key={items.id}
                  className="flex flex-col sm:flex-row gap-2 border-b border-[#DCDCDC] hover:cursor-pointer"
                  onClick={nextPage}
                  items={items}
                />
              ))}
            </div>
            <Button className="bg-primary">Show more</Button>
          </div>
        </div>
        <div>
          <img src="/map.png" alt="" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default AllRestaurant;

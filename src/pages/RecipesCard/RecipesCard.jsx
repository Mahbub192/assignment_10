import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const RecipesCard = ({ recipe }) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleButtonClick = () => {
      toast("Ste it favorite list !!");
      setButtonDisabled(true);
    }
  const {
    recipe_name,
    recipe_img,
    ingredients,
    cooking_method,
    rating,
  } = recipe;
  return (
    <div>
      <div className="card card-compact md:w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full  md:h-96"
            src={recipe_img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>Ingredients</p>
          {
            ingredients?.map(item => <li key={item.id} className="-mt-1">{item}</li>)
          }
          <p>Cooking Method</p>
          {
            cooking_method?.map((item, i) =><p key={i}>{item}</p>)
          }
          <p className="flex text-lg items-center gap-1">Rating<span className="text-yellow-600"><FaStar></FaStar></span>{rating}</p>
          <div className="card-actions justify-end">
            <button onClick={handleButtonClick} disabled={buttonDisabled} className="btn btn-primary">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;

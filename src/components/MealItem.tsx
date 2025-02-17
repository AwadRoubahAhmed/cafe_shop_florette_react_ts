import { useNavigate } from "react-router-dom";
import { DataType } from "./Types";
import { motion } from "motion/react";

type MealItemProps = {
  meal: DataType;
};

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <div
      key={meal.idMeal}
      className="border border-gray-300 p-4 rounded-lg shadow-xl"
    >
      <motion.img
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="object-cover w-full h-60 rounded-md"
      />
      <h2 className="font-bold text-xl text-gray-800 mt-2">{meal.strMeal}</h2>
      <h4 className="text-gray-600 text-sm">Category: {meal.strCategory}</h4>
      <p className="text-gray-600 text-sm">{meal.strTags}</p>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => navigate(`Menu/${meal.idMeal}`)}
        className="btn btn-primary w-full text-gray-100 text-base bg-blue-500 hover:bg-blue-400 px-6 py-3 font-bold rounded-md mt-4 mb-2 cursor-pointer"
      >
        See More
      </motion.button>
    </div>
  );
};

export default MealItem;

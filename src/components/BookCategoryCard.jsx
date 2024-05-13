import PropType from 'prop-types'
import { Link } from 'react-router-dom';
const BookCategoryCard = ({category}) => {
    return (
        <Link to={`/bookOfCategory/${category.bookCategory}`} className='border-2 border-orange-400 space-y-2 rounded-md p-6'>
            <h3 className="text-2xl font-bold underline">{category.bookCategory}</h3>
            <p className='font-medium text-gray-500'>{category.description}</p>
        </Link>
    );
};
BookCategoryCard.propTypes = {
    category: PropType.object,
}
export default BookCategoryCard;
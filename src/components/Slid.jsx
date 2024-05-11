import PropType from 'prop-types'
import { Link } from 'react-router-dom';

const Slid = ({heading,description,img}) => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl md:ml-16">
              <h2 className="text-3xl font-semibold text-orange-400 dark:text-white lg:text-4xl">
                {heading}{" "}
              </h2>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                {description}
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <Link
                to='/allBook'
                  className="block px-5 py-2 text-sm font-bold tracking-wider text-center text-white transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-gray-700"
                >
                  All Book
                </Link>
                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div>
              <img src={img} alt='' className='mx-auto'/>
              <div className="w-full h-full"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Slid.propTypes = {
  heading: PropType.string,
  description: PropType.string,
  img: PropType.any
}

export default Slid;

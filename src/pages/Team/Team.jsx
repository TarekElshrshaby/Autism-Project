import team1 from "../../../images/TeamImage1.jpeg"
import team2 from "../../../images/Team2.jpg"
import team3 from "../../../images/Team3.jpg"
import team4 from "../../../images/Team4.jpg"
import team5 from "../../../images/Team5.jpg"
import team6 from "../../../images/Team6.jpg"
import team7 from "../../../images/Team7.jpg"
import team8 from "../../../images/Team8.jpg"
import team9 from "../../../images/Team9.jpg"


export default function Team() {
  return (
    <section className=" min-h-screen font-Cairo">
      <div className=" mx-auto">

        {/* Illustration */}
        <div className="flex justify-center mt-44 lg:mt-0 mb-16 ">
          <img
            src={team1} // Replace with actual illustration
            alt="Team Illustration"
            className=" w-full object-cover -mt-56 -z-10"
          />
        </div>

        {/* Team Members (كروت بجانب بعضها مع تحسينات في التصميم) */}
        <div className="grid grid-cols-1 bg-gray-100 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {/* member 1 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team2}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 2 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team3}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 3 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team4}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 4 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team5}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 5 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team6}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 6 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team7}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 7 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team8}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 8 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team9}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 9 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team3}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>

          {/* member 10 */}
          <div className="flex flex-col items-center rounded-2xl p-4 shadow-lg border-t-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img
              src={team2}
              alt="John Doe"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">John Doe</h3>
            <p className="text-sm text-gray-600">Role 1</p>
          </div>
        </div>
      </div>
    </section>
  );
}
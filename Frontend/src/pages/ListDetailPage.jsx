import React from 'react'
import { useGetCarByIdQuery } from '../Slices/listingApiSlice'
import { useNavigate, useParams } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { BASE_URL } from '../constant';
import { SiTicktick } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {
  FaCar,
  FaCarSide,
  FaCircle,
  FaClipboardList,
  FaDoorClosed,
  FaRegCalendarAlt,
  FaRoad,
  FaTag,
  FaTags,
  FaTransgenderAlt,
} from "react-icons/fa";
import { HiColorSwatch } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import FinancingCalculator from '../components/FinancingCalculator';
import SenBridUser from '../Share/SendBridUser';
import { addToCart } from '../Slices/cartSlice';


function ListDetailPage() {
  const { id } = useParams();
  const { data: getCarById, isLoading, error } = useGetCarByIdQuery(id);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const userId = userInfo.fullName;
  const nickName = userInfo.username;
  const profileUrl = userInfo.profilePhoto;
  const OwnerId = getCarById?.data?.createdBy?.username;

  const navigate = useNavigate();



  const OnMessageOwnerButtonClick = async () => {
    //create current user Id
    try {
      await SenBridUser.createSendBirdUser(userId, nickName, profileUrl)
        .then(resp => { 
          console.log(resp);

        })
    } catch (error) {
      console.log(error);

    }

    //owner User Id
    try {
     
      let OwnerName = getCarById.data.createdBy.fullName;
      let profilePhoto = getCarById.data.createdBy.profilePhoto;
      // console.log(OwnerId, OwnerName, profilePhoto);
      
      await SenBridUser.createSendBirdUser(OwnerId, OwnerName, profilePhoto)
      .then(resp => { 
        console.log(resp);

      })
    } catch (error) {
      console.log(error);
      
    }  

    //Create Channel
    try {
      await SenBridUser.CreateSendBirdChannel([userId, OwnerId],getCarById.data.listingTitle)
      .then(resp =>{
        console.log(resp);
        console.log("Channel Created");
        navigate("/profile")
      });
      
    } catch (error) {
      console.log(error);
      
    }
  }



  const iconMap = {
    'listingTitle': <FaClipboardList />,
    'tagline': <FaTag />,
    'category': <FaCar />,
    'condition': <TiTick />,
    'make': <HiColorSwatch />,
    'model': <FaCarSide />,
    'year': <FaRegCalendarAlt />,
    'driveType': <FaRoad />,
    'transmission': <FaTransgenderAlt />,
    'fuelType': <BsFillFuelPumpFill />,
    'mileage': <IoIosSpeedometer />,
    'cylinder': <FaCircle />,
    'door': <FaDoorClosed />,
    'offerType': <FaTags />,
  };



  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };


  return (

<<<<<<< HEAD
    <div className='md:flex  container md:px-20 md:my-10 md:gap-10'>
=======
    <div className='md:flex  md:px-20 md:my-10 md:gap-10'>
>>>>>>> 95fd6f6 (condition page completed)
      {isLoading ? (<div>Loading....</div>) : (

        <>
          <div>
            <h2 className='text-3xl font-semibold py-5 '>{getCarById.data.listingTitle}</h2>

            <div className='flex md:mx-5'>
              <span className='flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2  text-sm md:text-md px-4'><MdDateRange /> {getCarById.data.year}</span>
              <span className='flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2  text-sm md:text-md px-4'><MdOutlineSpeed /> {getCarById.data.mileage} Miles</span>
              <span className='flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2  text-sm md:text-md px-4'><GiGearStickPattern /> {getCarById.data.transmission}</span>
              <span className='flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2  text-sm md:text-md px-4'><LuFuel /> {getCarById.data.fuelType}</span>
            </div>
            <div>
              <img
                src={`${BASE_URL}${getCarById.data.images[0]}`}
                alt=""
                className="md:w-[50%] md:ms-10 my-4 cursor-pointer hover:w-[60%] rounded-lg transition-all duration-300"
              />

            </div>
            <h2 className='py-5 px-2 mt-5 text-2xl font-semibold'>Description</h2>
            <p className='px-2'>{getCarById.data.description}</p>

            <div className='my-5 shadow-lg md:px-10 px-5 py-5 cursor-pointer hover:shadow-2xl' >
              <h2 className='py-5 text-2xl font-semibold'>Features</h2>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {getCarById.data.features &&
                  Object.entries(getCarById.data.features) // Convert object to an array of [key, value] pairs
                    .filter(([key, value]) => value === true) // Filter the features where the value is true
                    .map(([feature, _], index) => (
                      <li key={index} className='flex items-center'>{<SiTicktick className='text-blue-600 mx-2' />}{feature}</li> // Render only the keys with true values
                    ))
                }
              </ul>
            </div>


            <div>

              <FinancingCalculator />
            </div>


          </div>






          {/* right side */}
          <div className='w-full justify-right '>
            <div className='shadow-lg flex flex-col justify-center px-2 hover:shadow-2xl'>
              <h2 className='text-md font-semibold py-4'>Total Price</h2>
              <h1 className='text-4xl font-semibold'>${getCarById.data.sellingPrice}</h1>
              <div className='flex justify-between'>
                <button className='bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500  my-5' >Buy Now</button>
                <button className='bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500  my-5' onClick={()=> addToCartHandler(getCarById)}>Add To Cart</button>
              </div>
            </div>



            <div className='shadow-lg hover:shadow-2xl rounded-md px-4 my-10 max-w-md   '>
              <ul className=''>
                {getCarById.data &&
                  Object.keys(getCarById.data)
                    .filter(
                      (key) =>
                        ![
                          "description",
                          "images",
                          "createdAt",
                          "updatedAt",
                          "__v",
                          "originalPrice",
                          "sellingPrice",
                          "features",
                          "_id",
                        ].includes(key) // Exclude these keys
                    )
                    .map((key, index) => (
                      <div key={index} >
                        <li className="flex  items-center gap-2 py-3">
                          <span className="text-blue-500 bg-blue-100 rounded-full">
                            {iconMap[key]} {/* Icon */}
                          </span>
                          {key} <span className='ms-auto pe-5'>{getCarById.data[key]?.toString()}</span> {/* Key and its value */}
                        </li>
                        <hr />
                      </div> // Render only the keys that are not excluded
                    ))}
              </ul>
            </div>


            <div className='shadow-lg hover:shadow-2xl flex flex-col items-center py-5 max-w-md'>
              <h1 className='text-2xl font-semibold'>Owner's Details</h1>

<<<<<<< HEAD
              <img src={getCarById.data.createdBy.profilePhoto} alt="user Picture" width="40%" />
              <h2 className='font-semibold'>{getCarById.data.createdBy.fullName}</h2>
=======
              <img src={getCarById.data.createdBy?.profilePhoto} alt="user Picture" width="40%" />
              <h2 className='font-semibold'>{getCarById.data.createdBy?.fullName}</h2>
>>>>>>> 95fd6f6 (condition page completed)
              <button className='bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500 mx-10 my-5' onClick={OnMessageOwnerButtonClick}>Message Owner</button>

            </div>


          </div>
        </>
      )}
    </div>

  )
}

export default ListDetailPage
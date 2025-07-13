import png from './png/1.png'
import { useNavigate } from 'react-router-dom';



function Header() {
 
    const navigate = useNavigate();

  return (
    <div className="pt-12">
      <section className="text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-6">
          <div className="text-center">

            <div className="w-full flex justify-start pl-6">
              <p className="text-red-600 mb-2 max-w-2xl tracking-widest">
                SUPER FAST DELIVERY
              </p>
            </div>

            <h1 className="pt-6 text-4xl md:text-5xl font-bold mb-4 flex justify-start pl-5 ">
              Fast & Reliable Delivery in&nbsp;
              <span className="text-red-600">Kandy</span>
            </h1>

            <div className="pt-20 mt-2 ml-12 flex flex-col sm:flex-row gap-4 justify-start z-30 relative">
              <button
                className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 transition duration-300 transform hover:scale-105"
              >
                Book Delivery Now
              </button>
              <button
             onClick={() => navigate('/service')}

                className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-100 hover:text-red-600 transition duration-300"
              >
                Our Services
              </button>
            </div>

        <div className="pt-20 mt-2 ml-12 text-left max-w-3xl">
  <p className="text-3xl leading-snug">
    We are the fastest and most favorite delivery service<br />
    <span>all over the town.</span>
  </p>
</div>


            <div style={{ marginTop: '-280px' }} className="mb-2 flex justify-end pr-4">
  <img src={png} alt="Header" className="w-56 md:w-[600px]" />
</div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

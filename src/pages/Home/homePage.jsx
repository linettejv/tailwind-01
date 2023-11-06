import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const nav = useNavigate();



  return (
    <div class='fixed inset-0 flex  flex-col items-center justify-center'>
      <button class="bg-blue-500 my-10 hover:bg-gray-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={() => {
        nav('/sheets')
      }}>
        Sheets Page 
      </button>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={() => {
        nav('/modal')
      }}>
        Modal Page 
      </button>
    </div>
  );
};

export default HomePage;

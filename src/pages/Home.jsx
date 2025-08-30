import { Link } from "react-router-dom";  


function Home() {  return (
    <div>
      <h1>Teknolojik Yemekler 🍕</h1>
        <nav>  
            <Link to="/form">Sipariş Oluştur</Link> 
        </nav>
    </div>
  );
}   
export default Home

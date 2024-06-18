import bill from '../components/cards/person-img/bill.webp'
import './App.css';
import Cards from '../../src/components/cards/cards'

const App = () => {
  return (
    <>

      <div className='container'>
        <Cards
          Name="Warren Buffet"
          Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Aklg1-v3Yke1rxSW2Oppm5Xkrxm22NM7mA&s"
        />
        <Cards
          Name="Bill Gates"
          Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdxNF-yfevwJ3DayE20vcUvheg8h1dm6zEw&s"
        />
        <Cards
          Name="Mark Zuckerberg"
          Image="https://i.dailymail.co.uk/1s/2024/04/24/16/84032445-13345129-Mark_Zuckerberg_released_a_video_promoting_Meta_s_AI_technology_-a-168_1713973110829.jpg"
        />
        <Cards
          Name="Lary Page"
          Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhu306d7YNAGHjxBeZMJEvtEnj7o6JOco1g&s"
        />
        <Cards
          Name="Elon Musk"
          Image="https://fortune.com/img-assets/wp-content/uploads/2024/04/GettyImages-2074368931_9d4d00-e1714155461115.jpg?w=1440&q=75"
        />
        <Cards
          Name="Jeff Bezos"
          Image="https://d.newsweek.com/en/full/1855002/jeff-bezos.jpg"
        />
        <Cards
          Name="Larry Ellison"
          Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSAEzyTAvyMR2FHLRgFDv9CJ2Wa6xOE-CLQ&s"
        />
      </div>


    </>

  );
}

export default App;

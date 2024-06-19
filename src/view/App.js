import './App.css';
import Cards from '../../src/components/cards/cards'
import Menu from '../components/menu-bar/menu-bar'
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
        <Cards
          Name="You"
          Image="https://avatars.githubusercontent.com/u/117168808?v=4"
        />
      </div>
      <div className='menu-container'>
        <div>4:51 PM | Wsd-jpxn-trikl</div>
        <div className='main-menu-bar'>
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/25/25682.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/1159/1159798.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/1620/1620709.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/9396/9396667.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/3793/3793636.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/733/733497.png "
          />

        </div>
        <div className='sub-menu'>
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/9710/9710907.png "
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/10104/10104044.png"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/3193/3193015.png "
          />
          <Menu
            icon="https://help.lucid.co/hc/article_attachments/17916361414548"
          />
          <Menu
            icon="https://cdn-icons-png.flaticon.com/128/7542/7542188.png"
          />
        </div>
      </div>
    </>

  );
}

export default App;

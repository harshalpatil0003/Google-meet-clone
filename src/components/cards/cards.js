
import bill from '../../components/cards/person-img/bill.webp'
import elon from '../../components/cards/person-img/elon.jpeg'
import jeff from '../../components/cards/person-img/jeff.jpg'
import larry_page from '../../components/cards/person-img/larry page.jpg'
import larry from '../../components/cards/person-img/larry.jpg'
import mark from '../../components/cards/person-img/mark.jpg'
import warren from '../../components/cards/person-img/warren.jpg'
import '../../components/cards/cards.css'
function Cards({ Image, Name }) {
    return (
        <>
            <div className='card-container'>
                <img src={Image} alt='Image' className='person-img' />

                <span className='named-text'>{Name}</span>
                {/* <div className='menubar'>
                    <ul>
                        <li></li>
                    </ul>
                </div> */}

            </div>
        </>
    );
}

export default Cards;

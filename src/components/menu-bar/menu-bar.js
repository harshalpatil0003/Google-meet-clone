import '../menu-bar/menu-bar.css'
function Menu({icon}) {
    return (
        <>
           <div>
                <div className='main-menu'>
                    <img src={icon}  alt='icon' className="icons"/>
                </div>
                
           </div>
        </>
    );
}

export default Menu;
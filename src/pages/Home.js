import {Search} from "../components/Search";
import {Card} from "../components/Card";

const Home = () => {
    const cards = new Array(12).fill('').map((_, index) => index)
  return(
      <>
        <Search/>
          <div className={'row'}>
              {cards.map(item => <div key={item} className={'col-sm-4'}><Card/></div>)}
          </div>
      </>
  )
}

export default Home;

import {Link} from "react-router-dom";

export const Card = () => {
    return (
        <div className={'card mt-4'}>
            <img src="" alt="" className={'card-img-top'}/>
            <div className={'card-body'}>
                <h5 className={'card-title'}>Name</h5>
                <Link to={'/profile/'} className={'btn btn-primary'}>Open</Link>
            </div>
        </div>
    )
}

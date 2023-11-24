import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BookItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/"+props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>
        </div>
    );

}

export default BookItem;
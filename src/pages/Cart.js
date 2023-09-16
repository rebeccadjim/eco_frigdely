import '../styles/Cart.css';
import CartForm from '../components/CartForm/CartForm';
import { cartAliments } from '../data/cartAliments';
import CartAlimentsDisplay from '../components/CartDisplay/CartAlimentsDisplay';

function Cart() {
    return (
        <div className='cart-page-container'>
            <div className='cart-page-content'>
                <div className='cart-page-header'>
                    <p className="your-cart">Your cart</p>
                    <div className="cart-trait"><hr /></div>
                </div>
                <div className='cart-aliments'>
                    <CartForm />
                    <div className='cart-aliments-display'>
                        <CartAlimentsDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
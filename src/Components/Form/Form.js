import React,{ useRef} from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Form.module.css';

const Form = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const productRef = useRef();
  const categoryRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const sp= priceRef.current.value;
    const pn = productRef.current.value;
    const cat = categoryRef.current.value;
    const obj = {
      id , sp , pn ,cat
    }
    props.addItem(obj);
    idRef.current.value = '';
    priceRef.current.value = '';
    productRef.current.value = '';
    categoryRef.current.value = 'Choose';
}
    return (
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="product-id">Product-Id:</label>
          <input id='product-id' ref={idRef} type="number" required/>
          <label htmlFor='price'>choose-Price:</label>
          <input id='price' ref={priceRef} type="number" required/>
          <label htmlFor='product-name'>Product-Name:</label>
          <input id='product-name' ref={productRef} type="text" required/>
          <label htmlFor="category">Choose a category:</label>
          <select id='category' ref={categoryRef}>
            <option value="Choose">Choose</option>
            <option value="food">Food</option>
            <option value="electronic">Electronic</option>
            <option value="skincare">Skincare</option>
          </select>
          <Button >Add to bill</Button>
        </form>
      </Card>
    );
}
export default Form;
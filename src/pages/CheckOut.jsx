import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from 'emailjs-com';
import styles from "./CheckOut.module.css";

function CheckOut() {
  const location = useLocation();
  const checkoutData = location.state; 

  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendOrder = () => {
    // التحقق من حقول البيانات الشخصية
    if (!customerDetails.firstName || !customerDetails.phoneNumber || !customerDetails.email) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    // إعداد بيانات البريد الإلكتروني
    const emailParams = {
      productName: checkoutData.productName,
      selectedColor: checkoutData.color,
      selectedSize: checkoutData.size,
      quantity: checkoutData.quantity,
      price: checkoutData.totalPrice,
      customerName: customerDetails.firstName,
      customerPhone: customerDetails.phoneNumber,
      customerEmail: customerDetails.email,
      companyName: customerDetails.companyName,
      streetAddress: customerDetails.streetAddress,
      apartment: customerDetails.apartment,
      city: customerDetails.city
    };

    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('service_9rk90oo', 'template_kesl1ws', emailParams, 'DjGn5KUxfogq-ehOl')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Order placed successfully!");
      })
      .catch(err => {
        console.log('FAILED...', err);
        alert("Failed to place order, please try again.");
      });
  };

  return (
    <div className={styles.page}>
      <span>
        Home / Cart / <span> CheckOut</span>
      </span>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); sendOrder(); }}>
          <span>First Name*</span>
          <input type="text" name="firstName" value={customerDetails.firstName} onChange={handleInputChange} required />
          <span>Company Name (optional)</span>
          <input type="text" name="companyName" value={customerDetails.companyName} onChange={handleInputChange} />
          <span>Street Address (optional)</span>
          <input type="text" name="streetAddress" value={customerDetails.streetAddress} onChange={handleInputChange} />
          <span>Apartment, floor, etc</span>
          <input type="text" name="apartment" value={customerDetails.apartment} onChange={handleInputChange} />
          <span>Town/City*</span>
          <input type="text" name="city" value={customerDetails.city} onChange={handleInputChange} required />
          <span>Phone Number*</span>
          <input type="text" name="phoneNumber" value={customerDetails.phoneNumber} onChange={handleInputChange} required />
          <span>Email Address*</span>
          <input type="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />

          <button className={styles.apply} type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;

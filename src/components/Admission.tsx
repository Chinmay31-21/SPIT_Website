import React, { useState } from 'react';
import { PaymentGateway } from './PaymentGateway';

export const Admission = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    description: '',
    orderId: ''
  });

  const handlePayNow = (amount: number, description: string) => {
    setPaymentDetails({
      amount,
      description,
      orderId: `ADM${Date.now()}`
    });
    setIsPaymentOpen(true);
  };

  return (
    <>
      {/* Quick Payment Section */}
      <div className="quick-payment-section">
        <button
          onClick={() => handlePayNow(5000, "Admission Form Fee")}
          className="bg-[#4169E1] text-white px-6 py-2 rounded-md hover:bg-[#2c5aa0] transition-colors"
        >
          Pay Now - Admission Form
        </button>
      </div>

      {/* Fee Structure Section */}
      <div className="fee-structure-section">
        {/* Add Pay Now buttons for different fee types */}
        <button
          onClick={() => handlePayNow(50000, "First Year Tuition Fee")}
          className="bg-[#4169E1] text-white px-6 py-2 rounded-md hover:bg-[#2c5aa0] transition-colors"
        >
          Pay Tuition Fee
        </button>
      </div>

      {/* Payment Gateway Integration */}
      <PaymentGateway
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        paymentDetails={paymentDetails}
      />
    </>
  );
};

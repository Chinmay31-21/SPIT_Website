import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, CheckCircle, AlertCircle, Download } from 'lucide-react';

interface PaymentDetails {
  amount: number;
  description: string;
  orderId: string;
}

interface PaymentGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  paymentDetails: PaymentDetails;
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ({ isOpen, onClose, paymentDetails }) => {
  const [paymentStep, setPaymentStep] = useState<'details' | 'processing' | 'success' | 'failed'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handlePayment = async () => {
    setPaymentStep('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      // Simulate success/failure (90% success rate)
      const isSuccess = Math.random() > 0.1;
      setPaymentStep(isSuccess ? 'success' : 'failed');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetPayment = () => {
    setPaymentStep('details');
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-[#0A0A0A] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white">Secure Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">256-bit SSL Encrypted</span>
          </div>
        </div>

        {/* Payment Details */}
        {paymentStep === 'details' && (
          <div className="p-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-[#0A0A0A] dark:text-white mb-2">Payment Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">{paymentDetails.description}</span>
                <span className="font-bold text-[#4169E1]">₹{paymentDetails.amount.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Order ID: {paymentDetails.orderId}</div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] dark:text-white mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] dark:text-white mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] dark:text-white mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] dark:text-white mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-[#0A0A0A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                />
              </div>
            </form>

            <div className="mt-6 space-y-3">
              <button
                onClick={handlePayment}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full bg-[#4169E1] text-white py-3 rounded-md font-semibold hover:bg-[#2c5aa0] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Pay ₹{paymentDetails.amount.toLocaleString()}
              </button>
              
              <div className="text-xs text-gray-500 text-center">
                By proceeding, you agree to our Terms & Conditions
              </div>
            </div>
          </div>
        )}

        {/* Processing */}
        {paymentStep === 'processing' && (
          <div className="p-6 text-center">
            <div className="loading-spinner mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-white mb-2">Processing Payment</h3>
            <p className="text-gray-600 dark:text-gray-400">Please wait while we process your payment securely...</p>
            <div className="mt-4 text-sm text-gray-500">
              Do not close this window or press the back button
            </div>
          </div>
        )}

        {/* Success */}
        {paymentStep === 'success' && (
          <div className="p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-white mb-2">Payment Successful!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your payment of ₹{paymentDetails.amount.toLocaleString()} has been processed successfully.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-mono">TXN{Date.now()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">₹{paymentDetails.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {/* Download receipt logic */}}
                className="w-full bg-gray-100 dark:bg-gray-700 text-[#0A0A0A] dark:text-white py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Receipt
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-[#4169E1] text-white py-2 rounded-md font-medium hover:bg-[#2c5aa0]"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Failed */}
        {paymentStep === 'failed' && (
          <div className="p-6 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-white mb-2">Payment Failed</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We couldn't process your payment. Please try again or contact support.
            </p>
            
            <div className="space-y-2">
              <button
                onClick={resetPayment}
                className="w-full bg-[#4169E1] text-white py-2 rounded-md font-medium hover:bg-[#2c5aa0]"
              >
                Try Again
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-gray-100 dark:bg-gray-700 text-[#0A0A0A] dark:text-white py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

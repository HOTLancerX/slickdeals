"use client";
import { useState, useEffect } from 'react';


const ProductAdd: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(0);
  const [tradeTerms, setTradeTerms] = useState<string>('');
  const [targetUnitPrice, setTargetUnitPrice] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(0);
  const [details, setDetails] = useState<string>('');
  const [shippingMethod, setShippingMethod] = useState<string>('');
  const [destinationPort, setDestinationPort] = useState<string>('');
  const [leadTime, setLeadTime] = useState<number>(0);
  const [paymentTerms, setPaymentTerms] = useState<string>('');
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);

  useEffect(() => {
    // Calculate completeness percentage
    const filledFields = [
      productName,
      purchaseQuantity,
      tradeTerms,
      targetUnitPrice,
      maxBudget,
      details,
      shippingMethod,
      destinationPort,
      leadTime,
      paymentTerms,
    ];
    const totalFields = filledFields.length;
    const filledCount = filledFields.filter(field => !!field).length;
    const percentage = (filledCount / totalFields) * 100;
    setCompletionPercentage(percentage);
  }, [
    productName,
    purchaseQuantity,
    tradeTerms,
    targetUnitPrice,
    maxBudget,
    details,
    shippingMethod,
    destinationPort,
    leadTime,
    paymentTerms,
  ]);

  const unfilledFields = [
    { label: 'Product Name', value: productName },
    { label: 'Purchase Quantity', value: purchaseQuantity },
    { label: 'Trade Terms', value: tradeTerms },
    { label: 'Target Unit Price', value: targetUnitPrice },
    { label: 'Max Budget', value: maxBudget },
    { label: 'Details', value: details },
    { label: 'Shipping Method', value: shippingMethod },
    { label: 'Destination Port', value: destinationPort },
    { label: 'Lead Time', value: leadTime },
    { label: 'Payment Terms', value: paymentTerms },
  ].filter(field => !field.value);

  return (
    <div className='max-w-screen-xl mx-auto md:px-10 p-2'>
      <div className=' my-4'>
        <h1 className="text-xl font-bold">
          Basic Product Information
        </h1>
        <p className='text-gray-500 text-sm'>
        The more specific your information, the faster response you will get.
        </p>
      </div>
      
      <div className='flex flex-wrap items-start'>
        <form className="w-full p-8 bg-white md:w-4/6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="productName" className="font-bold">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter a specific product name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="purchaseQuantity" className="font-bold">
              Purchase Quantity:
            </label>
            <input
              type="number"
              id="purchaseQuantity"
              value={purchaseQuantity}
              onChange={(e) => setPurchaseQuantity(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter purchase quantity"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tradeTerms" className="font-bold">
              Trade Terms:
            </label>
            <select
              id="tradeTerms"
              value={tradeTerms}
              onChange={(e) => setTradeTerms(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              required
            >
              <option value="">Please select</option>
              <option value="FOB">FOB</option>
              {/* Add more trade terms options if needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="targetUnitPrice" className="font-bold">
              Target Unit Price (USD):
            </label>
            <input
              type="number"
              id="targetUnitPrice"
              value={targetUnitPrice}
              onChange={(e) => setTargetUnitPrice(parseFloat(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter target unit price"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxBudget" className="font-bold">
              Max Budget (USD):
            </label>
            <input
              type="number"
              id="maxBudget"
              value={maxBudget}
              onChange={(e) => setMaxBudget(parseFloat(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter max budget"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="details" className="font-bold">
              Details:
            </label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Describe the product you want to source..."
              required
            />
          </div>
          {/* Insert symbol upload component */}
          <h1 className="text-xl font-bold mt-8 mb-4">Shipping and Payment</h1>
          <div className="flex flex-col">
            <label htmlFor="shippingMethod" className="font-bold">
              Shipping Method:
            </label>
            <select
              id="shippingMethod"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              required
            >
              <option value="">Please select</option>
              <option value="Sea freight">Sea freight</option>
              {/* Add more shipping method options if needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="destinationPort" className="font-bold">
              Destination Port:
            </label>
            <input
              type="text"
              id="destinationPort"
              value={destinationPort}
              onChange={(e) => setDestinationPort(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter destination port"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="leadTime" className="font-bold">
              Lead Time (days):
            </label>
            <input
              type="number"
              id="leadTime"
              value={leadTime}
              onChange={(e) => setLeadTime(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Enter lead time"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="paymentTerms" className="font-bold">
              Payment Terms:
            </label>
            <select
              id="paymentTerms"
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              required
            >
              <option value="">Please select</option>
              <option value="T/T">T/T</option>
              {/* Add more payment terms options if needed */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="w-full md:w-4/12">
          <div className="p-12 bg-white flex flex-col items-center justify-center md:ml-8">
            <h1 className='text-[#06adff] font-bold text-2xl mb-4'>
            Completeness
            </h1>
            <div className="w-24 h-24 relative mb-8">
              <div className='absolute'>
                <span className="relative flex h-14 w-14 left-5 top-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50"></span>
                </span>
              </div>
              <svg className="absolute w-full h-full shadow-hera rounded-full">
              
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  strokeWidth="5%"
                  stroke="#ddd"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  strokeWidth="5%"
                  stroke="#06adff"
                  strokeDasharray={`${completionPercentage}, ${100 - completionPercentage}`}
                />
              </svg>
              <div className="absolute w-full h-full flex items-center justify-center">
                <span className="text-xl font-bold">
                  {Math.round(completionPercentage)}%
                </span>
              </div>
            </div>
            <p className='text-gray-500 text-xs text-center'>
              The more precise information you write,<br />the better response you will get.
            </p>
            {unfilledFields.length > 0 && (
              <div className="w-full block space-y-2">
                <h3 className='text-sm mt-8'>
                  Please fill in the required fields before submitting.
                </h3>
                <ul className="list-disc pl-4 marker:text-min">
                  {unfilledFields.map((field, index) => (
                    <li key={index}>{field.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
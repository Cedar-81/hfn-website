import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export const useFlutterPay = () => {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "HFN@gmail.com",
      phone_number: "070********",
      name: "The Haemophila Foundation of Nigeria",
    },
    customizations: {
      title: "Heamophilia Foundation of Nigera Support",
      description:
        "Thanks for donating to the continous support and treatment of people with Haemophilia in Nigeria.",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  //@ts-ignore
  const handleFlutterPayment = useFlutterwave(config);

  return [
    () => {
      handleFlutterPayment({
        callback: (response) => {
          closePaymentModal();
        },
        onClose: () => {},
      });
    },
  ];
};

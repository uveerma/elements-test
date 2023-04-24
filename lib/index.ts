import { CandyPay } from "@candypay/checkout-sdk";

const candypay = new CandyPay({
  api_keys: {
    public_api_key: "cp_public_3AJwPHcS_8LcAt5aueUJtVeFKjHHsEUos",
    private_api_key: "cp_private_9wdoencK_4gTXbFVHH2U1qCo14DkUyCSC",
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

export { candypay };
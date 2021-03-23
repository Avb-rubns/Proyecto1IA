import { Delivery } from "./Delivery";

export function DeliveryList({ deliveries }) {
  return (
    <>
      {deliveries &&
        deliveries.map((delivery, i) => <Delivery key={i} {...delivery} />)}
    </>
  );
}

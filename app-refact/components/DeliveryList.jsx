import { Delivery } from "./Delivery";

export function DeliveryList(props) {
  console.log(props.idUser);
  return (
    <>
      {props.deliveries &&
        props.deliveries.map((delivery, i) => (
          <Delivery idUser={props.idUser} key={i} {...delivery} />
        ))}
    </>
  );
}

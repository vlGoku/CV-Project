type TProps = {
  data: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    street: string;
    zipCode: string;
    country: string;
  };
};

export default function ViewPersonal(props: TProps) {
  return (
    <div id="show-personal-data">
      <h3>First Name: {props.data.firstName}</h3>
      <h3>Last Name: {props.data.lastName}</h3>
      <h3>Date of Birth: {props.data.dateOfBirth}</h3>
      <h3>Street: {props.data.street}</h3>
      <h3>ZIP-Code: {props.data.zipCode}</h3>
      <h3>Country: {props.data.country}</h3>
    </div>
  );
}

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
      <h2>First Name: {props.data.firstName}</h2>
      <h2>Last Name: {props.data.lastName}</h2>
      <h2>Date of Birth: {props.data.dateOfBirth}</h2>
      <h2>Street: {props.data.street}</h2>
      <h2>ZIP-Code: {props.data.zipCode}</h2>
      <h2>Country: {props.data.country}</h2>
      <button type="submit">Edit</button>
    </div>
  );
}

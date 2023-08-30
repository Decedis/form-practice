type TUserInformation = {
  message: string;
};
export const DisplayInformation = (props: TUserInformation) => {
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
};

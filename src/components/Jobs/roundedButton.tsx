const RoundedButton = ({ buttonIcon }: { buttonIcon: JSX.Element }) => {
  return (
    <>
      <div className="border rounded-full flex items-center justify-center p-2">
        {buttonIcon}
      </div>
    </>
  );
};
export default RoundedButton;

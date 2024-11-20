interface Props {
  buttonIcon: JSX.Element;
  buttonProperty: string;
}
const JobProperty: React.FC<Props> = ({ buttonIcon, buttonProperty }) => {
  return (
    <>
      <div className="flex items-center my-2 mr-2 leading-5 capitalize text-[#737373]">
        {buttonIcon}
        <div className="ml-1.5 text-[13px]">{buttonProperty}</div>
      </div>
    </>
  );
};

export default JobProperty;

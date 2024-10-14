interface BtnProps{
    children : never;
    className : never;

}


const ButtonSecondary:React.FC<BtnProps> = ({ children,className }) => {
  return (
    <button className="">
      {children}
    </button>
  );
};

export default ButtonSecondary;

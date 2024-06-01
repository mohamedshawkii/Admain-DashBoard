import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div  className='w-full my-[1rem] mx-[2rem]'>
      <div className='flex justify-between'>
        <div>
          {icon}
          <div
          className=" font-bold text-[#AEB9E1]"
          >
            {title}
          </div>
        </div>
        <div>
          <ProgressCircle progress={progress} />
        </div>
      </div>
      <div className='flex justify-between mt-[2px]'>
        <div className=" font-bold text-[#AEB9E1]">
          {subtitle}
        </div>
        <div
          className=" font-bold text-[#AEB9E1] italic"
        >
          {increase}
        </div>
      </div>
    </div>
  );
};

export default StatBox;
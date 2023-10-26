import aboutImg1 from "../../../assets/images/about_us/parts.jpg";
import aboutImg2 from "../../../assets/images/about_us/person.jpg";
const About_US = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-[4rem]">
          <div className="text-center lg:text-left">
            <h5 className="text-[#FF3811]">About Us</h5>
            <h1 className="text-5xl font-bold w-[400px] my-4">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 text-[#737373] w-[450px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="py-6 text-[#737373] w-[450px]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] border border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
              Get More Info
            </button>
          </div>
          <div className="card flex-shrink-0 w-1/2 relative">
            <img className="w-[80%]" src={aboutImg2} alt="" />
            <img
              className="w-[60%] absolute left-[16rem] top-[11rem] border-8 border-white"
              src={aboutImg1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_US;

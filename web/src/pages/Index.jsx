import { Link } from "react-router-dom";
import user from "../assets/images/profile.jpg";
import BaseLayout from "../layouts/BaseLayout";
import bgImage from "../assets/images/1-HERO-Digital_Collage.png";
export default function Index() {

  return (
    <BaseLayout>
      <div className="flex bg-[#fffaf2] text-center p-4 index">
        <section className="mt-[5em] ml-[6em]">
          <h1 className="font-bold text-6xl pb-10">
            <b>
              Welcome to <br className="mb--20px" /> <br /> DEV 47 Quiz App
            </b>
          </h1>
          <h3 className="font-light tracking-wider text-2xl">
            Create Quiz for Users to Answer
          </h3>
          <button className="btn-blue m-9">
            <Link to="/sign-up">Get Started</Link>
          </button>
          <button className="btn-white">
            <Link to="/sign-in">Log in</Link>
          </button>
        </section>
        <section className="w-[50%]">
          <img src={bgImage} alt="background-image"></img>
        </section>
      </div>
      <section className="text-center mt-20">
        <h3 className="text-black text-4xl font-bold">
          Loved by educators in over 50% of African schools <br /> and 150
          countries.
        </h3>
        <p className="text-[#3d3d3d] font-light mt-6 font-size: 1rems">
          Here's is what we have to say...
        </p>

        <article className="mt-10 flex flex-col place-content-center place-items-center relative">
          <h4 className="bg-[#3f8eb7] text-white rounded-lg pt-3 px-12 pb-8">
            "One of our math teachers started using Quizzz  Lessons this
            week and it was a game changer for her and her students."
          </h4>
          <div className="flex justify-around space-x-4 absolute top-24">
            <img src={user} alt="user" className="rounded-full w-12 h-12"/>
            <img src={user} alt="user" className="rounded-full w-12 h-12"/>
            <img src={user} alt="user" className="rounded-full w-12 h-12"/>
          </div>
        </article>
      </section>
    </BaseLayout>
  );
}

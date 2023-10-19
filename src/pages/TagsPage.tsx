import { Tag } from "../components/Tag";
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const TagsPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="stylish-headline mt-5">Intereses</h1>

      <div className="greaterdiv"></div>
      <div className="interests-container">
        <form id="interests-form">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
<br /><br />
          <button className="float-end marRight" type="button">
            Save Interests
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

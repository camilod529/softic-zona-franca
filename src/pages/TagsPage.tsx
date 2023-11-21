import { TagCard } from "../components/TagCard";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { ChangeEvent, useEffect, useState } from "react";
import { getTags, saveTags } from "../api/session";
import { Tag } from "../types/types";
import { useNavigate } from "react-router-dom";

export const TagsPage = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsSelected, setTagsSelected] = useState<Tag["id_etiqueta"][]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTags().then((res) => setTags(res));
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (tagsSelected.includes(Number(e.currentTarget.value))) {
      setTagsSelected(
        tagsSelected.filter((tag) => tag !== Number(e.currentTarget.value))
      );
    } else {
      setTagsSelected([...tagsSelected, Number(e.currentTarget.value)]);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await saveTags({ tagsSelected }).then(() => {
      navigate("/profile");
    });
  };
  return (
    <>
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <Navbar />
      <div className="">
        <div className="container titulo">
          <h1 className="cool-title mt-5">Intereses</h1>

          <div className="greaterdiv"></div>
          <div className="interests-container">
            <form id="interests-form" onSubmit={handleSubmit}>
              {tags &&
                tags.map((tag) => (
                  <TagCard
                    key={tag.id_etiqueta}
                    tag={tag}
                    onChange={onChange}
                  />
                ))}

              <br />
              <br />
              <button
                style={{ width: "128px" }}
                className="float-end marRight green-btn"
              >
                Save Interests
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

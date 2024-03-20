import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function Contact({ restBase }) {
  const ContactID = "";
  const restPath = `${restBase}pages/${ContactID}`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded ? (
        <div className="contact-page">
          <p>CONTACT PAGE HERE.</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
          eros a dapibus accumsan, tortor turpis molestie ex, at aliquet turpis
          quam a mauris. Nulla vel sapien aliquet, tempus metus eget, cursus
          mauris. Sed consequat, justo sit amet consequat scelerisque, felis
          elit scelerisque neque, sit amet luctus nunc lorem ut libero. Sed
          consequat id eros eu posuere. Ut ut pulvinar magna. Sed venenatis
          vehicula diam, non consequat velit posuere quis. Vivamus vitae felis
          consectetur, fermentum arcu et, ultrices nulla. Donec posuere urna id
          dui gravida, id congue mauris tempor. Vestibulum sit amet eros quis
          mauris tincidunt lacinia. Nulla nec odio at lectus iaculis laoreet.
          Nulla facilisi. Nam fringilla scelerisque neque, sit amet consequat
          nisi interdum id. Maecenas vel risus lectus. In hac habitasse platea
          dictumst. Pellentesque auctor dui eu sapien auctor varius. Integer
          feugiat eros eget tortor varius condimentum. Vivamus viverra, justo id
          venenatis aliquet, libero magna convallis libero, id finibus urna sem
          eget enim. Sed tincidunt consequat ligula, eget varius justo. Integer
          at lorem nec nisl placerat pulvinar. Vivamus viverra, turpis at
          consequat ultricies, nibh leo fermentum elit, at dictum nisi libero
          eget justo. Sed quis neque quis mi vulputate efficitur. Vivamus
          placerat condimentum elit eget mattis. Curabitur id lectus sit amet
          diam malesuada posuere eu et velit.<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
          eros a dapibus accumsan, tortor turpis molestie ex, at aliquet turpis
          quam a mauris. Nulla vel sapien aliquet, tempus metus eget, cursus
          mauris. Sed consequat, justo sit amet consequat scelerisque, felis
          elit scelerisque neque, sit amet luctus nunc lorem ut libero. Sed
          consequat id eros eu posuere. Ut ut pulvinar magna. Sed venenatis
          vehicula diam, non consequat velit posuere quis. Vivamus vitae felis
          consectetur, fermentum arcu et, ultrices nulla. Donec posuere urna id
          dui gravida, id congue mauris tempor. Vestibulum sit amet eros quis
          mauris tincidunt lacinia. Nulla nec odio at lectus iaculis laoreet.
          Nulla facilisi. Nam fringilla scelerisque neque, sit amet consequat
          nisi interdum id. Maecenas vel risus lectus. In hac habitasse platea
          dictumst. Pellentesque auctor dui eu sapien auctor varius. Integer
          feugiat eros eget tortor varius condimentum. Vivamus viverra, justo id
          venenatis aliquet, libero magna convallis libero, id finibus urna sem
          eget enim. Sed tincidunt consequat ligula, eget varius justo. Integer
          at lorem nec nisl placerat pulvinar. Vivamus viverra, turpis at
          consequat ultricies, nibh leo fermentum elit, at dictum nisi libero
          eget justo. Sed quis neque quis mi vulputate efficitur. Vivamus
          placerat condimentum elit eget mattis. Curabitur id lectus sit amet
          diam malesuada posuere eu et velit.
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Contact;

import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  const uri = "https://api.cloudinary.com/v1_1/diztz1dlo/image/upload";
  try {
    const res = await axios.post(uri, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
// import.meta.env.VITE_UPLOAD_LINK

import { useEffect, useState } from "react";

export const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  console.log(selectedFile);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("selectedFile", selectedFile);

    try {
      const response = await fetch(`${API}/upload-image`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded and metadata saved to MongoDB!");
      } else {
        console.error("Failed to upload image and save metadata to MongoDB");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

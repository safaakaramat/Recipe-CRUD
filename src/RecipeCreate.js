import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormState})
  }



  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeHolder="Name"
                required
                />
            </td>

            <td>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                placeHolder="Cuisine"
                required
                />
            </td>

            <td>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeHolder="Url"
                required
                />
            </td>

            <td className="content_td">
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeHolder="Ingredients"
                required
                />
            </td>

            <td className="content_td">
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                placeHolder="Preparation"
                required
                />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

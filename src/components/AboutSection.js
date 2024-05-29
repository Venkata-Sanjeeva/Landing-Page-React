import React from 'react';
import image from './Ratatouille.jpg';

function AboutSection() {
  return (
    <div className="section-1" id="about">
      <div className="content">
        <b>About Recipe</b>
        <p>
          Ratatouille is a traditional French Provençal stewed vegetable dish originating from Nice, in the Provence region of France. It is known for its colorful array of vegetables and rich, aromatic flavors.
        </p>
        <p>
          The vegetables are usually sautéed or simmered separately to preserve their individual flavors and textures before being combined and cooked together to meld their flavors. Ratatouille can be served as a side dish, a main course, or even as a filling for omelets or sandwiches. It is often enjoyed as a vegetarian or vegan dish, but it can also accompany meat or fish dishes.
        </p>
        <p>
          Ratatouille is not only delicious but also versatile and adaptable, allowing for variations in ingredients and cooking methods based on personal preferences and regional traditions. It's a popular dish during the summer months when vegetables are at their peak freshness, but it can be enjoyed year-round.
        </p>
        <b>Ingredients</b>
        <p>
          The dish typically features ingredients such as tomatoes, zucchini, eggplant, bell peppers, onions, garlic, and various herbs such as thyme, basil, and oregano.
        </p>
      </div>
      <div className="receipe">
        <img src={image} alt='Ratatouille'></img>
      </div>
    </div>
  );
}

export default AboutSection;

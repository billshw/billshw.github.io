const brandsData = [
    {
        name: "Brand 1",
        collections: [
            {name: "Collection 1", description: "Brief introduction..."},
            {name: "Collection 2", description: "Brief introduction..."},
            {name: "Collection 3", description: "Brief introduction..."}
        ]
    },
    // ...add the other 9 brands with their respective collections
];

const brandsContainer = document.getElementById("brands-container");

brandsData.forEach(brand => {
    const brandElement = document.createElement("div");
    brandElement.className = "brand";

    const brandName = document.createElement("h2");
    brandName.innerText = brand.name;
    brandElement.appendChild(brandName);

    brand.collections.forEach(collection => {
        const collectionElement = document.createElement("div");
        collectionElement.className = "collection";

        const collectionName = document.createElement("h3");
        collectionName.innerText = collection.name;
        collectionElement.appendChild(collectionName);

        const collectionDescription = document.createElement("p");
        collectionDescription.innerText = collection.description;
        collectionElement.appendChild(collectionDescription);

        brandElement.appendChild(collectionElement);
    });

    brandsContainer.appendChild(brandElement);
});

  const products = [
       
    {
      id: 101,
      name: "SPICE WOOD",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img8.jpeg",
      link: "pro_info.html?id=101"
    },

      {
      id: 102,
      name: "VANILLA WOOD",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img7.jpeg",
      link: "pro_info.html?id=102"
    },
   
    {
      id: 103,
      name: "CITRUS AMBER",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img9.jpeg",
      link: "pro_info.html?id=103"
    },

    {
      id: 104,
      name: "PERSIAN OUD",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img6.jpeg",
      link: "pro_info.html?id=104"
    },

    {
      id: 105,
      name: "LONDON BAR",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img5.jpeg",
      link: "pro_info.html?id=105"
    },

    {
      id: 106,
      name: "UNCENSORED BLUE",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img4.jpeg",
      link: "pro_info.html?id=106"
    },
   
    {
      id: 107,
      name: "ALPHA SPADE",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img3.jpeg",
      link: "pro_info.html?id=107"
    },

    {
      id: 108,
      name: "WILD ESCAPE",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img2.jpeg",
      link: "pro_info.html?id=108"
    },

    {
      id: 109,
      name: "ISLAND WATER",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/st-img1.jpeg",
      link: "pro_info.html?id=109"
    },

    {
      id: 201,
      name: "BEACH HOLIDAY",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her1.jpeg",
      link: "pro_info.html?id=201"
    },

    {
      id: 202,
      name: "WHITE FLORAL",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her2.jpeg",
      link: "pro_info.html?id=202"
    },

    {
      id: 203,
      name: "CANDY BABE",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her3.jpeg",
      link: "pro_info.html?id=203"
    },

    {
      id: 204,
      name: "LA FLEUR",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her4.jpeg",
      link: "pro_info.html?id=204"
    },

    {
      id: 205,
      name: "OUD PATAKA",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her5.jpeg",
      link: "pro_info.html?id=205"
    },

    {
      id: 206,
      name: "URBAN OUD",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her6.jpeg",
      link: "pro_info.html?id=206"
    },

    {
      id: 207,
      name: "APPLE LILY",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her7.jpeg",
      link: "pro_info.html?id=207"
    },
    
    {
      id: 208,
      name: "MOON FLOWER",
      price: 1299,
      originalPrice: 1699,
      image: "c:/Users/bharg/OneDrive/Pictures/sec_page_img/her8.jpeg",
      link: "pro_info.html?id=208"
    }
  ];

  const searchInput = document.querySelector(".search input");
  const resultsContainer = document.querySelector(".first-pr");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    resultsContainer.innerHTML = "";

    if (query === "") return;

    const matchedProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    if (matchedProducts.length === 0) {
      resultsContainer.innerHTML = "<p>No products found.</p>";
      return;
    }

    matchedProducts.forEach(product => {
      const productHTML = `
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <h1>${product.name}</h1>
        <p id="p1">
          $ ${product.price} - <span class="strikethrough">$ ${product.originalPrice}</span>
        </p>
      `;
          document.querySelector('.first-pr').innerHTML = productHTML;
    });
  });


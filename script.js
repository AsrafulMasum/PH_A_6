// loading tabs
const loadTabs = async () => {

  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();

  const allTabs = data.data;
  showTabs(allTabs);

}




// showing tabs on ui
const showTabs = (tabs) => {

  const tabContainer = document.getElementById('tab-container');

  tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.classList = `

      btn bg-btn-off active:bg-btn-on focus:bg-btn-on  active:text-white focus:text-white px-6

    `;
    btn.innerText = `${tab?.category}`;
    tabContainer.appendChild(btn);

    btn.addEventListener('click', function(){
      loadCard(tab?.category_id);
    })

  });
}




// loading card data
const loadCard = async (id=1000) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const allData = await res.json();

  const data = allData.data;
  showCard(data);
}




// showing cards on ui
const showCard = (data) => {

  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';

  data.forEach(card =>{
    const divTag = document.createElement('div');
    divTag.classList = `card card-compact`;
    divTag.innerHTML = `
    
      <figure><img class="h-52 w-full rounded-t-lg" src=${card?.thumbnail} alt="Shoes" /></figure>

      <div class="flex items-start gap-4">

        <div class="mt-4 rounded-full">
          <img class="rounded-full h-16 w-16" src=${card?.authors[0]?.profile_picture} alt="">
        </div>

        <div class="flex flex-col gap-1 my-4">
          <h2 class="card-title">${card?.title}</h2>
          <div class="flex items-center gap-2">
            <p>${card?.authors[0]?.profile_name}</p>
            <div>${card?.authors[0]?.verified  ? '<img src="./images/badge.png" alt="">'  : ''}</div>
          </div>
          <p>${card?.others?.views} Views</p>
        </div>

      </div>

    `;
    cardContainer.appendChild(divTag);
  })
}




loadCard();
loadTabs();
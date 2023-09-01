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




// loading tab data
const loadCard = async (id=1000) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const allData = await res.json();

  const data = allData.data;
  showCard(data);
}




const showCard = (data) => {

  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';

  data.forEach(card =>{
    const divTag = document.createElement('div');
    divTag.classList = `card card-compact`;
    divTag.innerHTML = `
    
      <figure><img class="h-52 rounded-lg" src=${card?.thumbnail} alt="Shoes" /></figure>

      <div class="flex justify-center items-start gap-4">

        <img class="w-20 mt-4" src="./images/profile.png" alt="">

        <div class="flex flex-col gap-1 my-4">
          <h2 class="card-title">Building a Winning UX Strategy Using the Kano Model</h2>
          <div class="flex items-center gap-4">
            <p>Awlad Hossain</p>
            <input type="checkbox" checked="checked" class="checkbox" />
          </div>
          <p>91K views</p>
        </div>

      </div>

    `;
    cardContainer.appendChild(divTag);
  })
}




loadCard();
loadTabs();
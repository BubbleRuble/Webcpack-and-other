export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles(searchQuery) {
    console.log(this);
    const options = {
      headers: {
        Authorization: 'b3d900b4cdd84d289247343fa8bb6f43',
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

   return fetch(url, options)
      .then(responce => responce.json())
      .then(({articles}) => {
        this.incrementPage()

        return articles;
      });
  }

  incrementPage () {
    this.page += 1;
  }

  resetPage () {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

//

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMorebtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMorebtn.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   e.preventDefault();

//   refs.loadMorebtn.classList.remove('is-hidden');
//   clearArticlesContainer();
//   newsApiService.query = e.currentTarget.elements.query.value;
//   newsApiService.resetPage();
//   newsApiService.fetchArticles().then(appendArticlesMarkup);
// }

// function onLoadMore() {
//   newsApiService.fetchArticles().then(appendArticlesMarkup);
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }
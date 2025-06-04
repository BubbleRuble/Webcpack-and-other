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
      .then(r => r.json())
      .then(data => {
        this.page += 1;

        return data.articles;
      });
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
